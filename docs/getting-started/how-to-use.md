---
sidebar_position: 4
---

# How to Use the API

This guide provides a comprehensive overview of how to use the LiasonPay API, including request formats, required headers, and implementation tips.

## API Basics

### Base URL

All API requests should be made to the appropriate base URL:

- **Sandbox**: `https://sandbox.liasonpay.net/api/v1/`
- **Production**: `https://liasonpay.net/api/v1/`

### Request Format

LiasonPay API uses RESTful conventions:

- **GET**: Retrieve resources
- **POST**: Create resources or perform actions
- **PUT/PATCH**: Update resources
- **DELETE**: Remove resources

### Required Headers

Include these headers with all API requests:

```http
Authorization: Bearer {API_KEY}
Content-Type: application/json
Accept: application/json
```

For requests with file uploads, use:

```http
Content-Type: multipart/form-data
```

### Response Format

All API responses are returned in JSON format with the following structure:

```json
{
    "status": true,
    "message": "Operation successful",
    "data": {}
}
```

- `status`: A boolean indicating whether the request was successful
- `message`: A string providing information about the result of the request
- `data`: An object or array containing the response data

### Error Format

When an error occurs, the API will return a JSON response with a `status` of `false` and an error message:

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

## Implementation Guide

### Step 1: Set Up Your Environment

1. Choose the appropriate environment (sandbox or production)
2. Configure your API client with the correct base URL
3. Set up authentication with your API key

Example configuration in Node.js:

```javascript
const axios = require('axios');

const liasonpay = axios.create({
  baseURL: 'https://sandbox.liasonpay.net/api/v1',
  headers: {
    'Authorization': `Bearer ${process.env.LIASONPAY_API_KEY}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
```

### Step 2: Make API Requests

#### Example: Process a Payment

```javascript
// Request body
const paymentData = {
  store_id: "STORE_123",
  currency: "usd",
  products: [
    {
      name: "Product 1",
      description: "Product description",
      price: 100,
      quantity: 1
    }
  ],
  customer: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone_number: "+1234567890"
  },
  success_url: "https://example.com/success",
  cancel_url: "https://example.com/cancel",
  mode: "sandbox"
};

// Make the request
try {
  const response = await liasonpay.post('/payments/process', paymentData);
  console.log('Payment processed:', response.data);
} catch (error) {
  console.error('Error processing payment:', error.response?.data || error.message);
}
```

#### Example: Get Subscriptions

```javascript
try {
  const response = await liasonpay.get('/subscription/get', {
    params: {
      store_id: "STORE_123"
    }
  });
  console.log('Subscriptions:', response.data);
} catch (error) {
  console.error('Error fetching subscriptions:', error.response?.data || error.message);
}
```

### Step 3: Handle Responses

Always implement proper error handling:

```javascript
try {
  const response = await liasonpay.post('/endpoint', data);
  
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

### Step 4: Implement Webhooks

Set up webhook handlers to receive real-time notifications:

1. Configure webhook URLs in your LiasonPay dashboard
2. Implement endpoint handlers for webhook events
3. Verify webhook signatures for security
4. Process webhook events asynchronously

Example webhook handler in Express.js:

```javascript
const express = require('express');
const crypto = require('crypto');
const app = express();

app.post('/webhooks/liasonpay', express.json(), (req, res) => {
  // Verify webhook signature
  const signature = req.headers['liasonpay-signature'];
  const isValid = verifyWebhookSignature(req.body, signature, process.env.WEBHOOK_SECRET);
  
  if (!isValid) {
    return res.status(400).send('Invalid signature');
  }
  
  // Acknowledge receipt immediately
  res.status(200).send('Webhook received');
  
  // Process the webhook asynchronously
  const event = req.body;
  processWebhookEvent(event).catch(console.error);
});
```

## Common API Workflows

### Processing a One-Time Payment

1. Create a payment request using the [Process a payment](/api-reference/payments/process-payment) endpoint
2. Redirect the customer to the payment URL returned in the response
3. After payment completion, the customer will be redirected to your success or cancel URL
4. Verify the payment status using the [Verify a payment](/api-reference/payments/verify-payment) endpoint

### Creating a Subscription

1. Create a subscription using the [Create a subscription](/api-reference/subscriptions/create-subscription) endpoint
2. Redirect the customer to the subscription URL returned in the response
3. After subscription setup, the customer will be redirected to your success or cancel URL
4. Verify the subscription status using the [Verify a subscription](/api-reference/subscriptions/verify-subscription) endpoint

## Implementation Tips

### Idempotency

To prevent duplicate operations, use idempotency keys:

```http
Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000
```

### Pagination

For endpoints that return lists, use pagination parameters:

```
?page=1&per_page=20
```

### Error Handling

- Implement retry logic with exponential backoff for transient errors
- Log detailed error information for debugging
- Provide user-friendly error messages to your customers

### Testing

- Test all API flows in the sandbox environment before going live
- Use test cards and amounts to simulate different scenarios
- Test error cases and edge conditions

## Language-Specific Examples

### Python

```python
import requests

api_key = "sk_test_abcdefghijklmnopqrstuvwxyz123456"
base_url = "https://sandbox.liasonpay.net/api/v1"

headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# Process a payment
payment_data = {
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
    "cancel_url": "https://example.com/cancel",
    "mode": "sandbox"
}

response = requests.post(
    f"{base_url}/payments/process",
    json=payment_data,
    headers=headers
)

print(response.json())
```

### PHP

```php
<?php
$api_key = "sk_test_abcdefghijklmnopqrstuvwxyz123456";
$base_url = "https://sandbox.liasonpay.net/api/v1";

$headers = [
    "Authorization: Bearer " . $api_key,
    "Content-Type: application/json",
    "Accept: application/json"
];

// Get subscriptions
$store_id = "STORE_123";
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
```

## Next Steps

- [Explore the API Reference](/api-reference)
- [Learn about Webhooks](/developer-guide/webhooks)
- [Review Error Handling](/developer-guide/error-handling)
- [Check out Best Practices](/developer-guide/best-practices/security)
