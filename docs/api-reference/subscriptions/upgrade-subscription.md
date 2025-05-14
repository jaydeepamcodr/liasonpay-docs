---
sidebar_position: 5
---

import ApiTester from '@site/src/components/ApiTester';

# Upgrade Subscription

<span className="badge badge--primary">requires authentication</span>

```http
POST /api/v1/subscription/upgrade
```

Upgrade a subscription to a different price plan.

## Request Parameters

### Body Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| subscription_id | string | Yes | The ID of the subscription to upgrade. The `subscription_id` of an existing record in the subscriptions table. Must not be greater than 255 characters. |
| store_id | string | Yes | The ID of the store. The `store_id` of an existing record in the stores table. Must not be greater than 255 characters. |
| price_id | string | Yes | The ID of the price to use for the upgrade. The `price_id` of an existing record in the prices table. Must not be greater than 255 characters. |
| metadata | object | No | The metadata of the payment. |
| metadata.order_id | string | No | The order ID. |
| metadata.order_code | string | No | The order code. |
| mode | string | Yes | The mode of the payment. Must be one of: `sandbox`, `production`. |

## Response

### Response Parameters

| Name | Type | Description |
|------|------|-------------|
| status | boolean | Whether the request was successful. |
| message | string | A message describing the result of the request. |
| data | object | The upgrade data. |
| data.upgrade_request_id | string | The ID of the upgrade request. Use this to verify the upgrade status. |
| data.checkout_url | string | The URL to redirect the customer to for completing the upgrade process. |

## Example Request

### cURL

```bash
curl --request POST \
    "https://liasonpay.net/api/v1/subscription/upgrade" \
    --header "Authorization: Bearer {API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"subscription_id\": \"SUBSCRIPTION_879F7492C4\",
    \"store_id\": \"STORE_123\",
    \"price_id\": \"PRICE_ABC123\",
    \"metadata\": {
        \"order_id\": \"1234567890\",
        \"order_code\": \"ORD_1234567890\"
    },
    \"mode\": \"sandbox\"
}"
```

### Node.js

```javascript
const axios = require('axios');

const upgradeSubscription = async () => {
  try {
    const response = await axios.post('https://liasonpay.net/api/v1/subscription/upgrade', {
      subscription_id: 'SUBSCRIPTION_879F7492C4',
      store_id: 'STORE_123',
      price_id: 'PRICE_ABC123',
      metadata: {
        order_id: '1234567890',
        order_code: 'ORD_1234567890'
      },
      mode: 'sandbox'
    }, {
      headers: {
        'Authorization': 'Bearer {API_KEY}',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error upgrading subscription:', error.response?.data || error.message);
    throw error;
  }
};
```

### Python

```python
import requests
import json

def upgrade_subscription():
    url = "https://liasonpay.net/api/v1/subscription/upgrade"
    headers = {
        "Authorization": "Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "subscription_id": "SUBSCRIPTION_879F7492C4",
        "store_id": "STORE_123",
        "price_id": "PRICE_ABC123",
        "metadata": {
            "order_id": "1234567890",
            "order_code": "ORD_1234567890"
        },
        "mode": "sandbox"
    }
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error upgrading subscription: {e}")
        raise
```

## Example Response

```json
{
    "status": true,
    "message": "Subscription upgrade initiated successfully",
    "data": {
        "upgrade_request_id": "UPGRADE_123456789",
        "checkout_url": "https://checkout.liasonpay.net/c/UPGRADE_123456789"
    }
}
```

## Error Responses

### Subscription Not Found

```json
{
    "status": false,
    "message": "Subscription not found",
    "data": {
        "error_code": "resource_not_found"
    }
}
```

### Price Not Found

```json
{
    "status": false,
    "message": "Price not found",
    "data": {
        "error_code": "resource_not_found"
    }
}
```

### Same Price

```json
{
    "status": false,
    "message": "Cannot upgrade to the same price",
    "data": {
        "error_code": "invalid_upgrade"
    }
}
```

### Canceled Subscription

```json
{
    "status": false,
    "message": "Cannot upgrade a canceled subscription",
    "data": {
        "error_code": "subscription_canceled"
    }
}
```

### Authentication Error

```json
{
    "status": false,
    "message": "Invalid API key provided",
    "data": {
        "error_code": "authentication_error"
    }
}
```

## Notes

- Upgrading a subscription changes the price plan for the subscription.
- The system automatically handles proration based on the remaining time in the current billing period.
- After initiating an upgrade, redirect the customer to the `checkout_url` to complete the upgrade process.
- The original subscription remains active until the upgrade is completed.
- If the customer does not complete the upgrade process, the original subscription will continue unchanged.
- You will receive a webhook event `subscription.updated` when a subscription is successfully upgraded.
- The `mode` parameter must match the mode of the original subscription.

## Interactive Testing

<ApiTester 
  endpoint="/api/v1/subscription/upgrade" 
  method="POST"
  baseUrl="https://liasonpay.net" 
  params={[
    { 
      name: "subscription_id", 
      required: true, 
      in: "body",
      description: "The ID of the subscription to upgrade" 
    },
    { 
      name: "store_id", 
      required: true, 
      in: "body",
      description: "The ID of the store" 
    },
    { 
      name: "price_id", 
      required: true, 
      in: "body",
      description: "The ID of the price to use for the upgrade" 
    },
    { 
      name: "metadata", 
      required: false, 
      in: "body",
      description: "The metadata of the payment (object)" 
    },
    { 
      name: "mode", 
      required: true, 
      in: "body",
      description: "The mode of the payment (sandbox or production)" 
    }
  ]}
/>
