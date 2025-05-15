---
sidebar_position: 1
---

# Postman Collection

The LiasonPay Postman Collection provides a comprehensive set of pre-configured API requests that you can use to test and explore our API. This page explains how to download and use the collection in Postman.

## What is the LiasonPay Postman Collection?

The LiasonPay Postman Collection is a set of pre-configured API requests that cover all available endpoints in our API. The collection includes:

- Request templates for all API endpoints
- Pre-configured request headers
- Example request bodies
- Environment variables for easy configuration
- Test scripts for validating responses

## Downloading the Collection

### Option 1: Direct Download

Download the Postman Collection directly from our website:

<a href="/docs/collection.json" download className="button button--primary button--lg">
  Download Postman Collection
</a>

### Option 2: Import from URL

Import the collection directly in Postman using this URL:

import { AppUrl } from '@site/src/components/DynamicValues';

```
<AppUrl />/docs/collection.json
```

## Setting Up the Collection

### Step 1: Import the Collection

1. Open Postman
2. Click **Import** in the top left corner
3. Choose the downloaded collection file or paste the URL
4. Click **Import**

### Step 2: Create an Environment

1. Click the **Environments** tab in Postman
2. Click **Add** to create a new environment
3. Name it "LiasonPay Sandbox" or "LiasonPay Production"
4. Add the following variables:

| Variable | Initial Value                        | Description                   |
| -------- | ------------------------------------ | ----------------------------- |
| baseUrl  | https://sandbox.liasonpay.net/api/v1 | The base URL for API requests |
| apiKey   | sk_test_your_api_key                 | Your LiasonPay API key        |
| storeId  | STORE_your_store_id                  | Your store ID                 |

5. Click **Save**

### Step 3: Select the Environment

1. Choose your newly created environment from the environment dropdown in the top right corner
2. Ensure the environment is active before making requests

## Using the Collection

### Making API Requests

1. Navigate to the LiasonPay collection in the Collections sidebar
2. Browse through the folders to find the desired endpoint
3. Click on the request to open it
4. Review and modify the request parameters as needed
5. Click **Send** to execute the request

### Authentication

The collection is pre-configured to use your API key from the environment variables:

```
Authorization: Bearer {{apiKey}}
```

Make sure to update the `apiKey` variable in your environment with your actual API key.

### Request Examples

#### Process a Payment

1. Navigate to **Payments > Process Payment**
2. The request body is pre-filled with example values:

```json
{
  "store_id": "{{storeId}}",
  "currency": "usd",
  "products": [
    {
      "name": "Product 1",
      "description": "Product description",
      "price": 100,
      "quantity": 1
    }
  ],
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel",
  "mode": "sandbox"
}
```

3. Update the values as needed
4. Click **Send**

#### Create a Subscription

1. Navigate to **Subscriptions > Create Subscription**
2. The request body is pre-filled with example values:

```json
{
  "store_id": "{{storeId}}",
  "price_id": "PRICE_ABC123",
  "success_url": "https://example.com/success",
  "cancel_url": "https://example.com/cancel",
  "mode": "sandbox"
}
```

3. Update the values as needed
4. Click **Send**

## Collection Features

### Environment Variables

The collection uses environment variables to make it easy to switch between sandbox and production environments:

- `{{baseUrl}}` - The base URL for API requests
- `{{apiKey}}` - Your LiasonPay API key
- `{{storeId}}` - Your store ID

### Pre-request Scripts

Some requests include pre-request scripts that:

- Generate unique idempotency keys
- Set up test data
- Calculate timestamps

### Test Scripts

The collection includes test scripts that:

- Validate response status codes
- Check for expected response fields
- Verify data types and formats
- Extract values for use in subsequent requests

## Testing Workflows

The collection is organized to support testing common workflows:

### Payment Workflow

1. Process a payment
2. Verify the payment status
3. Retrieve payment details

### Subscription Workflow

1. Create a subscription
2. Verify the subscription status
3. Cancel the subscription

## Customizing the Collection

You can customize the collection to fit your specific needs:

1. Duplicate requests to create variations
2. Add your own test scripts
3. Create additional environments for different configurations
4. Save example responses for reference

## Troubleshooting

If you encounter issues with the collection:

1. Verify your API key is correct
2. Check that you're using the right environment
3. Ensure all required parameters are provided
4. Check the response for specific error messages

## Next Steps

- [Explore the API Explorer](/interactive-tools/api-explorer) for a comprehensive API reference
- [Try the API Testing Tool](/interactive-tools/api-testing) for in-browser testing
- [Review the API Reference](/api-reference) for detailed endpoint documentation
