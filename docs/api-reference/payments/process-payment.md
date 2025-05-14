---
sidebar_position: 1
---

import ApiTester from '@site/src/components/ApiTester';

# Process Payment

<span className="badge badge--primary">requires authentication</span>

```http
POST /api/v1/payments/process
```

Process a one-time payment.

## Request Parameters

### Body Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| store_id | string | Yes | The ID of the store. Must not be greater than 255 characters. |
| currency | string | Yes | The currency of the payment. Must not be greater than 3 characters. |
| products | array | Yes | The products to be purchased. |
| products[].name | string | Yes | The name of the product. Must not be greater than 255 characters. |
| products[].description | string | Yes | The description of the product. Must not be greater than 500 characters. |
| products[].price | number | Yes | The price of the product. Must be at least 1. |
| products[].quantity | integer | Yes | The quantity of the product. Must be at least 1. |
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
| coupon | string | No | The coupon code. The `code` of an existing record in the coupons table. |

## Response

### Response Parameters

| Name | Type | Description |
|------|------|-------------|
| status | boolean | Whether the request was successful. |
| message | string | A message describing the result of the request. |
| data | object | The payment data. |
| data.transaction_id | string | The ID of the transaction. Use this to verify the payment status. |
| data.checkout_url | string | The URL to redirect the customer to for completing the payment. |
| data.amount | number | The total amount of the payment. |
| data.currency | string | The currency of the payment. |

## Example Request

### cURL

```bash
curl --request POST \
    "https://liasonpay.net/api/v1/payments/process" \
    --header "Authorization: Bearer {API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"store_id\": \"STORE_1DB9B0447A\",
    \"currency\": \"usd\",
    \"products\": [
        {
            \"name\": \"Product 1\",
            \"description\": \"Product 1 description\",
            \"price\": 100,
            \"quantity\": 1
        }
    ],
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
    \"mode\": \"sandbox\",
    \"coupon\": \"GYRPVBK06Q\"
}"
```

### Node.js

```javascript
const axios = require('axios');

const processPayment = async () => {
  try {
    const response = await axios.post('https://liasonpay.net/api/v1/payments/process', {
      store_id: 'STORE_1DB9B0447A',
      currency: 'usd',
      products: [
        {
          name: 'Product 1',
          description: 'Product 1 description',
          price: 100,
          quantity: 1
        }
      ],
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
      mode: 'sandbox',
      coupon: 'GYRPVBK06Q'
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
    console.error('Error processing payment:', error.response?.data || error.message);
    throw error;
  }
};
```

### Python

```python
import requests
import json

def process_payment():
    url = "https://liasonpay.net/api/v1/payments/process"
    headers = {
        "Authorization": "Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "store_id": "STORE_1DB9B0447A",
        "currency": "usd",
        "products": [
            {
                "name": "Product 1",
                "description": "Product 1 description",
                "price": 100,
                "quantity": 1
            }
        ],
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
        "mode": "sandbox",
        "coupon": "GYRPVBK06Q"
    }
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error processing payment: {e}")
        raise
```

## Example Response

```json
{
    "status": true,
    "message": "Payment processed successfully",
    "data": {
        "transaction_id": "TRANSACTION_123456789",
        "checkout_url": "https://checkout.liasonpay.net/c/TRANSACTION_123456789",
        "amount": 100,
        "currency": "usd"
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
            "currency": ["The currency field is required."],
            "products": ["The products field is required."]
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

### Invalid Coupon

```json
{
    "status": false,
    "message": "Invalid coupon code",
    "data": {
        "error_code": "invalid_coupon"
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

- After processing a payment, redirect the customer to the `checkout_url` to complete the payment.
- Use the `transaction_id` with the [Verify Payment](/api-reference/payments/verify-payment) endpoint to check the status of the payment.
- If you provide customer details, a new customer will be created if one doesn't already exist with the provided email.
- The `mode` parameter determines whether the payment is processed in sandbox or production mode. Use `sandbox` for testing and `production` for live payments.
- The `coupon` parameter is optional and can be used to apply a discount to the payment.
- The total amount charged will be the sum of all products (price * quantity), minus any applicable discounts from coupons.
- Supported currencies include: `usd`, `eur`, `gbp`, `ngn`, `kes`, `ghs`, `zar`.

## Interactive Testing

<ApiTester 
  endpoint="/api/v1/payments/process" 
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
      name: "currency", 
      required: true, 
      in: "body",
      description: "The currency of the payment (e.g., usd)" 
    },
    { 
      name: "products", 
      required: true, 
      in: "body",
      description: "The products to be purchased (array of objects)" 
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
    },
    { 
      name: "coupon", 
      required: false, 
      in: "body",
      description: "The coupon code" 
    }
  ]}
/>
