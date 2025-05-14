---
sidebar_position: 4
---

# Interactive API Testing

Our API documentation includes interactive testing capabilities that allow you to try out API calls directly from your browser.

## Embedded Postman Collection

We've embedded our Postman collection below, which allows you to:

- View all available endpoints
- Test API calls with your own credentials
- See example requests and responses
- Download the collection for use in your own Postman client

<iframe
  src="https://documenter.getpostman.com/view/c7b7c961-94cd-46b7-9af6-307e220272f1/collection.json"
  width="100%"
  height="600px"
  frameborder="0"
  allowfullscreen
></iframe>

## Using the API Tester

Each endpoint in our documentation includes an API tester component that allows you to:

1. Enter your own parameters
2. Make live API calls
3. See the actual responses

To use the API tester:

1. Navigate to any endpoint documentation page
2. Fill in the required parameters
3. Click "Send Request"
4. View the response below

## Authentication for Testing

When testing endpoints that require authentication, you'll need to use your own API key. To obtain your API key, please follow these steps:

1. Log in to your [LiasonPay](https://liasonpay.test) account.
2. Navigate to the **Dashboard**.
3. Click on the **Profile icon** in the top right corner.
4. Click on the **API Keys** section.
5. Generate a new API key or copy your existing key.

For direct access, visit the [LiasonPay API Key page](https://liasonpay.test/api-key).

## Download API Specifications

You can download our API specifications in the following formats:

- [Postman Collection](../collection.json)
- [OpenAPI Specification](../openapi.yaml)
