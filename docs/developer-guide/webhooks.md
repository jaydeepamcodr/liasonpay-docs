---
sidebar_position: 1
---

import { AppUrl } from '@site/src/components/DynamicValues';

<head>
  <link rel="stylesheet" href="/css/next-steps.css" />
  <script src="/js/next-steps.js"></script>
</head>

# Webhooks

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Real-time Event Notifications with Webhooks</h2>
    <p>Receive instant updates about payments, subscriptions, and other important events in your LiasonPay account</p>
  </div>
</div>

## What are Webhooks?

<div className="features-grid">
  <div className="feature-card">
    <h3>🔔 About Webhooks</h3>
    <p>Webhooks allow you to receive real-time notifications about events that happen in your LiasonPay account, such as:</p>
    <ul>
      <li>Successful payments</li>
      <li>Failed payment attempts</li>
      <li>Subscription creations and cancellations</li>
      <li>Refunds and disputes</li>
      <li>And many more events</li>
    </ul>
    <p>Instead of constantly polling our API for updates, webhooks push data to your server as events occur.</p>
  </div>

  <div className="feature-card">
    <h3>🔄 How Webhooks Work</h3>
    <div className="workflow-steps">
      <div className="workflow-step">
        <div className="step-number">1</div>
        <div className="step-content">
          <p>You configure a webhook URL in your LiasonPay dashboard</p>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">2</div>
        <div className="step-content">
          <p>When an event occurs (e.g., a payment is processed), LiasonPay sends an HTTP POST request to your webhook URL</p>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">3</div>
        <div className="step-content">
          <p>Your server receives the webhook payload and processes it accordingly</p>
        </div>
      </div>

      <div className="workflow-step">
        <div className="step-number">4</div>
        <div className="step-content">
          <p>Your server responds with a 200 OK status code to acknowledge receipt</p>
        </div>
      </div>
    </div>

  </div>
</div>

## Setting Up Webhooks

<div className="setup-steps">
  <div className="setup-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Access Your Dashboard</h3>
      <p>Log in to your <a href={AppUrl()} target="_blank" rel="noopener noreferrer">LiasonPay dashboard</a></p>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Navigate to Webhooks</h3>
      <p>Go to <strong>Settings</strong> → <strong>Webhooks</strong></p>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Add Endpoint</h3>
      <p>Click <strong>Add Endpoint</strong> and enter your webhook URL</p>
      <div className="info-callout">
        <p><strong>💡 Tip:</strong> Your webhook URL should be a publicly accessible HTTPS endpoint that can receive POST requests.</p>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">4</div>
    <div className="step-content">
      <h3>Select Events</h3>
      <p>Choose which events you want to receive notifications for</p>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">5</div>
    <div className="step-content">
      <h3>Save Configuration</h3>
      <p>Click <strong>Save</strong> to activate your webhook endpoint</p>
    </div>
  </div>
</div>

## Webhook Events

<div className="event-types-section">
  <p>LiasonPay sends webhooks for the following events:</p>

  <div className="event-types-grid">
    <div className="event-type-card">
      <h3>💳 Payment Events</h3>
      <ul className="event-list">
        <li><code>session.created</code> - A new payment session was created</li>
        <li><code>charge.created</code> - A new charge was created</li>
        <li><code>charge.updated</code> - A charge was updated</li>
        <li><code>charge.completed</code> - A charge was successfully completed</li>
        <li><code>charge.failed</code> - A charge attempt failed</li>
        <li><code>charge.cancelled</code> - A charge was cancelled</li>
      </ul>
    </div>

    <div className="event-type-card">
      <h3>💰 Refund Events</h3>
      <ul className="event-list">
        <li><code>refund.created</code> - A new refund was created</li>
        <li><code>refund.updated</code> - A refund was updated</li>
        <li><code>refund.failed</code> - A refund attempt failed</li>
        <li><code>charge.refunded</code> - A charge was refunded</li>
      </ul>
    </div>

    <div className="event-type-card">
      <h3>⚠️ Dispute Events</h3>
      <ul className="event-list">
        <li><code>charge.dispute.created</code> - A new dispute was created for a charge</li>
        <li><code>charge.dispute.closed</code> - A dispute for a charge was closed</li>
      </ul>
    </div>

    <div className="event-type-card">
      <h3>🔄 Subscription Events</h3>
      <ul className="event-list">
        <li><code>subscription.created</code> - A new subscription was created</li>
        <li><code>subscription.updated</code> - A subscription was updated</li>
        <li><code>subscription.cancelled</code> - A subscription was cancelled</li>
        <li><code>subscription.payment.failed</code> - A subscription payment failed</li>
        <li><code>subscription.expired</code> - A subscription has expired</li>
      </ul>
    </div>

  </div>
</div>

## Webhook Payload Structure

<div className="examples-container">
  <div className="example-card">
    <h3>📦 Payload Format</h3>
    <p>All webhook payloads follow this general structure:</p>
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "event_type": "event.name",
  "created_at": "ISO-8601 timestamp",
  "data": {
    // Event-specific data
  }
}
```
      </pre>
    </div>
    <ul>
      <li><strong>event_type</strong>: The type of event that occurred</li>
      <li><strong>created_at</strong>: When the event occurred (ISO-8601 format)</li>
      <li><strong>data</strong>: Event-specific data payload</li>
    </ul>
  </div>
</div>

## Example Webhook Events

<div className="webhook-examples-section">
  <div className="webhook-example-tabs">
    <div className="webhook-example-tab">
      <h3>Payment Events</h3>
      <div className="code-block-container">
        <pre className="code-block">
```json
// session.created
{
  "event_type": "session.created",
  "created_at": "2023-05-15T10:00:00Z",
  "data": {
    "session_id": "SESSION_00001",
    "merchant_id": "MERCHANT_001",
    "customer_id": "CUSTOMER_001",
    "status": "pending",
    "payment_method": "card",
    "amount": 25.00,
    "currency": "USD",
    "metadata": {
      "product_id": "PROD_123"
    }
  }
}

// charge.created
{
"event_type": "charge.created",
"created_at": "2023-05-15T10:05:00Z",
"data": {
"transaction_id": "TRANSACTION_10001",
"merchant_id": "MERCHANT_001",
"customer_id": "CUSTOMER_001",
"amount": 50.00,
"currency": "USD",
"status": "pending",
"payment_method": "card",
"created_at": "2023-05-15T10:05:00Z",
"metadata": {
"order_id": "ORDER_001"
}
}
}

// charge.updated
{
"event_type": "charge.updated",
"created_at": "2023-05-15T10:10:00Z",
"data": {
"transaction_id": "TRANSACTION_10001",
"merchant_id": "MERCHANT_001",
"customer_id": "CUSTOMER_001",
"amount": 50.00,
"currency": "USD",
"status": "processing",
"payment_method": "card",
"updated_at": "2023-05-15T10:10:00Z",
"metadata": {
"order_id": "ORDER_001"
}
}
}

// charge.completed
{
"event_type": "charge.completed",
"created_at": "2023-05-15T10:15:00Z",
"data": {
"transaction_id": "TRANSACTION_10001",
"merchant_id": "MERCHANT_001",
"customer_id": "CUSTOMER_001",
"amount": 50.00,
"currency": "USD",
"status": "completed",
"payment_method": "card",
"completed_at": "2023-05-15T10:15:00Z",
"customer": {
"name": "John Doe",
"email": "john.doe@example.com"
},
"metadata": {
"order_id": "ORDER_001"
}
}
}

// charge.failed
{
"event_type": "charge.failed",
"created_at": "2023-05-15T10:20:00Z",
"data": {
"transaction_id": "TRANSACTION_10002",
"merchant_id": "MERCHANT_001",
"customer_id": "CUSTOMER_002",
"amount": 100.00,
"currency": "USD",
"status": "failed",
"payment_method": "card",
"failure_code": "card_declined",
"failure_message": "The card was declined.",
"failed_at": "2023-05-15T10:20:00Z",
"metadata": {
"order_id": "ORDER_002"
}
}
}

// charge.cancelled
{
"event_type": "charge.cancelled",
"created_at": "2023-05-15T10:25:00Z",
"data": {
"transaction_id": "TRANSACTION_10003",
"merchant_id": "MERCHANT_001",
"customer_id": "CUSTOMER_003",
"amount": 75.00,
"currency": "USD",
"status": "cancelled",
"payment_method": "card",
"cancelled_at": "2023-05-15T10:25:00Z",
"metadata": {
"order_id": "ORDER_003"
}
}
}

````
        </pre>
      </div>
    </div>

    <div className="webhook-example-tab">
      <h3>Refund Events</h3>
      <div className="code-block-container">
        <pre className="code-block">
```json
// refund.created
{
  "event_type": "refund.created",
  "created_at": "2023-05-15T10:30:00Z",
  "data": {
    "refund_id": "REFUND_0001",
    "transaction_id": "TRANSACTION_10004",
    "merchant_id": "MERCHANT_001",
    "amount": 25.00,
    "currency": "USD",
    "status": "pending",
    "created_at": "2023-05-15T10:30:00Z",
    "metadata": {
      "order_id": "ORDER_004"
    }
  }
}

// refund.updated
{
  "event_type": "refund.updated",
  "created_at": "2023-05-15T10:35:00Z",
  "data": {
    "refund_id": "REFUND_0001",
    "transaction_id": "TRANSACTION_10004",
    "merchant_id": "MERCHANT_001",
    "amount": 25.00,
    "currency": "USD",
    "status": "processing",
    "updated_at": "2023-05-15T10:35:00Z",
    "metadata": {
      "order_id": "ORDER_004"
    }
  }
}

// refund.failed
{
  "event_type": "refund.failed",
  "created_at": "2023-05-15T10:40:00Z",
  "data": {
    "refund_id": "REFUND_0002",
    "transaction_id": "TRANSACTION_10005",
    "merchant_id": "MERCHANT_001",
    "amount": 50.00,
    "currency": "USD",
    "status": "failed",
    "failure_code": "refund_failed",
    "failure_message": "Refund processing failed.",
    "failed_at": "2023-05-15T10:40:00Z",
    "metadata": {
      "order_id": "ORDER_005"
    }
  }
}

// charge.refunded
{
  "event_type": "charge.refunded",
  "created_at": "2023-05-15T10:45:00Z",
  "data": {
    "transaction_id": "TRANSACTION_10004",
    "merchant_id": "MERCHANT_001",
    "customer_id": "CUSTOMER_004",
    "amount": 25.00,
    "currency": "USD",
    "status": "refunded",
    "refunded_at": "2023-05-15T10:45:00Z",
    "refund_id": "REFUND_0001",
    "metadata": {
      "order_id": "ORDER_004"
    }
  }
}
````

        </pre>
      </div>
    </div>

    <div className="webhook-example-tab">
      <h3>Dispute Events</h3>
      <div className="code-block-container">
        <pre className="code-block">

```json
// charge.dispute.created
{
  "event_type": "charge.dispute.created",
  "created_at": "2023-05-15T10:50:00Z",
  "data": {
    "dispute_id": "DISPUTE_0001",
    "transaction_id": "TRANSACTION_10006",
    "merchant_id": "MERCHANT_001",
    "amount": 100.00,
    "currency": "USD",
    "status": "open",
    "reason": "fraudulent",
    "created_at": "2023-05-15T10:50:00Z",
    "metadata": {
      "order_id": "ORDER_006"
    }
  }
}

// charge.dispute.closed
{
  "event_type": "charge.dispute.closed",
  "created_at": "2023-05-15T10:55:00Z",
  "data": {
    "dispute_id": "DISPUTE_0001",
    "transaction_id": "TRANSACTION_10006",
    "merchant_id": "MERCHANT_001",
    "amount": 100.00,
    "currency": "USD",
    "status": "won",
    "closed_at": "2023-05-15T10:55:00Z",
    "metadata": {
      "order_id": "ORDER_006"
    }
  }
}
```

        </pre>
      </div>
    </div>

    <div className="webhook-example-tab">
      <h3>Subscription Events</h3>
      <div className="code-block-container">
        <pre className="code-block">

```json
// subscription.created
{
  "event_type": "subscription.created",
  "created_at": "2023-05-15T11:00:00Z",
  "data": {
    "subscription_id": "SUBSCRIPTION_0001",
    "merchant_id": "MERCHANT_001",
    "customer_id": "CUSTOMER_005",
    "plan_id": "PLAN_001",
    "status": "active",
    "amount": 20.00,
    "currency": "USD",
    "interval": "month",
    "created_at": "2023-05-15T11:00:00Z",
    "metadata": {
      "product_id": "PROD_456"
    }
  }
}

// subscription.updated
{
  "event_type": "subscription.updated",
  "created_at": "2023-05-15T11:05:00Z",
  "data": {
    "subscription_id": "SUBSCRIPTION_0001",
    "merchant_id": "MERCHANT_001",
    "customer_id": "CUSTOMER_005",
    "plan_id": "PLAN_001",
    "status": "active",
    "amount": 25.00,
    "currency": "USD",
    "interval": "month",
    "updated_at": "2023-05-15T11:05:00Z",
    "metadata": {
      "product_id": "PROD_456"
    }
  }
}

// subscription.cancelled
{
  "event_type": "subscription.cancelled",
  "created_at": "2023-05-15T11:10:00Z",
  "data": {
    "subscription_id": "SUBSCRIPTION_0001",
    "merchant_id": "MERCHANT_001",
    "customer_id": "CUSTOMER_005",
    "plan_id": "PLAN_001",
    "status": "cancelled",
    "amount": 25.00,
    "currency": "USD",
    "interval": "month",
    "cancelled_at": "2023-05-15T11:10:00Z",
    "metadata": {
      "product_id": "PROD_456"
    }
  }
}

// subscription.payment.failed
{
  "event_type": "subscription.payment.failed",
  "created_at": "2023-05-15T11:15:00Z",
  "data": {
    "subscription_id": "SUBSCRIPTION_0002",
    "merchant_id": "MERCHANT_001",
    "customer_id": "CUSTOMER_006",
    "plan_id": "PLAN_002",
    "status": "past_due",
    "amount": 20.00,
    "currency": "USD",
    "interval": "month",
    "failure_code": "card_declined",
    "failure_message": "The card was declined.",
    "failed_at": "2023-05-15T11:15:00Z",
    "metadata": {
      "product_id": "PROD_789"
    }
  }
}

// subscription.expired
{
  "event_type": "subscription.expired",
  "created_at": "2023-05-15T11:20:00Z",
  "data": {
    "subscription_id": "SUBSCRIPTION_0003",
    "merchant_id": "MERCHANT_001",
    "customer_id": "CUSTOMER_007",
    "plan_id": "PLAN_003",
    "status": "expired",
    "amount": 30.00,
    "currency": "USD",
    "interval": "month",
    "expired_at": "2023-05-15T11:20:00Z",
    "metadata": {
      "product_id": "PROD_101"
    }
  }
}
```

        </pre>
      </div>
    </div>

  </div>
</div>

## Verifying Webhooks

<div className="security-section">
  <div className="security-card">
    <h3>🔒 Webhook Signature Verification</h3>
    <p>To ensure that webhook requests are coming from LiasonPay and not a malicious third party, you should verify the webhook signature:</p>

    <div className="verification-steps">
      <div className="verification-step">
        <div className="step-number">1</div>
        <div className="step-content">
          <p>LiasonPay includes a <code>Liasonpay-Signature</code> header in each webhook request</p>
        </div>
      </div>

      <div className="verification-step">
        <div className="step-number">2</div>
        <div className="step-content">
          <p>The header contains a timestamp and a signature</p>
        </div>
      </div>

      <div className="verification-step">
        <div className="step-number">3</div>
        <div className="step-content">
          <p>You can verify the signature using your webhook secret</p>
        </div>
      </div>
    </div>

    <div className="code-example">
      <h4>Example Signature Verification in Node.js</h4>
      <div className="code-block-container">
        <pre className="code-block">

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

        </pre>
      </div>
    </div>

    <div className="warning-callout">
      <p><strong>⚠️ Important:</strong> Always verify webhook signatures to ensure the requests are coming from LiasonPay.</p>
    </div>

  </div>
</div>

## Handling Webhook Events

<div className="webhook-handler-section">
  <div className="webhook-handler-card">
    <h3>🔄 Example Webhook Handler</h3>
    <p>Here's how to handle webhook events in an Express.js application:</p>

    <div className="code-block-container">
      <pre className="code-block">

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

      </pre>
    </div>

    <div className="info-callout">
      <p><strong>💡 Tip:</strong> Always acknowledge receipt of the webhook immediately with a 200 response, then process the webhook asynchronously.</p>
    </div>

  </div>
</div>

## Event Handling Guide

<div className="event-handling-section">
  <div className="event-handling-grid">
    <div className="event-handling-card">
      <h3>💳 Charge Events</h3>
      <ul className="event-handling-list">
        <li><strong>session.created</strong>: A payment session has been created but not yet completed. Update your internal records to track the session.</li>
        <li><strong>charge.created</strong>: A charge has been initiated. Update your order status to "pending payment".</li>
        <li><strong>charge.completed</strong>: A charge has been successfully completed. Update your order status to "paid" and fulfill the order.</li>
        <li><strong>charge.failed</strong>: A charge attempt failed. Notify the customer and provide options to retry the payment.</li>
        <li><strong>charge.cancelled</strong>: A charge was cancelled. Update your order status accordingly.</li>
      </ul>
    </div>

    <div className="event-handling-card">
      <h3>💰 Refund Events</h3>
      <ul className="event-handling-list">
        <li><strong>refund.created</strong>: A refund has been initiated. Update your internal records to reflect the pending refund.</li>
        <li><strong>refund.updated</strong>: A refund's status has changed. Check the status field to determine the current state.</li>
        <li><strong>refund.failed</strong>: A refund attempt failed. Try an alternative refund method or contact the customer.</li>
        <li><strong>charge.refunded</strong>: A charge has been successfully refunded. Update your order status and accounting records.</li>
      </ul>
    </div>

    <div className="event-handling-card">
      <h3>⚠️ Dispute Events</h3>
      <ul className="event-handling-list">
        <li><strong>charge.dispute.created</strong>: A customer has initiated a dispute (chargeback). Gather evidence to respond to the dispute.</li>
        <li><strong>charge.dispute.closed</strong>: A dispute has been resolved. Check the outcome to determine if you won or lost the dispute.</li>
      </ul>
    </div>

    <div className="event-handling-card">
      <h3>🔄 Subscription Events</h3>
      <ul className="event-handling-list">
        <li><strong>subscription.created</strong>: A new subscription has been created. Provision access to your service.</li>
        <li><strong>subscription.updated</strong>: A subscription has been updated. Check what changed and update your records accordingly.</li>
        <li><strong>subscription.cancelled</strong>: A subscription has been cancelled. Revoke access at the end of the current billing period.</li>
        <li><strong>subscription.payment.failed</strong>: A subscription payment failed. Notify the customer and attempt to recover the payment.</li>
        <li><strong>subscription.expired</strong>: A subscription has reached its end date. Revoke access to your service.</li>
      </ul>
    </div>

  </div>
</div>

## Best Practices for Webhooks

<div className="best-practices-section">
  <div className="best-practices-grid">
    <div className="best-practice-card">
      <div className="best-practice-icon">⚡</div>
      <div className="best-practice-content">
        <h4>Respond Quickly</h4>
        <p>Return a 200 response as soon as possible, then process the webhook asynchronously</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">🔄</div>
      <div className="best-practice-content">
        <h4>Implement Idempotency</h4>
        <p>Handle duplicate webhook events gracefully by checking if you've already processed an event with the same ID</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">🔐</div>
      <div className="best-practice-content">
        <h4>Verify Signatures</h4>
        <p>Always verify webhook signatures to ensure authenticity and prevent malicious requests</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">📝</div>
      <div className="best-practice-content">
        <h4>Log Webhook Events</h4>
        <p>Keep logs of received webhooks for debugging and auditing purposes</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">🔁</div>
      <div className="best-practice-content">
        <h4>Implement Retry Logic</h4>
        <p>Be prepared to handle cases where your webhook endpoint is temporarily unavailable</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">📊</div>
      <div className="best-practice-content">
        <h4>Monitor Webhook Deliveries</h4>
        <p>Set up monitoring to detect failed webhook deliveries and ensure you're receiving all events</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">📋</div>
      <div className="best-practice-content">
        <h4>Process Events in Order</h4>
        <p>Some events may depend on others, so process them in the order they were received</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">🔍</div>
      <div className="best-practice-content">
        <h4>Handle All Event Types</h4>
        <p>Be prepared to handle all event types, even ones you don't explicitly subscribe to</p>
      </div>
    </div>

  </div>
</div>

## Testing Webhooks

<div className="testing-section">
  <div className="testing-card">
    <h3>🧪 Testing in Sandbox</h3>
    <p>You can test webhooks in the sandbox environment:</p>

    <div className="testing-steps">
      <div className="testing-step">
        <div className="step-icon">🔧</div>
        <div className="step-content">
          <h4>Set Up Webhook Endpoint</h4>
          <p>Set up a webhook endpoint in your sandbox account</p>
        </div>
      </div>

      <div className="testing-step">
        <div className="step-icon">🌐</div>
        <div className="step-content">
          <h4>Expose Local Server</h4>
          <p>Use a tool like <a href="https://ngrok.com/" target="_blank" rel="noopener noreferrer">ngrok</a> to expose your local development server</p>
        </div>
      </div>

      <div className="testing-step">
        <div className="step-icon">🧪</div>
        <div className="step-content">
          <h4>Trigger Test Events</h4>
          <p>Trigger test events by creating test payments or subscriptions</p>
        </div>
      </div>

      <div className="testing-step">
        <div className="step-icon">📋</div>
        <div className="step-content">
          <h4>Check Logs</h4>
          <p>Check your logs to ensure webhooks are being received and processed correctly</p>
        </div>
      </div>
    </div>

    <div className="info-callout">
      <p><strong>💡 Tip:</strong> You can also use services like <a href="https://webhook.site" target="_blank" rel="noopener noreferrer">webhook.site</a> for quick testing during development.</p>
    </div>

  </div>
</div>

## Webhook Retry Policy

<div className="retry-policy-section">
  <div className="retry-policy-card">
    <h3>🔄 Automatic Retries</h3>
    <p>If your webhook endpoint returns a non-200 response, LiasonPay will retry the webhook with the following schedule:</p>

    <div className="retry-schedule">
      <div className="retry-item">
        <div className="retry-number">1st</div>
        <div className="retry-time">5 minutes after the initial attempt</div>
      </div>

      <div className="retry-item">
        <div className="retry-number">2nd</div>
        <div className="retry-time">30 minutes after the 1st retry</div>
      </div>

      <div className="retry-item">
        <div className="retry-number">3rd</div>
        <div className="retry-time">2 hours after the 2nd retry</div>
      </div>

      <div className="retry-item">
        <div className="retry-number">4th</div>
        <div className="retry-time">5 hours after the 3rd retry</div>
      </div>

      <div className="retry-item">
        <div className="retry-number">5th</div>
        <div className="retry-time">10 hours after the 4th retry</div>
      </div>
    </div>

    <div className="warning-callout">
      <p><strong>⚠️ Important:</strong> After the 5th retry, the webhook will be marked as failed and will not be retried again.</p>
    </div>

  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>How do I know if a webhook is from LiasonPay?</h3>
    <p>Always verify the webhook signature using your webhook secret to ensure the request is coming from LiasonPay.</p>
  </div>

  <div className="faq-item">
    <h3>What happens if my webhook endpoint is down?</h3>
    <p>LiasonPay will retry sending the webhook according to the retry policy. Make sure your endpoint is designed to handle temporary outages.</p>
  </div>

  <div className="faq-item">
    <h3>Can I receive webhooks for specific events only?</h3>
    <p>Yes, you can select which events you want to receive notifications for when setting up your webhook endpoint in the dashboard.</p>
  </div>

  <div className="faq-item">
    <h3>How do I handle duplicate webhook events?</h3>
    <p>Implement idempotency by storing processed webhook IDs and checking if you've already processed an event before taking action.</p>
  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-steps-header">
    <div className="next-steps-header-content">
      <h3>Continue Your Integration Journey</h3>
      <p>Explore these resources to enhance your LiasonPay integration</p>
    </div>
  </div>

  <div className="next-steps-grid">
    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">❌</div>
        </div>
        <div className="next-step-number">Related</div>
      </div>
      <div className="next-step-card-content">
        <h4>Error Handling</h4>
        <p>Learn how to handle API errors effectively</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Understand error codes and messages</li>
          <li><span className="benefit-icon">✓</span> Implement proper error handling</li>
          <li><span className="benefit-icon">✓</span> Create better user experiences</li>
        </ul>
        <div className="next-step-action">
          <a href="./error-handling" className="button button--primary">
            <span className="button-text">View Error Handling Guide</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">📚</div>
        </div>
        <div className="next-step-number">Reference</div>
      </div>
      <div className="next-step-card-content">
        <h4>API Reference</h4>
        <p>Explore detailed documentation for all API endpoints</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> View all available endpoints</li>
          <li><span className="benefit-icon">✓</span> See request and response formats</li>
          <li><span className="benefit-icon">✓</span> Understand parameter requirements</li>
        </ul>
        <div className="next-step-action">
          <a href="/api-reference" className="button button--primary">
            <span className="button-text">View API Reference</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">🧪</div>
        </div>
        <div className="next-step-number">Tools</div>
      </div>
      <div className="next-step-card-content">
        <h4>API Testing</h4>
        <p>Test API endpoints directly in your browser</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Try out API requests</li>
          <li><span className="benefit-icon">✓</span> See real responses</li>
          <li><span className="benefit-icon">✓</span> Debug your integration</li>
        </ul>
        <div className="next-step-action">
          <a href="/interactive-tools/api-testing" className="button button--primary">
            <span className="button-text">Open API Testing Tool</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

  </div>

  <div className="help-resources-box">
    <div className="help-icon">💬</div>
    <div className="help-content">
      <h4>Need Help?</h4>
      <p>If you have any questions or need assistance with webhooks, our support team is here to help.</p>
      <div className="help-actions">
        <a href="https://liasonpay.net/support" target="_blank" rel="noopener noreferrer" className="button button--secondary">
          <span className="button-text">Contact Support</span>
        </a>
        <a href="/developer-guide/faq" className="button button--secondary">
          <span className="button-text">View FAQ</span>
        </a>
      </div>
    </div>
  </div>
</div>
