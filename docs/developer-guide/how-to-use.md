---
sidebar_position: 3
---

# How to Use the API

This guide provides a step-by-step approach to using the LiasonPay API effectively.

## Basic Request Structure

import { AppUrl } from '@site/src/components/DynamicValues';

All API requests should be made to the base URL:

<AppUrl />

## Request Headers

Include these headers with all API requests:

```http
Authorization: Bearer {API_KEY}
Content-Type: application/json
Accept: application/json
```

## Response Format

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

## Error Handling

When an error occurs, the API will return a JSON response with a `status` of `false` and an error message:

```json
{
  "status": false,
  "message": "Error message",
  "data": null
}
```

## Common API Workflows

### Processing a One-Time Payment

1. Create a payment request using the [Process a payment](/api-reference/payments#process-a-payment) endpoint
2. Redirect the customer to the payment URL returned in the response
3. After payment completion, the customer will be redirected to your success or cancel URL
4. Verify the payment status using the [Verify a payment](/api-reference/payments#verify-a-payment) endpoint

### Creating a Subscription

1. Create a subscription using the [Create a subscription](/api-reference/subscriptions#create-a-subscription) endpoint
2. Redirect the customer to the subscription URL returned in the response
3. After subscription setup, the customer will be redirected to your success or cancel URL
4. Verify the subscription status using the [Verify a subscription](/api-reference/subscriptions#verify-a-subscription) endpoint

## Testing Your Integration

Always test your integration thoroughly before going live:

1. Use test card numbers and amounts to simulate different scenarios
2. Test successful payment flows
3. Test error scenarios and edge cases
4. Verify webhook handling
5. Test subscription lifecycle (creation, verification, cancellation, upgrading)

## Next Steps

- Learn about [Environment Information](./environment-info)
- Explore [Best Practices](./best-practices)
- Set up [Webhooks](./webhooks) for real-time notifications
- Understand [Error Handling](./error-handling) in detail
