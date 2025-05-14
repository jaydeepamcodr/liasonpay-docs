---
sidebar_position: 1
---

import ApiTester from '@site/src/components/ApiTester';

# Get Subscriptions

<span className="badge badge--primary">requires authentication</span>

```http
GET /api/v1/subscription/get
```

Retrieve a list of subscriptions for a store.

## Request Parameters

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| store_id | string | Yes | The ID of the store. The `store_id` of an existing record in the stores table. Must not be greater than 255 characters. |
| subscription_id | string | No | The ID of the subscription. The `subscription_id` of an existing record in the subscriptions table. Must not be greater than 255 characters. |
| limit | integer | No | The maximum number of subscriptions to return. Default: 20, Maximum: 100. |
| cursor | string | No | A cursor for pagination. Use the `next_cursor` value from the previous response to get the next page of results. |

## Response

### Response Parameters

| Name | Type | Description |
|------|------|-------------|
| status | boolean | Whether the request was successful. |
| message | string | A message describing the result of the request. |
| data | array | An array of subscription objects. |
| data[].subscription_id | string | The unique identifier for the subscription. |
| data[].store_id | string | The ID of the store the subscription belongs to. |
| data[].customer_id | string | The ID of the customer who owns the subscription. |
| data[].price_id | string | The ID of the price associated with the subscription. |
| data[].status | string | The status of the subscription. Possible values: `active`, `canceled`, `past_due`, `unpaid`, `trialing`. |
| data[].current_period_start | string | The start date of the current billing period in ISO 8601 format. |
| data[].current_period_end | string | The end date of the current billing period in ISO 8601 format. |
| data[].cancel_at_period_end | boolean | Whether the subscription will be canceled at the end of the current period. |
| data[].canceled_at | string | If the subscription has been canceled, the date of that cancellation in ISO 8601 format. |
| data[].created_at | string | The date the subscription was created in ISO 8601 format. |
| data[].updated_at | string | The date the subscription was last updated in ISO 8601 format. |
| meta | object | Metadata about the response. |
| meta.has_more | boolean | Whether there are more subscriptions available. |
| meta.next_cursor | string | A cursor to use for pagination. Pass this as the `cursor` parameter to get the next page of results. |

## Example Request

### cURL

```bash
curl --request GET \
    --get "https://liasonpay.net/api/v1/subscription/get?store_id=STORE_65C0279F05&subscription_id=SUBSCRIPTION_56FBC7EEE4" \
    --header "Authorization: Bearer {API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"
```

### Node.js

```javascript
const axios = require('axios');

const getSubscriptions = async () => {
  try {
    const response = await axios.get('https://liasonpay.net/api/v1/subscription/get', {
      params: {
        store_id: 'STORE_65C0279F05',
        subscription_id: 'SUBSCRIPTION_56FBC7EEE4'
      },
      headers: {
        'Authorization': 'Bearer {API_KEY}',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching subscriptions:', error.response?.data || error.message);
    throw error;
  }
};
```

### Python

```python
import requests

def get_subscriptions():
    url = "https://liasonpay.net/api/v1/subscription/get"
    params = {
        "store_id": "STORE_65C0279F05",
        "subscription_id": "SUBSCRIPTION_56FBC7EEE4"
    }
    headers = {
        "Authorization": "Bearer {API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    try:
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching subscriptions: {e}")
        raise
```

## Example Response

```json
{
    "status": true,
    "message": "Subscriptions retrieved successfully",
    "data": [
        {
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
    ],
    "meta": {
        "has_more": false,
        "next_cursor": null
    }
}
```

## Error Responses

### Invalid Store ID

```json
{
    "status": false,
    "message": "Store not found",
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

- If `subscription_id` is provided, the response will contain only that specific subscription if it exists.
- If only `store_id` is provided, the response will contain all subscriptions for that store, paginated according to the `limit` parameter.
- Results are ordered by `created_at` in descending order (newest first).
- The `meta.has_more` field indicates whether there are more results available beyond the current page.
- If `meta.has_more` is `true`, use the `meta.next_cursor` value as the `cursor` parameter to fetch the next page of results.

## Interactive Testing

<ApiTester 
  endpoint="/api/v1/subscription/get" 
  method="GET"
  baseUrl="https://liasonpay.net" 
  params={[
    { 
      name: "store_id", 
      required: true, 
      in: "query",
      description: "The ID of the store" 
    },
    { 
      name: "subscription_id", 
      required: false, 
      in: "query",
      description: "The ID of the subscription" 
    },
    { 
      name: "limit", 
      required: false, 
      in: "query",
      description: "Maximum number of subscriptions to return" 
    },
    { 
      name: "cursor", 
      required: false, 
      in: "query",
      description: "Cursor for pagination" 
    }
  ]}
/>
