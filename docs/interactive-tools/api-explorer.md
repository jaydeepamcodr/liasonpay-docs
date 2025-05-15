---
sidebar_position: 3
---

import OpenApiExplorer from '@site/src/components/OpenApiExplorer';
import { ApiBaseUrl, ExampleApiKey, AppUrl } from '@site/src/components/DynamicValues';

# API Explorer

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Explore and test the LiasonPay API with our interactive API Explorer</h2>
    <p>A powerful interface for understanding our API endpoints, testing requests, and viewing responses in real-time</p>
    <div className="explorer-buttons">
      <a href="#interactive-api-explorer" className="button button--primary button--lg">
        <span>🔍 Open Explorer</span>
      </a>
      <a href="/openapi.yaml" download className="button button--secondary button--lg">
        <span>📥 Download OpenAPI Spec</span>
      </a>
    </div>
  </div>
</div>

## What's Included in the API Explorer?

<div className="features-grid">
  <div className="feature-card">
    <h3>🔍 Complete API Documentation</h3>
    <p>Detailed documentation for all available endpoints in the LiasonPay API</p>
  </div>
  <div className="feature-card">
    <h3>🧪 Interactive Testing</h3>
    <p>Try out API requests directly in your browser with real-time responses</p>
  </div>
  <div className="feature-card">
    <h3>📋 Request/Response Examples</h3>
    <p>Sample request bodies and response formats for each endpoint</p>
  </div>
  <div className="feature-card">
    <h3>💻 Code Generation</h3>
    <p>Generate code snippets in multiple programming languages</p>
  </div>
</div>

## Interactive API Explorer

<div id="interactive-api-explorer" className="explorer-container">
  <div className="info-callout">
    <p><strong>💡 Tip:</strong> The API Explorer allows you to browse and test all LiasonPay API endpoints in real-time. Authenticate with your API key to make live requests.</p>
  </div>

  <OpenApiExplorer />
</div>

## How to Use the API Explorer

<div className="setup-steps">
  <div className="setup-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Authentication</h3>
      <p>To authenticate API requests in the explorer:</p>
      <ol>
        <li>Click the <strong>Authorize</strong> button at the top of the explorer</li>
        <li>Enter your API key in the format: <code>Bearer {ExampleApiKey()}</code></li>
        <li>Click <strong>Authorize</strong></li>
        <li>Close the authorization dialog</li>
      </ol>
      <div className="info-callout">
        <p><strong>💡 Tip:</strong> You can find your API key in the <a href={`${AppUrl()}/api-key`} target="_blank" rel="noopener noreferrer">LiasonPay Dashboard</a> under Settings → API Keys.</p>
      </div>
      <div className="step-image">
        <img src="https://static.swagger.io/unpkg/swagger-ui-dist@4.5.0/oauth2-redirect.html" alt="Swagger UI Authorization" width="400" />
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Exploring Endpoints</h3>
      <p>The explorer organizes endpoints by tags:</p>
      <div className="endpoint-categories">
        <div className="endpoint-category">
          <h4>💳 Subscription Endpoints</h4>
          <p>Endpoints for managing subscriptions</p>
        </div>
        <div className="endpoint-category">
          <h4>💰 Payment Endpoints</h4>
          <p>Endpoints for processing payments</p>
        </div>
        <div className="endpoint-category">
          <h4>📦 Package Endpoints</h4>
          <p>Endpoints for retrieving package information</p>
        </div>
      </div>
      <p>Click on a tag to expand it and see all endpoints in that category.</p>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Endpoint Details</h3>
      <p>For each endpoint, the explorer shows:</p>
      <div className="endpoint-details">
        <div className="detail-item">
          <span className="detail-icon">📝</span>
          <span className="detail-text"><strong>Description</strong> - A detailed description of the endpoint's purpose</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🔧</span>
          <span className="detail-text"><strong>Parameters</strong> - Required and optional parameters</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">📤</span>
          <span className="detail-text"><strong>Request Body</strong> - The expected request body format</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">📥</span>
          <span className="detail-text"><strong>Responses</strong> - Possible response codes and formats</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">📋</span>
          <span className="detail-text"><strong>Examples</strong> - Example requests and responses</span>
        </div>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">4</div>
    <div className="step-content">
      <h3>Trying Out Endpoints</h3>
      <p>To test an endpoint:</p>
      <div className="try-steps">
        <ol>
          <li>Click on the endpoint to expand it</li>
          <li>Fill in the required parameters</li>
          <li>Click <strong>Try it out</strong></li>
          <li>Review the request details</li>
          <li>Click <strong>Execute</strong></li>
          <li>View the response</li>
        </ol>
      </div>
      <div className="warning-callout">
        <p><strong>⚠️ Important:</strong> When testing endpoints that create or modify data, be aware that these are real API calls that will affect your account.</p>
      </div>
    </div>
  </div>
</div>

## Request and Response Examples

<div className="examples-container">
  <div className="example-card">
    <h3>📤 Request Examples</h3>
    <p>The explorer provides sample request bodies for each endpoint to help you understand the required format and parameters.</p>
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "store_id": "{'{{'}{'{storeId}'}{'}}'}",
  "currency": "usd",
  "products": [
    {
      "name": "Product 1",
      "description": "Product description",
      "price": 100,
      "quantity": 1
    }
  ],
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel"
}
```
      </pre>
    </div>
  </div>

  <div className="example-card">
    <h3>📥 Response Examples</h3>
    <p>View sample responses for different scenarios to understand what to expect from the API.</p>
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "id": "PAYMENT_123456789",
  "status": "pending",
  "amount": 100,
  "currency": "usd",
  "payment_url": "https://liasonpay.net/pay/PAYMENT_123456789",
  "created_at": "2023-06-15T10:30:00Z"
}
```
      </pre>
    </div>
  </div>
</div>

## Advanced Features

<div className="features-section">
  <div className="features-grid">
    <div className="feature-card">
      <h3>📊 Schema Models</h3>
      <p>The explorer includes detailed schema models for all request and response objects:</p>
      <ol>
        <li>Click on the <strong>Schema</strong> tab to view the schema definition</li>
        <li>Expand nested objects to see their properties</li>
        <li>View property types, formats, and constraints</li>
        <li>See required vs. optional properties</li>
      </ol>
    </div>

    <div className="feature-card">
      <h3>💻 Code Generation</h3>
      <p>Generate code snippets for various programming languages:</p>
      <ol>
        <li>Click on an endpoint</li>
        <li>Fill in the parameters</li>
        <li>Click <strong>Try it out</strong></li>
        <li>Select your preferred language from the dropdown</li>
        <li>Copy the generated code snippet</li>
      </ol>
    </div>

    <div className="feature-card">
      <h3>🔍 Filtering and Search</h3>
      <p>Find specific endpoints quickly:</p>
      <ul>
        <li>Use the search box to filter endpoints by keyword</li>
        <li>Click on tags to show only endpoints in that category</li>
        <li>Use the filter by path option to find specific endpoints</li>
      </ul>
    </div>

    <div className="feature-card">
      <h3>🔄 Real-time Testing</h3>
      <p>Test API calls with real-time responses:</p>
      <ul>
        <li>See actual HTTP requests being sent</li>
        <li>View response headers and status codes</li>
        <li>Analyze response timing and performance</li>
        <li>Test error handling with invalid inputs</li>
      </ul>
    </div>

  </div>
</div>

## Supported Programming Languages

<div className="languages-section">
  <div className="languages-grid">
    <div className="language-item">
      <span className="language-icon">🔄</span>
      <span className="language-name">cURL</span>
    </div>
    <div className="language-item">
      <span className="language-icon">🟨</span>
      <span className="language-name">JavaScript</span>
    </div>
    <div className="language-item">
      <span className="language-icon">🐍</span>
      <span className="language-name">Python</span>
    </div>
    <div className="language-item">
      <span className="language-icon">🐘</span>
      <span className="language-name">PHP</span>
    </div>
    <div className="language-item">
      <span className="language-icon">💎</span>
      <span className="language-name">Ruby</span>
    </div>
    <div className="language-item">
      <span className="language-icon">☕</span>
      <span className="language-name">Java</span>
    </div>
    <div className="language-item">
      <span className="language-icon">#️⃣</span>
      <span className="language-name">C#</span>
    </div>
    <div className="language-item">
      <span className="language-icon">🔵</span>
      <span className="language-name">Go</span>
    </div>
  </div>
</div>

## OpenAPI Specification Details

<div className="spec-details">
  <div className="spec-card">
    <h3>Technical Details</h3>
    <div className="spec-items">
      <div className="spec-item">
        <span className="spec-label">Specification:</span>
        <span className="spec-value">OpenAPI v3.0.3</span>
      </div>
      <div className="spec-item">
        <span className="spec-label">Title:</span>
        <span className="spec-value">LiasonPay API Documentation</span>
      </div>
      <div className="spec-item">
        <span className="spec-label">Version:</span>
        <span className="spec-value">1.0.0</span>
      </div>
      <div className="spec-item">
        <span className="spec-label">Base URL:</span>
        <span className="spec-value">{ApiBaseUrl()}</span>
      </div>
      <div className="spec-item">
        <span className="spec-label">Security:</span>
        <span className="spec-value">Bearer Authentication</span>
      </div>
    </div>
  </div>
</div>

## Using with Other Tools

<div className="tools-section">
  <div className="tools-grid">
    <div className="tool-card">
      <h3>🚀 Postman</h3>
      <p>Import the OpenAPI specification into Postman:</p>
      <ol>
        <li>Download the <a href="/openapi.yaml" download>OpenAPI specification</a></li>
        <li>Open Postman</li>
        <li>Click <strong>Import</strong></li>
        <li>Select the downloaded specification file</li>
        <li>Postman will create a collection based on the specification</li>
      </ol>
      <div className="tool-link">
        <a href="/interactive-tools/postman-collection" className="button button--secondary">View Postman Collection</a>
      </div>
    </div>

    <div className="tool-card">
      <h3>🔍 Swagger UI</h3>
      <p>Use the specification with Swagger UI:</p>
      <ol>
        <li>Download the <a href="/openapi.yaml" download>OpenAPI specification</a></li>
        <li>Host Swagger UI on your local machine</li>
        <li>Load the specification file</li>
        <li>Explore the API using Swagger UI</li>
      </ol>
      <div className="tool-link">
        <a href="https://swagger.io/tools/swagger-ui/" target="_blank" rel="noopener noreferrer" className="button button--secondary">Learn More</a>
      </div>
    </div>

    <div className="tool-card">
      <h3>✏️ Swagger Editor</h3>
      <p>Edit and view the specification:</p>
      <ol>
        <li>Visit <a href="https://editor.swagger.io/" target="_blank" rel="noopener noreferrer">Swagger Editor</a></li>
        <li>Import the OpenAPI specification</li>
        <li>View and edit the specification</li>
        <li>Generate client libraries</li>
      </ol>
      <div className="tool-link">
        <a href="https://editor.swagger.io/" target="_blank" rel="noopener noreferrer" className="button button--secondary">Open Swagger Editor</a>
      </div>
    </div>

  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>How do I authenticate API requests?</h3>
    <p>Click the <strong>Authorize</strong> button at the top of the explorer and enter your API key in the format: <code>Bearer {ExampleApiKey()}</code></p>
  </div>

  <div className="faq-item">
    <h3>Are the API calls made in the explorer real?</h3>
    <p>Yes, the API Explorer makes real API calls to the LiasonPay API. Any actions you take will affect your account.</p>
  </div>

  <div className="faq-item">
    <h3>Can I download the OpenAPI specification?</h3>
    <p>Yes, you can <a href="/openapi.yaml" download>download the OpenAPI specification</a> and use it with other tools like Postman or Swagger UI.</p>
  </div>

  <div className="faq-item">
    <h3>How do I generate code snippets?</h3>
    <p>After clicking "Try it out" on an endpoint, you can select your preferred programming language from the dropdown menu to generate a code snippet.</p>
  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-step-card">
    <h3>📦 Download Postman Collection</h3>
    <p>Get our Postman Collection for more advanced testing capabilities</p>
    <a href="/interactive-tools/postman-collection" className="button button--secondary">View Postman Collection</a>
  </div>

  <div className="next-step-card">
    <h3>🧪 Try API Testing Tool</h3>
    <p>Use our simplified API testing tool for quick tests</p>
    <a href="/interactive-tools/api-testing" className="button button--secondary">Open API Testing Tool</a>
  </div>

  <div className="next-step-card">
    <h3>📚 Review API Reference</h3>
    <p>Read detailed documentation for all endpoints</p>
    <a href="/api-reference" className="button button--secondary">View API Reference</a>
  </div>
</div>
