import { FullSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/frontmatterTable.scss"

// Canonical display order for frontmatter fields
const FIELD_ORDER = [
  "type",
  "category",
  "subcategory",
  "part_number",
  "manufacturer",
  "description",
  "location",
  "quantity",
  "status",
  "price",
  "product_url",
  "datasheet",
  "date_added",
  "tags",
]

const FIELD_LABELS: Record<string, string> = {
  type: "Type",
  category: "Category",
  subcategory: "Subcategory",
  part_number: "Part Number",
  manufacturer: "Manufacturer",
  description: "Description",
  location: "Location",
  quantity: "Quantity",
  status: "Status",
  price: "Price",
  product_url: "Product URL",
  datasheet: "Datasheet",
  date_added: "Date Added",
  tags: "Tags",
}

const STATUS_CLASS: Record<string, string> = {
  available: "status-available",
  "low-stock": "status-low",
  "out-of-stock": "status-out",
}

// Parse "Cabinet-3/Bin-7/Section-A" into readable parts
function parseLocationParts(loc: string): string[] {
  return loc
    .split("/")
    .map((s) => s.trim().replace(/-/g, " "))
    .filter(Boolean)
}

// "Cabinet-3" → "am-cabinet-3"
function cabinetSlug(raw: string): FullSlug | null {
  const match = raw.trim().match(/^Cabinet-(\d+)$/i)
  if (!match) return null
  return `am-cabinet-${match[1]}` as FullSlug
}

function renderLocation(loc: string, fileSlug: FullSlug): JSX.Element {
  const rawParts = loc.split("/").map((s) => s.trim()).filter(Boolean)
  return (
    <span class="fm-location-crumb">
      {rawParts.map((part, i) => {
        const slug = i === 0 ? cabinetSlug(part) : null
        const label = part.replace(/-/g, " ")
        return (
          <>
            {i > 0 && <span class="fm-sep"> › </span>}
            {slug ? (
              <a href={resolveRelative(fileSlug, slug)} class="internal fm-loc-link">
                {label}
              </a>
            ) : (
              <span class="fm-loc-segment">{label}</span>
            )}
          </>
        )
      })}
    </span>
  )
}

function isBlank(val: unknown): boolean {
  if (val === undefined || val === null) return true
  if (typeof val === "string" && (val.trim() === "" || val.trim() === "N/A")) return true
  if (Array.isArray(val) && val.length === 0) return true
  return false
}

function FrontmatterTable({ fileData }: QuartzComponentProps) {
  // Only render on parts/ pages
  if (!fileData.slug?.startsWith("parts/")) return null

  const fm = fileData.frontmatter
  if (!fm) return null

  const rows: JSX.Element[] = []

  for (const field of FIELD_ORDER) {
    const raw = fm[field]
    if (isBlank(raw)) continue

    const label = FIELD_LABELS[field] ?? field
    let cell: JSX.Element

    if (field === "location") {
      const locs: string[] = Array.isArray(raw)
        ? raw.map(String).filter(Boolean)
        : [String(raw)]
      cell = (
        <td class="fm-value fm-location">
          {locs.map((loc, i) => (
            <>
              {i > 0 && <span class="fm-loc-comma">, </span>}
              {renderLocation(loc, fileData.slug!)}
            </>
          ))}
        </td>
      )
    } else if (field === "status") {
      const key = String(raw).toLowerCase().replace(/\s+/g, "-")
      const cls = STATUS_CLASS[key] ?? ""
      cell = (
        <td class="fm-value">
          <span class={`fm-status ${cls}`}>{String(raw)}</span>
        </td>
      )
    } else if (field === "product_url") {
      const url = String(raw)
      const display = url.replace(/^https?:\/\//, "").replace(/\/$/, "")
      const truncated = display.length > 55 ? display.slice(0, 52) + "…" : display
      cell = url.startsWith("http") ? (
        <td class="fm-value">
          <a href={url} class="external fm-url" target="_blank" rel="noopener noreferrer">
            {truncated}
          </a>
        </td>
      ) : (
        <td class="fm-value">{url}</td>
      )
    } else if (field === "datasheet") {
      const url = String(raw)
      cell = url.startsWith("http") ? (
        <td class="fm-value">
          <a href={url} class="external fm-url" target="_blank" rel="noopener noreferrer">
            Datasheet ↗
          </a>
        </td>
      ) : (
        <td class="fm-value">{url}</td>
      )
    } else if (field === "tags") {
      const tags: string[] = Array.isArray(raw) ? raw.map(String) : String(raw).split(",").map((t) => t.trim())
      cell = (
        <td class="fm-value fm-tags">
          {tags.map((tag) => (
            <span class="fm-tag">{tag}</span>
          ))}
        </td>
      )
    } else if (field === "quantity") {
      cell = <td class="fm-value fm-qty">{String(raw)}</td>
    } else {
      cell = <td class="fm-value">{String(raw)}</td>
    }

    rows.push(
      <tr class="fm-row">
        <th class="fm-label" scope="row">
          {label}
        </th>
        {cell}
      </tr>,
    )
  }

  if (rows.length === 0) return null

  return (
    <div class="frontmatter-table">
      <table class="fm-table">
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

FrontmatterTable.css = style

export default (() => FrontmatterTable) satisfies QuartzComponentConstructor
