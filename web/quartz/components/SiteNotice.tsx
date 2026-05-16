import { QuartzComponent, QuartzComponentConstructor } from "./types"

const SiteNotice: QuartzComponent = () => {
  return (
    <div class="site-notice">
      <div class="site-notice-inner">
        <span class="site-notice-icon">⚠️</span>
        <span class="site-notice-text">
          This entire repo was AI created — including all of the data within.
          The intent was to A) help me with my personal electronics inventory;
          and B) see how I could use AI to make that process a bit easier.{" "}
          <strong>DO NOT TRUST!</strong>
        </span>
      </div>
    </div>
  )
}

SiteNotice.css = `
  .site-notice {
    width: 100%;
    background: var(--light);
    border-bottom: 1px solid var(--lightgray);
  }

  .site-notice-inner {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    padding: 7px 28px;
    font-family: var(--codeFont);
    font-size: 10px;
    letter-spacing: 0.06em;
    color: var(--gray);
    max-width: 100%;
  }

  .site-notice-icon {
    flex-shrink: 0;
    font-size: 11px;
  }

  .site-notice-text strong {
    color: var(--dark);
    font-weight: 600;
  }
`

export default (() => SiteNotice) satisfies QuartzComponentConstructor
