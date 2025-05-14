---
sidebar_position: 2
---

import ApiTester from '@site/src/components/ApiTester';

# Create Subscription

<span className="badge badge--primary">requires authentication</span>

```http
POST /api/v1/subscription/create
```

Create a new subscription for a customer.

## Request Parameters

### Body Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| store_id | string | Yes | The ID of the store. The `store_id` of an existing record in the stores table. Must not be greater than 255 characters. |
| price_id | string | Yes | The ID of the price. The `price_id` of an existing record in the prices table. Must not be greater than 255 characters. |
| trial_period_days | integer | No | The number of days for the trial period. Note: Flutterwave does not support trials. Must be at least 0. |
| customer | object | No | The customer details. |
| customer.name | string | No | The name of the customer. Must not be greater than 255 characters. |
| customer.email | string | No | The email of the customer. Must be a valid email address. Must not be greater than 255 characters. |
| customer.phone_number | string | No | The phone number of the customer. Must not be greater than 255 characters. |
| metadata | object | No | The metadata of the payment. |
| metadata.order_id | string | No | The order ID. |
| metadata.order_code | string | No | The order code. |
| success_url | string | Yes | The URL to redirect to after successful payment. Must be a valid URL. |
| cancel_url | string | Yes | The URL to redirect to after payment cancellation. Must be a valid URL. |
| return_url | string | No | The URL to redirect to after payment completion. Must be a valid URL. |
| mode | string | Yes | The mode of the payment. Must be one of: `sandbox`, `production`. |

## Response

### Response Parameters

| Name | Type | Description |
|------|------|-------------|
| status | boolean | Whether the request was successful. |
| message | string | A message describing the result of the request. |
| data | object | The subscription data. |
| data.subscription_request_id | string | The ID of the subscription request. Use this to verify the subscription status. |
| data.checkout_url | string | The URL to redirect the customer to for completing the subscription setup. |

## Example Request

### cURL

```bash
curl --request POST \
    "https://liasonpay.net/api/v1/subscription/create" \
    --header "Authorization: Bearer {API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"store_id\": \"STORE_123\",
    \"price_id\": \"PRICE_ABC123\",
    \"trial_period_days\": 30,
    \"customer\": {
        \"name\": \"John Doe\",
        \"email\": \"john.doe@example.com\",
        \"phone_number\": \"+2348123456789\"
    },
    \"metadata\": {
        \"order_id\": \"1234567890\",
        \"order_code\": \"ORD_1234567890\"
    },
    \"success_url\": \"https://example.com/success\",
    \"cancel_url\": \"https://example.com/cancel\",
    \"return_url\": \"https://example.com/return\",
    \"mode\": \"sandbox\"
}"
```

### Node.js

```javascript
const axios = require('axios');

const createSubscription = async () => {
  try {
    const response = await axios.post('https://liasonpay.net/api/v1/subscription/create', {
      store_id: 'STORE_123',
      price_id: 'PRICE_ABC123',
      trial_period_days: 30,
      customer: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone_number: '+2348123456789'
      },
      metadata: {
        order_id: '1234567890',
        order_code: 'ORD_1234567890'
      },
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
      return_url: 'https://example.com/return',
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
    console.error('Error creating subscription:', error.response?.data || error.message);
    throw error;
  }
};
```

### Python

```python
import requests
import json

def create_subscription():
    url = "https://liasonpay.net/api/v1/subscription/create"
    headers = {
        "Authorization": "Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "store_id": "STORE_123",
        "price_id": "PRICE_ABC123",
        "trial_period_days": 30,
        "customer": {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone_number": "+2348123456789"
        },
        "metadata": {
            "order_id": "1234567890",
            "order_code": "ORD_1234567890"
        },
        "success_url": "https://example.com/success",
        "cancel_url": "https://example.com/cancel",
        "return_url": "https://example.com/return",
        "mode": "sandbox"
    }
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error creating subscription: {e}")
        raise
```

## Example Response

```json
{
    "status": true,
    "message": "Payment processed successfully",
    "data": {
        "subscription_request_id": "552852D7C8",
        "checkout_url": "https://checkout.liasonpay.net/c/552852D7C8"
    }
}
```

## Error Responses

### Validation Error

```json
{
    "status": false,
    "message": "Validation error",
    "data": {
        "error_code": "validation_error",
        "errors": {
            "store_id": ["The store_id field is required."],
            "price_id": ["The price_id field is required."]
        }
    }
}
```

### Store Not Found

```json
{
    "status": false,
    "message": "Store not found",
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

- After creating a subscription, redirect the customer to the `checkout_url` to complete the subscription setup.
- Use the `subscription_request_id` with the [Verify Subscription](/api-reference/subscriptions/verify-subscription) endpoint to check the status of the subscription.
- If you provide customer details, a new customer will be created if one doesn't already exist with the provided email.
- The `trial_period_days` parameter is only supported with certain payment processors. Flutterwave does not support trial periods.
- The `mode` parameter determines whether the subscription is created in sandbox or production mode. Use `sandbox` for testing and `production` for live subscriptions.

## Interactive Testing

<ApiTester 
  endpoint="/api/v1/subscription/create" 
  method="POST"
  baseUrl="https://liasonpay.net" 
  params={[
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
      description: "The ID of the price" 
    },
    { 
      name: "trial_period_days", 
      required: false, 
      in: "body",
      description: "The number of days for the trial period" 
    },
    { 
      name: "customer", 
      required: false, 
      in: "body",
      description: "The customer details (object)" 
    },
    { 
      name: "metadata", 
      required: false, 
      in: "body",
      description: "The metadata of the payment (object)" 
    },
    { 
      name: "success_url", 
      required: true, 
      in: "body",
      description: "The URL to redirect to after successful payment" 
    },
    { 
      name: "cancel_url", 
      required: true, 
      in: "body",
      description: "The URL to redirect to after payment cancellation" 
    },
    { 
      name: "return_url", 
      required: false, 
      in: "body",
      description: "The URL to redirect to after payment completion" 
    },
    { 
      name: "mode", 
      required: true, 
      in: "body",
      description: "The mode of the payment (sandbox or production)" 
    }
  ]}
/>
