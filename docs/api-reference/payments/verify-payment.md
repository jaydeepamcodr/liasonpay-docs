---
sidebar_position: 2
---

import ApiTester from '@site/src/components/ApiTester';

# Verify Payment

<span className="badge badge--primary">requires authentication</span>

```http
POST /api/v1/payments/verify
```

Verify the status of a payment after processing.

## Request Parameters

### Body Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| transaction_id | string | Yes | The ID of the transaction. The `transaction_id` of an existing record in the transactions table. Must not be greater than 255 characters. |

## Response

### Response Parameters

| Name | Type | Description |
|------|------|-------------|
| status | boolean | Whether the request was successful. |
| message | string | A message describing the result of the request. |
| data | object | The payment data. |
| data.transaction_id | string | The unique identifier for the transaction. |
| data.store_id | string | The ID of the store the payment belongs to. |
| data.customer_id | string | The ID of the customer who made the payment. |
| data.amount | number | The total amount of the payment. |
| data.currency | string | The currency of the payment. |
| data.payment_status | string | The status of the payment. Possible values: `succeeded`, `pending`, `failed`, `canceled`. |
| data.payment_method | string | The payment method used. |
| data.metadata | object | The metadata associated with the payment. |
| data.created_at | string | The date the payment was created in ISO 8601 format. |
| data.updated_at | string | The date the payment was last updated in ISO 8601 format. |

## Example Request

### cURL

```bash
curl --request POST \
    "https://liasonpay.net/api/v1/payments/verify" \
    --header "Authorization: Bearer {API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"transaction_id\": \"TRANSACTION_123456789\"
}"
```

### Node.js

```javascript
const axios = require('axios');

const verifyPayment = async () => {
  try {
    const response = await axios.post('https://liasonpay.net/api/v1/payments/verify', {
      transaction_id: 'TRANSACTION_123456789'
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
    console.error('Error verifying payment:', error.response?.data || error.message);
    throw error;
  }
};
```

### Python

```python
import requests
import json

def verify_payment():
    url = "https://liasonpay.net/api/v1/payments/verify"
    headers = {
        "Authorization": "Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "transaction_id": "TRANSACTION_123456789"
    }
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error verifying payment: {e}")
        raise
```

## Example Response

```json
{
    "status": true,
    "message": "Payment verified successfully",
    "data": {
        "transaction_id": "TRANSACTION_123456789",
        "store_id": "STORE_1DB9B0447A",
        "customer_id": "CUSTOMER_8A7B6C5D4E",
        "amount": 100,
        "currency": "usd",
        "payment_status": "succeeded",
        "payment_method": "card",
        "metadata": {
            "order_id": "1234567890",
            "order_code": "ORD_1234567890"
        },
        "created_at": "2023-05-15T10:30:00Z",
        "updated_at": "2023-05-15T10:35:00Z"
    }
}
```

## Error Responses

### Transaction Not Found

```json
{
    "status": false,
    "message": "Transaction not found",
    "data": {
        "error_code": "resource_not_found"
    }
}
```

### Payment Not Completed

```json
{
    "status": false,
    "message": "Payment has not been completed",
    "data": {
        "error_code": "payment_incomplete",
        "payment_status": "pending"
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

- Use this endpoint to verify the status of a payment after redirecting the customer to the checkout URL.
- The `transaction_id` is returned from the [Process Payment](/api-reference/payments/process-payment) endpoint.
- If the payment has not been completed by the customer, the API will return an error with the `payment_incomplete` error code and the current payment status.
- Possible payment status values:
  - `succeeded`: The payment was successful
  - `pending`: The payment is still being processed
  - `failed`: The payment failed
  - `canceled`: The payment was canceled by the customer
- It's recommended to implement webhook handling for payment events to receive real-time updates about payment status changes.
- For security reasons, always verify payments on your server before fulfilling orders or providing access to purchased content.

## Interactive Testing

<ApiTester 
  endpoint="/api/v1/payments/verify" 
  method="POST"
  baseUrl="https://liasonpay.net" 
  params={[
    { 
      name: "transaction_id", 
      required: true, 
      in: "body",
      description: "The ID of the transaction" 
    }
  ]}
/>
