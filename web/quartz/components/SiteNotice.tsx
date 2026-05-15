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
    background-color: color-mix(in srgb, #e8a000 12%, var(--light));
    border-bottom: 2px solid color-mix(in srgb, #e8a000 50%, transparent);
  }

  .site-notice-inner {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0.6rem 1.5rem;
    font-size: 0.875rem;
    color: var(--darkgray);
    max-width: 100%;
  }

  .site-notice-icon {
    flex-shrink: 0;
  }

  .site-notice-text strong {
    color: var(--dark);
  }
`

export default (() => SiteNotice) satisfies QuartzComponentConstructor
