---
sidebar_position: 4
---

# FAQ / Troubleshooting

This page provides answers to frequently asked questions and solutions to common issues when working with the LiasonPay API.

## General Questions

### How can I test my integration without processing real payments?

You can use test card numbers and special test amounts to simulate different payment scenarios without processing real payments:

- Use test card numbers like `4111111111111111` for successful payments
- Use specific amounts to trigger different responses (e.g., 999 for insufficient funds)

For more details, see the [Environment Information](/getting-started/environment-information) guide.

### How do I set up my production environment?

To set up your production environment:

import { AppUrl } from '@site/src/components/DynamicValues';

1. Ensure you're using the correct API key
2. Use the base URL <AppUrl /> for all API calls
3. Set the `mode` parameter to `production` in relevant API calls
4. Configure your webhook endpoints to handle events

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

import { ApiRateLimit } from '@site/src/components/DynamicValues';

Yes, the API has rate limits to prevent abuse:

- **Rate Limit**: <ApiRateLimit /> requests per minute

If you exceed these limits, you'll receive a `429 Too Many Requests` response.

## Authentication Issues

### My API key isn't working

If your API key isn't working, check the following:

1. Verify that the API key is correctly formatted in the Authorization header: `Authorization: Bearer {API_KEY}`
2. Check that the API key has not expired or been revoked
3. Ensure you're making the request to the correct base URL
4. Confirm that your account is in good standing

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

### Can I partially refund a payment?

Yes, LiasonPay supports partial refunds. When initiating a refund, you can specify the amount to refund, which can be less than the original payment amount.

### How long does it take for funds to be available?

Funds are typically available in your LiasonPay account within 2-3 business days after a successful payment. The exact timing depends on your payment processor and account settings.

## Subscription Management

### How do I change a subscription's billing cycle?

To change a subscription's billing cycle:

1. Cancel the current subscription using the [Cancel a subscription](/api-reference/subscriptions/cancel-subscription) endpoint
2. Create a new subscription with the desired billing cycle using the [Create a subscription](/api-reference/subscriptions/create-subscription) endpoint

### What happens when a subscription payment fails?

When a subscription payment fails:

1. LiasonPay will send a `subscription.payment_failed` webhook event
2. The system will automatically retry the payment after 3 days
3. If the retry fails, another webhook event will be sent
4. After 3 failed attempts, the subscription will be marked as `past_due`
5. You can then decide whether to cancel the subscription or attempt to recover the payment

### Can customers update their payment method for a subscription?

Yes, customers can update their payment method for an existing subscription. You can implement this by:

1. Creating a payment method update session using the LiasonPay dashboard
2. Redirecting the customer to the update URL
3. LiasonPay will handle the payment method update process
4. You'll receive a webhook notification when the payment method is updated

### How do I prorate subscription changes?

LiasonPay automatically handles proration when upgrading or downgrading subscriptions. When you use the [Upgrade a subscription](/api-reference/subscriptions/upgrade-subscription) endpoint, the system will:

1. Calculate the prorated amount based on the remaining time in the current billing cycle
2. Apply the prorated amount as a credit to the new subscription
3. Start billing at the new rate

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
3. Trigger events by creating payments or subscriptions
4. Check your logs to ensure webhooks are being received and processed correctly

### How do I verify webhook signatures?

To verify webhook signatures:

```javascript
const crypto = require("crypto");

function verifyWebhookSignature(payload, signatureHeader, secret) {
  if (!signatureHeader) return false;

  const [timestamp, signature] = signatureHeader.split(",");
  const timestampValue = timestamp.split("=")[1];
  const signatureValue = signature.split("=")[1];

  // Check if the timestamp is too old (5 minutes)
  const now = Math.floor(Date.now() / 1000);
  if (now - parseInt(timestampValue) > 300) {
    return false;
  }

  // Create the expected signature
  const signedPayload = `${timestampValue}.${JSON.stringify(payload)}`;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex");

  // Compare signatures using a constant-time comparison
  return crypto.timingSafeEqual(
    Buffer.from(signatureValue),
    Buffer.from(expectedSignature)
  );
}
```

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

You can use specific test card numbers to trigger different payment scenarios:

| Card Number      | Scenario                              |
| ---------------- | ------------------------------------- |
| 4111111111111111 | Successful payment                    |
| 4000000000000002 | Declined payment (insufficient funds) |
| 4000000000000069 | Expired card                          |
| 4000000000000119 | Card declined (generic)               |

You can also use specific amounts to trigger different responses:

| Amount | Response                            |
| ------ | ----------------------------------- |
| 100    | Successful payment                  |
| 999    | Failed payment (insufficient funds) |
| 888    | Failed payment (expired card)       |
| 777    | Failed payment (declined)           |

For more test options, see the [Environment Information](/getting-started/environment-information) guide.

### How do I handle errors in my integration?

Implement comprehensive error handling:

1. Use try-catch blocks around API calls
2. Check the response status and error messages
3. Implement retry logic with exponential backoff for transient errors
4. Log detailed error information for debugging
5. Provide user-friendly error messages to your customers

See the [Error Handling](/developer-guide/error-handling) guide for more details.

## Technical Issues

### How do I debug API requests?

To debug API requests:

1. Enable detailed logging in your API client
2. Use tools like Postman or Insomnia to test requests manually
3. Check the request and response headers
4. Verify the request payload format
5. Look for specific error messages in the response

### What should I do if I get a 500 error?

If you receive a 500 error (Internal Server Error):

1. Check if the issue is temporary by retrying the request after a short delay
2. Verify that your request payload is correctly formatted
3. Check the LiasonPay status page for any reported issues
4. Contact LiasonPay support with the request ID and timestamp

### How do I optimize API performance?

To optimize API performance:

1. Minimize the number of API calls
2. Implement caching for non-sensitive data
3. Use connection pooling for HTTP requests
4. Implement proper error handling and retries
5. Use pagination for large data sets

See the [Performance Optimization](/developer-guide/best-practices/performance) guide for more details.

## Still Need Help?

If you couldn't find an answer to your question, please contact our support team:

- Email: support@liasonpay.test
- Support Portal: [https://support.liasonpay.test](https://support.liasonpay.test)
- Documentation: [<AppUrl />/docs](<AppUrl />/docs)
