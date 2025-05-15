---
sidebar_position: 1
---

import { ApiBaseUrl, ExampleApiKey, AppUrl, ExampleStoreId } from '@site/src/components/DynamicValues';

# API Testing Tool

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Test the LiasonPay API directly in your browser</h2>
    <p>A simple and intuitive interface for testing API endpoints with real-time responses</p>
    <div className="explorer-buttons">
      <a href="#example-processing-a-payment" className="button button--primary button--lg">
        <span>🧪 Try an Example</span>
      </a>
      <a href="/interactive-tools/postman-collection" className="button button--secondary button--lg">
        <span>📦 Get Postman Collection</span>
      </a>
    </div>
  </div>
</div>

## What's Included in the API Testing Tool?

<div className="features-grid">
  <div className="feature-card">
    <h3>🧪 Interactive Testing</h3>
    <p>Test API endpoints with your own parameters and see real-time responses</p>
  </div>
  <div className="feature-card">
    <h3>📋 Request Builder</h3>
    <p>Easily build API requests with a user-friendly interface for all parameters</p>
  </div>
  <div className="feature-card">
    <h3>📊 Response Viewer</h3>
    <p>View formatted JSON responses with status codes and headers</p>
  </div>
  <div className="feature-card">
    <h3>🔄 Environment Switching</h3>
    <p>Test in sandbox or production environments with a simple toggle</p>
  </div>
</div>

## How to Use the API Testing Tool

<div className="setup-steps">
  <div className="setup-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Authentication</h3>
      <p>To use the API Testing Tool with authenticated endpoints:</p>
      <ol>
        <li>Enter your API key in the <strong>Authorization</strong> header field</li>
        <li>Use a test API key (<code>sk_test_</code>) for sandbox testing</li>
        <li>Use a live API key (<code>sk_live_</code>) for production testing</li>
      </ol>
      <div className="code-block-container">
        <pre className="code-block">
```http
Authorization: Bearer {ExampleApiKey()}
```
        </pre>
      </div>
      <div className="info-callout">
        <p><strong>💡 Tip:</strong> You can find your API key in the <a href={`${AppUrl()}/api-key`} target="_blank" rel="noopener noreferrer">LiasonPay Dashboard</a> under Settings → API Keys.</p>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Request Parameters</h3>
      <p>The tool provides input fields for all required and optional parameters:</p>
      <div className="parameter-details">
        <div className="detail-item">
          <span className="detail-icon">🔑</span>
          <span className="detail-text">Fill in the required parameters (marked with *)</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">➕</span>
          <span className="detail-text">Add any optional parameters as needed</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🚀</span>
          <span className="detail-text">Click <strong>Send Request</strong> to execute the API call</span>
        </div>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Response Viewer</h3>
      <p>After sending a request, the tool displays:</p>
      <div className="response-details">
        <div className="detail-item">
          <span className="detail-icon">📊</span>
          <span className="detail-text">The response status code</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">📋</span>
          <span className="detail-text">Response headers</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">📄</span>
          <span className="detail-text">Formatted JSON response body</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">⏱️</span>
          <span className="detail-text">Request execution time</span>
        </div>
      </div>
    </div>
  </div>
</div>

## Example API Requests

<div id="example-processing-a-payment" className="examples-container">
  <div className="example-card">
    <h3>💳 Processing a Payment</h3>
    <p>Here's how to test the payment processing endpoint:</p>
    <div className="example-steps">
      <ol>
        <li>Navigate to the <a href="/api-reference/payments/process-payment">Process Payment</a> documentation</li>
        <li>Enter your API key in the Authorization header</li>
        <li>Fill in the required parameters:</li>
      </ol>
      <div className="code-block-container">
        <pre className="code-block">
```json
{
  "store_id": "{ExampleStoreId()}",
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
  "cancel_url": "https://example.com/cancel",
  "mode": "sandbox"
}
```
        </pre>
      </div>
      <ol start="4">
        <li>Click <strong>Send Request</strong></li>
        <li>Review the response, which includes a checkout URL</li>
        <li>Optionally, click the checkout URL to test the payment flow</li>
      </ol>
    </div>
  </div>

  <div className="example-card">
    <h3>🔄 Creating a Subscription</h3>
    <p>To test subscription creation:</p>
    <div className="example-steps">
      <ol>
        <li>Navigate to the <a href="/api-reference/subscriptions/create-subscription">Create Subscription</a> documentation</li>
        <li>Enter your API key in the Authorization header</li>
        <li>Fill in the required parameters:</li>
      </ol>
      <div className="code-block-container">
        <pre className="code-block">
```json
{
  "store_id": "{ExampleStoreId()}",
  "price_id": "PRICE_ABC123",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel",
  "mode": "sandbox"
}
```
        </pre>
      </div>
      <ol start="4">
        <li>Click <strong>Send Request</strong></li>
        <li>Review the response, which includes a subscription checkout URL</li>
      </ol>
    </div>
  </div>
</div>

## Testing Environments

<div className="environments-section">
  <div className="environment-cards">
    <div className="environment-card">
      <div className="environment-header sandbox">
        <h3>🧪 Sandbox Testing</h3>
      </div>
      <div className="environment-content">
        <p>For testing without processing real payments:</p>
        <ul>
          <li>Use the sandbox base URL: <code>https://liasonpay.net/api/v1/</code></li>
          <li>Use a test API key (<code>sk_test_</code>)</li>
          <li>Set the <code>mode</code> parameter to "sandbox"</li>
          <li>Use test card numbers for payment testing</li>
        </ul>
        <div className="info-callout">
          <p><strong>💡 Tip:</strong> Sandbox mode is perfect for development and testing without affecting real data or processing actual payments.</p>
        </div>
      </div>
    </div>

    <div className="environment-card">
      <div className="environment-header production">
        <h3>🚀 Production Testing</h3>
      </div>
      <div className="environment-content">
        <p>For testing with real payments:</p>
        <ul>
          <li>Use the production base URL: <code>{ApiBaseUrl()}</code></li>
          <li>Use a live API key (<code>sk_live_</code>)</li>
          <li>Set the <code>mode</code> parameter to "production"</li>
          <li>Use real card information</li>
        </ul>
        <div className="warning-callout">
          <p><strong>⚠️ Important:</strong> Production mode processes real payments and affects live data. Use with caution.</p>
        </div>
      </div>
    </div>

  </div>
</div>

## Advanced Testing Scenarios

<div className="advanced-testing-section">
  <div className="advanced-testing-grid">
    <div className="advanced-testing-card">
      <h3>🔔 Testing Webhooks</h3>
      <p>While the API Testing Tool doesn't directly test webhooks, you can:</p>
      <ol>
        <li>Use the tool to create test events (payments, subscriptions)</li>
        <li>Configure your webhook URL in the LiasonPay dashboard</li>
        <li>Monitor your webhook endpoint for incoming events</li>
        <li>Verify webhook signatures using your webhook secret</li>
      </ol>
      <div className="info-callout">
        <p><strong>💡 Tip:</strong> Use a service like <a href="https://webhook.site" target="_blank" rel="noopener noreferrer">webhook.site</a> for quick webhook testing during development.</p>
      </div>
    </div>

    <div className="advanced-testing-card">
      <h3>❌ Testing Error Scenarios</h3>
      <p>To test error handling:</p>
      <ul>
        <li>Omit required parameters</li>
        <li>Use invalid values (e.g., negative amounts)</li>
        <li>Use specific test card numbers that trigger errors</li>
        <li>Check the error responses and status codes</li>
      </ul>
      <div className="code-block-container">
        <pre className="code-block">

```json
// Example error response
{
  "error": {
    "code": "invalid_request",
    "message": "Missing required parameter: store_id",
    "status": 400
  }
}
```

        </pre>
      </div>
    </div>

    <div className="advanced-testing-card">
      <h3>💾 Saving and Sharing Tests</h3>
      <p>The API Testing Tool allows you to:</p>
      <ul>
        <li>Save your test configurations for future use</li>
        <li>Export test configurations as cURL commands</li>
        <li>Share test configurations with team members</li>
      </ul>
      <div className="code-block-container">
        <pre className="code-block">

```bash
curl -X POST "https://liasonpay.net/api/v1/payments/process" \
  -H "Authorization: Bearer {ExampleApiKey()}" \
  -H "Content-Type: application/json" \
  -d '{
    "store_id": "{ExampleStoreId()}",
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
    "cancel_url": "https://example.com/cancel",
    "mode": "sandbox"
  }'
```

        </pre>
      </div>
    </div>

  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>Can I use the API Testing Tool in production?</h3>
    <p>Yes, you can use the API Testing Tool with production credentials, but be aware that this will process real payments and affect live data.</p>
  </div>

  <div className="faq-item">
    <h3>How do I test recurring billing?</h3>
    <p>Use the Create Subscription endpoint with test credentials to simulate recurring billing without processing real payments.</p>
  </div>

  <div className="faq-item">
    <h3>Can I test webhook events?</h3>
    <p>Yes, any actions you take with the API Testing Tool will trigger corresponding webhook events if you have webhooks configured.</p>
  </div>

  <div className="faq-item">
    <h3>Are there rate limits for testing?</h3>
    <p>Yes, the API has rate limits that apply to both testing and production. See our <a href="/developer-guide/best-practices">best practices</a> for details.</p>
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
    <h3>🔍 Explore API Explorer</h3>
    <p>Use our interactive API Explorer for a comprehensive API reference</p>
    <a href="/interactive-tools/api-explorer" className="button button--secondary">Open API Explorer</a>
  </div>

  <div className="next-step-card">
    <h3>📚 Review API Reference</h3>
    <p>Read detailed documentation for all endpoints</p>
    <a href="/api-reference" className="button button--secondary">View API Reference</a>
  </div>
</div>
