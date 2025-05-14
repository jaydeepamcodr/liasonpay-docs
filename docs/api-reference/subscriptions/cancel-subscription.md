---
sidebar_position: 4
---

import ApiTester from '@site/src/components/ApiTester';

# Cancel Subscription

<span className="badge badge--primary">requires authentication</span>

```http
POST /api/v1/subscription/cancel
```

Cancel an active subscription.

## Request Parameters

### Body Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| subscription_id | string | Yes | The ID of the subscription. The `subscription_id` of an existing record in the subscriptions table. Must not be greater than 255 characters. |
| cancel_at_period_end | boolean | No | Cancel the subscription at the end of the billing period. Default: `false`. |

## Response

### Response Parameters

| Name | Type | Description |
|------|------|-------------|
| status | boolean | Whether the request was successful. |
| message | string | A message describing the result of the request. |
| data | object | The canceled subscription data. |
| data.subscription_id | string | The unique identifier for the subscription. |
| data.store_id | string | The ID of the store the subscription belongs to. |
| data.customer_id | string | The ID of the customer who owns the subscription. |
| data.price_id | string | The ID of the price associated with the subscription. |
| data.status | string | The status of the subscription. Will be `canceled` if immediate cancellation, or `active` if canceling at period end. |
| data.current_period_start | string | The start date of the current billing period in ISO 8601 format. |
| data.current_period_end | string | The end date of the current billing period in ISO 8601 format. |
| data.cancel_at_period_end | boolean | Whether the subscription will be canceled at the end of the current period. |
| data.canceled_at | string | The date the subscription was canceled in ISO 8601 format. |
| data.created_at | string | The date the subscription was created in ISO 8601 format. |
| data.updated_at | string | The date the subscription was last updated in ISO 8601 format. |

## Example Request

### cURL

```bash
curl --request POST \
    "https://liasonpay.net/api/v1/subscription/cancel" \
    --header "Authorization: Bearer {API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"subscription_id\": \"SUBSCRIPTION_879F7492C4\",
    \"cancel_at_period_end\": false
}"
```

### Node.js

```javascript
const axios = require('axios');

const cancelSubscription = async () => {
  try {
    const response = await axios.post('https://liasonpay.net/api/v1/subscription/cancel', {
      subscription_id: 'SUBSCRIPTION_879F7492C4',
      cancel_at_period_end: false
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
    console.error('Error canceling subscription:', error.response?.data || error.message);
    throw error;
  }
};
```

### Python

```python
import requests
import json

def cancel_subscription():
    url = "https://liasonpay.net/api/v1/subscription/cancel"
    headers = {
        "Authorization": "Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "subscription_id": "SUBSCRIPTION_879F7492C4",
        "cancel_at_period_end": False
    }
    
    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error canceling subscription: {e}")
        raise
```

## Example Response

```json
{
    "status": true,
    "message": "Subscription cancelled successfully",
    "data": {
        "subscription_id": "SUBSCRIPTION_879F7492C4",
        "store_id": "STORE_65C0279F05",
        "customer_id": "CUSTOMER_8A7B6C5D4E",
        "price_id": "PRICE_1A2B3C4D5E",
        "status": "canceled",
        "current_period_start": "2023-05-01T00:00:00Z",
        "current_period_end": "2023-06-01T00:00:00Z",
        "cancel_at_period_end": false,
        "canceled_at": "2023-05-15T14:30:00Z",
        "created_at": "2023-04-15T10:30:00Z",
        "updated_at": "2023-05-15T14:30:00Z"
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

### Already Canceled

```json
{
    "status": false,
    "message": "Subscription is already canceled",
    "data": {
        "error_code": "subscription_already_canceled"
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

- When `cancel_at_period_end` is set to `false` (the default), the subscription is canceled immediately.
- When `cancel_at_period_end` is set to `true`, the subscription will remain active until the end of the current billing period, then automatically cancel.
- If a subscription is canceled immediately, the customer will lose access to the subscription benefits right away.
- If a subscription is set to cancel at period end, the customer will retain access until the end of the current billing period.
- Once a subscription is canceled, it cannot be reactivated. A new subscription must be created instead.
- You will receive a webhook event `subscription.cancelled` when a subscription is canceled.

## Interactive Testing

<ApiTester 
  endpoint="/api/v1/subscription/cancel" 
  method="POST"
  baseUrl="https://liasonpay.net" 
  params={[
    { 
      name: "subscription_id", 
      required: true, 
      in: "body",
      description: "The ID of the subscription" 
    },
    { 
      name: "cancel_at_period_end", 
      required: false, 
      in: "body",
      description: "Cancel the subscription at the end of the billing period" 
    }
  ]}
/>
