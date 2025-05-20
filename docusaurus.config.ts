import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Import constants
const {
  API_BASE_URL,
  APP_URL,
  EXAMPLE_STORE_ID,
  EXAMPLE_SUBSCRIPTION_ID,
  EXAMPLE_PACKAGE_ID,
  EXAMPLE_TRANSACTION_ID,
  EXAMPLE_PRICE_ID,
  EXAMPLE_API_KEY,
  EXAMPLE_COUPON,
  API_RATE_LIMIT,
} = require("./src/constants");

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "LiasonPay API Documentation",
  tagline: "Complete API reference for developers",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: APP_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/docs-v2",

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

  // Add custom scripts
  scripts: [
    {
      src: "/docs-v2/js/custom.js",
      async: true,
    },
    {
      src: "/docs-v2/js/api-reference.js",
      async: true,
    },
    {
      src: "/docs-v2/js/homepage.js",
      async: true,
    },
    {
      src: "/docs-v2/js/authentication-tabs.js",
      async: true,
    },
    {
      src: "/docs-v2/js/next-steps.js",
      async: true,
    },
    {
      src: "/docs-v2/js/testing-environments.js",
      async: true,
    },
    {
      src: "/docs-v2/js/faq-section.js",
      async: true,
    },
  ],

  // Add custom stylesheets
  stylesheets: [
    {
      href: "/docs-v2/css/authentication-tabs.css",
    },
    {
      href: "/docs-v2/css/next-steps.css",
    },
    {
      href: "/docs-v2/css/testing-environments.css",
    },
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
          href: "/interactive-tools/api-explorer",
          label: "API Explorer",
          position: "right",
        },
        {
          href: APP_URL,
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
              to: "/api-reference",
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
              label: "API Explorer",
              to: "/interactive-tools/api-explorer",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Website",
              href: APP_URL,
            },
            {
              label: "API Keys",
              href: "https://liasonpay.net/api-key",
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
  customFields: {
    appUrl: APP_URL,
    apiBaseUrl: API_BASE_URL,
    exampleStoreId: EXAMPLE_STORE_ID,
    exampleSubscriptionId: EXAMPLE_SUBSCRIPTION_ID,
    examplePackageId: EXAMPLE_PACKAGE_ID,
    exampleTransactionId: EXAMPLE_TRANSACTION_ID,
    examplePriceId: EXAMPLE_PRICE_ID,
    exampleApiKey: EXAMPLE_API_KEY,
    exampleCoupon: EXAMPLE_COUPON,
    apiRateLimit: API_RATE_LIMIT,
  },
};

export default config;
