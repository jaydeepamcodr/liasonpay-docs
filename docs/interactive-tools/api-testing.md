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
        <li>Use a test API key (<code>lp_test_</code>) for sandbox testing</li>
        <li>Use a live API key (<code>lp_live_</code>) for production testing</li>
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

## ⚙️ Testing Environments

<div className="testing-environments-section">
  <div className="testing-environments-grid">
    <div className="testing-environment-card">
      <div className="environment-header sandbox">
        <div className="environment-icon">🧪</div>
        <h3>Sandbox Testing</h3>
      </div>
      <div className="environment-content">
        <p className="environment-description">For testing without processing real payments:</p>
        <div className="environment-details">
          <div className="environment-detail">
            <span className="detail-label">API Base URL:</span>
            <span className="detail-value"><code>{ApiBaseUrl()}</code></span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">API Key:</span>
            <span className="detail-value">Use <strong>your standard API key</strong></span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">Mode Parameter:</span>
            <span className="detail-value">Set to <code className="highlight-param">sandbox</code></span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">Payment Method:</span>
            <span className="detail-value">Use <strong>test card numbers</strong> for payment simulation</span>
          </div>
        </div>
        <div className="environment-code-example">
          <div className="code-header">
            <span>Example API Request</span>
            <button className="copy-button" title="Copy to clipboard">
              <span className="copy-icon">📋</span>
            </button>
          </div>
          <pre className="code-block">
```javascript
fetch('{ApiBaseUrl()}/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 1000,
    currency: 'USD',
    mode: 'sandbox'  // Set to sandbox for testing
  })
})
```
          </pre>
        </div>
        <div className="info-callout">
          <p><strong>💡 Tip:</strong> Sandbox mode allows you to test safely without affecting live data or charging real cards.</p>
        </div>
      </div>
    </div>

    <div className="testing-environment-card">
      <div className="environment-header production">
        <div className="environment-icon">�</div>
        <h3>Production Testing</h3>
      </div>
      <div className="environment-content">
        <p className="environment-description">For real payments:</p>
        <div className="environment-details">
          <div className="environment-detail">
            <span className="detail-label">API Base URL:</span>
            <span className="detail-value"><code>{ApiBaseUrl()}</code></span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">API Key:</span>
            <span className="detail-value">Use the <strong>same API key</strong></span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">Mode Parameter:</span>
            <span className="detail-value">Set to <code className="highlight-param">production</code></span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">Payment Method:</span>
            <span className="detail-value">Use <strong>real card information</strong></span>
          </div>
        </div>
        <div className="environment-code-example">
          <div className="code-header">
            <span>Example API Request</span>
            <button className="copy-button" title="Copy to clipboard">
              <span className="copy-icon">📋</span>
            </button>
          </div>
          <pre className="code-block">

```javascript
fetch("{ApiBaseUrl()}/payments", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: 1000,
    currency: "USD",
    mode: "production", // Set to production for real payments
  }),
});
```

          </pre>
        </div>
        <div className="warning-callout">
          <p><strong>⚠️ Important:</strong> Production mode processes real payments and affects live data. Use with caution.</p>
        </div>
      </div>
    </div>

  </div>

  <div className="environments-comparison">
    <div className="comparison-header">
      <h3>Environment Comparison</h3>
      <p>Understanding the differences between sandbox and production modes</p>
    </div>
    <div className="comparison-table-container">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Sandbox Mode</th>
            <th>Production Mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>API Base URL</td>
            <td><code>{ApiBaseUrl()}</code></td>
            <td><code>{ApiBaseUrl()}</code></td>
          </tr>
          <tr>
            <td>API Key</td>
            <td>Same API key</td>
            <td>Same API key</td>
          </tr>
          <tr>
            <td>Money Movement</td>
            <td><span className="tag sandbox">No real money</span></td>
            <td><span className="tag production">Real money</span></td>
          </tr>
          <tr>
            <td>Card Processing</td>
            <td>Test cards only</td>
            <td>Real cards</td>
          </tr>
          <tr>
            <td>Webhooks</td>
            <td>Test events</td>
            <td>Live events</td>
          </tr>
          <tr>
            <td>Dashboard Data</td>
            <td>Visible but marked as test</td>
            <td>Live data</td>
          </tr>
        </tbody>
      </table>
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
  <div className="next-steps-header">
    <div className="next-steps-header-content">
      <h3>Explore More API Tools</h3>
      <p>Enhance your development experience with these additional resources</p>
    </div>
  </div>

  <div className="next-steps-grid">
    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">📦</div>
        </div>
        <div className="next-step-number">Related</div>
      </div>
      <div className="next-step-card-content">
        <h4>Postman Collection</h4>
        <p>Get our Postman Collection for more advanced testing capabilities</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Test API endpoints in Postman</li>
          <li><span className="benefit-icon">✓</span> Save and organize requests</li>
          <li><span className="benefit-icon">✓</span> Create test environments</li>
        </ul>
        <div className="next-step-action">
          <a href="/interactive-tools/postman-collection" className="button button--primary">
            <span className="button-text">View Postman Collection</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">🔍</div>
        </div>
        <div className="next-step-number">Related</div>
      </div>
      <div className="next-step-card-content">
        <h4>API Explorer</h4>
        <p>Use our interactive API Explorer for a comprehensive API reference</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Interactive documentation</li>
          <li><span className="benefit-icon">✓</span> Try endpoints in your browser</li>
          <li><span className="benefit-icon">✓</span> View request/response examples</li>
        </ul>
        <div className="next-step-action">
          <a href="/interactive-tools/api-explorer" className="button button--primary">
            <span className="button-text">Open API Explorer</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">📚</div>
        </div>
        <div className="next-step-number">Reference</div>
      </div>
      <div className="next-step-card-content">
        <h4>API Reference</h4>
        <p>Read detailed documentation for all endpoints</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Comprehensive endpoint details</li>
          <li><span className="benefit-icon">✓</span> Request and response formats</li>
          <li><span className="benefit-icon">✓</span> Parameter descriptions</li>
        </ul>
        <div className="next-step-action">
          <a href="/api-reference" className="button button--primary">
            <span className="button-text">View API Reference</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

  </div>

  <div className="help-resources-box">
    <div className="help-icon">💬</div>
    <div className="help-content">
      <h4>Need Help?</h4>
      <p>If you have any questions about using the API Testing Tool or need assistance with your integration, our support team is here to help.</p>
      <div className="help-actions">
        <a href="https://liasonpay.net/support" target="_blank" rel="noopener noreferrer" className="button button--secondary">
          <span className="button-text">Contact Support</span>
        </a>
        <a href="/developer-guide/faq" className="button button--secondary">
          <span className="button-text">View FAQ</span>
        </a>
      </div>
    </div>
  </div>
</div>
