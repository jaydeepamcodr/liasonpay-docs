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

| Event Type                    | Description                            |
| ----------------------------- | -------------------------------------- |
| `session.created`             | A new payment session was created      |
| `charge.created`              | A new charge was created               |
| `charge.updated`              | A charge was updated                   |
| `charge.completed`            | A charge was successfully completed    |
| `charge.failed`               | A charge attempt failed                |
| `charge.cancelled`            | A charge was cancelled                 |
| `refund.created`              | A new refund was created               |
| `refund.updated`              | A refund was updated                   |
| `refund.failed`               | A refund attempt failed                |
| `charge.refunded`             | A charge was refunded                  |
| `charge.dispute.created`      | A new dispute was created for a charge |
| `charge.dispute.closed`       | A dispute for a charge was closed      |
| `subscription.created`        | A new subscription was created         |
| `subscription.updated`        | A subscription was updated             |
| `subscription.cancelled`      | A subscription was cancelled           |
| `subscription.payment.failed` | A subscription payment failed          |
| `subscription.expired`        | A subscription has expired             |

## Webhook Payload

Webhook payloads are sent as JSON in the request body. Here are examples of common webhook events:

### Charge Completed Event

```json
{
  "event_type": "charge.completed",
  "created_at": "2023-05-14T12:34:56Z",
  "data": {
    "transaction_id": "TRANSACTION_123456",
    "amount": 100.0,
    "currency": "usd",
    "status": "completed",
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

### Subscription Created Event

```json
{
  "event_type": "subscription.created",
  "created_at": "2023-05-14T12:34:56Z",
  "data": {
    "subscription_id": "SUBSCRIPTION_56FBC7EEE4",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com"
    },
    "plan": {
      "name": "Premium Plan",
      "price": 19.99,
      "currency": "usd",
      "interval": "month"
    },
    "status": "active",
    "start_date": "2023-05-14T12:34:56Z",
    "current_period_end": "2023-06-14T12:34:56Z"
  }
}
```

### Refund Created Event

```json
{
  "event_type": "refund.created",
  "created_at": "2023-05-14T12:34:56Z",
  "data": {
    "refund_id": "REFUND_ABC123",
    "transaction_id": "TRANSACTION_123456",
    "amount": 100.0,
    "currency": "usd",
    "status": "succeeded",
    "reason": "customer_requested"
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

## Handling Different Webhook Events

Here's how to handle some of the most common webhook events:

```javascript
// Example webhook handler in Express.js
app.post("/webhooks/liasonpay", express.json(), async (req, res) => {
  // Verify webhook signature
  const signature = req.headers["liasonpay-signature"];
  const isValid = verifyWebhookSignature(
    req.body,
    signature,
    process.env.WEBHOOK_SECRET
  );

  if (!isValid) {
    return res.status(401).send("Invalid signature");
  }

  // Acknowledge receipt immediately
  res.status(200).send("Webhook received");

  // Process the webhook asynchronously
  const event = req.body;

  try {
    switch (event.event_type) {
      // Charge events
      case "session.created":
        await handleSessionCreated(event.data);
        break;
      case "charge.created":
        await handleChargeCreated(event.data);
        break;
      case "charge.completed":
        await handleChargeCompleted(event.data);
        break;
      case "charge.failed":
        await handleChargeFailed(event.data);
        break;
      case "charge.cancelled":
        await handleChargeCancelled(event.data);
        break;

      // Refund events
      case "refund.created":
        await handleRefundCreated(event.data);
        break;
      case "refund.updated":
        await handleRefundUpdated(event.data);
        break;
      case "refund.failed":
        await handleRefundFailed(event.data);
        break;
      case "charge.refunded":
        await handleChargeRefunded(event.data);
        break;

      // Dispute events
      case "charge.dispute.created":
        await handleDisputeCreated(event.data);
        break;
      case "charge.dispute.closed":
        await handleDisputeClosed(event.data);
        break;

      // Subscription events
      case "subscription.created":
        await handleSubscriptionCreated(event.data);
        break;
      case "subscription.updated":
        await handleSubscriptionUpdated(event.data);
        break;
      case "subscription.cancelled":
        await handleSubscriptionCancelled(event.data);
        break;
      case "subscription.payment.failed":
        await handleSubscriptionPaymentFailed(event.data);
        break;
      case "subscription.expired":
        await handleSubscriptionExpired(event.data);
        break;

      default:
        console.log(`Unhandled event type: ${event.event_type}`);
    }
  } catch (error) {
    console.error(`Error processing webhook: ${error.message}`);
    // Consider sending the error to your monitoring system
  }
});
```

### Charge Events

- **session.created**: A payment session has been created but not yet completed. You might want to update your internal records to track the session.
- **charge.created**: A charge has been initiated. You can use this to update your order status to "pending payment".
- **charge.completed**: A charge has been successfully completed. Update your order status to "paid" and fulfill the order.
- **charge.failed**: A charge attempt failed. You may want to notify the customer and provide options to retry the payment.
- **charge.cancelled**: A charge was cancelled. Update your order status accordingly.

### Refund Events

- **refund.created**: A refund has been initiated. You can update your internal records to reflect the pending refund.
- **refund.updated**: A refund's status has changed. Check the status field to determine the current state.
- **refund.failed**: A refund attempt failed. You may need to try an alternative refund method or contact the customer.
- **charge.refunded**: A charge has been successfully refunded. Update your order status and accounting records.

### Dispute Events

- **charge.dispute.created**: A customer has initiated a dispute (chargeback). You should gather evidence to respond to the dispute.
- **charge.dispute.closed**: A dispute has been resolved. Check the outcome to determine if you won or lost the dispute.

### Subscription Events

- **subscription.created**: A new subscription has been created. You can provision access to your service.
- **subscription.updated**: A subscription has been updated. Check what changed and update your records accordingly.
- **subscription.cancelled**: A subscription has been cancelled. You should revoke access at the end of the current billing period.
- **subscription.payment.failed**: A subscription payment failed. You may want to notify the customer and attempt to recover the payment.
- **subscription.expired**: A subscription has reached its end date. You should revoke access to your service.

## Best Practices for Webhooks

1. **Respond quickly**: Return a 200 response as soon as possible, then process the webhook asynchronously
2. **Implement idempotency**: Handle duplicate webhook events gracefully
3. **Verify signatures**: Always verify webhook signatures to ensure authenticity
4. **Log webhook events**: Keep logs of received webhooks for debugging and auditing
5. **Implement retry logic**: Be prepared to handle cases where your webhook endpoint is temporarily unavailable
6. **Monitor webhook deliveries**: Set up monitoring to detect failed webhook deliveries
7. **Process events in order**: Some events may depend on others, so process them in the order they were received
8. **Handle all event types**: Be prepared to handle all event types, even ones you don't explicitly subscribe to

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

```

```
