import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "LiasonPay API Documentation",
  tagline: "Complete API reference for developers",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.liasonpay.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/docs", // Serve the docs at the /docs/ path
        },
        // No blog configuration
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/api-docs-social-card.jpg",
    navbar: {
      title: "LiasonPay API",
      logo: {
        alt: "LiasonPay Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "gettingStartedSidebar",
          position: "left",
          label: "Getting Started",
        },
        {
          type: "docSidebar",
          sidebarId: "developerGuideSidebar",
          position: "left",
          label: "Developer Guide",
        },
        {
          type: "docSidebar",
          sidebarId: "apiReferenceSidebar",
          position: "left",
          label: "API Reference",
        },
        {
          type: "docSidebar",
          sidebarId: "interactiveToolsSidebar",
          position: "left",
          label: "Interactive Tools",
        },
        {
          href: "/interactive-tools/postman-collection",
          label: "Download Postman Collection",
          position: "right",
        },
        {
          href: "/interactive-tools/openapi-explorer",
          label: "OpenAPI Explorer",
          position: "right",
        },
        {
          href: "https://liasonpay.net",
          label: "Main Website",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "API Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/getting-started/introduction",
            },
            {
              label: "API Reference",
              to: "/api-reference/index",
            },
            {
              label: "Interactive Tools",
              to: "/interactive-tools/api-testing",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Postman Collection",
              to: "/interactive-tools/postman-collection",
            },
            {
              label: "OpenAPI Explorer",
              to: "/interactive-tools/openapi-explorer",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Website",
              href: "https://liasonpay.net",
            },
            {
              label: "API Keys",
              href: "https://liasonpay.test/api-key",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LiasonPay. All rights reserved. Last updated: May 14, 2025`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
