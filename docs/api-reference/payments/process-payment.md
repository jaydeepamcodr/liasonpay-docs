---
sidebar_position: 1
---

import ApiTester from '@site/src/components/ApiTester';
import { AppUrl, ApiBaseUrl, ExampleApiKey, ExampleStoreId } from '@site/src/components/DynamicValues';

# Process Payment

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Process a One-Time Payment</h2>
    <p>Create a payment session and redirect customers to the checkout page</p>
    <div className="explorer-badges">
      <span className="badge badge--primary">requires authentication</span>
      <span className="badge badge--success">POST</span>
      <span className="badge badge--info">/api/v1/payments/process</span>
    </div>
  </div>
</div>

<div className="endpoint-section">
  <div className="endpoint-card">
    <h3>Endpoint</h3>
    <div className="code-block-container">
      <pre className="code-block">
```http
POST {ApiBaseUrl()}/payments/process
```
      </pre>
    </div>
    <p>This endpoint allows you to process a one-time payment and generate a checkout URL for your customer.</p>
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
            <td><code>store_id</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The ID of the store. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>currency</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The currency of the payment. Must not be greater than 3 characters.</td>
          </tr>
          <tr>
            <td><code>products</code></td>
            <td><span className="param-type">array</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The products to be purchased.</td>
          </tr>
          <tr>
            <td><code>products[].name</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The name of the product. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>products[].description</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The description of the product. Must not be greater than 500 characters.</td>
          </tr>
          <tr>
            <td><code>products[].price</code></td>
            <td><span className="param-type">number</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The price of the product. Must be at least 1.</td>
          </tr>
          <tr>
            <td><code>products[].quantity</code></td>
            <td><span className="param-type">integer</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The quantity of the product. Must be at least 1.</td>
          </tr>
          <tr>
            <td><code>customer</code></td>
            <td><span className="param-type">object</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The customer details.</td>
          </tr>
          <tr>
            <td><code>customer.name</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The name of the customer. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>customer.email</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The email of the customer. Must be a valid email address. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>customer.phone_number</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The phone number of the customer. Must not be greater than 255 characters.</td>
          </tr>
          <tr>
            <td><code>metadata</code></td>
            <td><span className="param-type">object</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The metadata of the payment.</td>
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
            <td><code>success_url</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The URL to redirect to after successful payment. Must be a valid URL.</td>
          </tr>
          <tr>
            <td><code>cancel_url</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The URL to redirect to after payment cancellation. Must be a valid URL.</td>
          </tr>
          <tr>
            <td><code>return_url</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The URL to redirect to after payment completion. Must be a valid URL.</td>
          </tr>
          <tr>
            <td><code>mode</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-required">Yes</span></td>
            <td>The mode of the payment. Must be one of: <code>sandbox</code>, <code>production</code>.</td>
          </tr>
          <tr>
            <td><code>coupon</code></td>
            <td><span className="param-type">string</span></td>
            <td><span className="param-optional">No</span></td>
            <td>The coupon code. The <code>code</code> of an existing record in the coupons table.</td>
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
            <td>The ID of the transaction. Use this to verify the payment status.</td>
          </tr>
          <tr>
            <td><code>data.checkout_url</code></td>
            <td><span className="param-type">string</span></td>
            <td>The URL to redirect the customer to for completing the payment.</td>
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
    "{ApiBaseUrl()}/payments/process" \
    --header "Authorization: Bearer YOUR_API_KEY" \
    --header "Content-Type: application/json" \
    --header "Accept: application/json" \
    --data "{
    \"store_id\": \"{ExampleStoreId()}\",
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
    \"mode\": \"production\",
    \"coupon\": \"GYRPVBK06Q\"
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

const processPayment = async () => {
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
const response = await liasonpay.post(
"/payments/process",
{
store_id: "{ExampleStoreId()}",
currency: "usd",
products: [
{
name: "Product 1",
description: "Product 1 description",
price: 100,
quantity: 1,
},
],
customer: {
name: "John Doe",
email: "john.doe@example.com",
phone_number: "+2348123456789",
},
metadata: {
order_id: "1234567890",
order_code: "ORD_1234567890",
},
success_url: "https://example.com/success",
cancel_url: "https://example.com/cancel",
return_url: "https://example.com/return",
mode: "production",
coupon: "GYRPVBK06Q",
}
);

    console.log(response.data);
    return response.data;

} catch (error) {
console.error(
"Error processing payment:",
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

def process_payment():
    # API configuration
    api_base_url = "{ApiBaseUrl()}"
    api_key = os.environ.get("LIASONPAY_API_KEY")

    url = f"{api_base_url}/payments/process"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

    payload = {
        "store_id": "{ExampleStoreId()}",
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
        "mode": "production",
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
  "message": "Payment processed successfully",
  "data": {
    "transaction_id": "TRANSACTION_123456789",
    "checkout_url": "https://checkout.liasonpay.net/c/TRANSACTION_123456789",
    "amount": 100,
    "currency": "usd"
  }
}
```
    </pre>
  </div>
</div>

## Error Responses

<div className="error-examples">
  <div className="error-example-tabs">
    <button className="error-example-tab active" data-error="validation">Validation Error</button>
    <button className="error-example-tab" data-error="not-found">Store Not Found</button>
    <button className="error-example-tab" data-error="coupon">Invalid Coupon</button>
    <button className="error-example-tab" data-error="auth">Authentication Error</button>
  </div>

  <div className="error-example-panel active" data-error="validation">
    <div className="code-block-container">
      <pre className="code-block">
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
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when the request is missing required fields or contains invalid data.</p>
    </div>
  </div>

  <div className="error-example-panel" data-error="not-found">
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
  </div>

  <div className="error-example-panel" data-error="coupon">
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Invalid coupon code",
  "data": {
    "error_code": "invalid_coupon"
  }
}
```
      </pre>
    </div>
    <div className="error-description">
      <p>This error occurs when the provided coupon code is invalid, expired, or has already been used.</p>
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
        <div className="notes-icon">🔗</div>
        <div className="notes-content">
          <p>After processing a payment, redirect the customer to the <code>checkout_url</code> to complete the payment.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">✅</div>
        <div className="notes-content">
          <p>Use the <code>transaction_id</code> with the <a href="/api-reference/payments/verify-payment">Verify Payment</a> endpoint to check the status of the payment.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">👤</div>
        <div className="notes-content">
          <p>If you provide customer details, a new customer will be created if one doesn't already exist with the provided email.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔄</div>
        <div className="notes-content">
          <p>The <code>mode</code> parameter determines whether the payment is processed in sandbox or production mode. Use <code>sandbox</code> for testing and <code>production</code> for live payments.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🏷️</div>
        <div className="notes-content">
          <p>The <code>coupon</code> parameter is optional and can be used to apply a discount to the payment.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">💰</div>
        <div className="notes-content">
          <p>The total amount charged will be the sum of all products (price * quantity), minus any applicable discounts from coupons.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🌐</div>
        <div className="notes-content">
          <p>Supported currencies include: <code>usd</code>, <code>eur</code>, <code>gbp</code>, <code>ngn</code>, <code>kes</code>, <code>ghs</code>, <code>zar</code>.</p>
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
      endpoint="/api/v1/payments/process"
      method="POST"
      baseUrl="{ApiBaseUrl()}"
      params={[
        {
          name: "store_id",
          required: true,
          in: "body",
          description: "The ID of the store",
          defaultValue: "{ExampleStoreId()}"
        },
        {
          name: "currency",
          required: true,
          in: "body",
          description: "The currency of the payment (e.g., usd)",
          defaultValue: "usd"
        },
        {
          name: "products",
          required: true,
          in: "body",
          description: "The products to be purchased (array of objects)",
          defaultValue: JSON.stringify([
            {
              name: "Product 1",
              description: "Product 1 description",
              price: 100,
              quantity: 1
            }
          ])
        },
        {
          name: "customer",
          required: false,
          in: "body",
          description: "The customer details (object)",
          defaultValue: JSON.stringify({
            name: "John Doe",
            email: "john.doe@example.com",
            phone_number: "+2348123456789"
          })
        },
        {
          name: "metadata",
          required: false,
          in: "body",
          description: "The metadata of the payment (object)",
          defaultValue: JSON.stringify({
            order_id: "1234567890",
            order_code: "ORD_1234567890"
          })
        },
        {
          name: "success_url",
          required: true,
          in: "body",
          description: "The URL to redirect to after successful payment",
          defaultValue: "https://example.com/success"
        },
        {
          name: "cancel_url",
          required: true,
          in: "body",
          description: "The URL to redirect to after payment cancellation",
          defaultValue: "https://example.com/cancel"
        },
        {
          name: "return_url",
          required: false,
          in: "body",
          description: "The URL to redirect to after payment completion",
          defaultValue: "https://example.com/return"
        },
        {
          name: "mode",
          required: true,
          in: "body",
          description: "The mode of the payment (sandbox or production)",
          defaultValue: "production"
        },
        {
          name: "coupon",
          required: false,
          in: "body",
          description: "The coupon code",
          defaultValue: "GYRPVBK06Q"
        }
      ]}
    />
  </div>
</div>
