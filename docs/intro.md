---
sidebar_position: 1
---

import { AppUrl, ApiBaseUrl } from '@site/src/components/DynamicValues';

# LiasonPay API Documentation

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Welcome to the LiasonPay API Documentation</h2>
    <p>Everything you need to integrate with our payment processing platform</p>
    <div className="explorer-buttons">
      <a href="#getting-started" className="button button--primary button--lg">
        <span>🚀 Get Started</span>
      </a>
      <a href="/interactive-tools/api-testing" className="button button--secondary button--lg">
        <span>🧪 Try the API</span>
      </a>
    </div>
  </div>
</div>

## Documentation Structure

<div className="features-grid">
  <div className="feature-card">
    <h3>📚 Developer Guide</h3>
    <p>Conceptual information and guidance for integrating with the LiasonPay API</p>
    <ul>
      <li><a href="/developer-guide/overview">Overview</a> - Introduction to LiasonPay</li>
      <li><a href="/developer-guide/authentication">Authentication</a> - Secure your API requests</li>
      <li><a href="/developer-guide/how-to-use">How to Use the API</a> - Step-by-step guide</li>
      <li><a href="/developer-guide/environment-info">Environment Information</a> - Sandbox and production</li>
      <li><a href="/developer-guide/best-practices">Best Practices</a> - Integration recommendations</li>
      <li><a href="/developer-guide/webhooks">Webhooks</a> - Real-time notifications</li>
      <li><a href="/developer-guide/error-handling">Error Handling</a> - Handle API errors</li>
    </ul>
  </div>

  <div className="feature-card">
    <h3>🔍 API Reference</h3>
    <p>Detailed technical information about each API endpoint</p>
    <ul>
      <li><a href="/api-reference/subscriptions/get-subscriptions">Subscriptions API</a> - Manage recurring billing</li>
      <li><a href="/api-reference/payments/process-payment">Payments API</a> - Process one-time payments</li>
      <li><a href="/api-reference/packages/get-packages">Packages API</a> - Retrieve package information</li>
      <li><a href="/interactive-tools/api-testing">Interactive Testing</a> - Test API endpoints</li>
      <li><a href="/api-reference/faq">FAQ / Troubleshooting</a> - Common questions</li>
    </ul>
  </div>
</div>

<div id="getting-started" className="getting-started-section">
  <h2>Getting Started</h2>

  <div className="setup-steps">
    <div className="setup-step">
      <div className="step-number">1</div>
      <div className="step-content">
        <h3>Understand LiasonPay</h3>
        <p>Read the <a href="/developer-guide/overview">Overview</a> to understand what LiasonPay offers and how it can help your business.</p>
      </div>
    </div>

    <div className="setup-step">
      <div className="step-number">2</div>
      <div className="step-content">
        <h3>Set Up Authentication</h3>
        <p>Learn about <a href="/developer-guide/authentication">Authentication</a> to set up your API keys and secure your requests.</p>
        <div className="code-block-container">
          <pre className="code-block">

```http
Authorization: Bearer sk_test_your_api_key
```

          </pre>
        </div>
      </div>
    </div>

    <div className="setup-step">
      <div className="step-number">3</div>
      <div className="step-content">
        <h3>Follow the Integration Guide</h3>
        <p>Follow the <a href="/developer-guide/how-to-use">How to Use the API</a> guide for step-by-step instructions on integrating with LiasonPay.</p>
      </div>
    </div>

    <div className="setup-step">
      <div className="step-number">4</div>
      <div className="step-content">
        <h3>Explore the API</h3>
        <p>Explore the <a href="/api-reference">API Reference</a> for detailed endpoint documentation and try out the API with our <a href="/interactive-tools/api-testing">interactive tools</a>.</p>
      </div>
    </div>

  </div>
</div>

## API Information

<div className="api-info-section">
  <div className="api-info-grid">
    <div className="api-info-card">
      <h3>🌐 Base URL</h3>
      <p>All API requests should be made to:</p>
      <div className="code-block-container">
        <pre className="code-block">
```
{ApiBaseUrl()}
```
        </pre>
      </div>
    </div>

    <div className="api-info-card">
      <h3>🔐 Authentication</h3>
      <p>All API requests require authentication using API keys:</p>
      <div className="code-block-container">
        <pre className="code-block">

```http
Authorization: Bearer sk_test_your_api_key
```

        </pre>
      </div>
      <p><a href="/developer-guide/authentication">Learn more about authentication →</a></p>
    </div>

    <div className="api-info-card">
      <h3>📦 Resources</h3>
      <p>Key resources available in the API:</p>
      <ul>
        <li><strong>Payments</strong> - One-time payment processing</li>
        <li><strong>Subscriptions</strong> - Recurring billing management</li>
        <li><strong>Packages</strong> - Product and pricing information</li>
      </ul>
    </div>

    <div className="api-info-card">
      <h3>🛠️ Support</h3>
      <p>If you need assistance with the API, please contact our support team:</p>
      <ul>
        <li>Email: <a href="mailto:support@liasonpay.test">support@liasonpay.test</a></li>
        <li>Support Portal: <a href="https://support.liasonpay.test" target="_blank" rel="noopener noreferrer">support.liasonpay.test</a></li>
      </ul>
    </div>

  </div>
</div>

## Interactive Tools

<div className="tools-section">
  <div className="tools-grid">
    <div className="tool-card">
      <h3>🧪 API Testing Tool</h3>
      <p>Test API endpoints directly in your browser with our interactive testing tool.</p>
      <a href="/interactive-tools/api-testing" className="button button--secondary">Open API Testing Tool</a>
    </div>

    <div className="tool-card">
      <h3>🔍 API Explorer</h3>
      <p>Explore the full API with our interactive OpenAPI-based explorer.</p>
      <a href="/interactive-tools/api-explorer" className="button button--secondary">Open API Explorer</a>
    </div>

    <div className="tool-card">
      <h3>📦 Postman Collection</h3>
      <p>Download our Postman Collection for more advanced API testing.</p>
      <a href="/interactive-tools/postman-collection" className="button button--secondary">Get Postman Collection</a>
    </div>

  </div>
</div>
