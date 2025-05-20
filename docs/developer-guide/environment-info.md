---
sidebar_position: 4
---

import { AppUrl, ApiBaseUrl, ExampleApiKey, ExampleStoreId } from '@site/src/components/DynamicValues';

# Environment Information

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Understanding the LiasonPay Environment</h2>
    <p>Learn how to effectively use the LiasonPay production environment for processing real payments</p>
  </div>
</div>

## Production Environment

<div className="environment-section">
  <div className="environment-cards">
    <div className="environment-card">
      <div className="environment-header production">
        <h3>🚀 Production Environment</h3>
      </div>
      <div className="environment-content">
        <div className="environment-details">
          <div className="environment-detail">
            <span className="detail-label">Base URL:</span>
            <span className="detail-value"><code>{ApiBaseUrl()}</code></span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">Purpose:</span>
            <span className="detail-value">Live transactions and real payments</span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">API Keys:</span>
            <span className="detail-value">Live API keys (prefixed with <code>lp_live_</code>)</span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">Payments:</span>
            <span className="detail-value">Real money is processed</span>
          </div>
          <div className="environment-detail">
            <span className="detail-label">Features:</span>
            <span className="detail-value">Full API functionality with actual payment processing</span>
          </div>
        </div>
        <div className="warning-callout">
          <p><strong>⚠️ Important:</strong> The production environment processes real payments and affects live data. Use with caution.</p>
        </div>
      </div>
    </div>
  </div>
</div>

## API Configuration

<div className="setup-steps">
  <div className="setup-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Use the Correct Base URL</h3>
      <p>Use the base URL <code>{ApiBaseUrl()}</code> for all your API requests</p>
      <div className="code-block-container">
        <pre className="code-block">
```http
POST {ApiBaseUrl()}/subscriptions/create
```
        </pre>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Authenticate with Your API Key</h3>
      <p>Include your API key in the Authorization header</p>
      <div className="code-block-container">
        <pre className="code-block">
```http
Authorization: Bearer lp_live_your_api_key
```
        </pre>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Set the Mode Parameter</h3>
      <p>Set the <code>mode</code> parameter to <code>production</code> in relevant API calls</p>
      <div className="code-block-container">
        <pre className="code-block">
```json
{
  "store_id": "{ExampleStoreId()}",
  "price_id": "PRICE_ABC123",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel",
  "mode": "production"
}
```
        </pre>
      </div>
    </div>
  </div>
</div>

## Testing in Production

<div className="testing-section">
  <div className="testing-card">
    <h3>🧪 Test Card Numbers</h3>
    <p>For testing purposes in production, you can use these test card numbers:</p>

    <div className="test-cards-table">
      <table>
        <thead>
          <tr>
            <th>Card Type</th>
            <th>Card Number</th>
            <th>CVV</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="card-icon">💳</span> Visa</td>
            <td><code>4111 1111 1111 1111</code></td>
            <td>Any</td>
            <td>Any future date</td>
          </tr>
          <tr>
            <td><span className="card-icon">💳</span> Mastercard</td>
            <td><code>5555 5555 5555 4444</code></td>
            <td>Any</td>
            <td>Any future date</td>
          </tr>
          <tr>
            <td><span className="card-icon">💳</span> Discover</td>
            <td><code>6011 1111 1111 1117</code></td>
            <td>Any</td>
            <td>Any future date</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="info-callout">
      <p><strong>💡 Tip:</strong> These test cards can be used in production without processing real payments.</p>
    </div>

  </div>

  <div className="testing-card">
    <h3>🔄 Test Responses</h3>
    <p>You can trigger specific responses by using special amounts:</p>

    <div className="test-responses-table">
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>100</code></td>
            <td><span className="response-success">✅ Successful payment</span></td>
          </tr>
          <tr>
            <td><code>999</code></td>
            <td><span className="response-error">❌ Failed payment (insufficient funds)</span></td>
          </tr>
          <tr>
            <td><code>888</code></td>
            <td><span className="response-error">❌ Failed payment (expired card)</span></td>
          </tr>
          <tr>
            <td><code>777</code></td>
            <td><span className="response-error">❌ Failed payment (declined)</span></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>

## Implementation Checklist

<div className="checklist-section">
  <h3>✅ Before Going Live</h3>
  <p>Before going live with your integration, ensure you have:</p>

  <div className="checklist-items">
    <div className="checklist-item">
      <div className="checklist-icon">✓</div>
      <div className="checklist-content">
        <h4>Thoroughly Tested Your Integration</h4>
        <p>Test all payment flows, error scenarios, and edge cases</p>
      </div>
    </div>

    <div className="checklist-item">
      <div className="checklist-icon">✓</div>
      <div className="checklist-content">
        <h4>Properly Configured Your API Keys</h4>
        <p>Ensure you're using live API keys in production</p>
      </div>
    </div>

    <div className="checklist-item">
      <div className="checklist-icon">✓</div>
      <div className="checklist-content">
        <h4>Set the Mode Parameter</h4>
        <p>Set the <code>mode</code> parameter to <code>production</code> in all API calls</p>
      </div>
    </div>

    <div className="checklist-item">
      <div className="checklist-icon">✓</div>
      <div className="checklist-content">
        <h4>Set Up Webhook Endpoints</h4>
        <p>Configure webhook endpoints to handle payment events</p>
      </div>
    </div>

    <div className="checklist-item">
      <div className="checklist-icon">✓</div>
      <div className="checklist-content">
        <h4>Removed Test Data</h4>
        <p>Remove any test data or configurations from your code</p>
      </div>
    </div>

  </div>
</div>

## Rate Limits

<div className="rate-limits-section">
  <div className="rate-limits-card">
    <h3>🔄 API Rate Limits</h3>
    <p>The API has rate limits to prevent abuse:</p>

    <div className="rate-limit-item">
      <div className="rate-limit-env">Production</div>
      <div className="rate-limit-value">300 requests per minute</div>
    </div>

    <div className="warning-callout">
      <p><strong>⚠️ Important:</strong> If you exceed these limits, you'll receive a <code>429 Too Many Requests</code> response. Implement exponential backoff in your code to handle rate limiting gracefully.</p>
    </div>

  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>How do I get production API keys?</h3>
    <p>You can generate production API keys from the <a href={`${AppUrl()}/api-key`} target="_blank" rel="noopener noreferrer">LiasonPay Dashboard</a> under Settings → API Keys.</p>
  </div>

  <div className="faq-item">
    <h3>Can I use test cards in production?</h3>
    <p>Yes, you can use the test cards listed above in production to test your integration without processing real payments.</p>
  </div>

  <div className="faq-item">
    <h3>What happens if I exceed the rate limits?</h3>
    <p>If you exceed the rate limits, you'll receive a <code>429 Too Many Requests</code> response. Implement exponential backoff in your code to handle rate limiting gracefully.</p>
  </div>

  <div className="faq-item">
    <h3>How do I monitor my API usage?</h3>
    <p>You can monitor your API usage in the <a href={AppUrl()} target="_blank" rel="noopener noreferrer">LiasonPay Dashboard</a> under API → Usage.</p>
  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-step-card">
    <h3>✅ Best Practices</h3>
    <p>Explore best practices for integrating with the LiasonPay API</p>
    <a href="./best-practices" className="button button--secondary">View Best Practices</a>
  </div>

  <div className="next-step-card">
    <h3>🔔 Webhooks</h3>
    <p>Set up real-time notifications for payment events</p>
    <a href="./webhooks" className="button button--secondary">View Webhooks Guide</a>
  </div>

  <div className="next-step-card">
    <h3>❌ Error Handling</h3>
    <p>Learn how to handle API errors effectively</p>
    <a href="./error-handling" className="button button--secondary">View Error Handling Guide</a>
  </div>
</div>
