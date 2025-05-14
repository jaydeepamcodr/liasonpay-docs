---
sidebar_position: 3
---

# OpenAPI Explorer

The LiasonPay OpenAPI Explorer provides an interactive interface for exploring our API using the OpenAPI (formerly Swagger) specification. This page explains how to use the explorer and its features.

## What is the OpenAPI Explorer?

The OpenAPI Explorer is an interactive documentation tool that allows you to:

1. Browse all available API endpoints
2. See detailed parameter descriptions
3. Try out API requests directly from your browser
4. View request and response schemas
5. Understand authentication requirements

## Accessing the Explorer

You can access the OpenAPI Explorer in two ways:

### Option 1: Use the Embedded Explorer

<div className="openapi-explorer">
  <iframe
    src="https://liasonpay.net/docs/openapi-explorer/index.html"
    width="100%"
    height="800px"
    frameBorder="0"
  ></iframe>
</div>

### Option 2: Download the OpenAPI Specification

Download the OpenAPI specification file and use it with your preferred OpenAPI viewer:

<a href="https://liasonpay.net/docs/openapi.yaml" download className="button button--primary button--lg">
  Download OpenAPI Specification
</a>

## Using the Explorer

### Authentication

To authenticate API requests in the explorer:

1. Click the **Authorize** button at the top of the explorer
2. Enter your API key in the format: `Bearer sk_test_your_api_key`
3. Click **Authorize**
4. Close the authorization dialog

All subsequent requests will include your API key in the Authorization header.

### Exploring Endpoints

The explorer organizes endpoints by tags:

1. **Subscription Endpoints** - Endpoints for managing subscriptions
2. **Payment Endpoints** - Endpoints for processing payments
3. **Package Endpoints** - Endpoints for retrieving package information

Click on a tag to expand it and see all endpoints in that category.

### Endpoint Details

For each endpoint, the explorer shows:

1. **Description** - A detailed description of the endpoint's purpose
2. **Parameters** - Required and optional parameters
3. **Request Body** - The expected request body format
4. **Responses** - Possible response codes and formats
5. **Examples** - Example requests and responses

### Trying Out Endpoints

To test an endpoint:

1. Click on the endpoint to expand it
2. Fill in the required parameters
3. Click **Try it out**
4. Review the request details
5. Click **Execute**
6. View the response

### Request and Response Examples

The explorer provides examples for each endpoint:

1. **Request examples** - Sample request bodies
2. **Response examples** - Sample responses for different scenarios
3. **Schema definitions** - Detailed schema information for all objects

## Explorer Features

### Schema Models

The explorer includes detailed schema models for all request and response objects:

1. Click on the **Schema** tab to view the schema definition
2. Expand nested objects to see their properties
3. View property types, formats, and constraints
4. See required vs. optional properties

### Code Generation

The explorer can generate code snippets for various programming languages:

1. Click on an endpoint
2. Fill in the parameters
3. Click **Try it out**
4. Select your preferred language from the dropdown
5. Copy the generated code snippet

Supported languages include:

- cURL
- JavaScript (Fetch, Axios, jQuery)
- Python (Requests)
- PHP
- Ruby
- Java
- C#
- Go

### Filtering and Search

Use the explorer's filtering and search capabilities to find specific endpoints:

1. Use the search box to filter endpoints by keyword
2. Click on tags to show only endpoints in that category
3. Use the filter by path option to find specific endpoints

## OpenAPI Specification Details

The LiasonPay API is documented using OpenAPI Specification v3.0.3:

- **Title**: LiasonPay API Documentation
- **Version**: 1.0.0
- **Base URL**: https://liasonpay.net/api/v1
- **Security Schemes**: Bearer Authentication

## Using the Specification with Other Tools

The OpenAPI specification can be used with various API tools:

### Postman

1. Download the OpenAPI specification
2. Open Postman
3. Click **Import**
4. Select the downloaded specification file
5. Postman will create a collection based on the specification

### Swagger UI

1. Download the OpenAPI specification
2. Host Swagger UI on your local machine
3. Load the specification file
4. Explore the API using Swagger UI

### Swagger Editor

1. Visit [Swagger Editor](https://editor.swagger.io/)
2. Import the OpenAPI specification
3. View and edit the specification
4. Generate client libraries

## Next Steps

- [Download the Postman Collection](/interactive-tools/postman-collection) for more advanced testing
- [Try the API Testing Tool](/interactive-tools/api-testing) for in-browser testing
- [Review the API Reference](/api-reference) for detailed endpoint documentation
