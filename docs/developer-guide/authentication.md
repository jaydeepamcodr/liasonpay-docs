---
sidebar_position: 2
---

# Authentication

All requests to the LiasonPay API must be authenticated using API keys. This page explains how to obtain and use your API keys.

## Obtaining API Keys

To obtain your API key, please follow these steps:

1. Log in to your [LiasonPay](https://liasonpay.test) account
2. Navigate to the **Dashboard**
3. Click on the **Profile icon** in the top right corner
4. Click on the **API Keys** section
5. Generate a new API key or copy your existing key

For direct access, visit the [LiasonPay API Key page](https://liasonpay.test/api-key).

## API Key Types

LiasonPay provides two types of API keys:

- **Test Keys**: Used with the sandbox environment for development and testing
- **Live Keys**: Used with the production environment for processing real transactions

Always keep your API keys secure and never share them publicly.

## Using API Keys

To authenticate your API requests, include an **`Authorization`** header with the value **`"Bearer {API_KEY}"`**.

Example:

```http
Authorization: Bearer sk_test_abcdefghijklmnopqrstuvwxyz123456
```

All authenticated endpoints are marked with a `requires authentication` badge in the API Reference documentation.

## API Key Security

Follow these best practices to keep your API keys secure:

1. **Never expose API keys in client-side code**: Your API keys should only be used in server-side code
2. **Rotate keys regularly**: Generate new API keys periodically and update your integrations
3. **Use environment variables**: Store API keys in environment variables rather than hardcoding them
4. **Restrict access**: Only share API keys with team members who need them
5. **Monitor usage**: Regularly check your API usage for any suspicious activity

## Next Steps

- Learn [How to Use the API](./how-to-use)
- Understand [Environment Information](./environment-info)
- Explore [Best Practices](./best-practices)
