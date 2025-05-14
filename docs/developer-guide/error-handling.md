---
sidebar_position: 2
---

# Error Handling

Understanding how to handle errors in the LiasonPay API is essential for building a robust integration. This guide explains the error formats, common error codes, and best practices for error handling.

## Error Response Format

When an error occurs, the API returns a JSON response with a `status` of `false` and an error message:

```json
{
  "status": false,
  "message": "Error message",
  "data": null
}
```

In some cases, additional error details may be included in the `data` field:

```json
{
  "status": false,
  "message": "Validation error",
  "data": {
    "errors": {
      "store_id": ["The store_id field is required."],
      "price_id": ["The price_id field is required."]
    }
  }
}
```

## HTTP Status Codes

The API uses standard HTTP status codes to indicate the success or failure of a request:

| Status Code | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| 200         | OK - The request was successful                             |
| 400         | Bad Request - The request was invalid or cannot be served   |
| 401         | Unauthorized - Authentication is required or has failed     |
| 403         | Forbidden - The request is not allowed                      |
| 404         | Not Found - The requested resource does not exist           |
| 422         | Unprocessable Entity - Validation error                     |
| 429         | Too Many Requests - Rate limit exceeded                     |
| 500         | Internal Server Error - Something went wrong on the server  |
| 503         | Service Unavailable - The server is temporarily unavailable |

## Common Error Codes

In addition to HTTP status codes, the API may include specific error codes in the response:

| Error Code             | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `authentication_error` | Invalid API key or authentication failed                |
| `validation_error`     | The request parameters failed validation                |
| `resource_not_found`   | The requested resource does not exist                   |
| `rate_limit_exceeded`  | Too many requests in a given amount of time             |
| `invalid_request`      | The request is malformed or contains invalid parameters |
| `payment_failed`       | The payment could not be processed                      |
| `subscription_error`   | An error occurred with the subscription                 |
| `server_error`         | An unexpected error occurred on the server              |

## Handling Specific Errors

### Authentication Errors (401)

Authentication errors occur when the API key is invalid or missing:

```json
{
  "status": false,
  "message": "Invalid API key provided",
  "data": {
    "error_code": "authentication_error"
  }
}
```

To resolve authentication errors:

- Check that you're using the correct API key
- Ensure the API key is properly formatted in the Authorization header
- Verify that the API key has not expired or been revoked

### Validation Errors (422)

Validation errors occur when the request parameters do not meet the required format or constraints:

```json
{
  "status": false,
  "message": "Validation error",
  "data": {
    "error_code": "validation_error",
    "errors": {
      "amount": ["The amount must be at least 1."],
      "currency": ["The currency field is required."]
    }
  }
}
```

To resolve validation errors:

- Check the `errors` object for specific field validation failures
- Ensure all required fields are provided
- Verify that field values meet the specified constraints

### Rate Limit Errors (429)

Rate limit errors occur when you've exceeded the allowed number of requests in a given time period:

```json
{
  "status": false,
  "message": "Rate limit exceeded",
  "data": {
    "error_code": "rate_limit_exceeded",
    "retry_after": 30
  }
}
```

To handle rate limit errors:

- Implement exponential backoff and retry logic
- Use the `retry_after` value to determine when to retry the request
- Consider optimizing your code to reduce the number of API calls

### Server Errors (500, 503)

Server errors indicate that something went wrong on the LiasonPay servers:

```json
{
  "status": false,
  "message": "An unexpected error occurred",
  "data": {
    "error_code": "server_error",
    "request_id": "req_123456789"
  }
}
```

To handle server errors:

- Implement retry logic with exponential backoff
- Log the `request_id` for troubleshooting purposes
- Contact LiasonPay support if the issue persists

## Best Practices for Error Handling

1. **Implement comprehensive error handling**: Catch and handle all possible errors
2. **Use try-catch blocks**: Wrap API calls in try-catch blocks to handle exceptions
3. **Implement retry logic**: Automatically retry failed requests with exponential backoff
4. **Log errors**: Keep detailed logs of API errors for debugging
5. **Provide user-friendly messages**: Translate API errors into user-friendly messages
6. **Monitor error rates**: Set up monitoring to detect unusual error patterns
7. **Handle idempotency**: Use idempotency keys to safely retry operations

## Example Error Handling Code

Here's an example of error handling in JavaScript:

```javascript
async function makeApiRequest(endpoint, method, data) {
  const maxRetries = 3;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await fetch(`https://liasonpay.net${endpoint}`, {
        method,
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle specific error types
        if (response.status === 401) {
          console.error("Authentication error:", result.message);
          // No retry for auth errors
          break;
        } else if (response.status === 422) {
          console.error("Validation error:", result.data.errors);
          // No retry for validation errors
          break;
        } else if (response.status === 429) {
          // Rate limit error - wait and retry
          const retryAfter = parseInt(result.data.retry_after) || 2 ** retries;
          console.log(
            `Rate limit exceeded. Retrying after ${retryAfter} seconds.`
          );
          await new Promise((resolve) =>
            setTimeout(resolve, retryAfter * 1000)
          );
        } else if (response.status >= 500) {
          // Server error - retry with exponential backoff
          const backoff = 2 ** retries * 1000;
          console.log(`Server error. Retrying after ${backoff}ms.`);
          await new Promise((resolve) => setTimeout(resolve, backoff));
        } else {
          console.error("API error:", result.message);
          break;
        }

        retries++;
      } else {
        return result;
      }
    } catch (error) {
      console.error("Network error:", error);

      // Retry network errors with exponential backoff
      const backoff = 2 ** retries * 1000;
      console.log(`Network error. Retrying after ${backoff}ms.`);
      await new Promise((resolve) => setTimeout(resolve, backoff));

      retries++;
    }
  }

  throw new Error(`Failed after ${maxRetries} retries`);
}
```

## Next Steps

- Explore the [API Reference](/api-reference) for detailed endpoint documentation
- Learn about [Webhooks](./webhooks) for real-time notifications
