import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * API Documentation sidebar configuration
 */
const sidebars: SidebarsConfig = {
  // Getting Started sidebar
  gettingStartedSidebar: [
    "getting-started/introduction",
    "getting-started/authentication",
    "getting-started/environment-information",
    "getting-started/how-to-use",
  ],

  // Developer Guide sidebar
  developerGuideSidebar: [
    "developer-guide/overview",
    "developer-guide/authentication",
    "developer-guide/how-to-use",
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

  // API Reference sidebar
  apiReferenceSidebar: [
    "api-reference/index",
    "api-reference/subscriptions",
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
    "api-reference/payments",
    {
      type: "category",
      label: "Payment Endpoints",
      items: [
        "api-reference/payments/process-payment",
        "api-reference/payments/verify-payment",
        "api-reference/payments/charge-payment-with-token",
      ],
    },
    "api-reference/packages",
    {
      type: "category",
      label: "Package Endpoints",
      items: ["api-reference/packages/get-packages"],
    },
    "api-reference/disputes",
    {
      type: "category",
      label: "Dispute Endpoints",
      items: [
        "api-reference/disputes/raise-dispute",
        "api-reference/disputes/view-dispute",
      ],
    },
    "api-reference/faq",
  ],

  // Interactive Tools sidebar
  interactiveToolsSidebar: [
    "interactive-tools/api-testing",
    "interactive-tools/postman-collection",
    "interactive-tools/api-explorer", // API Explorer (OpenAPI)
  ],
};

export default sidebars;
