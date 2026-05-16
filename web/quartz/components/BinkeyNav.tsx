// BinkeyNav — top utility bar matching the design system.
// Renders before #quartz-body as a full-width banner (via sharedPageComponents.header).
// Nav links map to Quartz folder pages: parts/, am-cabinet-*.md, etc.

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"

const BinkeyNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const base = pathToRoot(fileData.slug!)

  const navLinks = [
    { label: "Catalog",   href: `${base}parts/` },
    { label: "Cabinets",  href: `${base}am-cabinet-1` },
    { label: "Boxes",     href: `${base}tags/kit` },
    { label: "Books",     href: `${base}tags/smt` },
    { label: "Tags",      href: `${base}tags/` },
  ]

  return (
    <div class="bk-nav">
      {/* Wordmark */}
      <a href={`${base}`} class="bk-wordmark">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="0.75" y="0.75" width="16.5" height="16.5" stroke="currentColor" stroke-width="1.5" />
          <circle cx="6" cy="9" r="2.2" stroke="currentColor" stroke-width="1.5" />
          <line x1="8" y1="9" x2="14" y2="9" stroke="currentColor" stroke-width="1.5" />
          <line x1="12" y1="9" x2="12" y2="12" stroke="currentColor" stroke-width="1.5" />
        </svg>
        <span class="bk-wordmark-text">binkey</span>
        <span class="bk-wordmark-sub">parts index</span>
      </a>

      {/* Nav links */}
      <nav class="bk-nav-links">
        {navLinks.map(({ label, href }) => (
          <a href={href} class="bk-nav-link">{label}</a>
        ))}
      </nav>

      {/* Search hint */}
      <div class="bk-search-hint">
        <span class="bk-search-cmd">⌘K</span>
        <span class="bk-search-label">Search</span>
      </div>
    </div>
  )
}

BinkeyNav.css = `
  .bk-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 28px;
    border-bottom: 1px solid var(--lightgray);
    font-family: var(--codeFont);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--darkgray);
    background: var(--light);
  }

  .bk-wordmark {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--dark);
    text-decoration: none;
    font-family: var(--bodyFont);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.01em;
    text-transform: none;
  }

  .bk-wordmark svg {
    flex-shrink: 0;
  }

  .bk-wordmark-text {
    font-size: 14px;
    font-weight: 600;
  }

  .bk-wordmark-sub {
    font-family: var(--codeFont);
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 0.5;
    margin-left: 4px;
  }

  .bk-nav-links {
    display: flex;
    gap: 28px;
  }

  .bk-nav-link {
    color: var(--darkgray);
    text-decoration: none;
    font-size: 10px;
    letter-spacing: 0.10em;
    transition: color 0.12s;
  }

  .bk-nav-link:hover {
    color: var(--dark);
  }

  .bk-search-hint {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 10px;
    border: 1px solid var(--lightgray);
    color: var(--gray);
    font-size: 10px;
    cursor: pointer;
  }

  .bk-search-cmd {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    .bk-nav-links { display: none; }
    .bk-wordmark-sub { display: none; }
    .bk-search-hint { display: none; }
  }
`

export default (() => BinkeyNav) satisfies QuartzComponentConstructor
