---
sidebar_position: 3
---

import { AppUrl, ApiBaseUrl, ExampleApiKey, ExampleStoreId } from '@site/src/components/DynamicValues';

# Environment Information

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Understanding the LiasonPay Environment</h2>
    <p>Learn how to effectively set up and use the LiasonPay environment for processing payments</p>
    <div className="explorer-buttons">
      <a href={AppUrl()} target="_blank" rel="noopener noreferrer" className="button button--primary button--lg">
        <span>🚀 Access Dashboard</span>
      </a>
      <a href="#test-cards" className="button button--secondary button--lg">
        <span>💳 View Test Cards</span>
      </a>
    </div>
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
            <span className="detail-value">Live API keys (prefixed with <code>sk_</code>)</span>
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

## Environment Setup

<div className="setup-steps">
  <div className="setup-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Create a LiasonPay Account</h3>
      <ul>
        <li>Sign up at <a href={AppUrl()} target="_blank" rel="noopener noreferrer">{AppUrl()}</a></li>
        <li>Verify your email address</li>
        <li>Complete your account profile</li>
      </ul>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Generate API Keys</h3>
      <ul>
        <li>Navigate to <strong>Settings</strong> → <strong>API Keys</strong> in the dashboard</li>
        <li>Click <strong>Generate New Key</strong></li>
        <li>Copy and securely store your API key</li>
      </ul>
      <div className="info-callout">
        <p><strong>💡 Tip:</strong> Store your API key securely as it will only be displayed once.</p>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Configure Your Environment</h3>
      <ul>
        <li>Set the base URL to <code>{ApiBaseUrl()}</code></li>
        <li>Use your API key for authentication</li>
        <li>Set the <code>mode</code> parameter to <code>production</code> in relevant API calls</li>
      </ul>
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

  <div className="setup-step">
    <div className="step-number">4</div>
    <div className="step-content">
      <h3>Set Up Webhook Endpoints</h3>
      <ul>
        <li>Configure webhook URLs in your account</li>
        <li>Ensure your server is properly secured</li>
        <li>Implement webhook handlers for important events</li>
      </ul>
      <div className="info-callout">
        <p><strong>💡 Tip:</strong> Webhooks allow you to receive real-time notifications about payment events.</p>
      </div>
    </div>
  </div>
</div>

## Environment Details

<div className="api-info-section">
  <div className="api-info-grid">
    <div className="api-info-card">
      <h3>🌐 Base URL</h3>
      <p><code>{ApiBaseUrl()}</code></p>
    </div>

    <div className="api-info-card">
      <h3>🔑 API Keys</h3>
      <p>Keys prefixed with <code>sk_</code></p>
    </div>

    <div className="api-info-card">
      <h3>💰 Money Movement</h3>
      <p>Real transactions</p>
    </div>

    <div className="api-info-card">
      <h3>⏱️ Rate Limits</h3>
      <p><span className="rate-limit-value">300</span> requests per minute</p>
    </div>

    <div className="api-info-card">
      <h3>🔔 Webhooks</h3>
      <p>Live events</p>
    </div>

    <div className="api-info-card">
      <h3>📊 Dashboard</h3>
      <p>Live data</p>
    </div>

  </div>
</div>

<div id="test-cards"></div>

## Test Cards

<div className="testing-section">
  <div className="testing-card">
    <h3>💳 Test Card Numbers</h3>
    <p>For testing purposes in production, you can use these test card numbers:</p>

    <div className="test-cards-table">
      <table>
        <thead>
          <tr>
            <th>Card Type</th>
            <th>Card Number</th>
            <th>CVV</th>
            <th>Expiry Date</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="card-icon">💳</span> Visa</td>
            <td><code>4111 1111 1111 1111</code></td>
            <td>Any</td>
            <td>Any future date</td>
            <td><span className="response-success">✅ Successful payment</span></td>
          </tr>
          <tr>
            <td><span className="card-icon">💳</span> Mastercard</td>
            <td><code>5555 5555 5555 4444</code></td>
            <td>Any</td>
            <td>Any future date</td>
            <td><span className="response-success">✅ Successful payment</span></td>
          </tr>
          <tr>
            <td><span className="card-icon">💳</span> Visa</td>
            <td><code>4000 0000 0000 0002</code></td>
            <td>Any</td>
            <td>Any future date</td>
            <td><span className="response-error">❌ Declined (insufficient funds)</span></td>
          </tr>
          <tr>
            <td><span className="card-icon">💳</span> Visa</td>
            <td><code>4000 0000 0000 0069</code></td>
            <td>Any</td>
            <td>Any future date</td>
            <td><span className="response-error">❌ Expired card</span></td>
          </tr>
          <tr>
            <td><span className="card-icon">💳</span> Visa</td>
            <td><code>4000 0000 0000 0119</code></td>
            <td>Any</td>
            <td>Any future date</td>
            <td><span className="response-error">❌ Declined (generic)</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="info-callout">
      <p><strong>💡 Tip:</strong> These test cards can be used in production without processing real payments.</p>
    </div>

  </div>

  <div className="testing-card">
    <h3>🔄 Test Amounts</h3>
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

## Testing Subscriptions

<div className="workflow-section">
  <h3>🔄 Subscription Testing Workflow</h3>

  <div className="workflow-steps">
    <div className="workflow-step">
      <div className="step-number">1</div>
      <div className="step-content">
        <h4>Create a Subscription</h4>
        <p>Use a test card to create a subscription</p>
        <div className="code-block-container">
          <pre className="code-block">
```json
{
  "store_id": "{ExampleStoreId()}",
  "price_id": "PRICE_SUB123",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel",
  "mode": "production"
}
```
          </pre>
        </div>
      </div>
    </div>

    <div className="workflow-step">
      <div className="step-number">2</div>
      <div className="step-content">
        <h4>Verify Subscription Status</h4>
        <p>Check the subscription status using the API</p>
        <div className="code-block-container">
          <pre className="code-block">

```bash
curl --request GET \
  --url "{ApiBaseUrl()}/subscription/verify?subscription_id=SUB_123" \
  --header "Authorization: Bearer {ExampleApiKey()}"
```

          </pre>
        </div>
      </div>
    </div>

    <div className="workflow-step">
      <div className="step-number">3</div>
      <div className="step-content">
        <h4>Test Subscription Management</h4>
        <p>Test cancellation and upgrade flows</p>
        <ul>
          <li>Cancel a subscription</li>
          <li>Upgrade a subscription to a different plan</li>
          <li>Update payment method</li>
        </ul>
      </div>
    </div>

    <div className="workflow-step">
      <div className="step-number">4</div>
      <div className="step-content">
        <h4>Test Webhook Events</h4>
        <p>Verify webhook events for subscription lifecycle</p>
        <ul>
          <li><code>subscription.created</code></li>
          <li><code>subscription.updated</code></li>
          <li><code>subscription.cancelled</code></li>
          <li><code>subscription.payment_succeeded</code></li>
          <li><code>subscription.payment_failed</code></li>
        </ul>
      </div>
    </div>

  </div>
</div>

## Implementation Considerations

<div className="implementation-section">
  <div className="implementation-grid">
    <div className="implementation-card">
      <div className="implementation-icon">🧪</div>
      <div className="implementation-content">
        <h4>Thoroughly Test Your Integration</h4>
        <ul>
          <li>Test all payment flows</li>
          <li>Test error handling</li>
          <li>Test webhook processing</li>
          <li>Test subscription lifecycle</li>
        </ul>
      </div>
    </div>

    <div className="implementation-card">
      <div className="implementation-icon">🔒</div>
      <div className="implementation-content">
        <h4>Secure Your Implementation</h4>
        <ul>
          <li>Implement proper error handling</li>
          <li>Secure API keys</li>
          <li>Set up logging and monitoring</li>
          <li>Configure webhooks securely</li>
        </ul>
      </div>
    </div>

    <div className="implementation-card">
      <div className="implementation-icon">📋</div>
      <div className="implementation-content">
        <h4>Complete Compliance Requirements</h4>
        <ul>
          <li>Ensure PCI DSS compliance if handling card data</li>
          <li>Implement proper data privacy measures</li>
          <li>Review terms of service and privacy policy</li>
        </ul>
      </div>
    </div>

  </div>
</div>

## Production Safeguards

<div className="safeguards-section">
  <div className="safeguards-grid">
    <div className="safeguard-card">
      <div className="safeguard-icon">❌</div>
      <div className="safeguard-content">
        <h4>Error Handling</h4>
        <p>Implement comprehensive error handling for all API requests</p>
      </div>
    </div>

    <div className="safeguard-card">
      <div className="safeguard-icon">📊</div>
      <div className="safeguard-content">
        <h4>Monitoring & Alerting</h4>
        <p>Set up monitoring and alerting for API usage and errors</p>
      </div>
    </div>

    <div className="safeguard-card">
      <div className="safeguard-icon">↩️</div>
      <div className="safeguard-content">
        <h4>Rollback Plan</h4>
        <p>Have a rollback plan for issues that may arise</p>
      </div>
    </div>

    <div className="safeguard-card">
      <div className="safeguard-icon">✅</div>
      <div className="safeguard-content">
        <h4>Thorough Testing</h4>
        <p>Test thoroughly before deploying changes to production</p>
      </div>
    </div>

  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>How do I know if my integration is ready for production?</h3>
    <p>Your integration is ready for production when you've thoroughly tested all payment flows, implemented proper error handling, set up webhook processing, and completed all compliance requirements.</p>
  </div>

  <div className="faq-item">
    <h3>What should I do if I encounter issues in production?</h3>
    <p>If you encounter issues in production, check your logs for error details, review the API response for error messages, and contact LiasonPay support if needed. Having a rollback plan is also essential.</p>
  </div>

  <div className="faq-item">
    <h3>How can I monitor my API usage?</h3>
    <p>You can monitor your API usage through the LiasonPay Dashboard, which provides insights into request volumes, error rates, and other metrics. Setting up your own monitoring and alerting is also recommended.</p>
  </div>

  <div className="faq-item">
    <h3>Are there any limits on webhook events?</h3>
    <p>There are no limits on the number of webhook events you can receive, but your endpoint should respond quickly (within 5 seconds) to acknowledge receipt. If your endpoint fails to respond, we'll retry the webhook delivery several times.</p>
  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-step-card">
    <h3>📚 How to Use the API</h3>
    <p>Learn how to make API requests and handle responses</p>
    <a href="./how-to-use" className="button button--secondary">View API Usage Guide</a>
  </div>

  <div className="next-step-card">
    <h3>🔒 Security Best Practices</h3>
    <p>Explore best practices for securing your integration</p>
    <a href="/developer-guide/best-practices/security" className="button button--secondary">View Security Guide</a>
  </div>

  <div className="next-step-card">
    <h3>🔔 Set Up Webhooks</h3>
    <p>Learn how to receive real-time notifications</p>
    <a href="/developer-guide/webhooks" className="button button--secondary">View Webhooks Guide</a>
  </div>
</div>
