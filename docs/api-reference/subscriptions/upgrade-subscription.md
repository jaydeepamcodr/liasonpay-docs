---
sidebar_position: 5
---

import ApiTester from '@site/src/components/ApiTester';
import { AppUrl, ApiBaseUrl, ExampleApiKey, ExampleStoreId, ExamplePriceId, ExampleSubscriptionId } from '@site/src/components/DynamicValues';

# Upgrade Subscription

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Upgrade Subscription Plan</h2>
    <p>Change a customer's subscription to a different pricing plan</p>
    <div className="explorer-badges">
      <span className="badge badge--primary">requires authentication</span>
      <span className="badge badge--success">POST</span>
      <span className="badge badge--info">/api/v1/subscription/upgrade</span>
    </div>
  </div>
</div>

<div className="endpoint-section">
  <div className="endpoint-card">
    <h3>Endpoint</h3>
    <div className="code-block-container">
      <pre className="code-block">
```http
POST {ApiBaseUrl()}/subscription/upgrade
```
      </pre>
    </div>
    <p>This endpoint allows you to upgrade an existing subscription to a different price plan, with automatic proration handling.</p>
  </div>
</div>

## Request Parameters

<div className="parameters-section">
  <div className="parameters-card">
    <h3>Body Parameters</h3>
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
            <td><code>subscription_id</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The ID of the subscription to upgrade. The <code>subscription_id</code> of an existing record in the subscriptions table. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>store_id</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The ID of the store. The <code>store_id</code> of an existing record in the stores table. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>price_id</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The ID of the price to use for the upgrade. The <code>price_id</code> of an existing record in the prices table. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>metadata</code></td>
            <td><span className="param-type">object</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The metadata of the upgrade.</td>
          </tr>
          <tr>
            <td><code>metadata.order_id</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The order ID.</td>
          </tr>
          <tr>
            <td><code>metadata.order_code</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The order code.</td>
          </tr>
          <tr>
            <td><code>mode</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The mode of the upgrade. Must be one of: <code>sandbox</code>, <code>production</code>. Must match the mode of the original subscription.</td>
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
            <td><span className="param-type">object</span></td>
            <td>The upgrade data.</td>
          </tr>
          <tr>
            <td><code>data.upgrade_request_id</code></td>
            <td><span className="param-type">string</span></td>
            <td>The ID of the upgrade request. Use this to verify the upgrade status.</td>
          </tr>
          <tr>
            <td><code>data.checkout_url</code></td>
            <td><span className="param-type">string</span></td>
            <td>The URL to redirect the customer to for completing the upgrade process.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

## Example Request

<div className="code-examples">
  <div className="code-example-tabs">
    <button className="code-example-tab active" data-language="curl">cURL</button>
    <button className="code-example-tab" data-language="javascript">Node.js</button>
    <button className="code-example-tab" data-language="python">Python</button>
  </div>

  <div className="code-example-panel active" data-language="curl">
    <div className="code-block-container">
      <pre className="code-block">
```bash
curl --request POST \
    "{ApiBaseUrl()}/subscription/upgrade" \
    --header "Authorization: Bearer YOUR_API_KEY" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"subscription_id\": \"{ExampleSubscriptionId()}\",
    \"store_id\": \"{ExampleStoreId()}\",
    \"price_id\": \"{ExamplePriceId()}\",
    \"metadata\": {
        \"order_id\": \"1234567890\",
        \"order_code\": \"ORD_1234567890\"
    },
    \"mode\": \"production\"
}"
```
      </pre>
    </div>
  </div>

  <div className="code-example-panel" data-language="javascript">
    <div className="code-block-container">
      <pre className="code-block">
```javascript
const axios = require("axios");

const upgradeSubscription = async () => {
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
const response = await liasonpay.post("/subscription/upgrade", {
subscription_id: "{ExampleSubscriptionId()}",
store_id: "{ExampleStoreId()}",
price_id: "{ExamplePriceId()}",
metadata: {
order_id: "1234567890",
order_code: "ORD_1234567890",
},
mode: "production",
});

      console.log(response.data);
      return response.data;

} catch (error) {
console.error(
"Error upgrading subscription:",
error.response?.data || error.message
);
throw error;
}
};

````
      </pre>
    </div>
  </div>

  <div className="code-example-panel" data-language="python">
    <div className="code-block-container">
      <pre className="code-block">
```python
import requests
import json
import os

def upgrade_subscription():
    # API configuration
    api_base_url = "{ApiBaseUrl()}"
    api_key = os.environ.get("LIASONPAY_API_KEY")

    url = f"{api_base_url}/subscription/upgrade"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "subscription_id": "{ExampleSubscriptionId()}",
        "store_id": "{ExampleStoreId()}",
        "price_id": "{ExamplePriceId()}",
        "metadata": {
            "order_id": "1234567890",
            "order_code": "ORD_1234567890"
        },
        "mode": "production"
    }

    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error upgrading subscription: {e}")
        raise
````

      </pre>
    </div>

  </div>
</div>

## Example Response

<div className="response-example">
  <div className="code-block-container">
    <pre className="code-block">
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
    </pre>
  </div>
</div>

## Error Responses

<div className="error-examples">
  <div className="error-example-tabs">
    <button className="error-example-tab active" data-error="sub-not-found">Subscription Not Found</button>
    <button className="error-example-tab" data-error="price-not-found">Price Not Found</button>
    <button className="error-example-tab" data-error="same-price">Same Price</button>
    <button className="error-example-tab" data-error="canceled">Canceled Subscription</button>
    <button className="error-example-tab" data-error="auth">Authentication Error</button>
  </div>

  <div className="error-example-panel active" data-error="sub-not-found">
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Subscription not found",
  "data": {
    "error_code": "resource_not_found"
  }
}
```
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when the specified subscription ID does not exist in the system.</p>
    </div>
  </div>

  <div className="error-example-panel" data-error="price-not-found">
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Price not found",
  "data": {
    "error_code": "resource_not_found"
  }
}
```
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when the specified price ID does not exist in the system.</p>
    </div>
  </div>

  <div className="error-example-panel" data-error="same-price">
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Cannot upgrade to the same price",
  "data": {
    "error_code": "invalid_upgrade"
  }
}
```
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when you try to upgrade a subscription to the same price plan it already has.</p>
    </div>
  </div>

  <div className="error-example-panel" data-error="canceled">
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Cannot upgrade a canceled subscription",
  "data": {
    "error_code": "subscription_canceled"
  }
}
```
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when you try to upgrade a subscription that has already been canceled.</p>
    </div>
  </div>

  <div className="error-example-panel" data-error="auth">
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
  </div>
</div>

## Notes

<div className="notes-section">
  <div className="notes-card">
    <div className="notes-items">
      <div className="notes-item">
        <div className="notes-icon">💰</div>
        <div className="notes-content">
          <p>Upgrading a subscription changes the price plan for the subscription.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">⚖️</div>
        <div className="notes-content">
          <p>The system automatically handles proration based on the remaining time in the current billing period.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔄</div>
        <div className="notes-content">
          <p>After initiating an upgrade, redirect the customer to the <code>checkout_url</code> to complete the upgrade process.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">✅</div>
        <div className="notes-content">
          <p>The original subscription remains active until the upgrade is completed.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">⚠️</div>
        <div className="notes-content">
          <p>If the customer does not complete the upgrade process, the original subscription will continue unchanged.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔔</div>
        <div className="notes-content">
          <p>You will receive a webhook event <code>subscription.updated</code> when a subscription is successfully upgraded.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔒</div>
        <div className="notes-content">
          <p>The <code>mode</code> parameter must match the mode of the original subscription.</p>
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
      endpoint="/api/v1/subscription/upgrade"
      method="POST"
      baseUrl="{ApiBaseUrl()}"
      params={[
        {
          name: "subscription_id",
          required: true,
          in: "body",
          description: "The ID of the subscription to upgrade",
          defaultValue: "{ExampleSubscriptionId()}"
        },
        {
          name: "store_id",
          required: true,
          in: "body",
          description: "The ID of the store",
          defaultValue: "{ExampleStoreId()}"
        },
        {
          name: "price_id",
          required: true,
          in: "body",
          description: "The ID of the price to use for the upgrade",
          defaultValue: "{ExamplePriceId()}"
        },
        {
          name: "metadata",
          required: false,
          in: "body",
          description: "The metadata of the upgrade (object)",
          defaultValue: JSON.stringify({
            order_id: "1234567890",
            order_code: "ORD_1234567890"
          })
        },
        {
          name: "mode",
          required: true,
          in: "body",
          description: "The mode of the upgrade (sandbox or production)",
          defaultValue: "production"
        }
      ]}
    />

  </div>
</div>
