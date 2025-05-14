---
sidebar_position: 5
---

# FAQ / Troubleshooting

This page provides answers to frequently asked questions and solutions to common issues when working with the LiasonPay API.

## General Questions

### What is the difference between sandbox and production environments?

The sandbox environment is for testing and development, while the production environment is for processing real payments:

- **Sandbox**: Uses test API keys (prefixed with `sk_test_`), doesn't process real money
- **Production**: Uses live API keys (prefixed with `sk_live_`), processes real money

For more details, see the [Environment Information](/developer-guide/environment-info) guide.

### How do I switch from sandbox to production?

To switch from sandbox to production:

1. Update your API key from a test key to a live key
2. Change the base URL from `https://sandbox.liasonpay.net/` to `https://liasonpay.net/`
3. Set the `mode` parameter to `production` in relevant API calls
4. Update your webhook endpoints to handle production events

### What currencies are supported?

LiasonPay currently supports the following currencies:

- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- NGN (Nigerian Naira)
- KES (Kenyan Shilling)
- GHS (Ghanaian Cedi)
- ZAR (South African Rand)

### Are there any rate limits?

Yes, the API has rate limits to prevent abuse:

- **Sandbox**: 100 requests per minute
- **Production**: 300 requests per minute

If you exceed these limits, you'll receive a `429 Too Many Requests` response.

## Authentication Issues

### My API key isn't working

If your API key isn't working, check the following:

1. Ensure you're using the correct API key for the environment (test key for sandbox, live key for production)
2. Verify that the API key is correctly formatted in the Authorization header: `Authorization: Bearer {API_KEY}`
3. Check that the API key has not expired or been revoked
4. Ensure you're making the request to the correct base URL

### How do I rotate my API keys?

To rotate your API keys:

1. Log in to your [LiasonPay dashboard](https://liasonpay.test)
2. Navigate to **Settings** > **API Keys**
3. Click **Generate New Key**
4. Update your integration to use the new key
5. Once your integration is working with the new key, click **Revoke** on the old key

## Payment Processing

### Why did a payment fail?

Payments can fail for various reasons:

1. **Insufficient funds**: The customer doesn't have enough money in their account
2. **Card declined**: The card issuer declined the transaction
3. **Expired card**: The card has expired
4. **Invalid card details**: The card number, expiry date, or CVV is incorrect
5. **Fraud detection**: The transaction was flagged as potentially fraudulent

Check the error message in the API response for more specific information.

### How do I issue a refund?

To issue a refund:

1. Log in to your [LiasonPay dashboard](https://liasonpay.test)
2. Navigate to **Payments** > **Transactions**
3. Find the transaction you want to refund
4. Click **Refund** and follow the prompts

Note: Refunds can only be issued for successful payments and may take 5-10 business days to process.

## Subscription Management

### How do I change a subscription's billing cycle?

To change a subscription's billing cycle:

1. Cancel the current subscription using the [Cancel a subscription](/api-reference/subscriptions#cancel-a-subscription) endpoint
2. Create a new subscription with the desired billing cycle using the [Create a subscription](/api-reference/subscriptions#create-a-subscription) endpoint

### What happens when a subscription payment fails?

When a subscription payment fails:

1. LiasonPay will send a `subscription.payment_failed` webhook event
2. The system will automatically retry the payment after 3 days
3. If the retry fails, another webhook event will be sent
4. After 3 failed attempts, the subscription will be marked as `past_due`
5. You can then decide whether to cancel the subscription or attempt to recover the payment

## Webhook Issues

### I'm not receiving webhook events

If you're not receiving webhook events, check the following:

1. Verify that your webhook URL is correctly configured in the LiasonPay dashboard
2. Ensure your server is accessible from the internet
3. Check that your server is responding with a 200 status code
4. Look for any firewall or security settings that might be blocking incoming requests
5. Check the webhook logs in your LiasonPay dashboard for any delivery failures

### How do I test webhooks locally?

To test webhooks in a local development environment:

1. Use a tool like [ngrok](https://ngrok.com/) to create a public URL for your local server
2. Configure your webhook URL in the LiasonPay dashboard to point to the ngrok URL
3. Trigger test events by creating test payments or subscriptions
4. Check your logs to ensure webhooks are being received and processed correctly

## API Integration

### How do I handle idempotency?

To handle idempotency and prevent duplicate operations:

1. Generate a unique idempotency key for each operation
2. Include the idempotency key in the `Idempotency-Key` header of your API request
3. If a request fails or times out, retry the request with the same idempotency key
4. LiasonPay will recognize the duplicate request and return the result of the original request

Example:

```http
Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000
```

### How can I test different payment scenarios?

In the sandbox environment, you can use specific test card numbers to trigger different payment scenarios:

| Card Number      | Scenario |
|------------------|----------|
| 4111111111111111 | Successful payment |
| 4000000000000002 | Declined payment (insufficient funds) |
| 4000000000000069 | Expired card |
| 4000000000000119 | Card declined (generic) |

For more test cards, see the [Environment Information](/developer-guide/environment-info) guide.

## Still Need Help?

If you couldn't find an answer to your question, please contact our support team:

- Email: support@liasonpay.test
- Support Portal: [https://support.liasonpay.test](https://support.liasonpay.test)
- Documentation: [https://liasonpay.net/docs](https://liasonpay.net/docs)
