import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "LiasonPay API Documentation",
  tagline: "Complete API reference for developers",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://liasonpay.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/docs/",

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
          routeBasePath: "/", // Serve the docs at the site's root
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
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "API Reference",
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
              label: "Introduction",
              to: "/",
            },
            {
              label: "API Reference",
              to: "/api-reference",
            },
            {
              label: "Interactive Testing",
              to: "/api-reference/interactive-testing",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Postman Collection",
              to: "/collection.json",
            },
            {
              label: "OpenAPI Spec",
              to: "/openapi.yaml",
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
