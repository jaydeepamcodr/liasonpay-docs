---
sidebar_position: 1
---

# Webhooks

Webhooks allow you to receive real-time notifications about events that happen in your LiasonPay account, such as successful payments, failed payments, subscription cancellations, and more.

## How Webhooks Work

1. You configure a webhook URL in your LiasonPay dashboard
2. When an event occurs (e.g., a payment is processed), LiasonPay sends an HTTP POST request to your webhook URL
3. Your server receives the webhook payload and processes it accordingly
4. Your server responds with a 200 OK status code to acknowledge receipt

## Setting Up Webhooks

To set up webhooks:

1. Log in to your [LiasonPay dashboard](https://liasonpay.test)
2. Navigate to **Settings** > **Webhooks**
3. Click **Add Endpoint**
4. Enter your webhook URL
5. Select the events you want to receive notifications for
6. Click **Save**

## Webhook Events

LiasonPay sends webhooks for the following events:

| Event Type                       | Description                          |
| -------------------------------- | ------------------------------------ |
| `payment.succeeded`              | A payment was successfully processed |
| `payment.failed`                 | A payment attempt failed             |
| `payment.refunded`               | A payment was refunded               |
| `subscription.created`           | A new subscription was created       |
| `subscription.updated`           | A subscription was updated           |
| `subscription.cancelled`         | A subscription was cancelled         |
| `subscription.payment_failed`    | A subscription payment failed        |
| `subscription.payment_succeeded` | A subscription payment succeeded     |

## Webhook Payload

Webhook payloads are sent as JSON in the request body. Here's an example of a `payment.succeeded` event:

```json
{
  "event_type": "payment.succeeded",
  "created_at": "2023-05-14T12:34:56Z",
  "data": {
    "transaction_id": "TRANSACTION_123456",
    "amount": 100.0,
    "currency": "usd",
    "status": "succeeded",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    "metadata": {
      "order_id": "1234567890"
    }
  }
}
```

## Verifying Webhooks

To ensure that webhook requests are coming from LiasonPay and not a malicious third party, you should verify the webhook signature:

1. LiasonPay includes a `Liasonpay-Signature` header in each webhook request
2. The header contains a timestamp and a signature
3. You can verify the signature using your webhook secret

Example signature verification in Node.js:

```javascript
const crypto = require("crypto");

function verifyWebhookSignature(payload, signature, secret) {
  const [timestamp, receivedSignature] = signature.split(",");
  const signedPayload = `${timestamp}.${JSON.stringify(payload)}`;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(receivedSignature),
    Buffer.from(expectedSignature)
  );
}
```

## Best Practices for Webhooks

1. **Respond quickly**: Return a 200 response as soon as possible, then process the webhook asynchronously
2. **Implement idempotency**: Handle duplicate webhook events gracefully
3. **Verify signatures**: Always verify webhook signatures to ensure authenticity
4. **Log webhook events**: Keep logs of received webhooks for debugging and auditing
5. **Implement retry logic**: Be prepared to handle cases where your webhook endpoint is temporarily unavailable
6. **Monitor webhook deliveries**: Set up monitoring to detect failed webhook deliveries

## Testing Webhooks

You can test webhooks in the sandbox environment:

1. Set up a webhook endpoint in your sandbox account
2. Use a tool like [ngrok](https://ngrok.com/) to expose your local development server
3. Trigger test events by creating test payments or subscriptions
4. Check your logs to ensure webhooks are being received and processed correctly

## Webhook Retry Policy

If your webhook endpoint returns a non-200 response, LiasonPay will retry the webhook with the following schedule:

- 1st retry: 5 minutes after the initial attempt
- 2nd retry: 30 minutes after the 1st retry
- 3rd retry: 2 hours after the 2nd retry
- 4th retry: 5 hours after the 3rd retry
- 5th retry: 10 hours after the 4th retry

After the 5th retry, the webhook will be marked as failed and will not be retried again.

## Next Steps

- Understand [Error Handling](./error-handling) in detail
- Explore the [API Reference](/api-reference) for detailed endpoint documentation
