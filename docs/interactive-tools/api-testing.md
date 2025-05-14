---
sidebar_position: 1
---

# API Testing Tool

The LiasonPay API Testing Tool allows you to interactively test API endpoints directly from your browser. This page explains how to use the tool and provides examples of common API operations.

## Using the API Testing Tool

The API Testing Tool is embedded throughout our documentation, allowing you to:

1. Test API endpoints with your own parameters
2. See real-time responses
3. Understand request and response formats
4. Experiment with different scenarios

### Authentication

To use the API Testing Tool with authenticated endpoints:

1. Enter your API key in the **Authorization** header field
2. Use a test API key (`sk_test_`) for sandbox testing
3. Use a live API key (`sk_live_`) for production testing

```http
Authorization: Bearer sk_test_abcdefghijklmnopqrstuvwxyz123456
```

### Request Parameters

The tool provides input fields for all required and optional parameters:

1. Fill in the required parameters (marked with \*)
2. Add any optional parameters as needed
3. Click **Send Request** to execute the API call

### Response Viewer

After sending a request, the tool displays:

1. The response status code
2. Response headers
3. Formatted JSON response body
4. Request execution time

## Example: Processing a Payment

Here's how to test the payment processing endpoint:

1. Navigate to the [Process Payment](/api-reference/payments/process-payment) documentation
2. Enter your API key in the Authorization header
3. Fill in the required parameters:
   - `store_id`: Your store ID
   - `currency`: The currency code (e.g., "usd")
   - `products`: An array of products with name, description, price, and quantity
   - `success_url`: URL to redirect after successful payment
   - `cancel_url`: URL to redirect after cancelled payment
   - `mode`: "sandbox" for testing
4. Click **Send Request**
5. Review the response, which includes a checkout URL
6. Optionally, click the checkout URL to test the payment flow

## Example: Creating a Subscription

To test subscription creation:

1. Navigate to the [Create Subscription](/api-reference/subscriptions/create-subscription) documentation
2. Enter your API key in the Authorization header
3. Fill in the required parameters:
   - `store_id`: Your store ID
   - `price_id`: The ID of the subscription price
   - `success_url`: URL to redirect after successful subscription
   - `cancel_url`: URL to redirect after cancelled subscription
   - `mode`: "sandbox" for testing
4. Click **Send Request**
5. Review the response, which includes a subscription checkout URL

## Testing in Different Environments

### Sandbox Testing

For testing without processing real payments:

1. Use the sandbox base URL: `https://sandbox.liasonpay.net/api/v1/`
2. Use a test API key (`sk_test_`)
3. Set the `mode` parameter to "sandbox"
4. Use test card numbers for payment testing

### Production Testing

For testing with real payments:

1. Use the production base URL: `https://liasonpay.net/api/v1/`
2. Use a live API key (`sk_live_`)
3. Set the `mode` parameter to "production"
4. Use real card information

## Testing Webhooks

While the API Testing Tool doesn't directly test webhooks, you can:

1. Use the tool to create test events (payments, subscriptions)
2. Configure your webhook URL in the LiasonPay dashboard
3. Monitor your webhook endpoint for incoming events
4. Verify webhook signatures using your webhook secret

## Testing Error Scenarios

To test error handling:

1. Omit required parameters
2. Use invalid values (e.g., negative amounts)
3. Use specific test card numbers that trigger errors
4. Check the error responses and status codes

## Saving and Sharing Tests

The API Testing Tool allows you to:

1. Save your test configurations for future use
2. Export test configurations as cURL commands
3. Share test configurations with team members

## Next Steps

- [Download the Postman Collection](/interactive-tools/postman-collection) for more advanced testing
- [Explore the API Explorer](/interactive-tools/api-explorer) for a comprehensive API reference
- [Review the API Reference](/api-reference) for detailed endpoint documentation
