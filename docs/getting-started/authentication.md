---
sidebar_position: 2
---

# Authentication

All requests to the LiasonPay API must be authenticated using API keys. This guide explains how to obtain and use your API keys securely.

## API Key Types

LiasonPay provides two types of API keys:

- **Test API Keys**: Used with the sandbox environment for development and testing
- **Live API Keys**: Used with the production environment for processing real transactions

Each API key has a prefix that indicates its type:
- Test keys start with `sk_test_`
- Live keys start with `sk_live_`

## Obtaining API Keys

To obtain your API keys, follow these steps:

1. Log in to your [LiasonPay Dashboard](https://liasonpay.test)
2. Navigate to **Settings** > **API Keys**
3. You'll see your existing API keys or options to generate new ones
4. For security reasons, API keys are only displayed once when generated

### Generating New API Keys

1. In the API Keys section, click **Generate New Key**
2. Select the key type (Test or Live)
3. Add a description to help you identify the key's purpose
4. Click **Generate**
5. Copy and securely store your API key immediately, as it won't be displayed again

## Using API Keys in Requests

To authenticate your API requests, include an **`Authorization`** header with the value **`"Bearer {API_KEY}"`**.

Example:

```http
Authorization: Bearer sk_test_abcdefghijklmnopqrstuvwxyz123456
```

All authenticated endpoints are marked with a `requires authentication` badge in the API Reference documentation.

### Example Request with Authentication

```bash
curl --request GET \
  --url "https://liasonpay.net/api/v1/subscription/get?store_id=STORE_123" \
  --header "Authorization: Bearer sk_test_abcdefghijklmnopqrstuvwxyz123456" \
  --header "Content-Type: application/json" \
  --header "Accept: application/json"
```

## API Key Security Best Practices

Follow these best practices to keep your API keys secure:

### 1. Never Expose API Keys in Client-Side Code

API keys should only be used in server-side code. Never include them in:
- JavaScript that runs in the browser
- Mobile app code
- Public repositories
- Client-side configuration files

### 2. Use Environment Variables

Store API keys in environment variables rather than hardcoding them:

```javascript
// Node.js example
const apiKey = process.env.LIASONPAY_API_KEY;
```

```python
# Python example
import os
api_key = os.environ.get('LIASONPAY_API_KEY')
```

### 3. Implement Proper Access Controls

- Restrict API key access to only those who need it
- Use different API keys for different applications or services
- Implement the principle of least privilege

### 4. Rotate API Keys Regularly

- Generate new API keys periodically (every 90 days recommended)
- Update your applications to use the new keys
- Revoke old keys after confirming the new ones work

### 5. Monitor API Key Usage

- Regularly review API usage logs
- Set up alerts for unusual activity
- Revoke compromised keys immediately

## Handling Authentication Errors

If you encounter authentication errors (HTTP 401), check:

1. That you're using the correct API key
2. That the API key is properly formatted in the Authorization header
3. That the API key has not been revoked
4. That you're using the right key type for your environment (test vs. live)

Example authentication error response:

```json
{
  "status": false,
  "message": "Invalid API key provided",
  "data": {
    "error_code": "authentication_error"
  }
}
```

## Next Steps

- [Learn about Environment Information](./environment-information)
- [Explore How to Use the API](./how-to-use)
- [Review Security Best Practices](/developer-guide/best-practices/security)
