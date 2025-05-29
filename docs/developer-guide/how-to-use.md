---
sidebar_position: 3
---

import { AppUrl, ApiBaseUrl, ExampleApiKey } from '@site/src/components/DynamicValues';
import { getDocsUrl } from "@site/src/components/DocsUrl";

# How to Use the API

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Getting Started with the LiasonPay API</h2>
    <p>A step-by-step guide to using the API effectively for payments and subscriptions</p>
    <div className="explorer-badges">
      <span className="badge badge--primary">Getting Started</span>
      <span className="badge badge--info">API Guide</span>
    </div>
  </div>
</div>

<div className="introduction-section">
  <div className="introduction-card">
    <p>
      This guide will walk you through the basics of using the LiasonPay API, including request structure, authentication, and common workflows. Follow these steps to integrate payments and subscriptions into your application.
    </p>
  </div>
</div>

<div className="step-by-step-section">
  <div className="step-by-step-card">
    <h2>1. API Basics</h2>

    <div className="api-basics-subsection">
      <div className="api-basics-header">
        <div className="api-basics-icon">🌐</div>
        <h3>Request Structure</h3>
      </div>

      <div className="api-basics-content">
        <p>All API requests should be made to the base URL:</p>

        <div className="code-example-container">
          <div className="code-example-header">
            <div className="code-example-badge good">Base URL</div>
          </div>
          <div className="code-block-container">
            <pre className="code-block">

```
{ApiBaseUrl()}
```

            </pre>
          </div>
        </div>

        <p>Requests should be sent using HTTPS and follow RESTful principles.</p>
      </div>
    </div>

    <div className="api-basics-subsection">
      <div className="api-basics-header">
        <div className="api-basics-icon">📋</div>
        <h3>Request Headers</h3>
      </div>

      <div className="api-basics-content">
        <p>Include these headers with all API requests:</p>

        <div className="code-example-container">
          <div className="code-example-header">
            <div className="code-example-badge good">Required Headers</div>
          </div>
          <div className="code-block-container">
            <pre className="code-block">

```http
Authorization: Bearer {ExampleApiKey()}
Content-Type: application/json
Accept: application/json
```

            </pre>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div className="step-by-step-section">
  <div className="step-by-step-card">
    <h2>2. Response Format</h2>

    <div className="api-basics-subsection">
      <div className="api-basics-header">
        <div className="api-basics-icon">✅</div>
        <h3>Successful Response</h3>
      </div>

      <div className="api-basics-content">
        <p>All API responses are returned in JSON format with the following structure:</p>

        <div className="code-example-container">
          <div className="code-example-header">
            <div className="code-example-badge good">Success Response Example</div>
          </div>
          <div className="code-block-container">
            <pre className="code-block">

```json
{
  "status": true,
  "message": "Operation successful",
  "data": {
    "id": "PAYMENT_123456",
    "amount": 100,
    "currency": "usd",
    "status": "pending",
    "created_at": "2023-06-15T10:30:00Z"
  }
}
```

            </pre>
          </div>
        </div>

        <ul className="response-field-list">
          <li><strong>status</strong>: A boolean indicating whether the request was successful</li>
          <li><strong>message</strong>: A string providing information about the result of the request</li>
          <li><strong>data</strong>: An object or array containing the response data</li>
        </ul>
      </div>
    </div>

    <div className="api-basics-subsection">
      <div className="api-basics-header">
        <div className="api-basics-icon">❌</div>
        <h3>Error Response</h3>
      </div>

      <div className="api-basics-content">
        <p>When an error occurs, the API will return a JSON response with a <code>status</code> of <code>false</code> and an error message:</p>

        <div className="code-example-container">
          <div className="code-example-header">
            <div className="code-example-badge bad">Error Response Example</div>
          </div>
          <div className="code-block-container">
            <pre className="code-block">

```json
{
  "status": false,
  "message": "Invalid API key provided",
  "error_code": "authentication_error",
  "data": []
}
```

            </pre>
          </div>
        </div>

        <div className="info-callout">
          <p><strong>💡 Tip:</strong> Check out the <a href="./error-handling">Error Handling</a> guide for more details on handling API errors.</p>
        </div>
      </div>
    </div>

  </div>
</div>

<div className="step-by-step-section">
  <div className="step-by-step-card">
    <h2>3. Common API Workflows</h2>

    <div className="workflow-tabs">
      <div className="workflow-tab active" id="payment-tab">
        <h3>💳 Processing a One-Time Payment</h3>

        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Create a payment request</h4>
              <p>Use the <a href="/api-reference/payments/process-payment">Process a payment</a> endpoint to create a new payment</p>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">Request</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```json
POST /api/v1/payments/process
{
  "store_id": "STORE_123",
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

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">Response</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```json
{
  "status": true,
  "message": "Payment created successfully",
  "data": {
    "payment_id": "PAYMENT_123456",
    "payment_url": "${AppUrl()}/pay/PAYMENT_123456",
    "amount": 100,
    "currency": "usd",
    "status": "pending",
    "expires_at": "2023-12-31T23:59:59Z"
  }
}
```

                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Redirect to payment page</h4>
              <p>Redirect the customer to the payment URL returned in the response</p>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">JavaScript Example</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```javascript
// JavaScript example
window.location.href = response.data.payment_url;
```

                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Handle redirect</h4>
              <p>After payment completion, the customer will be redirected to your success or cancel URL</p>
              <div className="note-box">
                <div className="note-icon">💡</div>
                <div className="note-content">
                  <p>Make sure your success and cancel URLs are properly configured to handle the redirect and display appropriate messages to the customer.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Verify payment status</h4>
              <p>Use the <a href="/api-reference/payments/verify-payment">Verify a payment</a> endpoint to check the payment status</p>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">Request</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```
GET /api/v1/payments/verify/PAYMENT_123456
```

                  </pre>
                </div>
              </div>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">Response</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```json
{
  "status": true,
  "message": "Payment verified",
  "data": {
    "payment_id": "PAYMENT_123456",
    "amount": 100,
    "currency": "usd",
    "status": "completed",
    "completed_at": "2023-06-15T10:35:00Z"
  }
}
```

                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="workflow-tabs">
      <div className="workflow-tab active" id="subscription-tab">
        <h3>🔄 Creating a Subscription</h3>

        <div className="workflow-steps">
          <div className="workflow-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Create a subscription</h4>
              <p>Use the <a href="/api-reference/subscriptions/create-subscription">Create a subscription</a> endpoint to set up a new subscription</p>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">Request</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```json
POST /api/v1/subscriptions/create
{
  "store_id": "STORE_123",
  "price_id": "PRICE_ABC123",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel"
}
```

                  </pre>
                </div>
              </div>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">Response</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```json
{
  "status": true,
  "message": "Subscription created successfully",
  "data": {
    "subscription_id": "SUBSCRIPTION_123456",
    "subscription_url": "${AppUrl()}/subscribe/SUBSCRIPTION_123456",
    "amount": 20,
    "currency": "usd",
    "interval": "month",
    "status": "pending",
    "expires_at": "2023-12-31T23:59:59Z"
  }
}
```

                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Redirect to subscription page</h4>
              <p>Redirect the customer to the subscription URL returned in the response</p>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">JavaScript Example</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```javascript
// JavaScript example
window.location.href = response.data.subscription_url;
```

                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Handle redirect</h4>
              <p>After subscription setup, the customer will be redirected to your success or cancel URL</p>
              <div className="note-box">
                <div className="note-icon">💡</div>
                <div className="note-content">
                  <p>Your success page should thank the customer and provide information about their new subscription.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="workflow-step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Verify subscription status</h4>
              <p>Use the <a href="/api-reference/subscriptions/verify-subscription">Verify a subscription</a> endpoint to check the subscription status</p>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">Request</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```
GET /api/v1/subscriptions/verify/SUBSCRIPTION_123456
```

                  </pre>
                </div>
              </div>

              <div className="code-example-container">
                <div className="code-example-header">
                  <div className="code-example-badge good">Response</div>
                </div>
                <div className="code-block-container">
                  <pre className="code-block">

```json
{
  "status": true,
  "message": "Subscription verified",
  "data": {
    "subscription_id": "SUBSCRIPTION_123456",
    "amount": 20,
    "currency": "usd",
    "interval": "month",
    "status": "active",
    "created_at": "2023-06-15T11:00:00Z",
    "next_billing_date": "2023-07-15T11:00:00Z"
  }
}
```

                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div className="step-by-step-section">
  <div className="step-by-step-card">
    <h2>4. Testing Your Integration</h2>

    <div className="testing-container">
      <div className="testing-header">
        <div className="testing-icon">🧪</div>
        <h3>Test Thoroughly Before Going Live</h3>
      </div>

      <p>Always test your integration thoroughly before going live with real customers. Follow these testing steps to ensure your integration works correctly:</p>

      <div className="testing-grid">
        <div className="testing-item">
          <div className="testing-item-header">
            <div className="testing-item-icon">🔢</div>
            <h4>Use Test Cards</h4>
          </div>
          <p>Use these test card numbers to simulate different payment scenarios:</p>

          <div className="code-example-container">
            <div className="code-example-header">
              <div className="code-example-badge good">Test Cards</div>
            </div>
            <div className="code-block-container">
              <pre className="code-block">

```
Test Card Success: 4242 4242 4242 4242
Test Card Decline: 4000 0000 0000 0002
Test Card Insufficient Funds: 4000 0000 0000 9995
```

              </pre>
            </div>
          </div>
        </div>

        <div className="testing-item">
          <div className="testing-item-header">
            <div className="testing-item-icon">✅</div>
            <h4>Test Success Flows</h4>
          </div>
          <ul className="testing-checklist">
            <li>Complete payment with valid card</li>
            <li>Create and activate subscription</li>
            <li>Verify payment status after completion</li>
            <li>Confirm webhook events are received</li>
          </ul>
        </div>

        <div className="testing-item">
          <div className="testing-item-header">
            <div className="testing-item-icon">❌</div>
            <h4>Test Error Scenarios</h4>
          </div>
          <ul className="testing-checklist">
            <li>Payment with declined card</li>
            <li>Payment with insufficient funds</li>
            <li>Invalid API key authentication</li>
            <li>Missing required parameters</li>
          </ul>
        </div>

        <div className="testing-item">
          <div className="testing-item-header">
            <div className="testing-item-icon">🔔</div>
            <h4>Verify Webhooks</h4>
          </div>
          <ul className="testing-checklist">
            <li>Set up webhook endpoint</li>
            <li>Test payment.created event</li>
            <li>Test payment.completed event</li>
            <li>Test subscription.created event</li>
            <li>Implement proper error handling</li>
          </ul>
        </div>

        <div className="testing-item">
          <div className="testing-item-header">
            <div className="testing-item-icon">🔄</div>
            <h4>Test Subscription Lifecycle</h4>
          </div>
          <ul className="testing-checklist">
            <li>Create subscription</li>
            <li>Verify active status</li>
            <li>Test cancellation</li>
            <li>Test upgrading/downgrading</li>
          </ul>
        </div>
      </div>

      <div className="warning-callout">
        <div className="warning-icon">⚠️</div>
        <div className="warning-content">
          <p><strong>Important:</strong> Never use real card information during testing. Only use the provided test card numbers.</p>
        </div>
      </div>
    </div>

  </div>
</div>

<div className="step-by-step-section">
  <div className="step-by-step-card">
    <h2>5. Frequently Asked Questions</h2>

    <div className="faq-container">
      <div className="faq-grid">
        <div className="faq-item">
          <div className="faq-question">
            <div className="faq-icon">❓</div>
            <h3>How do I handle API rate limits?</h3>
          </div>
          <div className="faq-answer">
            <p>The API has rate limits that vary by endpoint. If you exceed the rate limit, you'll receive a 429 Too Many Requests response. Implement exponential backoff in your code to handle rate limiting gracefully.</p>
            <div className="code-example-container">
              <div className="code-example-header">
                <div className="code-example-badge good">Rate Limit Handling Example</div>
              </div>
              <div className="code-block-container">
                <pre className="code-block">

```javascript
// JavaScript example of exponential backoff
async function makeRequestWithRetry(url, options, maxRetries = 5) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await fetch(url, options);

      if (response.status === 429) {
        // Rate limited, wait and retry
        const waitTime = Math.pow(2, retries) * 1000; // Exponential backoff
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        retries++;
        continue;
      }

      return response;
    } catch (error) {
      retries++;
      if (retries >= maxRetries) throw error;

      const waitTime = Math.pow(2, retries) * 1000;
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }
}
```

                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="faq-icon">❓</div>
            <h3>How do I handle webhook events?</h3>
          </div>
          <div className="faq-answer">
            <p>Set up a webhook endpoint in your application to receive real-time notifications about payment events. See the <a href="./webhooks">Webhooks</a> guide for details.</p>
            <div className="note-box">
              <div className="note-icon">💡</div>
              <div className="note-content">
                <p>Webhooks are the recommended way to track payment status changes and other important events in your integration.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="faq-icon">❓</div>
            <h3>Can I test the API without creating an account?</h3>
          </div>
          <div className="faq-answer">
            <p>No, you need to create a LiasonPay account to get API keys for testing. Sign up at <a href={AppUrl()} target="_blank" rel="noopener noreferrer">{AppUrl()}</a>.</p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <div className="faq-icon">❓</div>
            <h3>How do I handle errors in my integration?</h3>
          </div>
          <div className="faq-answer">
            <p>Always check the status field in API responses. When status is false, handle the error appropriately based on the error_code. See the <a href="./error-handling">Error Handling</a> guide for more details.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

# Next Steps

<div class="next-steps-section">
  <div class="next-steps-header">
    <div class="next-steps-header-content">
      <h3>Continue Your API Journey</h3>
      <p>Explore these tools to enhance your LiasonPay integration experience</p>
    </div>
  </div>

  <div class="next-steps-grid">
    <div class="next-step-card">
      <div class="next-step-card-header">
        <div class="next-step-icon-wrapper">
          <div class="next-step-icon">📦</div>
        </div>
        <div class="next-step-number">Related</div>
      </div>
      <div class="next-step-card-content">
        <h4>Postman Collection</h4>
        <p>Get our Postman Collection for more advanced testing capabilities</p>
        <ul class="next-step-benefits">
          <li><span class="benefit-icon">✓</span> Test API endpoints in Postman</li>
          <li><span class="benefit-icon">✓</span> Save and organize requests</li>
          <li><span class="benefit-icon">✓</span> Create test environments</li>
        </ul>
        <div class="next-step-action">
          <a href={getDocsUrl('interactive-tools/postman-collection')} class="button button--primary">
            <span class="button-text">View Postman Collection</span>
            <span class="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div class="next-step-card">
      <div class="next-step-card-header">
        <div class="next-step-icon-wrapper">
          <div class="next-step-icon">🧪</div>
        </div>
        <div class="next-step-number">Related</div>
      </div>
      <div class="next-step-card-content">
        <h4>API Testing Tool</h4>
        <p>Use our simplified API testing tool for quick tests</p>
        <ul class="next-step-benefits">
          <li><span class="benefit-icon">✓</span> Simplified testing interface</li>
          <li><span class="benefit-icon">✓</span> Quick request configuration</li>
          <li><span class="benefit-icon">✓</span> Test in different environments</li>
        </ul>
        <div class="next-step-action">
          <a href={getDocsUrl('interactive-tools/api-testing')} class="button button--primary">
            <span class="button-text">Open API Testing Tool</span>
            <span class="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div class="next-step-card">
      <div class="next-step-card-header">
        <div class="next-step-icon-wrapper">
          <div class="next-step-icon">📚</div>
        </div>
        <div class="next-step-number">Reference</div>
      </div>
      <div class="next-step-card-content">
        <h4>API Reference</h4>
        <p>Read detailed documentation for all endpoints</p>
        <ul class="next-step-benefits">
          <li><span class="benefit-icon">✓</span> Comprehensive endpoint details</li>
          <li><span class="benefit-icon">✓</span> Request and response formats</li>
          <li><span class="benefit-icon">✓</span> Parameter descriptions</li>
        </ul>
        <div class="next-step-action">
          <a href={getDocsUrl('api-reference')} class="button button--primary">
            <span class="button-text">View API Reference</span>
            <span class="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

  </div>
</div>
