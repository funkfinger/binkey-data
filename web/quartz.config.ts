import { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4 Configuration for binkey-data Electronics Inventory
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "BinKey",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "funkfinger.github.io/binkey-data",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "ai-prompts",
      "ai-memory",
      "docs",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "Space Grotesk",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F4F2EC",       // paper — off-white, near-zero chroma
          lightgray: "rgba(12,12,10,0.13)", // rule
          gray: "rgba(12,12,10,0.45)",      // ink50
          darkgray: "rgba(12,12,10,0.70)",  // ink70
          dark: "#0C0C0A",        // ink — near-black
          secondary: "#c1440e",   // passive rust (default accent)
          tertiary: "oklch(0.62 0.18 152)", // sensor green — used for "available"
          highlight: "rgba(193,68,14,0.08)",
          textHighlight: "rgba(193,68,14,0.18)",
        },
        // Dark mode forced to match light mode — site is light-only
        darkMode: {
          light: "#F4F2EC",
          lightgray: "rgba(12,12,10,0.13)",
          gray: "rgba(12,12,10,0.45)",
          darkgray: "rgba(12,12,10,0.70)",
          dark: "#0C0C0A",
          secondary: "#c1440e",
          tertiary: "oklch(0.62 0.18 152)",
          highlight: "rgba(193,68,14,0.08)",
          textHighlight: "rgba(193,68,14,0.18)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
};

export default config;
