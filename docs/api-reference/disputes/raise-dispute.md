---
sidebar_position: 1
---

import ApiTester from '@site/src/components/ApiTester';
import { AppUrl, ApiBaseUrl, ExampleApiKey, ExampleStoreId, ExampleTransactionId } from '@site/src/components/DynamicValues';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Raise Dispute

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Raise a Dispute for a Transaction</h2>
    <p>Create a new dispute for a completed transaction</p>
    <div className="explorer-badges">
      <span className="badge badge--primary">requires authentication</span>
      <span className="badge badge--success">POST</span>
      <span className="badge badge--info">/api/v1/disputes/raise</span>
    </div>
  </div>
</div>

<div className="endpoint-section">
  <div className="endpoint-card">
    <h3>Endpoint</h3>
    <div className="code-block-container">
      <pre className="code-block">
```http
POST {ApiBaseUrl()}/disputes/raise
```
      </pre>
    </div>
    <p>This endpoint allows you to raise a dispute for a completed transaction. You can provide details about the dispute and attach supporting documents.</p>
  </div>
</div>

## Request Parameters

<div className="parameters-section">
  <div className="parameters-card">
    <h3>Required Parameters</h3>
    <div className="parameters-table-container">
      <table className="parameters-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>transaction_id</code></td>
            <td>string</td>
            <td>The ID of the transaction to dispute</td>
          </tr>
          <tr>
            <td><code>reason</code></td>
            <td>string</td>
            <td>The reason for the dispute (e.g., "Item not as described", "Fraudulent charge")</td>
          </tr>
          <tr>
            <td><code>description</code></td>
            <td>string</td>
            <td>Detailed description of the dispute</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className="parameters-card">
    <h3>Optional Parameters</h3>
    <div className="parameters-table-container">
      <table className="parameters-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>attachments</code></td>
            <td>file[]</td>
            <td>Supporting documents for the dispute (max 5MB per file)</td>
          </tr>
          <tr>
            <td><code>metadata</code></td>
            <td>object</td>
            <td>Additional data related to the dispute in key-value format</td>
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
curl --request POST \
    "{ApiBaseUrl()}/disputes/raise" \
    --header "Authorization: Bearer YOUR_API_KEY" \
    --header "Content-Type: multipart/form-data" \
    --header "Accept: application/json" \
    --form "transaction_id=TRX_1234567890" \
    --form "reason=Item not as described" \
    --form "description=The item was damaged and different from the listing photo." \
    --form "metadata[order_id]=12345" \
    --form "metadata[customer_reference]=CUST-001" \
    --form "attachments[]=@/path/to/evidence.jpg"
```
      </pre>
    </div>
  </TabItem>
  <TabItem value="javascript" label="Node.js">
    <div className="code-block-container">
      <pre className="code-block">
```javascript
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const raiseDispute = async () => {
// Initialize form data
const formData = new FormData();
formData.append("transaction_id", "TRX_1234567890");
formData.append("reason", "Item not as described");
formData.append("description", "The item was damaged and different from the listing photo.");
formData.append("metadata[order_id]", "12345");
formData.append("metadata[customer_reference]", "CUST-001");

// Add attachment if available
const filePath = "/path/to/evidence.jpg";
if (fs.existsSync(filePath)) {
formData.append("attachments[]", fs.createReadStream(filePath));
}

try {
const response = await axios.post(
"{ApiBaseUrl()}/disputes/raise",
formData,
{
headers: {
Authorization: `Bearer ${process.env.LIASONPAY_API_KEY}`,
...formData.getHeaders(),
Accept: "application/json",
},
}
);

    console.log(response.data);
    return response.data;

} catch (error) {
console.error(
"Error raising dispute:",
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

def raise_dispute():
    # API configuration
    api_base_url = "{ApiBaseUrl()}"
    api_key = os.environ.get("LIASONPAY_API_KEY")

    url = f"{api_base_url}/disputes/raise"
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Accept": "application/json"
    }

    # Prepare form data
    data = {
        "transaction_id": "TRX_1234567890",
        "reason": "Item not as described",
        "description": "The item was damaged and different from the listing photo.",
        "metadata[order_id]": "12345",
        "metadata[customer_reference]": "CUST-001"
    }

    # Prepare file
    files = {
        "attachments[]": ("evidence.jpg", open("/path/to/evidence.jpg", "rb"), "image/jpeg")
    }

    try:
        response = requests.post(url, headers=headers, data=data, files=files)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error raising dispute: {e}")
        raise
````

      </pre>
    </div>

  </TabItem>
</Tabs>

## Example Response

<div className="response-section">
  <div className="response-card">
    <h3>Success Response</h3>
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": true,
  "message": "Dispute raised successfully",
  "data": {
    "dispute_id": "DSP_9EEC97F54D0A486383ED676DC2110E22",
    "transaction_id": "TRX_1234567890",
    "reason": "Item not as described",
    "status": "open",
    "created_at": "2023-05-15T10:50:00Z"
  }
}
```
      </pre>
    </div>
  </div>

  <div className="response-card">
    <h3>Error Response</h3>
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Failed to raise dispute",
  "errors": {
    "transaction_id": [
      "The transaction ID is invalid or not found."
    ]
  }
}
```
      </pre>
    </div>
  </div>
</div>

## Notes

<div className="notes-section">
  <div className="notes-card">
    <div className="notes-items">
      <div className="notes-item">
        <div className="notes-icon">⏱️</div>
        <div className="notes-content">
          <p>Disputes can only be raised within 180 days of the transaction date.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">📎</div>
        <div className="notes-content">
          <p>Supporting documents can help expedite the dispute resolution process. Accepted file types include JPG, PNG, and PDF.</p>
        </div>
      </div>

      <div className="notes-item">
        <div className="notes-icon">🔔</div>
        <div className="notes-content">
          <p>When a dispute is created, a <code>charge.dispute.created</code> webhook event will be triggered. Set up webhooks to receive real-time notifications.</p>
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
      endpoint="/disputes/raise"
      method="POST"
      baseUrl="{ApiBaseUrl()}"
      params={[
        {
          name: "transaction_id",
          required: true,
          in: "body",
          description: "The ID of the transaction to dispute",
          defaultValue: "TRX_1234567890"
        },
        {
          name: "reason",
          required: true,
          in: "body",
          description: "The reason for the dispute",
          defaultValue: "Item not as described"
        },
        {
          name: "description",
          required: true,
          in: "body",
          description: "Detailed description of the dispute",
          defaultValue: "The item was damaged and different from the listing photo."
        }
      ]}
    />

  </div>
</div>
