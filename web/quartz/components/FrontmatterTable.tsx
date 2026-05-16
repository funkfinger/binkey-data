import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/frontmatterTable.scss"

// Category accent colours — oklch(0.62 0.18 H) shared luminance
const CAT_ACCENT: Record<string, string> = {
  ic:          "oklch(0.62 0.18 248)", // blue
  "dev-board": "oklch(0.62 0.18 248)", // blue
  passive:     "oklch(0.62 0.18 38)",  // rust
  module:      "oklch(0.62 0.18 152)", // green
  sensor:      "oklch(0.62 0.18 152)", // green
  mechanical:  "oklch(0.62 0.18 308)", // violet
  kit:         "oklch(0.62 0.18 68)",  // amber
  other:       "oklch(0.62 0.18 308)", // violet
}

function accentForType(type: string | undefined): string {
  if (!type) return CAT_ACCENT.other
  return CAT_ACCENT[type.toLowerCase()] ?? CAT_ACCENT.other
}

// Parse "Cabinet-3/Bin-7/Section-A" → abbreviated display parts
// Cabinet-3 → "C-03", Bin-7 → "07", Section-A → "A"
function parseLocation(raw: string): { label: string; value: string; slug: FullSlug | null }[] {
  const parts = raw.split("/").map(s => s.trim()).filter(Boolean)
  return parts.map((part, i) => {
    const cabinetMatch = part.match(/^Cabinet-(\d+)$/i)
    const binMatch = part.match(/^Bin-(\w+)$/i)
    const sectionMatch = part.match(/^Section-(\w+)$/i)

    const slug = cabinetMatch ? (`am-cabinet-${cabinetMatch[1]}` as FullSlug) : null

    let label = i === 0 ? "CABINET" : i === 1 ? "BIN" : "SECTION"
    let value = part

    if (cabinetMatch) {
      value = `C-${cabinetMatch[1].padStart(2, "0")}`
    } else if (binMatch) {
      value = binMatch[1].padStart(2, "0")
      label = "BIN"
    } else if (sectionMatch) {
      value = sectionMatch[1].toUpperCase()
      label = "SECTION"
    } else {
      // SMT book, box, etc. — use first 4 chars abbreviated
      value = part.replace(/-/g, " ").slice(0, 12)
    }

    return { label, value, slug }
  })
}

function LocationLockup({ raw, fileSlug, accent }: { raw: string; fileSlug: FullSlug; accent: string }) {
  const parts = parseLocation(raw)
  const last = parts.length - 1
  return (
    <div class="fm-loc-lockup">
      {parts.map((p, i) => (
        <>
          {i > 0 && <span class="fm-loc-slash">/</span>}
          <div class="fm-loc-part">
            <span class="fm-loc-label" style={i === last ? `color:${accent}` : ""}>{p.label}</span>
            {p.slug ? (
              <a href={resolveRelative(fileSlug, p.slug)} class="internal fm-loc-value" style={i === last ? `color:${accent}` : ""}>
                {p.value}
              </a>
            ) : (
              <span class="fm-loc-value" style={i === last ? `color:${accent}` : ""}>{p.value}</span>
            )}
          </div>
        </>
      ))}
    </div>
  )
}

function ResourceTile({ kind, url, accent }: { kind: string; url: string; accent: string }) {
  const symbol = kind === "datasheet" ? "⤓" : kind === "pinout" ? "⌗" : "↗"
  const label = kind === "datasheet" ? "Datasheet" : kind === "pinout" ? "Pinout" : "Product"
  return (
    <a href={url} class="fm-resource-tile" target="_blank" rel="noopener noreferrer">
      <div class="fm-resource-header">
        <span class="fm-resource-kind">{kind.toUpperCase()}</span>
        <span class="fm-resource-symbol" style={`color:${accent}`}>{symbol}</span>
      </div>
      <div class="fm-resource-label">{label}</div>
    </a>
  )
}

function isBlank(val: unknown): boolean {
  if (val === undefined || val === null) return true
  if (typeof val === "string" && (val.trim() === "" || val.trim() === "N/A")) return true
  if (Array.isArray(val) && val.length === 0) return true
  return false
}

function FrontmatterTable({ fileData }: QuartzComponentProps) {
  if (!fileData.slug?.startsWith("parts/")) return null
  const fm = fileData.frontmatter
  if (!fm) return null

  const accent = accentForType(fm.type as string | undefined)

  // Location(s)
  const rawLoc = fm.location
  const locs: string[] = Array.isArray(rawLoc)
    ? rawLoc.map(String).filter(Boolean)
    : rawLoc ? [String(rawLoc)] : []

  // Resources
  const resources: { kind: string; url: string }[] = []
  if (!isBlank(fm.datasheet) && String(fm.datasheet).startsWith("http"))
    resources.push({ kind: "datasheet", url: String(fm.datasheet) })
  if (!isBlank(fm.product_url) && String(fm.product_url).startsWith("http"))
    resources.push({ kind: "product", url: String(fm.product_url) })

  // Category chip fields
  const type = fm.type as string | undefined
  const category = fm.category as string | undefined
  const subcategory = fm.subcategory as string | undefined
  const chipLabel = [category, subcategory].filter(Boolean).join(" · ")

  // Tags
  const tags: string[] = Array.isArray(fm.tags) ? fm.tags.map(String) : []

  // Specs — technical fields only; price/status/date_added are out of scope per design
  const specFields: [string, string][] = []
  const specKeys = ["manufacturer", "part_number", "package", "voltage", "current", "interface", "size", "compatibility"]
  const specLabels: Record<string, string> = {
    manufacturer: "Manufacturer",
    part_number: "Part №",
    package: "Package",
    voltage: "Voltage",
    current: "Current",
    interface: "Interface",
    size: "Size",
    compatibility: "Compatible with",
  }
  for (const k of specKeys) {
    const v = fm[k]
    if (!isBlank(v)) {
      const val = Array.isArray(v) ? v.join(", ") : String(v)
      specFields.push([specLabels[k] ?? k, val])
    }
  }

  return (
    <div class="fm-root" style={`--accent:${accent}`}>
      {/* Left accent stripe */}
      <div class="fm-stripe" style={`background:${accent}`} />

      <div class="fm-inner">
        {/* Category chip */}
        {chipLabel && (
          <div class="fm-chip">
            <span class="fm-chip-dot" style={`background:${accent}`} />
            {type && <span class="fm-chip-type">{type.toUpperCase()}</span>}
            {type && chipLabel && <span class="fm-chip-sep">·</span>}
            <span class="fm-chip-label">{chipLabel}</span>
          </div>
        )}

        {/* Hero band */}
        <div class="fm-hero-band">
          {/* Location */}
          {locs.length > 0 && (
            <div class="fm-hero-cell fm-hero-location">
              <div class="fm-hero-cell-label">PHYSICAL LOCATION</div>
              {locs.map((loc, i) => (
                <div key={i} style={i > 0 ? "margin-top:0.5rem" : ""}>
                  <LocationLockup raw={loc} fileSlug={fileData.slug!} accent={accent} />
                </div>
              ))}
            </div>
          )}

          {/* On hand */}
          {!isBlank(fm.quantity) && (
            <div class="fm-hero-cell fm-hero-qty">
              <div class="fm-hero-cell-label">ON HAND</div>
              <div class="fm-qty-big">{String(fm.quantity)}</div>
              <div class="fm-qty-unit">{(fm.quantityUnit as string | undefined) ?? "units"}</div>
            </div>
          )}

          {/* Resources */}
          {resources.length > 0 && (
            <div class="fm-hero-cell fm-hero-resources">
              <div class="fm-hero-cell-label">RESOURCES · {resources.length}</div>
              <div class="fm-resource-tiles">
                {resources.map(r => (
                  <ResourceTile key={r.kind} kind={r.kind} url={r.url} accent={accent} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Description + Tags */}
        {(!isBlank(fm.description) || tags.length > 0) && (
          <div class="fm-summary-band">
            {!isBlank(fm.description) && (
              <div class="fm-summary-col">
                <div class="fm-band-label">SUMMARY</div>
                <p class="fm-summary-text">{String(fm.description)}</p>
              </div>
            )}
            {tags.length > 0 && (
              <div class="fm-tags-col">
                <div class="fm-band-label">TAGS · {tags.length}</div>
                <div class="fm-tags">
                  {tags.map(tag => (
                    <a href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)} class="internal fm-tag">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Specs row */}
        {specFields.length > 0 && (
          <div class="fm-specs-band">
            <div class="fm-specs-label">SPECS</div>
            <div class="fm-specs-grid">
              {specFields.map(([k, v]) => (
                <div class="fm-spec-item" key={k}>
                  <span class="fm-spec-key">{k}</span>
                  <span class="fm-spec-val">{v}</span>
                </div>
              ))}
              {/* price removed — out of scope per design spec */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

FrontmatterTable.css = style

export default (() => FrontmatterTable) satisfies QuartzComponentConstructor
