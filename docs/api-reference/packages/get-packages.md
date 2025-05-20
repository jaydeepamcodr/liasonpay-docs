---
sidebar_position: 1
---

import ApiTester from '@site/src/components/ApiTester';
import { AppUrl, ApiBaseUrl, ExampleApiKey, ExampleStoreId, ExamplePriceId, ExamplePackageId } from '@site/src/components/DynamicValues';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Packages

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Retrieve Packages</h2>
    <p>Get a list of available packages and their pricing options for a store</p>
    <div className="explorer-badges">
      <span className="badge badge--primary">requires authentication</span>
      <span className="badge badge--info">GET</span>
      <span className="badge badge--info">/api/v1/packages/get</span>
    </div>
  </div>
</div>

<div className="endpoint-section">
  <div className="endpoint-card">
    <h3>Endpoint</h3>
    <div className="code-block-container">
      <pre className="code-block">
```http
GET {ApiBaseUrl()}/packages/get
```
      </pre>
    </div>
    <p>This endpoint allows you to retrieve a list of packages for a store, with optional filtering by package ID and pagination support.</p>
  </div>
</div>

## Request Parameters

<div className="parameters-section">
  <div className="parameters-card">
    <h3>Query Parameters</h3>
    <div className="parameters-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>store_id</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The ID of the store. The <code>store_id</code> of an existing record in the stores table. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>package_id</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The ID of the package. The <code>package_id</code> of an existing record in the packages table. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>limit</code></td>
            <td><span className="param-type">integer</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The maximum number of packages to return. Default: 20, Maximum: 100.</td>
          </tr>
          <tr>
            <td><code>cursor</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>A cursor for pagination. Use the <code>next_cursor</code> value from the previous response to get the next page of results.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

## Response

<div className="parameters-section">
  <div className="parameters-card">
    <h3>Response Parameters</h3>
    <div className="parameters-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>status</code></td>
            <td><span className="param-type">boolean</span></td>
            <td>Whether the request was successful.</td>
          </tr>
          <tr>
            <td><code>message</code></td>
            <td><span className="param-type">string</span></td>
            <td>A message describing the result of the request.</td>
          </tr>
          <tr>
            <td><code>data</code></td>
            <td><span className="param-type">array</span></td>
            <td>An array of package objects.</td>
          </tr>
          <tr>
            <td><code>data[].package_id</code></td>
            <td><span className="param-type">string</span></td>
            <td>The unique identifier for the package.</td>
          </tr>
          <tr>
            <td><code>data[].store_id</code></td>
            <td><span className="param-type">string</span></td>
            <td>The ID of the store the package belongs to.</td>
          </tr>
          <tr>
            <td><code>data[].name</code></td>
            <td><span className="param-type">string</span></td>
            <td>The name of the package.</td>
          </tr>
          <tr>
            <td><code>data[].description</code></td>
            <td><span className="param-type">string</span></td>
            <td>The description of the package.</td>
          </tr>
          <tr>
            <td><code>data[].active</code></td>
            <td><span className="param-type">boolean</span></td>
            <td>Whether the package is active.</td>
          </tr>
          <tr>
            <td><code>data[].prices</code></td>
            <td><span className="param-type">array</span></td>
            <td>An array of price objects associated with the package.</td>
          </tr>
          <tr>
            <td><code>data[].prices[].price_id</code></td>
            <td><span className="param-type">string</span></td>
            <td>The unique identifier for the price.</td>
          </tr>
          <tr>
            <td><code>data[].prices[].package_id</code></td>
            <td><span className="param-type">string</span></td>
            <td>The ID of the package the price belongs to.</td>
          </tr>
          <tr>
            <td><code>data[].prices[].currency</code></td>
            <td><span className="param-type">string</span></td>
            <td>The currency of the price.</td>
          </tr>
          <tr>
            <td><code>data[].prices[].amount</code></td>
            <td><span className="param-type">number</span></td>
            <td>The amount of the price.</td>
          </tr>
          <tr>
            <td><code>data[].prices[].interval</code></td>
            <td><span className="param-type">string</span></td>
            <td>The billing interval. Possible values: <code>day</code>, <code>week</code>, <code>month</code>, <code>year</code>.</td>
          </tr>
          <tr>
            <td><code>data[].prices[].interval_count</code></td>
            <td><span className="param-type">integer</span></td>
            <td>The number of intervals between billings.</td>
          </tr>
          <tr>
            <td><code>data[].prices[].active</code></td>
            <td><span className="param-type">boolean</span></td>
            <td>Whether the price is active.</td>
          </tr>
          <tr>
            <td><code>data[].created_at</code></td>
            <td><span className="param-type">string</span></td>
            <td>The date the package was created in ISO 8601 format.</td>
          </tr>
          <tr>
            <td><code>data[].updated_at</code></td>
            <td><span className="param-type">string</span></td>
            <td>The date the package was last updated in ISO 8601 format.</td>
          </tr>
          <tr>
            <td><code>meta</code></td>
            <td><span className="param-type">object</span></td>
            <td>Metadata about the response.</td>
          </tr>
          <tr>
            <td><code>meta.has_more</code></td>
            <td><span className="param-type">boolean</span></td>
            <td>Whether there are more packages available.</td>
          </tr>
          <tr>
            <td><code>meta.next_cursor</code></td>
            <td><span className="param-type">string</span></td>
            <td>A cursor to use for pagination. Pass this as the <code>cursor</code> parameter to get the next page of results.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

## Example Request

<Tabs>
  <TabItem value="curl" label="cURL" default>
    <div className="code-block-container">
      <pre className="code-block">
```bash
curl --request GET \
    --get "{ApiBaseUrl()}/packages/get?store_id={ExampleStoreId()}&package_id={ExamplePackageId()}" \
    --header "Authorization: Bearer YOUR_API_KEY" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json"
```
      </pre>
    </div>
  </TabItem>
  <TabItem value="javascript" label="Node.js">
    <div className="code-block-container">
      <pre className="code-block">
```javascript
const axios = require("axios");

const getPackages = async () => {
// Initialize API client
const liasonpay = axios.create({
baseURL: "{ApiBaseUrl()}",
headers: {
Authorization: `Bearer ${process.env.LIASONPAY_API_KEY}`,
"Content-Type": "application/json",
Accept: "application/json",
},
});

try {
const response = await liasonpay.get("/packages/get", {
params: {
store_id: "{ExampleStoreId()}",
package_id: "{ExamplePackageId()}",
limit: 20,
cursor: null
}
});

    console.log(response.data);
    return response.data;

} catch (error) {
console.error(
"Error fetching packages:",
error.response?.data || error.message
);
throw error;
}
};

````
      </pre>
    </div>
  </TabItem>
  <TabItem value="python" label="Python">
    <div className="code-block-container">
      <pre className="code-block">
```python
import requests
import os

def get_packages():
    # API configuration
    api_base_url = "{ApiBaseUrl()}"
    api_key = os.environ.get("LIASONPAY_API_KEY")

    url = f"{api_base_url}/packages/get"
    params = {
        "store_id": "{ExampleStoreId()}",
        "package_id": "{ExamplePackageId()}",
        "limit": 20,
        "cursor": None
    }
    headers = {
        "Authorization": f"Bearer {api_key}",
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

      </pre>
    </div>

  </TabItem>
</Tabs>

## Example Response

<div className="response-example">
  <div className="code-block-container">
    <pre className="code-block">
```json
{
  "status": true,
  "message": "Packages retrieved successfully",
  "data": [
    {
      "package_id": "{ExamplePackageId()}",
      "store_id": "{ExampleStoreId()}",
      "name": "Premium Plan",
      "description": "Access to all premium features",
      "active": true,
      "prices": [
        {
          "price_id": "{ExamplePriceId()}",
          "package_id": "{ExamplePackageId()}",
          "currency": "usd",
          "amount": 19.99,
          "interval": "month",
          "interval_count": 1,
          "active": true
        },
        {
          "price_id": "PRICE_6F7G8H9I0J",
          "package_id": "{ExamplePackageId()}",
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
}
```
    </pre>
  </div>
</div>

## Error Responses

<Tabs>
  <TabItem value="store-not-found" label="Invalid Store ID" default>
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Store not found",
  "data": {
    "error_code": "resource_not_found"
  }
}
```
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when the specified store ID does not exist in the system.</p>
    </div>
  </TabItem>
  <TabItem value="auth" label="Authentication Error">
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Invalid API key provided",
  "data": {
    "error_code": "authentication_error"
  }
}
```
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when the API key provided in the Authorization header is invalid or has been revoked.</p>
    </div>
  </TabItem>
</Tabs>

## Notes

<div className="notes-section">
  <div className="notes-card">
    <div className="notes-items">
      <div className="notes-item">
        <div className="notes-icon">🔍</div>
        <div className="notes-content">
          <p>If <code>package_id</code> is provided, the response will contain only that specific package if it exists.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">📋</div>
        <div className="notes-content">
          <p>If only <code>store_id</code> is provided, the response will contain all packages for that store, paginated according to the <code>limit</code> parameter.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">⏱️</div>
        <div className="notes-content">
          <p>Results are ordered by <code>created_at</code> in descending order (newest first).</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">📄</div>
        <div className="notes-content">
          <p>The <code>meta.has_more</code> field indicates whether there are more results available beyond the current page.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔄</div>
        <div className="notes-content">
          <p>If <code>meta.has_more</code> is <code>true</code>, use the <code>meta.next_cursor</code> value as the <code>cursor</code> parameter to fetch the next page of results.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">💰</div>
        <div className="notes-content">
          <p>Each package can have multiple prices with different currencies, intervals, and amounts.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🗓️</div>
        <div className="notes-content">
          <p>The <code>interval</code> field indicates the billing frequency (e.g., <code>month</code> for monthly billing).</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔢</div>
        <div className="notes-content">
          <p>The <code>interval_count</code> field indicates the number of intervals between billings (e.g., <code>3</code> with <code>interval: "month"</code> means billing every 3 months).</p>
        </div>
      </div>
    </div>

  </div>
</div>

## Interactive Testing

<div className="interactive-testing-section">
  <div className="interactive-testing-card">
    <h3>Try It Out</h3>
    <p>Use the interactive API tester below to try out this endpoint with your own API key and parameters.</p>

    <ApiTester
      endpoint="/packages/get"
      method="GET"
      baseUrl="{ApiBaseUrl()}"
      params={[
        {
          name: "store_id",
          required: true,
          in: "query",
          description: "The ID of the store",
          defaultValue: "{ExampleStoreId()}"
        },
        {
          name: "package_id",
          required: false,
          in: "query",
          description: "The ID of the package",
          defaultValue: "{ExamplePackageId()}"
        },
        {
          name: "limit",
          required: false,
          in: "query",
          description: "Maximum number of packages to return",
          defaultValue: "20"
        },
        {
          name: "cursor",
          required: false,
          in: "query",
          description: "Cursor for pagination"
        }
      ]}
    />

  </div>
</div>
````
