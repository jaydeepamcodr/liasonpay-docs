---
sidebar_position: 4
---

import { ApiBaseUrl, AppUrl, ExampleApiKey, ExampleStoreId } from '@site/src/components/DynamicValues';

<head>
  <link rel="stylesheet" href="/css/next-steps.css" />
  <script src="/js/next-steps.js"></script>
</head>

# How to Use the API

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Getting Started with the LiasonPay API</h2>
    <p>Learn how to make API requests, handle responses, and implement common workflows</p>
    <div className="explorer-buttons">
      <a href="/api-reference" className="button button--primary button--lg">
        <span>📚 API Reference</span>
      </a>
      <a href="/interactive-tools/api-explorer" className="button button--secondary button--lg">
        <span>🔍 API Explorer</span>
      </a>
    </div>
  </div>
</div>

## API Basics

<div className="features-grid">
  <div className="feature-card">
    <h3>🌐 Base URL</h3>
    <p>All API requests should be made to the appropriate base URL:</p>
    <ul>
      <li><strong>Production:</strong> <code>{ApiBaseUrl()}</code></li>
    </ul>
    <div className="info-callout">
      <p><strong>💡 Note:</strong> Always use HTTPS for all API requests to ensure secure communication.</p>
    </div>
  </div>

  <div className="feature-card">
    <h3>🔄 Request Format</h3>
    <p>LiasonPay API uses RESTful conventions:</p>
    <ul>
      <li><strong>GET:</strong> Retrieve resources</li>
      <li><strong>POST:</strong> Create resources or perform actions</li>
      <li><strong>PUT/PATCH:</strong> Update resources</li>
      <li><strong>DELETE:</strong> Remove resources</li>
    </ul>
  </div>
</div>

## Required Headers

<div className="code-example-section">
  <h3>Standard API Headers</h3>
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

## Response Format

<div className="examples-container">
  <div className="example-card">
    <h3>✅ Success Response</h3>
    <p>All API responses are returned in JSON format with the following structure:</p>

    <div className="code-block-container">
      <pre className="code-block">

```json
{
  "status": true,
  "message": "Operation successful",
  "data": {}
}
```

</pre>
    </div>

    <div className="response-fields">
      <div className="response-field">
        <span className="field-name">status</span>
        <span className="field-description">A boolean indicating whether the request was successful</span>
      </div>
      <div className="response-field">
        <span className="field-name">message</span>
        <span className="field-description">A string providing information about the result of the request</span>
      </div>
      <div className="response-field">
        <span className="field-name">data</span>
        <span className="field-description">An object or array containing the response data</span>
      </div>
    </div>

  </div>

  <div className="example-card">
    <h3>❌ Error Response</h3>
    <p>When an error occurs, the API will return a JSON response with a <code>status</code> of <code>false</code> and an error message:</p>

    <div className="code-block-container">
      <pre className="code-block">

```json
{
  "status": false,
  "message": "Error message",
  "data": {
    "error_code": "error_type",
    "errors": {}
  }
}
```

</pre>
    </div>

    <div className="response-fields">
      <div className="response-field">
        <span className="field-name">status</span>
        <span className="field-description">Always <code>false</code> for error responses</span>
      </div>
      <div className="response-field">
        <span className="field-name">message</span>
        <span className="field-description">A human-readable error message</span>
      </div>
      <div className="response-field">
        <span className="field-name">data.error_code</span>
        <span className="field-description">A machine-readable error code</span>
      </div>
      <div className="response-field">
        <span className="field-name">data.errors</span>
        <span className="field-description">Detailed validation errors (if applicable)</span>
      </div>
    </div>

  </div>
</div>

## Implementation Guide

<div className="setup-steps">
  <div className="setup-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Set Up Your Environment</h3>
      <ul>
        <li>Configure your API client with the correct base URL</li>
        <li>Set up authentication with your API key</li>
        <li>Prepare error handling and logging</li>
      </ul>

      <div className="code-block-container">
        <pre className="code-block">

```javascript
// Example configuration in Node.js
const axios = require("axios");

const liasonpay = axios.create({
  baseURL: "{ApiBaseUrl()}",
  headers: {
    Authorization: `Bearer ${process.env.LIASONPAY_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
```

</pre>
      </div>
    </div>

  </div>

  <div className="setup-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Make API Requests</h3>
      <p>Here are examples of common API requests:</p>

      <h4>Example: Process a Payment</h4>
      <div className="code-block-container">
        <pre className="code-block">

```javascript
// Request body
const paymentData = {
  store_id: "{ExampleStoreId()}",
  currency: "usd",
  products: [
    {
      name: "Product 1",
      description: "Product description",
      price: 100,
      quantity: 1,
    },
  ],
  customer: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone_number: "+1234567890",
  },
  success_url: "https://example.com/success",
  cancel_url: "https://example.com/cancel",
  mode: "production",
};

// Make the request
try {
  const response = await liasonpay.post("/payments/process", paymentData);
  console.log("Payment processed:", response.data);
} catch (error) {
  console.error(
    "Error processing payment:",
    error.response?.data || error.message
  );
}
```

</pre>
      </div>

      <h4>Example: Get Subscriptions</h4>
      <div className="code-block-container">
        <pre className="code-block">

```javascript
try {
  const response = await liasonpay.get("/subscription/get", {
    params: {
      store_id: "{ExampleStoreId()}",
    },
  });
  console.log("Subscriptions:", response.data);
} catch (error) {
  console.error(
    "Error fetching subscriptions:",
    error.response?.data || error.message
  );
}
```

</pre>
      </div>
    </div>

  </div>

  <div className="setup-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Handle Responses</h3>
      <p>Always implement proper error handling:</p>

      <div className="code-block-container">
        <pre className="code-block">

```javascript
try {
  const response = await liasonpay.post("/endpoint", data);

  if (response.data.status) {
    // Success case
    handleSuccess(response.data);
  } else {
    // API returned an error
    handleApiError(response.data);
  }
} catch (error) {
  if (error.response) {
    // The request was made and the server responded with an error status
    handleApiError(error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    handleNetworkError(error.request);
  } else {
    // Something happened in setting up the request
    handleClientError(error.message);
  }
}
```

</pre>
      </div>

      <div className="info-callout">
        <p><strong>💡 Tip:</strong> Always check both the HTTP status code and the <code>status</code> field in the response body to properly handle errors.</p>
      </div>
    </div>

  </div>

  <div className="setup-step">
    <div className="step-number">4</div>
    <div className="step-content">
      <h3>Implement Webhooks</h3>
      <p>Set up webhook handlers to receive real-time notifications:</p>

      <ol>
        <li>Configure webhook URLs in your LiasonPay dashboard</li>
        <li>Implement endpoint handlers for webhook events</li>
        <li>Verify webhook signatures for security</li>
        <li>Process webhook events asynchronously</li>
      </ol>

      <h4>Example Webhook Handler in Express.js</h4>
      <div className="code-block-container">
        <pre className="code-block">

```javascript
const express = require("express");
const crypto = require("crypto");
const app = express();

app.post("/webhooks/liasonpay", express.json(), (req, res) => {
  // Verify webhook signature
  const signature = req.headers["liasonpay-signature"];
  const isValid = verifyWebhookSignature(
    req.body,
    signature,
    process.env.WEBHOOK_SECRET
  );

  if (!isValid) {
    return res.status(401).send("Invalid signature");
  }

  // Acknowledge receipt immediately
  res.status(200).send("Webhook received");

  // Process the webhook asynchronously
  const event = req.body;

  // Handle different event types
  switch (event.event_type) {
    case "charge.completed":
      // Handle successful payment
      updateOrderStatus(event.data.transaction_id, "paid");
      sendOrderConfirmation(event.data.customer.email);
      break;
    case "charge.failed":
      // Handle failed payment
      updateOrderStatus(event.data.transaction_id, "payment_failed");
      sendPaymentFailureNotification(event.data.customer.email);
      break;
    case "subscription.created":
      // Handle new subscription
      activateSubscription(event.data.subscription_id);
      break;
    // Handle other event types...
    default:
      console.log(`Received event: ${event.event_type}`);
  }
});
```

</pre>
      </div>

      <div className="warning-callout">
        <p><strong>⚠️ Important:</strong> Always acknowledge webhook receipt immediately with a 200 response, then process the webhook asynchronously to avoid timeouts.</p>
      </div>
    </div>

  </div>
</div>

## Common API Workflows

<div className="workflow-section">
  <div className="workflow-steps">
    <div className="workflow-step">
      <div className="step-number">1</div>
      <div className="step-content">
        <h3>Processing a One-Time Payment</h3>
        <ol>
          <li>Create a payment request using the <a href="/api-reference/payments/process-payment">Process a payment</a> endpoint</li>
          <li>Redirect the customer to the payment URL returned in the response</li>
          <li>After payment completion, the customer will be redirected to your success or cancel URL</li>
          <li>Verify the payment status using the <a href="/api-reference/payments/verify-payment">Verify a payment</a> endpoint</li>
        </ol>
        <div className="code-block-container">
          <pre className="code-block">
```javascript
// Initialize API client
const liasonpay = axios.create({
  baseURL: "{ApiBaseUrl()}",
  headers: {
    Authorization: `Bearer ${process.env.LIASONPAY_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Create payment request
const paymentData = {
store_id: "{ExampleStoreId()}",
currency: "usd",
products: [
{
name: "Premium Plan",
price: 99.99,
quantity: 1
}
],
success_url: "https://example.com/success",
cancel_url: "https://example.com/cancel",
mode: "production"
};

// Step 1: Process payment
const paymentResponse = await liasonpay.post("/payments/process", paymentData);
const paymentUrl = paymentResponse.data.data.payment_url;

// Step 2: Redirect customer to payment URL
window.location.href = paymentUrl;

// Step 4: Verify payment status (after redirect back to success_url)
const paymentId = getPaymentIdFromUrl(); // Extract from URL or session
const verifyResponse = await liasonpay.get(`/payments/verify?payment_id=${paymentId}`);
const paymentStatus = verifyResponse.data.data.status;

````
          </pre>
        </div>
      </div>
    </div>

    <div className="workflow-step">
      <div className="step-number">2</div>
      <div className="step-content">
        <h3>Creating a Subscription</h3>
        <ol>
          <li>Create a subscription using the <a href="/api-reference/subscriptions/create-subscription">Create a subscription</a> endpoint</li>
          <li>Redirect the customer to the subscription URL returned in the response</li>
          <li>After subscription setup, the customer will be redirected to your success or cancel URL</li>
          <li>Verify the subscription status using the <a href="/api-reference/subscriptions/verify-subscription">Verify a subscription</a> endpoint</li>
        </ol>
        <div className="code-block-container">
          <pre className="code-block">
```javascript
// Initialize API client (if not already initialized)
const liasonpay = axios.create({
  baseURL: "{ApiBaseUrl()}",
  headers: {
    Authorization: `Bearer ${process.env.LIASONPAY_API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Create subscription request
const subscriptionData = {
  store_id: "{ExampleStoreId()}",
  price_id: "PRICE_SUB123",
  success_url: "https://example.com/subscription/success",
  cancel_url: "https://example.com/subscription/cancel",
  mode: "production"
};

// Step 1: Create subscription
const subscriptionResponse = await liasonpay.post("/subscription/create", subscriptionData);
const subscriptionUrl = subscriptionResponse.data.data.subscription_url;

// Step 2: Redirect customer to subscription URL
window.location.href = subscriptionUrl;

// Step 4: Verify subscription status (after redirect back to success_url)
const subscriptionId = getSubscriptionIdFromUrl(); // Extract from URL or session
const verifyResponse = await liasonpay.get(`/subscription/verify?subscription_id=${subscriptionId}`);
const subscriptionStatus = verifyResponse.data.data.status;
````

          </pre>
        </div>
      </div>
    </div>

  </div>
</div>

## Implementation Tips

<div className="features-grid">
  <div className="feature-card">
    <h3>🔄 Idempotency</h3>
    <p>To prevent duplicate operations, use idempotency keys:</p>
    <div className="code-block-container">
      <pre className="code-block">
```http
Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000
```
      </pre>
    </div>
    <div className="info-callout">
      <p><strong>💡 Tip:</strong> Use a unique UUID for each request to ensure idempotency.</p>
    </div>
  </div>

  <div className="feature-card">
    <h3>📄 Pagination</h3>
    <p>For endpoints that return lists, use pagination parameters:</p>
    <div className="code-block-container">
      <pre className="code-block">
```
?page=1&per_page=20
```
      </pre>
    </div>
    <p>This helps manage large result sets and improves performance.</p>
  </div>

  <div className="feature-card">
    <h3>❌ Error Handling</h3>
    <p>Best practices for handling errors:</p>
    <ul>
      <li>Implement retry logic with exponential backoff for transient errors</li>
      <li>Log detailed error information for debugging</li>
      <li>Provide user-friendly error messages to your customers</li>
      <li>Handle different error types appropriately</li>
    </ul>
  </div>

  <div className="feature-card">
    <h3>🧪 Testing</h3>
    <p>Thoroughly test your integration:</p>
    <ul>
      <li>Test all API flows in the sandbox environment before going live</li>
      <li>Use test cards and amounts to simulate different scenarios</li>
      <li>Test error cases and edge conditions</li>
      <li>Implement automated tests for critical payment flows</li>
    </ul>
  </div>
</div>

## Language-Specific Examples

<div className="examples-container">
  <div className="example-card">
    <h3>🐍 Python</h3>
    <div className="code-block-container">
      <pre className="code-block">
```python
import requests

api_key = "{ExampleApiKey()}"
base_url = "{ApiBaseUrl()}"

headers = {
"Authorization": f"Bearer {api_key}",
"Content-Type": "application/json",
"Accept": "application/json"
}

# Process a payment

payment_data = {
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
"mode": "production"
}

response = requests.post(
f"{base_url}/payments/process",
json=payment_data,
headers=headers
)

print(response.json())

````
      </pre>
    </div>
  </div>

  <div className="example-card">
    <h3>🐘 PHP</h3>
    <div className="code-block-container">
      <pre className="code-block">
```php
<?php
$api_key = "{ExampleApiKey()}";
$base_url = "{ApiBaseUrl()}";

$headers = [
    "Authorization: Bearer " . $api_key,
    "Content-Type: application/json",
    "Accept: application/json"
];

// Get subscriptions
$store_id = "{ExampleStoreId()}";
$url = $base_url . "/subscription/get?store_id=" . urlencode($store_id);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$result = json_decode($response, true);
print_r($result);
?>
````

      </pre>
    </div>

  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>How do I handle API rate limits?</h3>
    <p>Implement exponential backoff and retry logic to handle rate limits. When you receive a 429 response, wait for the time specified in the <code>retry-after</code> header before retrying the request.</p>
  </div>

  <div className="faq-item">
    <h3>What's the best way to debug API issues?</h3>
    <p>Log detailed request and response information, including headers and body. Use the <code>request_id</code> from error responses when contacting support. Test with the API Explorer to isolate issues.</p>
  </div>

  <div className="faq-item">
    <h3>How do I handle webhook failures?</h3>
    <p>Implement a retry mechanism on your server to handle webhook delivery failures. Store failed webhooks in a queue and retry them with exponential backoff. Monitor webhook delivery rates and set up alerts for failures.</p>
  </div>

  <div className="faq-item">
    <h3>Can I use the API in a mobile app?</h3>
    <p>Never use API keys directly in mobile apps as they can be extracted. Instead, create a server-side component that makes API calls on behalf of your mobile app.</p>
  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-steps-header">
    <div className="next-steps-header-content">
      <h3>Continue Your Integration Journey</h3>
      <p>Follow these steps to complete your LiasonPay API integration</p>
      <div className="progress-indicator">
        <div className="progress-step completed">
          <div className="progress-step-number">1</div>
          <div className="progress-step-label">Authentication</div>
        </div>
        <div className="progress-connector"></div>
        <div className="progress-step completed">
          <div className="progress-step-number">2</div>
          <div className="progress-step-label">Environment</div>
        </div>
        <div className="progress-connector"></div>
        <div className="progress-step completed">
          <div className="progress-step-number">3</div>
          <div className="progress-step-label">Implementation</div>
        </div>
      </div>
    </div>
  </div>

  <div className="next-steps-grid">
    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">📚</div>
        </div>
        <div className="next-step-number">Next</div>
      </div>
      <div className="next-step-card-content">
        <h4>API Reference</h4>
        <p>Explore detailed documentation for all API endpoints</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> View all available endpoints</li>
          <li><span className="benefit-icon">✓</span> See request and response formats</li>
          <li><span className="benefit-icon">✓</span> Understand parameter requirements</li>
        </ul>
        <div className="next-step-action">
          <a href="/api-reference" className="button button--primary">
            <span className="button-text">View API Reference</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">🔔</div>
        </div>
        <div className="next-step-number">Advanced</div>
      </div>
      <div className="next-step-card-content">
        <h4>Set Up Webhooks</h4>
        <p>Learn how to receive real-time notifications about payment events</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Get notified about payment events</li>
          <li><span className="benefit-icon">✓</span> Automate your payment workflows</li>
          <li><span className="benefit-icon">✓</span> Implement event-driven architecture</li>
        </ul>
        <div className="next-step-action">
          <a href="/developer-guide/webhooks" className="button button--primary">
            <span className="button-text">View Webhooks Guide</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">❌</div>
        </div>
        <div className="next-step-number">Advanced</div>
      </div>
      <div className="next-step-card-content">
        <h4>Error Handling</h4>
        <p>Learn how to handle API errors effectively</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Understand error codes and messages</li>
          <li><span className="benefit-icon">✓</span> Implement proper error handling</li>
          <li><span className="benefit-icon">✓</span> Create better user experiences</li>
        </ul>
        <div className="next-step-action">
          <a href="/developer-guide/error-handling" className="button button--primary">
            <span className="button-text">View Error Handling Guide</span>
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
      <p>If you have any questions or need assistance with your integration, our support team is here to help.</p>
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
