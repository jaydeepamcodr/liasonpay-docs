---
sidebar_position: 2
---

import ApiTester from '@site/src/components/ApiTester';
import { AppUrl, ApiBaseUrl, ExampleApiKey, ExampleStoreId, ExampleTransactionId } from '@site/src/components/DynamicValues';

# Verify Payment

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Verify Payment Status</h2>
    <p>Check the status of a payment after customer checkout</p>
    <div className="explorer-badges">
      <span className="badge badge--primary">requires authentication</span>
      <span className="badge badge--success">POST</span>
      <span className="badge badge--info">/api/v1/payments/verify</span>
    </div>
  </div>
</div>

<div className="endpoint-section">
  <div className="endpoint-card">
    <h3>Endpoint</h3>
    <div className="code-block-container">
      <pre className="code-block">
```http
POST {ApiBaseUrl()}/payments/verify
```
      </pre>
    </div>
    <p>This endpoint allows you to verify the status of a payment after the customer has been redirected to the checkout page.</p>
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
            <td><code>transaction_id</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The ID of the transaction. The <code>transaction_id</code> of an existing record in the transactions table. Must not be greater than 255 characters.</td>
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
            <td>The payment data.</td>
          </tr>
          <tr>
            <td><code>data.transaction_id</code></td>
            <td><span className="param-type">string</span></td>
            <td>The unique identifier for the transaction.</td>
          </tr>
          <tr>
            <td><code>data.store_id</code></td>
            <td><span className="param-type">string</span></td>
            <td>The ID of the store the payment belongs to.</td>
          </tr>
          <tr>
            <td><code>data.customer_id</code></td>
            <td><span className="param-type">string</span></td>
            <td>The ID of the customer who made the payment.</td>
          </tr>
          <tr>
            <td><code>data.amount</code></td>
            <td><span className="param-type">number</span></td>
            <td>The total amount of the payment.</td>
          </tr>
          <tr>
            <td><code>data.currency</code></td>
            <td><span className="param-type">string</span></td>
            <td>The currency of the payment.</td>
          </tr>
          <tr>
            <td><code>data.payment_status</code></td>
            <td><span className="param-type">string</span></td>
            <td>The status of the payment. Possible values: <code>succeeded</code>, <code>pending</code>, <code>failed</code>, <code>canceled</code>.</td>
          </tr>
          <tr>
            <td><code>data.payment_method</code></td>
            <td><span className="param-type">string</span></td>
            <td>The payment method used.</td>
          </tr>
          <tr>
            <td><code>data.metadata</code></td>
            <td><span className="param-type">object</span></td>
            <td>The metadata associated with the payment.</td>
          </tr>
          <tr>
            <td><code>data.created_at</code></td>
            <td><span className="param-type">string</span></td>
            <td>The date the payment was created in ISO 8601 format.</td>
          </tr>
          <tr>
            <td><code>data.updated_at</code></td>
            <td><span className="param-type">string</span></td>
            <td>The date the payment was last updated in ISO 8601 format.</td>
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
    "{ApiBaseUrl()}/payments/verify" \
    --header "Authorization: Bearer YOUR_API_KEY" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"transaction_id\": \"{ExampleTransactionId()}\"
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

const verifyPayment = async () => {
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
  const response = await liasonpay.post("/payments/verify", {
  transaction_id: "{ExampleTransactionId()}"
  });
  
      console.log(response.data);
      return response.data;
  
  } catch (error) {
  console.error(
  "Error verifying payment:",
  error.response?.data || error.message
  );
  throw error;
  }
  }
};

```
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

def verify_payment():
    # API configuration
    api_base_url = "{ApiBaseUrl()}"
    api_key = os.environ.get("LIASONPAY_API_KEY")

    url = f"{api_base_url}/payments/verify"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    payload = {
        "transaction_id": "{ExampleTransactionId()}"
    }

    try:
        response = requests.post(url, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error verifying payment: {e}")
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
  "message": "Payment verified successfully",
  "data": {
    "transaction_id": "{ExampleTransactionId()}",
    "store_id": "{ExampleStoreId()}",
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
    </pre>
  </div>
</div>

## Error Responses

<div className="error-examples">
  <div className="error-example-tabs">
    <button className="error-example-tab active" data-error="not-found">Transaction Not Found</button>
    <button className="error-example-tab" data-error="incomplete">Payment Not Completed</button>
    <button className="error-example-tab" data-error="auth">Authentication Error</button>
  </div>

  <div className="error-example-panel active" data-error="not-found">
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Transaction not found",
  "data": {
    "error_code": "resource_not_found"
  }
}
```
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when the specified transaction ID does not exist in the system.</p>
    </div>
  </div>

  <div className="error-example-panel" data-error="incomplete">
    <div className="code-block-container">
      <pre className="code-block">
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
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when the payment process has been initiated but the customer has not completed the payment yet.</p>
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
        <div className="notes-icon">🔍</div>
        <div className="notes-content">
          <p>Use this endpoint to verify the status of a payment after redirecting the customer to the checkout URL.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔄</div>
        <div className="notes-content">
          <p>The <code>transaction_id</code> is returned from the <a href="/api-reference/payments/process-payment">Process Payment</a> endpoint.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">⚠️</div>
        <div className="notes-content">
          <p>If the payment has not been completed by the customer, the API will return an error with the <code>payment_incomplete</code> error code and the current payment status.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">📊</div>
        <div className="notes-content">
          <p>Possible payment status values:</p>
          <ul>
            <li><code>succeeded</code>: The payment was successful</li>
            <li><code>pending</code>: The payment is still being processed</li>
            <li><code>failed</code>: The payment failed</li>
            <li><code>canceled</code>: The payment was canceled by the customer</li>
          </ul>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔔</div>
        <div className="notes-content">
          <p>It's recommended to implement webhook handling for payment events to receive real-time updates about payment status changes.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔒</div>
        <div className="notes-content">
          <p>For security reasons, always verify payments on your server before fulfilling orders or providing access to purchased content.</p>
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
      endpoint="/api/v1/payments/verify"
      method="POST"
      baseUrl="{ApiBaseUrl()}"
      params={[
        {
          name: "transaction_id",
          required: true,
          in: "body",
          description: "The ID of the transaction",
          defaultValue: "{ExampleTransactionId()}"
        }
      ]}
    />

  </div>
</div>
