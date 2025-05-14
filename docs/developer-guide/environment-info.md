---
sidebar_position: 4
---

# Environment Information

LiasonPay provides separate environments for development and production use. This page explains the differences between these environments and how to use them effectively.

## Available Environments

### Sandbox Environment

- **Base URL**: `https://sandbox.liasonpay.net/`
- **Purpose**: Development, testing, and integration
- **API Keys**: Test API keys (prefixed with `sk_test_`)
- **Payments**: No real money is processed
- **Features**: Full API functionality with simulated responses

### Production Environment

- **Base URL**: `https://liasonpay.net/`
- **Purpose**: Live transactions and real payments
- **API Keys**: Live API keys (prefixed with `sk_live_`)
- **Payments**: Real money is processed
- **Features**: Full API functionality with actual payment processing

## Switching Between Environments

To switch between environments, you need to:

1. Use the appropriate base URL for your API requests
2. Use the corresponding API key type (test or live)
3. Set the `mode` parameter to `sandbox` or `production` in relevant API calls

Example for sandbox mode:

```json
{
    "store_id": "STORE_123",
    "price_id": "PRICE_ABC123",
    "success_url": "https://example.com/success",
    "cancel_url": "https://example.com/cancel",
    "mode": "sandbox"
}
```

## Testing in Sandbox

The sandbox environment allows you to test your integration without processing real payments. Here are some testing guidelines:

### Test Cards

Use these test card numbers in the sandbox environment:

| Card Type | Card Number      | CVV | Expiry Date |
|-----------|------------------|-----|-------------|
| Visa      | 4111111111111111 | Any | Any future date |
| Mastercard| 5555555555554444 | Any | Any future date |
| Discover  | 6011111111111117 | Any | Any future date |

### Test Responses

You can trigger specific responses in the sandbox by using special amounts:

| Amount | Response |
|--------|----------|
| 100    | Successful payment |
| 999    | Failed payment (insufficient funds) |
| 888    | Failed payment (expired card) |
| 777    | Failed payment (declined) |

## Moving to Production

Before moving to production, ensure you have:

1. Thoroughly tested your integration in the sandbox environment
2. Updated your API keys to live keys
3. Changed the base URL to the production URL
4. Set the `mode` parameter to `production` in all API calls
5. Updated your webhook endpoints to handle production events
6. Removed any test data or configurations

## Rate Limits

Both environments have rate limits to prevent abuse:

- **Sandbox**: 100 requests per minute
- **Production**: 300 requests per minute

If you exceed these limits, you'll receive a `429 Too Many Requests` response.

## Next Steps

- Explore [Best Practices](./best-practices) for using the API
- Set up [Webhooks](./webhooks) for real-time notifications
- Understand [Error Handling](./error-handling) in detail
