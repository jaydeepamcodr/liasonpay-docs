/**
 * Code examples for the Webhooks page
 */

// Webhook handler example
export const webhookHandler = {
  javascript: {
    language: 'javascript',
    label: 'Node.js (Express)',
    code: `const express = require("express");
const crypto = require("crypto");
const app = express();

app.post("/webhooks/liasonpay", express.json(), (req, res) => {
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

  // Handle different event types
  switch (event.event_type) {
    case "charge.completed":
      // Handle successful payment
      updateOrderStatus(event.data.transaction_id, "paid");
      sendOrderConfirmation(event.data.customer.email);
      break;
    case "charge.failed":
      // Handle failed payment
      updateOrderStatus(event.data.transaction_id, "payment_failed");
      sendPaymentFailureNotification(event.data.customer.email);
      break;
    case "subscription.created":
      // Handle new subscription
      activateSubscription(event.data.subscription_id);
      break;
    case "subscription.renewed":
      // Handle subscription renewal
      extendSubscriptionPeriod(event.data.subscription_id);
      break;
    case "subscription.cancelled":
      // Handle subscription cancellation
      deactivateSubscription(event.data.subscription_id);
      break;
    // Handle other event types...
    default:
      console.log(\`Received event: \${event.event_type}\`);
  }
});

// Function to verify webhook signature
function verifyWebhookSignature(payload, signature, secret) {
  if (!payload || !signature || !secret) {
    return false;
  }

  const hmac = crypto.createHmac("sha256", secret);
  const calculatedSignature = hmac
    .update(JSON.stringify(payload))
    .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(calculatedSignature),
    Buffer.from(signature)
  );
}

app.listen(3000, () => {
  console.log("Webhook server listening on port 3000");
});`
  },
  python: {
    language: 'python',
    label: 'Python (Flask)',
    code: `from flask import Flask, request, jsonify
import hmac
import hashlib
import json
import os

app = Flask(__name__)

@app.route('/webhooks/liasonpay', methods=['POST'])
def handle_webhook():
    # Get the signature from the headers
    signature = request.headers.get('liasonpay-signature')
    
    # Get the webhook secret from environment variables
    webhook_secret = os.environ.get('WEBHOOK_SECRET')
    
    # Verify the signature
    if not verify_webhook_signature(request.data, signature, webhook_secret):
        return jsonify({'error': 'Invalid signature'}), 401
    
    # Acknowledge receipt immediately
    response = jsonify({'status': 'received'})
    
    # Process the webhook data
    event = request.json
    event_type = event.get('event_type')
    
    # Handle different event types
    if event_type == 'charge.completed':
        # Handle successful payment
        transaction_id = event.get('data', {}).get('transaction_id')
        customer_email = event.get('data', {}).get('customer', {}).get('email')
        update_order_status(transaction_id, 'paid')
        send_order_confirmation(customer_email)
    
    elif event_type == 'charge.failed':
        # Handle failed payment
        transaction_id = event.get('data', {}).get('transaction_id')
        customer_email = event.get('data', {}).get('customer', {}).get('email')
        update_order_status(transaction_id, 'payment_failed')
        send_payment_failure_notification(customer_email)
    
    elif event_type == 'subscription.created':
        # Handle new subscription
        subscription_id = event.get('data', {}).get('subscription_id')
        activate_subscription(subscription_id)
    
    elif event_type == 'subscription.renewed':
        # Handle subscription renewal
        subscription_id = event.get('data', {}).get('subscription_id')
        extend_subscription_period(subscription_id)
    
    elif event_type == 'subscription.cancelled':
        # Handle subscription cancellation
        subscription_id = event.get('data', {}).get('subscription_id')
        deactivate_subscription(subscription_id)
    
    else:
        # Log unknown event types
        print(f"Received event: {event_type}")
    
    return response

def verify_webhook_signature(payload, signature, secret):
    """Verify the webhook signature"""
    if not payload or not signature or not secret:
        return False
    
    # Create HMAC using the secret
    calculated_signature = hmac.new(
        secret.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()
    
    # Compare signatures using constant-time comparison
    return hmac.compare_digest(calculated_signature, signature)

# Helper functions (implement these according to your application)
def update_order_status(transaction_id, status):
    # Update order status in your database
    print(f"Updating order status for transaction {transaction_id} to {status}")

def send_order_confirmation(email):
    # Send confirmation email
    print(f"Sending order confirmation to {email}")

def send_payment_failure_notification(email):
    # Send payment failure notification
    print(f"Sending payment failure notification to {email}")

def activate_subscription(subscription_id):
    # Activate subscription in your system
    print(f"Activating subscription {subscription_id}")

def extend_subscription_period(subscription_id):
    # Extend subscription period
    print(f"Extending subscription period for {subscription_id}")

def deactivate_subscription(subscription_id):
    # Deactivate subscription
    print(f"Deactivating subscription {subscription_id}")

if __name__ == '__main__':
    app.run(port=3000)`
  },
  php: {
    language: 'php',
    label: 'PHP',
    code: `<?php
// Webhook handler for LiasonPay events

// Get the raw POST data
$payload = file_get_contents('php://input');
$event = json_decode($payload, true);

// Get the signature from the headers
$signature = $_SERVER['HTTP_LIASONPAY_SIGNATURE'] ?? '';

// Get the webhook secret from environment
$webhookSecret = getenv('WEBHOOK_SECRET');

// Verify the signature
if (!verifyWebhookSignature($payload, $signature, $webhookSecret)) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid signature']);
    exit;
}

// Acknowledge receipt immediately
http_response_code(200);
echo json_encode(['status' => 'received']);

// Process the webhook based on event type
$eventType = $event['event_type'] ?? '';

switch ($eventType) {
    case 'charge.completed':
        // Handle successful payment
        $transactionId = $event['data']['transaction_id'] ?? '';
        $customerEmail = $event['data']['customer']['email'] ?? '';
        updateOrderStatus($transactionId, 'paid');
        sendOrderConfirmation($customerEmail);
        break;
        
    case 'charge.failed':
        // Handle failed payment
        $transactionId = $event['data']['transaction_id'] ?? '';
        $customerEmail = $event['data']['customer']['email'] ?? '';
        updateOrderStatus($transactionId, 'payment_failed');
        sendPaymentFailureNotification($customerEmail);
        break;
        
    case 'subscription.created':
        // Handle new subscription
        $subscriptionId = $event['data']['subscription_id'] ?? '';
        activateSubscription($subscriptionId);
        break;
        
    case 'subscription.renewed':
        // Handle subscription renewal
        $subscriptionId = $event['data']['subscription_id'] ?? '';
        extendSubscriptionPeriod($subscriptionId);
        break;
        
    case 'subscription.cancelled':
        // Handle subscription cancellation
        $subscriptionId = $event['data']['subscription_id'] ?? '';
        deactivateSubscription($subscriptionId);
        break;
        
    default:
        // Log unknown event types
        error_log("Received unknown event type: {$eventType}");
}

// Function to verify webhook signature
function verifyWebhookSignature($payload, $signature, $secret) {
    if (empty($payload) || empty($signature) || empty($secret)) {
        return false;
    }
    
    // Calculate HMAC signature
    $calculatedSignature = hash_hmac('sha256', $payload, $secret);
    
    // Compare signatures using constant-time comparison
    return hash_equals($calculatedSignature, $signature);
}

// Helper functions (implement these according to your application)
function updateOrderStatus($transactionId, $status) {
    // Update order status in your database
    error_log("Updating order status for transaction {$transactionId} to {$status}");
}

function sendOrderConfirmation($email) {
    // Send confirmation email
    error_log("Sending order confirmation to {$email}");
}

function sendPaymentFailureNotification($email) {
    // Send payment failure notification
    error_log("Sending payment failure notification to {$email}");
}

function activateSubscription($subscriptionId) {
    // Activate subscription in your system
    error_log("Activating subscription {$subscriptionId}");
}

function extendSubscriptionPeriod($subscriptionId) {
    // Extend subscription period
    error_log("Extending subscription period for {$subscriptionId}");
}

function deactivateSubscription($subscriptionId) {
    // Deactivate subscription
    error_log("Deactivating subscription {$subscriptionId}");
}
?>`
  }
};

// Webhook event examples
export const webhookEvents = {
  chargeCompleted: {
    language: 'json',
    label: 'charge.completed',
    code: `{
  "event_type": "charge.completed",
  "created_at": "2023-07-15T14:30:45Z",
  "data": {
    "transaction_id": "txn_123456789",
    "amount": 100.00,
    "currency": "usd",
    "status": "completed",
    "payment_method": "card",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone_number": "+1234567890"
    },
    "metadata": {
      "order_id": "order_123456"
    }
  }
}`
  },
  chargeFailed: {
    language: 'json',
    label: 'charge.failed',
    code: `{
  "event_type": "charge.failed",
  "created_at": "2023-07-15T14:32:10Z",
  "data": {
    "transaction_id": "txn_123456790",
    "amount": 100.00,
    "currency": "usd",
    "status": "failed",
    "failure_reason": "insufficient_funds",
    "payment_method": "card",
    "customer": {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "phone_number": "+1234567891"
    },
    "metadata": {
      "order_id": "order_123457"
    },
    "payment_token_id": "tok_123456789"
  }
}`
  },
  subscriptionCreated: {
    language: 'json',
    label: 'subscription.created',
    code: `{
  "event_type": "subscription.created",
  "created_at": "2023-07-15T15:00:00Z",
  "data": {
    "subscription_id": "sub_123456789",
    "customer_id": "cus_123456789",
    "price_id": "price_123456789",
    "status": "active",
    "current_period_start": "2023-07-15T15:00:00Z",
    "current_period_end": "2023-08-15T15:00:00Z",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone_number": "+1234567890"
    },
    "metadata": {
      "plan_name": "Premium Plan"
    }
  }
}`
  },
  subscriptionRenewed: {
    language: 'json',
    label: 'subscription.renewed',
    code: `{
  "event_type": "subscription.renewed",
  "created_at": "2023-08-15T15:00:00Z",
  "data": {
    "subscription_id": "sub_123456789",
    "customer_id": "cus_123456789",
    "price_id": "price_123456789",
    "status": "active",
    "current_period_start": "2023-08-15T15:00:00Z",
    "current_period_end": "2023-09-15T15:00:00Z",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone_number": "+1234567890"
    },
    "metadata": {
      "plan_name": "Premium Plan"
    }
  }
}`
  },
  subscriptionCancelled: {
    language: 'json',
    label: 'subscription.cancelled',
    code: `{
  "event_type": "subscription.cancelled",
  "created_at": "2023-08-10T09:45:30Z",
  "data": {
    "subscription_id": "sub_123456789",
    "customer_id": "cus_123456789",
    "price_id": "price_123456789",
    "status": "cancelled",
    "cancelled_at": "2023-08-10T09:45:30Z",
    "cancellation_reason": "customer_requested",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone_number": "+1234567890"
    },
    "metadata": {
      "plan_name": "Premium Plan"
    }
  }
}`
  }
};
