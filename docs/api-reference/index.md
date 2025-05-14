---
sidebar_position: 1
---

# API Reference

Welcome to the LiasonPay API Reference. This section provides detailed information about all available endpoints, request parameters, and response formats.

## Introduction

The LiasonPay API is a RESTful API that allows you to integrate payment processing and subscription management into your applications. All API requests are made over HTTPS and return responses in JSON format.

## Base URL

All API requests should be made to:

```
https://liasonpay.net/api/v1/
```

For sandbox testing, use:

```
https://sandbox.liasonpay.net/api/v1/
```

## Authentication

To authenticate requests, include an **`Authorization`** header with the value **`"Bearer {API_KEY}"`**.

```http
Authorization: Bearer sk_test_abcdefghijklmnopqrstuvwxyz123456
```

All authenticated endpoints are marked with a `requires authentication` badge in the documentation.

To obtain your API key, please follow these steps:

1. Log in to your [LiasonPay](https://liasonpay.test) account
2. Navigate to the **Dashboard**
3. Click on the **Profile icon** in the top right corner
4. Click on the **API Keys** section
5. Generate a new API key or copy your existing key

For more details, see the [Authentication](/getting-started/authentication) guide.

## API Endpoints

### Subscription Endpoints

The Subscription API allows you to create and manage recurring billing for your customers.

- [Get Subscriptions](/api-reference/subscriptions/get-subscriptions) - Retrieve a list of subscriptions
- [Create Subscription](/api-reference/subscriptions/create-subscription) - Create a new subscription
- [Verify Subscription](/api-reference/subscriptions/verify-subscription) - Verify a subscription's status
- [Cancel Subscription](/api-reference/subscriptions/cancel-subscription) - Cancel an active subscription
- [Upgrade Subscription](/api-reference/subscriptions/upgrade-subscription) - Upgrade a subscription to a different plan

### Payment Endpoints

The Payment API allows you to process one-time payments from your customers.

- [Process Payment](/api-reference/payments/process-payment) - Process a one-time payment
- [Verify Payment](/api-reference/payments/verify-payment) - Verify a payment's status

### Package Endpoints

The Package API allows you to retrieve and manage package information.

- [Get Packages](/api-reference/packages/get-packages) - Retrieve a list of packages

## Webhook Events

LiasonPay uses webhooks to notify your application when events happen in your account. For detailed information about webhook events and how to handle them, see the [Webhooks](/developer-guide/webhooks) guide.

Common webhook events include:

- `payment.succeeded`
- `payment.failed`
- `subscription.created`
- `subscription.cancelled`
- `subscription.payment_failed`

## Errors & Responses

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
  "data": null
}
```

For more details on error handling, see the [Error Handling](/developer-guide/error-handling) guide.

## HTTP Status Codes

The API uses standard HTTP status codes to indicate the success or failure of a request:

| Status Code | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| 200         | OK - The request was successful                             |
| 400         | Bad Request - The request was invalid or cannot be served   |
| 401         | Unauthorized - Authentication is required or has failed     |
| 403         | Forbidden - The request is not allowed                      |
| 404         | Not Found - The requested resource does not exist           |
| 422         | Unprocessable Entity - Validation error                     |
| 429         | Too Many Requests - Rate limit exceeded                     |
| 500         | Internal Server Error - Something went wrong on the server  |
| 503         | Service Unavailable - The server is temporarily unavailable |

## Rate Limiting

The API has rate limiting in place to prevent abuse:

- **Sandbox**: 100 requests per minute
- **Production**: 300 requests per minute

If you exceed these limits, you'll receive a `429 Too Many Requests` response with a `Retry-After` header indicating how many seconds to wait before retrying.

## Pagination

For endpoints that return lists of objects, the API uses cursor-based pagination:

```
GET /api/v1/subscription/get?store_id=STORE_123&limit=10&cursor=CURSOR_TOKEN
```

- `limit`: The number of objects to return (default: 20, max: 100)
- `cursor`: A token that points to the end of the previous page

The response will include pagination information in the `meta` field:

```json
{
    "status": true,
    "message": "Subscriptions retrieved successfully",
    "data": [...],
    "meta": {
        "has_more": true,
        "next_cursor": "NEXT_CURSOR_TOKEN"
    }
}
```

## API Versioning

The current version of the LiasonPay API is v1. The version is included in the URL path:

```
https://liasonpay.net/api/v1/
```

When new versions are released, we'll provide migration guides and maintain backward compatibility for a reasonable period.

## Additional Resources

- [Interactive API Testing](/interactive-tools/api-testing)
- [Postman Collection](/interactive-tools/postman-collection)
- [OpenAPI Explorer](/interactive-tools/openapi-explorer)
- [Error Handling Guide](/developer-guide/error-handling)
- [FAQ and Troubleshooting](/developer-guide/faq)
