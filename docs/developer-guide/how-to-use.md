---
sidebar_position: 3
---

import { AppUrl, ApiBaseUrl, ExampleApiKey } from '@site/src/components/DynamicValues';

# How to Use the API

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Getting Started with the LiasonPay API</h2>
    <p>A step-by-step guide to using the API effectively for payments and subscriptions</p>
  </div>
</div>

## API Basics

<div className="features-grid">
  <div className="feature-card">
    <h3>🌐 Request Structure</h3>
    <p>All API requests should be made to the base URL:</p>
    <div className="code-block-container">
      <pre className="code-block">
```
{ApiBaseUrl()}
```
      </pre>
    </div>
    <p>Requests should be sent using HTTPS and follow RESTful principles.</p>
  </div>

  <div className="feature-card">
    <h3>📋 Request Headers</h3>
    <p>Include these headers with all API requests:</p>
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

## Response Format

<div className="examples-container">
  <div className="example-card">
    <h3>✅ Successful Response</h3>
    <p>All API responses are returned in JSON format with the following structure:</p>
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
    <ul>
      <li><strong>status</strong>: A boolean indicating whether the request was successful</li>
      <li><strong>message</strong>: A string providing information about the result of the request</li>
      <li><strong>data</strong>: An object or array containing the response data</li>
    </ul>
  </div>

  <div className="example-card">
    <h3>❌ Error Response</h3>
    <p>When an error occurs, the API will return a JSON response with a <code>status</code> of <code>false</code> and an error message:</p>
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
    <div className="info-callout">
      <p><strong>💡 Tip:</strong> Check out the <a href="./error-handling">Error Handling</a> guide for more details on handling API errors.</p>
    </div>
  </div>
</div>

## Common API Workflows

<div className="workflows-section">
  <div className="workflow-card">
    <h3>💳 Processing a One-Time Payment</h3>
    <div className="workflow-steps">
      <div className="workflow-step">
        <div className="step-number">1</div>
        <div className="step-content">
          <p>Create a payment request using the <a href="/api-reference/payments/process-payment">Process a payment</a> endpoint</p>
          <div className="code-block-container">
            <pre className="code-block">
```json
// Request
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

// Response
{
"status": true,
"message": "Payment created successfully",
"data": {
"payment_id": "PAYMENT_123456",
"payment_url": "https://liasonpay.test/pay/PAYMENT_123456",
"amount": 100,
"currency": "usd",
"status": "pending"
}
}

````
            </pre>
          </div>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">2</div>
        <div className="step-content">
          <p>Redirect the customer to the payment URL returned in the response</p>
          <div className="code-block-container">
            <pre className="code-block">
```javascript
// JavaScript example
window.location.href = response.data.payment_url;
````

            </pre>
          </div>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">3</div>
        <div className="step-content">
          <p>After payment completion, the customer will be redirected to your success or cancel URL</p>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">4</div>
        <div className="step-content">
          <p>Verify the payment status using the <a href="/api-reference/payments/verify-payment">Verify a payment</a> endpoint</p>
          <div className="code-block-container">
            <pre className="code-block">

```json
// Request
GET /api/v1/payments/verify/PAYMENT_123456

// Response
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

  <div className="workflow-card">
    <h3>🔄 Creating a Subscription</h3>
    <div className="workflow-steps">
      <div className="workflow-step">
        <div className="step-number">1</div>
        <div className="step-content">
          <p>Create a subscription using the <a href="/api-reference/subscriptions/create-subscription">Create a subscription</a> endpoint</p>
          <div className="code-block-container">
            <pre className="code-block">
```json
// Request
POST /api/v1/subscriptions/create
{
  "store_id": "STORE_123",
  "price_id": "PRICE_ABC123",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel"
}

// Response
{
"status": true,
"message": "Subscription created successfully",
"data": {
"subscription_id": "SUBSCRIPTION_123456",
"subscription_url": "https://liasonpay.test/subscribe/SUBSCRIPTION_123456",
"amount": 20,
"currency": "usd",
"interval": "month",
"status": "pending"
}
}

````
            </pre>
          </div>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">2</div>
        <div className="step-content">
          <p>Redirect the customer to the subscription URL returned in the response</p>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">3</div>
        <div className="step-content">
          <p>After subscription setup, the customer will be redirected to your success or cancel URL</p>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">4</div>
        <div className="step-content">
          <p>Verify the subscription status using the <a href="/api-reference/subscriptions/verify-subscription">Verify a subscription</a> endpoint</p>
          <div className="code-block-container">
            <pre className="code-block">
```json
// Request
GET /api/v1/subscriptions/verify/SUBSCRIPTION_123456

// Response
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
````

            </pre>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

## Testing Your Integration

<div className="testing-section">
  <div className="testing-card">
    <h3>🧪 Test Thoroughly</h3>
    <p>Always test your integration thoroughly before going live:</p>

    <div className="testing-steps">
      <div className="testing-step">
        <div className="step-icon">🔢</div>
        <div className="step-content">
          <h4>Use Test Cards</h4>
          <p>Use test card numbers and amounts to simulate different scenarios</p>
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

      <div className="testing-step">
        <div className="step-icon">✅</div>
        <div className="step-content">
          <h4>Test Success Flows</h4>
          <p>Test successful payment and subscription flows</p>
        </div>
      </div>

      <div className="testing-step">
        <div className="step-icon">❌</div>
        <div className="step-content">
          <h4>Test Error Scenarios</h4>
          <p>Test error scenarios and edge cases</p>
        </div>
      </div>

      <div className="testing-step">
        <div className="step-icon">🔔</div>
        <div className="step-content">
          <h4>Verify Webhooks</h4>
          <p>Verify webhook handling for all events</p>
        </div>
      </div>

      <div className="testing-step">
        <div className="step-icon">🔄</div>
        <div className="step-content">
          <h4>Test Subscription Lifecycle</h4>
          <p>Test subscription lifecycle (creation, verification, cancellation, upgrading)</p>
        </div>
      </div>
    </div>

    <div className="warning-callout">
      <p><strong>⚠️ Important:</strong> Never use real card information in the sandbox environment.</p>
    </div>

  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>How do I handle API rate limits?</h3>
    <p>The API has rate limits that vary by endpoint. If you exceed the rate limit, you'll receive a 429 Too Many Requests response. Implement exponential backoff in your code to handle rate limiting gracefully.</p>
  </div>

  <div className="faq-item">
    <h3>What's the difference between sandbox and production environments?</h3>
    <p>The sandbox environment is for testing and doesn't process real payments. The production environment processes real payments and affects live data. Always test in sandbox first.</p>
  </div>

  <div className="faq-item">
    <h3>How do I handle webhook events?</h3>
    <p>Set up a webhook endpoint in your application to receive real-time notifications about payment events. See the <a href="./webhooks">Webhooks</a> guide for details.</p>
  </div>

  <div className="faq-item">
    <h3>Can I test the API without creating an account?</h3>
    <p>No, you need to create a LiasonPay account to get API keys for testing. Sign up at <a href={AppUrl()} target="_blank" rel="noopener noreferrer">{AppUrl()}</a>.</p>
  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-step-card">
    <h3>🌐 Environment Information</h3>
    <p>Learn about sandbox and production environments</p>
    <a href="./environment-info" className="button button--secondary">View Environment Guide</a>
  </div>

  <div className="next-step-card">
    <h3>✅ Best Practices</h3>
    <p>Explore best practices for integration</p>
    <a href="./best-practices" className="button button--secondary">View Best Practices</a>
  </div>

  <div className="next-step-card">
    <h3>🔔 Webhooks</h3>
    <p>Set up real-time notifications</p>
    <a href="./webhooks" className="button button--secondary">View Webhooks Guide</a>
  </div>

  <div className="next-step-card">
    <h3>❌ Error Handling</h3>
    <p>Understand how to handle API errors</p>
    <a href="./error-handling" className="button button--secondary">View Error Handling Guide</a>
  </div>
</div>
