---
sidebar_position: 1
---

import ApiTester from '@site/src/components/ApiTester';

# Get Packages

<span className="badge badge--primary">requires authentication</span>

```http
GET /api/v1/packages/get
```

Retrieve a list of packages for a store.

## Request Parameters

### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| store_id | string | Yes | The ID of the store. The `store_id` of an existing record in the stores table. Must not be greater than 255 characters. |
| package_id | string | No | The ID of the package. The `package_id` of an existing record in the packages table. Must not be greater than 255 characters. |
| limit | integer | No | The maximum number of packages to return. Default: 20, Maximum: 100. |
| cursor | string | No | A cursor for pagination. Use the `next_cursor` value from the previous response to get the next page of results. |

## Response

### Response Parameters

| Name | Type | Description |
|------|------|-------------|
| status | boolean | Whether the request was successful. |
| message | string | A message describing the result of the request. |
| data | array | An array of package objects. |
| data[].package_id | string | The unique identifier for the package. |
| data[].store_id | string | The ID of the store the package belongs to. |
| data[].name | string | The name of the package. |
| data[].description | string | The description of the package. |
| data[].active | boolean | Whether the package is active. |
| data[].prices | array | An array of price objects associated with the package. |
| data[].prices[].price_id | string | The unique identifier for the price. |
| data[].prices[].package_id | string | The ID of the package the price belongs to. |
| data[].prices[].currency | string | The currency of the price. |
| data[].prices[].amount | number | The amount of the price. |
| data[].prices[].interval | string | The billing interval. Possible values: `day`, `week`, `month`, `year`. |
| data[].prices[].interval_count | integer | The number of intervals between billings. |
| data[].prices[].active | boolean | Whether the price is active. |
| data[].created_at | string | The date the package was created in ISO 8601 format. |
| data[].updated_at | string | The date the package was last updated in ISO 8601 format. |
| meta | object | Metadata about the response. |
| meta.has_more | boolean | Whether there are more packages available. |
| meta.next_cursor | string | A cursor to use for pagination. Pass this as the `cursor` parameter to get the next page of results. |

## Example Request

### cURL

```bash
curl --request GET \
    --get "https://liasonpay.net/api/v1/packages/get?store_id=STORE_65C0279F05&package_id=PACKAGE_7CC53FC9B0" \
    --header "Authorization: Bearer {API_KEY}" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"
```

### Node.js

```javascript
const axios = require('axios');

const getPackages = async () => {
  try {
    const response = await axios.get('https://liasonpay.net/api/v1/packages/get', {
      params: {
        store_id: 'STORE_65C0279F05',
        package_id: 'PACKAGE_7CC53FC9B0'
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
    console.error('Error fetching packages:', error.response?.data || error.message);
    throw error;
  }
};
```

### Python

```python
import requests

def get_packages():
    url = "https://liasonpay.net/api/v1/packages/get"
    params = {
        "store_id": "STORE_65C0279F05",
        "package_id": "PACKAGE_7CC53FC9B0"
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
        print(f"Error fetching packages: {e}")
        raise
```

## Example Response

```json
{
    "status": true,
    "message": "Packages retrieved successfully",
    "data": [
        {
            "package_id": "PACKAGE_7CC53FC9B0",
            "store_id": "STORE_65C0279F05",
            "name": "Premium Plan",
            "description": "Access to all premium features",
            "active": true,
            "prices": [
                {
                    "price_id": "PRICE_1A2B3C4D5E",
                    "package_id": "PACKAGE_7CC53FC9B0",
                    "currency": "usd",
                    "amount": 19.99,
                    "interval": "month",
                    "interval_count": 1,
                    "active": true
                },
                {
                    "price_id": "PRICE_6F7G8H9I0J",
                    "package_id": "PACKAGE_7CC53FC9B0",
                    "currency": "usd",
                    "amount": 199.99,
                    "interval": "year",
                    "interval_count": 1,
                    "active": true
                }
            ],
            "created_at": "2023-04-01T10:00:00Z",
            "updated_at": "2023-04-01T10:00:00Z"
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

- If `package_id` is provided, the response will contain only that specific package if it exists.
- If only `store_id` is provided, the response will contain all packages for that store, paginated according to the `limit` parameter.
- Results are ordered by `created_at` in descending order (newest first).
- The `meta.has_more` field indicates whether there are more results available beyond the current page.
- If `meta.has_more` is `true`, use the `meta.next_cursor` value as the `cursor` parameter to fetch the next page of results.
- Each package can have multiple prices with different currencies, intervals, and amounts.
- The `interval` field indicates the billing frequency (e.g., `month` for monthly billing).
- The `interval_count` field indicates the number of intervals between billings (e.g., `3` with `interval: "month"` means billing every 3 months).

## Interactive Testing

<ApiTester 
  endpoint="/api/v1/packages/get" 
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
      name: "package_id", 
      required: false, 
      in: "query",
      description: "The ID of the package" 
    },
    { 
      name: "limit", 
      required: false, 
      in: "query",
      description: "Maximum number of packages to return" 
    },
    { 
      name: "cursor", 
      required: false, 
      in: "query",
      description: "Cursor for pagination" 
    }
  ]}
/>
