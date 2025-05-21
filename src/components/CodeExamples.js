/**
 * Code examples that can be reused throughout the documentation
 */

import { API_BASE_URL, EXAMPLE_API_KEY, EXAMPLE_STORE_ID } from '../constants';

// ==========================================
// Authentication examples
// ==========================================
export const AUTH_HEADER = `Authorization: Bearer ${EXAMPLE_API_KEY}
Content-Type: application/json
Accept: application/json`;

// ==========================================
// Response formats
// ==========================================
export const SUCCESS_RESPONSE = `{
  "status": true,
  "message": "Operation successful",
  "data": {
    // Response data here
  }
}`;

export const ERROR_RESPONSE = `{
  "status": false,
  "message": "Error message",
  "data": {
    "error_code": "error_type",
    "errors": {}
  }
}`;

export const AUTH_ERROR_RESPONSE = `{
  "status": false,
  "message": "Invalid or inactive API key.",
  "data": {}
}`;

export const VALIDATION_ERROR_RESPONSE = `{
  "status": false,
  "message": "Validation failed",
  "data": {
    "errors": {
      "store_id": ["The store id field is required."],
      "package_id": ["The package id field is required."]
    }
  }
}`;

// ==========================================
// API Client Setup
// ==========================================
export const API_CLIENT_SETUP = `// Example configuration in Node.js
const axios = require("axios");

const liasonpay = axios.create({
  baseURL: "${API_BASE_URL}",
  headers: {
    Authorization: \`Bearer \${process.env.LIASONPAY_API_KEY}\`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});`;

// ==========================================
// Payment examples
// ==========================================
export const PROCESS_PAYMENT_REQUEST = `// Request body
const paymentData = {
  store_id: "${EXAMPLE_STORE_ID}",
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
}`;

export const PAYMENT_WORKFLOW = `// Initialize API client
const liasonpay = axios.create({
  baseURL: "${API_BASE_URL}",
  headers: {
    Authorization: \`Bearer \${process.env.LIASONPAY_API_KEY}\`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Create payment request
const paymentData = {
  store_id: "${EXAMPLE_STORE_ID}",
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
const verifyResponse = await liasonpay.get(\`/payments/verify?payment_id=\${paymentId}\`);
const paymentStatus = verifyResponse.data.data.status;`;

// ==========================================
// Subscription examples
// ==========================================
export const GET_SUBSCRIPTIONS = `try {
  const response = await liasonpay.get("/subscription/get", {
    params: {
      store_id: "${EXAMPLE_STORE_ID}",
    },
  });
  console.log("Subscriptions:", response.data);
} catch (error) {
  console.error(
    "Error fetching subscriptions:",
    error.response?.data || error.message
  );
}`;

export const SUBSCRIPTION_WORKFLOW = `// Initialize API client (if not already initialized)
const liasonpay = axios.create({
  baseURL: "${API_BASE_URL}",
  headers: {
    Authorization: \`Bearer \${process.env.LIASONPAY_API_KEY}\`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Create subscription request
const subscriptionData = {
  store_id: "${EXAMPLE_STORE_ID}",
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
const verifyResponse = await liasonpay.get(\`/subscription/verify?subscription_id=\${subscriptionId}\`);
const subscriptionStatus = verifyResponse.data.data.status;`;

// ==========================================
// Error handling examples
// ==========================================
export const ERROR_HANDLING = `try {
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
}`;

// ==========================================
// Webhook examples
// ==========================================
export const WEBHOOK_HANDLER = `const express = require("express");
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
      console.log(\`Received event: \${event.event_type}\`);
  }
});`;

// ==========================================
// Implementation tips
// ==========================================
export const IDEMPOTENCY_KEY = `Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000`;

export const PAGINATION_PARAMS = `?page=1&per_page=20`;

// ==========================================
// Language-specific examples
// ==========================================

// Node.js examples
export const NODE_ENV_VARS = `// Node.js example
const apiKey = process.env.LIASONPAY_API_KEY;

// Using with a request
const response = await fetch("${API_BASE_URL}/subscription/get", {
  headers: {
    Authorization: \`Bearer \${apiKey}\`,
    "Content-Type": "application/json"
  },
});`;

// Python examples
export const PYTHON_ENV_VARS = `# Python example
import os
import requests

api_key = os.environ.get('LIASONPAY_API_KEY')

# Using with a request
response = requests.get(
  '${API_BASE_URL}/subscription/get',
  headers={
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
  }
)`;

export const PYTHON_EXAMPLE = `import requests

api_key = "${EXAMPLE_API_KEY}"
base_url = "${API_BASE_URL}"

headers = {
  "Authorization": f"Bearer {api_key}",
  "Content-Type": "application/json",
  "Accept": "application/json"
}

# Process a payment
payment_data = {
  "store_id": "${EXAMPLE_STORE_ID}",
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

print(response.json())`;

// PHP examples
export const PHP_ENV_VARS = `<?php
// PHP example
$apiKey = getenv('LIASONPAY_API_KEY');

// Using with a request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, '${API_BASE_URL}/subscription/get');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);
$response = curl_exec($ch);
?>`;

export const PHP_EXAMPLE = `<?php
$api_key = "${EXAMPLE_API_KEY}";
$base_url = "${API_BASE_URL}";

$headers = [
    "Authorization: Bearer " . $api_key,
    "Content-Type: application/json",
    "Accept: application/json"
];

// Get subscriptions
$store_id = "${EXAMPLE_STORE_ID}";
$url = $base_url . "/subscription/get?store_id=" . urlencode($store_id);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$result = json_decode($response, true);
print_r($result);
?>`;

// cURL examples
export const CURL_GET_SUBSCRIPTION = `curl --request GET \\
  --url "${API_BASE_URL}/subscription/get?store_id=${EXAMPLE_STORE_ID}" \\
  --header "Authorization: Bearer ${EXAMPLE_API_KEY}" \\
  --header "Content-Type: application/json" \\
  --header "Accept: application/json"`;

export const CURL_CREATE_SUBSCRIPTION = `curl --request POST \\
  --url "${API_BASE_URL}/subscription/create" \\
  --header "Authorization: Bearer ${EXAMPLE_API_KEY}" \\
  --header "Content-Type: application/json" \\
  --header "Accept: application/json" \\
  --data '{
    "store_id": "${EXAMPLE_STORE_ID}",
    "package_id": "PACKAGE_ID",
    "customer_email": "customer@example.com",
    "customer_name": "John Doe",
    "payment_method": "card"
  }'`;
