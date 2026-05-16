import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.BinkeyNav(), Component.SiteNotice()],
  afterBody: [
    // Search loaded here so ⌘K shortcut still works even with no left sidebar
    Component.Search(),
    Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/funkfinger/binkey-data",
    },
  }),
}

// Part detail & collection pages
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.FrontmatterTable(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [],  // old Quartz sidebar removed — nav is now BinkeyNav top bar
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// Folder / tag listing pages
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
}
