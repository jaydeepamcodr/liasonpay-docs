---
sidebar_position: 2
---

import { ApiBaseUrl, ExampleApiKey } from '@site/src/components/DynamicValues';

# Error Handling

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Handling Errors in the LiasonPay API</h2>
    <p>Learn how to effectively handle errors to build a robust integration with the LiasonPay API</p>
  </div>
</div>

## Understanding API Errors

<div className="features-grid">
  <div className="feature-card">
    <h3>🔍 Why Error Handling Matters</h3>
    <p>Proper error handling is essential for:</p>
    <ul>
      <li>Creating a smooth user experience</li>
      <li>Debugging integration issues</li>
      <li>Handling temporary service disruptions</li>
      <li>Recovering from network failures</li>
      <li>Validating user input</li>
    </ul>
  </div>

  <div className="feature-card">
    <h3>📊 Error Response Structure</h3>
    <p>When an error occurs, the API returns a JSON response with a <code>status</code> of <code>false</code> and an error message:</p>
    <div className="code-block-container">
      <pre className="code-block">
```json
{
  "status": false,
  "message": "Error message",
  "data": null
}
```
      </pre>
    </div>
    <p>In some cases, additional error details may be included in the <code>data</code> field:</p>
    <div className="code-block-container">
      <pre className="code-block">
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
      </pre>
    </div>
  </div>
</div>

## HTTP Status Codes

<div className="status-codes-section">
  <p>The API uses standard HTTP status codes to indicate the success or failure of a request:</p>

  <div className="status-codes-grid">
    <div className="status-code-card success">
      <div className="status-code">200</div>
      <div className="status-description">
        <h4>OK</h4>
        <p>The request was successful</p>
      </div>
    </div>

    <div className="status-code-card error">
      <div className="status-code">400</div>
      <div className="status-description">
        <h4>Bad Request</h4>
        <p>The request was invalid or cannot be served</p>
      </div>
    </div>

    <div className="status-code-card error">
      <div className="status-code">401</div>
      <div className="status-description">
        <h4>Unauthorized</h4>
        <p>Authentication is required or has failed</p>
      </div>
    </div>

    <div className="status-code-card error">
      <div className="status-code">403</div>
      <div className="status-description">
        <h4>Forbidden</h4>
        <p>The request is not allowed</p>
      </div>
    </div>

    <div className="status-code-card error">
      <div className="status-code">404</div>
      <div className="status-description">
        <h4>Not Found</h4>
        <p>The requested resource does not exist</p>
      </div>
    </div>

    <div className="status-code-card error">
      <div className="status-code">422</div>
      <div className="status-description">
        <h4>Unprocessable Entity</h4>
        <p>Validation error</p>
      </div>
    </div>

    <div className="status-code-card error">
      <div className="status-code">429</div>
      <div className="status-description">
        <h4>Too Many Requests</h4>
        <p>Rate limit exceeded</p>
      </div>
    </div>

    <div className="status-code-card error">
      <div className="status-code">500</div>
      <div className="status-description">
        <h4>Internal Server Error</h4>
        <p>Something went wrong on the server</p>
      </div>
    </div>

    <div className="status-code-card error">
      <div className="status-code">503</div>
      <div className="status-description">
        <h4>Service Unavailable</h4>
        <p>The server is temporarily unavailable</p>
      </div>
    </div>

  </div>
</div>

## Common Error Codes

<div className="error-codes-section">
  <p>In addition to HTTP status codes, the API may include specific error codes in the response:</p>

  <div className="error-codes-grid">
    <div className="error-code-card">
      <div className="error-code-name">authentication_error</div>
      <div className="error-code-description">Invalid API key or authentication failed</div>
    </div>

    <div className="error-code-card">
      <div className="error-code-name">validation_error</div>
      <div className="error-code-description">The request parameters failed validation</div>
    </div>

    <div className="error-code-card">
      <div className="error-code-name">resource_not_found</div>
      <div className="error-code-description">The requested resource does not exist</div>
    </div>

    <div className="error-code-card">
      <div className="error-code-name">rate_limit_exceeded</div>
      <div className="error-code-description">Too many requests in a given amount of time</div>
    </div>

    <div className="error-code-card">
      <div className="error-code-name">invalid_request</div>
      <div className="error-code-description">The request is malformed or contains invalid parameters</div>
    </div>

    <div className="error-code-card">
      <div className="error-code-name">payment_failed</div>
      <div className="error-code-description">The payment could not be processed</div>
    </div>

    <div className="error-code-card">
      <div className="error-code-name">subscription_error</div>
      <div className="error-code-description">An error occurred with the subscription</div>
    </div>

    <div className="error-code-card">
      <div className="error-code-name">server_error</div>
      <div className="error-code-description">An unexpected error occurred on the server</div>
    </div>

  </div>
</div>

## Handling Specific Errors

<div className="specific-errors-section">
  <div className="specific-errors-grid">
    <div className="specific-error-card">
      <div className="specific-error-header">
        <h3>🔐 Authentication Errors (401)</h3>
      </div>
      <div className="specific-error-content">
        <p>Authentication errors occur when the API key is invalid or missing:</p>
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
        <div className="resolution-steps">
          <h4>How to Resolve:</h4>
          <ul>
            <li>Check that you're using the correct API key</li>
            <li>Ensure the API key is properly formatted in the Authorization header</li>
            <li>Verify that the API key has not expired or been revoked</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="specific-error-card">
      <div className="specific-error-header">
        <h3>📋 Validation Errors (422)</h3>
      </div>
      <div className="specific-error-content">
        <p>Validation errors occur when the request parameters do not meet the required format or constraints:</p>
        <div className="code-block-container">
          <pre className="code-block">

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

          </pre>
        </div>
        <div className="resolution-steps">
          <h4>How to Resolve:</h4>
          <ul>
            <li>Check the <code>errors</code> object for specific field validation failures</li>
            <li>Ensure all required fields are provided</li>
            <li>Verify that field values meet the specified constraints</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="specific-error-card">
      <div className="specific-error-header">
        <h3>⏱️ Rate Limit Errors (429)</h3>
      </div>
      <div className="specific-error-content">
        <p>Rate limit errors occur when you've exceeded the allowed number of requests in a given time period:</p>
        <div className="code-block-container">
          <pre className="code-block">

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

</pre>
        </div>
        <div className="resolution-steps">
          <h4>How to Resolve:</h4>
          <ul>
            <li>Implement exponential backoff and retry logic</li>
            <li>Use the <code>retry_after</code> value to determine when to retry the request</li>
            <li>Consider optimizing your code to reduce the number of API calls</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="specific-error-card">
      <div className="specific-error-header">
        <h3>🔧 Server Errors (500, 503)</h3>
      </div>
      <div className="specific-error-content">
        <p>Server errors indicate that something went wrong on the LiasonPay servers:</p>
        <div className="code-block-container">
          <pre className="code-block">

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

</pre>
        </div>
        <div className="resolution-steps">
          <h4>How to Resolve:</h4>
          <ul>
            <li>Implement retry logic with exponential backoff</li>
            <li>Log the <code>request_id</code> for troubleshooting purposes</li>
            <li>Contact LiasonPay support if the issue persists</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>

## Best Practices for Error Handling

<div className="best-practices-section">
  <div className="best-practices-grid">
    <div className="best-practice-card">
      <div className="best-practice-icon">🔄</div>
      <div className="best-practice-content">
        <h4>Implement Comprehensive Error Handling</h4>
        <p>Catch and handle all possible errors to create a robust integration</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">🧩</div>
      <div className="best-practice-content">
        <h4>Use Try-Catch Blocks</h4>
        <p>Wrap API calls in try-catch blocks to handle exceptions gracefully</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">🔁</div>
      <div className="best-practice-content">
        <h4>Implement Retry Logic</h4>
        <p>Automatically retry failed requests with exponential backoff</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">📝</div>
      <div className="best-practice-content">
        <h4>Log Errors</h4>
        <p>Keep detailed logs of API errors for debugging and troubleshooting</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">💬</div>
      <div className="best-practice-content">
        <h4>Provide User-Friendly Messages</h4>
        <p>Translate API errors into user-friendly messages for better UX</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">📊</div>
      <div className="best-practice-content">
        <h4>Monitor Error Rates</h4>
        <p>Set up monitoring to detect unusual error patterns</p>
      </div>
    </div>

    <div className="best-practice-card">
      <div className="best-practice-icon">🔑</div>
      <div className="best-practice-content">
        <h4>Handle Idempotency</h4>
        <p>Use idempotency keys to safely retry operations without duplicating them</p>
      </div>
    </div>

  </div>
</div>

## Example Error Handling Code

<div className="code-example-section">
  <h3>JavaScript Example</h3>
  <p>Here's an example of error handling in JavaScript with retry logic and exponential backoff:</p>

  <div className="code-block-container">
    <pre className="code-block">
```javascript
async function makeApiRequest(endpoint, method, data) {
  const maxRetries = 3;
  let retries = 0;

while (retries < maxRetries) {
try {
const response = await fetch(`${ApiBaseUrl()}${endpoint}`, {
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
    </pre>
  </div>

  <div className="info-callout">
    <p><strong>💡 Tip:</strong> Adjust the <code>maxRetries</code> and backoff strategy based on your specific requirements and the criticality of the operation.</p>
  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>How should I handle rate limit errors?</h3>
    <p>Implement exponential backoff and use the <code>retry_after</code> value from the response to determine when to retry the request. Consider optimizing your code to reduce the number of API calls.</p>
  </div>

  <div className="faq-item">
    <h3>What's the best way to debug API errors?</h3>
    <p>Log detailed information about the request and response, including the <code>request_id</code> if available. This will help you troubleshoot issues and provide relevant information to support if needed.</p>
  </div>

  <div className="faq-item">
    <h3>Should I retry all failed requests?</h3>
    <p>No, only retry idempotent requests (GET, PUT, DELETE) and non-idempotent requests (POST) with idempotency keys. Don't retry authentication or validation errors as they won't succeed without fixing the underlying issue.</p>
  </div>

  <div className="faq-item">
    <h3>How can I make my error messages user-friendly?</h3>
    <p>Map API error codes to user-friendly messages that explain what went wrong and how to fix it. Avoid technical jargon and provide clear next steps for the user.</p>
  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-step-card">
    <h3>📚 API Reference</h3>
    <p>Explore detailed documentation for all API endpoints</p>
    <a href="/api-reference" className="button button--secondary">View API Reference</a>
  </div>

  <div className="next-step-card">
    <h3>🔔 Webhooks</h3>
    <p>Learn how to receive real-time notifications</p>
    <a href="./webhooks" className="button button--secondary">View Webhooks Guide</a>
  </div>

  <div className="next-step-card">
    <h3>✅ Best Practices</h3>
    <p>Explore best practices for integrating with the API</p>
    <a href="./best-practices" className="button button--secondary">View Best Practices</a>
  </div>
</div>
