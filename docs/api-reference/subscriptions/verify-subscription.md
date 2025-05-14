---
sidebar_position: 3
---

import ApiTester from '@site/src/components/ApiTester';

# Verify Subscription

<span className="badge badge--primary">requires authentication</span>

```http
POST /api/v1/subscription/verify
```

Verify the status of a subscription after creation.

## Request Parameters

### Body Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| subscription_request_id | string | Yes | The ID of the subscription request. The `log_id` of an existing record in the subscription_logs table. Must not be greater than 255 characters. |

## Response

### Response Parameters

| Name | Type | Description |
|------|------|-------------|
| status | boolean | Whether the request was successful. |
| message | string | A message describing the result of the request. |
| data | object | The subscription data. |
| data.subscription_id | string | The unique identifier for the subscription. |
| data.store_id | string | The ID of the store the subscription belongs to. |
| data.customer_id | string | The ID of the customer who owns the subscription. |
| data.price_id | string | The ID of the price associated with the subscription. |
| data.status | string | The status of the subscription. Possible values: `active`, `canceled`, `past_due`, `unpaid`, `trialing`. |
| data.current_period_start | string | The start date of the current billing period in ISO 8601 format. |
| data.current_period_end | string | The end date of the current billing period in ISO 8601 format. |
| data.cancel_at_period_end | boolean | Whether the subscription will be canceled at the end of the current period. |
| data.canceled_at | string | If the subscription has been canceled, the date of that cancellation in ISO 8601 format. |
| data.created_at | string | The date the subscription was created in ISO 8601 format. |
| data.updated_at | string | The date the subscription was last updated in ISO 8601 format. |

## Example Request

### cURL

```bash
curl --request POST \
    "https://liasonpay.net/api/v1/subscription/verify" \
    --header "Authorization: Bearer {API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"subscription_request_id\": \"552852D7C8\"
}"
```

### Node.js

```javascript
const axios = require('axios');

const verifySubscription = async () => {
  try {
    const response = await axios.post('https://liasonpay.net/api/v1/subscription/verify', {
      subscription_request_id: '552852D7C8'
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
    console.error('Error verifying subscription:', error.response?.data || error.message);
    throw error;
  }
};
```

### Python

```python
import requests
import json

def verify_subscription():
    url = "https://liasonpay.net/api/v1/subscription/verify"
    headers = {
        "Authorization": "Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "subscription_request_id": "552852D7C8"
    }
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error verifying subscription: {e}")
        raise
```

## Example Response

```json
{
    "status": true,
    "message": "Subscription verified successfully",
    "data": {
        "subscription_id": "SUBSCRIPTION_56FBC7EEE4",
        "store_id": "STORE_65C0279F05",
        "customer_id": "CUSTOMER_8A7B6C5D4E",
        "price_id": "PRICE_1A2B3C4D5E",
        "status": "active",
        "current_period_start": "2023-05-01T00:00:00Z",
        "current_period_end": "2023-06-01T00:00:00Z",
        "cancel_at_period_end": false,
        "canceled_at": null,
        "created_at": "2023-04-15T10:30:00Z",
        "updated_at": "2023-04-15T10:30:00Z"
    }
}
```

## Error Responses

### Subscription Request Not Found

```json
{
    "status": false,
    "message": "Subscription request not found",
    "data": {
        "error_code": "resource_not_found"
    }
}
```

### Subscription Not Completed

```json
{
    "status": false,
    "message": "Subscription has not been completed",
    "data": {
        "error_code": "subscription_incomplete"
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

- Use this endpoint to verify the status of a subscription after redirecting the customer to the checkout URL.
- The `subscription_request_id` is returned from the [Create Subscription](/api-reference/subscriptions/create-subscription) endpoint.
- If the subscription has not been completed by the customer, the API will return an error with the `subscription_incomplete` error code.
- Once a subscription is verified as active, you can use the returned `subscription_id` with other subscription endpoints.
- It's recommended to implement webhook handling for subscription events to receive real-time updates about subscription status changes.

## Interactive Testing

<ApiTester 
  endpoint="/api/v1/subscription/verify" 
  method="POST"
  baseUrl="https://liasonpay.net" 
  params={[
    { 
      name: "subscription_request_id", 
      required: true, 
      in: "body",
      description: "The ID of the subscription request" 
    }
  ]}
/>
