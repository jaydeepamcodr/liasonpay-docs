---
sidebar_position: 4
---

# Environment Information

LiasonPay provides a production environment for processing payments. This page explains how to use the environment effectively.

## Production Environment

import { AppUrl } from '@site/src/components/DynamicValues';

- **Base URL**: <AppUrl />
- **Purpose**: Live transactions and real payments
- **API Keys**: API keys (prefixed with `sk_`)
- **Payments**: Real money is processed
- **Features**: Full API functionality with actual payment processing

## API Configuration

When making API requests, you need to:

1. Use the base URL (<AppUrl />) for your API requests
2. Use your API key for authentication
3. Set the `mode` parameter to `production` in relevant API calls

Example for API request:

```json
{
  "store_id": "STORE_123",
  "price_id": "PRICE_ABC123",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel",
  "mode": "production"
}
```

## Testing

For testing purposes, you can use these test card numbers:

| Card Type  | Card Number      | CVV | Expiry Date     |
| ---------- | ---------------- | --- | --------------- |
| Visa       | 4111111111111111 | Any | Any future date |
| Mastercard | 5555555555554444 | Any | Any future date |
| Discover   | 6011111111111117 | Any | Any future date |

### Test Responses

You can trigger specific responses by using special amounts:

| Amount | Response                            |
| ------ | ----------------------------------- |
| 100    | Successful payment                  |
| 999    | Failed payment (insufficient funds) |
| 888    | Failed payment (expired card)       |
| 777    | Failed payment (declined)           |

## Implementation Checklist

Before going live, ensure you have:

1. Thoroughly tested your integration
2. Properly configured your API keys
3. Set the `mode` parameter to `production` in all API calls
4. Set up your webhook endpoints to handle events
5. Removed any test data or configurations

## Rate Limits

The API has rate limits to prevent abuse:

- **Production**: 300 requests per minute

If you exceed these limits, you'll receive a `429 Too Many Requests` response.

## Next Steps

- Explore [Best Practices](./best-practices) for using the API
- Set up [Webhooks](./webhooks) for real-time notifications
- Understand [Error Handling](./error-handling) in detail
