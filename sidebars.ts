import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * API Documentation sidebar configuration
 */
const sidebars: SidebarsConfig = {
  // Define a manual sidebar for API documentation
  tutorialSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/introduction",
        "getting-started/authentication",
        "getting-started/environment-information",
        "getting-started/how-to-use",
      ],
    },
    {
      type: "category",
      label: "Developer Guide",
      items: [
        "developer-guide/webhooks",
        "developer-guide/error-handling",
        {
          type: "category",
          label: "Best Practices",
          items: [
            "developer-guide/best-practices/security",
            "developer-guide/best-practices/performance",
            "developer-guide/best-practices/user-experience",
            "developer-guide/best-practices/compliance",
            "developer-guide/best-practices/testing",
          ],
        },
        "developer-guide/faq",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        "api-reference/index",
        {
          type: "category",
          label: "Subscription Endpoints",
          items: [
            "api-reference/subscriptions/get-subscriptions",
            "api-reference/subscriptions/create-subscription",
            "api-reference/subscriptions/verify-subscription",
            "api-reference/subscriptions/cancel-subscription",
            "api-reference/subscriptions/upgrade-subscription",
          ],
        },
        {
          type: "category",
          label: "Payment Endpoints",
          items: [
            "api-reference/payments/process-payment",
            "api-reference/payments/verify-payment",
          ],
        },
        {
          type: "category",
          label: "Package Endpoints",
          items: ["api-reference/packages/get-packages"],
        },
      ],
    },
    {
      type: "category",
      label: "Interactive Tools",
      items: [
        "interactive-tools/api-testing",
        "interactive-tools/postman-collection",
        "interactive-tools/openapi-explorer",
      ],
    },
  ],
};

export default sidebars;
