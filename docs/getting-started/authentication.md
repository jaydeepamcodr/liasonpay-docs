---
sidebar_position: 2
---

import { AppUrl, ApiBaseUrl, ExampleApiKey } from '@site/src/components/DynamicValues';

# Authentication

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Authenticating with the LiasonPay API</h2>
    <p>Learn how to obtain and use API keys to securely authenticate your requests</p>
    <div className="explorer-buttons">
      <a href={`${AppUrl()}/api-key`} target="_blank" rel="noopener noreferrer" className="button button--primary button--lg">
        <span>🔑 Get API Keys</span>
      </a>
      <a href="#security-best-practices" className="button button--secondary button--lg">
        <span>🔒 Security Best Practices</span>
      </a>
    </div>
  </div>
</div>

## API Key Types

<div className="features-grid">
  <div className="feature-card">
    <h3>🧪 Test API Keys</h3>
    <p>Used with the sandbox environment for development and testing</p>
    <div className="api-key-format">
      <span className="api-key-prefix">sk_test_</span><span className="api-key-suffix">abcdefghijklmnopqrstuvwxyz123456</span>
    </div>
    <div className="info-callout">
      <p><strong>💡 Tip:</strong> Test API keys can be used to simulate payments without processing real money.</p>
    </div>
  </div>

  <div className="feature-card">
    <h3>🚀 Live API Keys</h3>
    <p>Used with the production environment for processing real transactions</p>
    <div className="api-key-format">
      <span className="api-key-prefix">sk_live_</span><span className="api-key-suffix">abcdefghijklmnopqrstuvwxyz123456</span>
    </div>
    <div className="warning-callout">
      <p><strong>⚠️ Important:</strong> Live API keys will process real payments and affect live data. Handle with care.</p>
    </div>
  </div>
</div>

## Obtaining API Keys

<div className="setup-steps">
  <div className="setup-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Log in to Your LiasonPay Dashboard</h3>
      <p>Access your account at <a href={AppUrl()} target="_blank" rel="noopener noreferrer">{AppUrl()}</a></p>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Navigate to API Keys Section</h3>
      <p>Go to <strong>Settings</strong> → <strong>API Keys</strong> in the dashboard</p>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Generate a New API Key</h3>
      <p>Click the <strong>Generate New Key</strong> button</p>
      <ul>
        <li>Select the key type (Test or Live)</li>
        <li>Add a description to help identify the key's purpose</li>
        <li>Click <strong>Generate</strong></li>
      </ul>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">4</div>
    <div className="step-content">
      <h3>Securely Store Your API Key</h3>
      <p>Copy and securely store your API key immediately, as it won't be displayed again</p>
      <div className="warning-callout">
        <p><strong>⚠️ Important:</strong> For security reasons, API keys are only displayed once when generated.</p>
      </div>
    </div>
  </div>
</div>

## Using API Keys in Requests

<div className="api-usage-section">
  <div className="code-example-section">
    <h3>Authentication Header Format</h3>
    <p>To authenticate your API requests, include an <code>Authorization</code> header with the value <code>Bearer YOUR_API_KEY</code>.</p>

    <div className="code-block-container">
      <pre className="code-block">

```http
Authorization: Bearer sk_test_abcdefghijklmnopqrstuvwxyz123456
```

      </pre>
    </div>

    <div className="info-callout">
      <p><strong>💡 Note:</strong> All authenticated endpoints are marked with a <code>requires authentication</code> badge in the API Reference documentation.</p>
    </div>

  </div>

  <div className="code-example-section">
    <h3>Example Request with Authentication</h3>
    <p>Here's a complete example of an authenticated API request using cURL:</p>

    <div className="code-block-container">
      <pre className="code-block">

```bash
curl --request GET \
  --url "{ApiBaseUrl()}/subscription/get?store_id=STORE_123" \
  --header "Authorization: Bearer sk_test_abcdefghijklmnopqrstuvwxyz123456" \
  --header "Content-Type: application/json" \
  --header "Accept: application/json"
```

      </pre>
    </div>

  </div>
</div>

<div id="security-best-practices"></div>

## API Key Security Best Practices

<div className="security-section">
  <div className="security-grid">
    <div className="security-item">
      <div className="security-icon">🔒</div>
      <div className="security-content">
        <h4>Never Expose API Keys in Client-Side Code</h4>
        <p>API keys should only be used in server-side code. Never include them in:</p>
        <ul>
          <li>JavaScript that runs in the browser</li>
          <li>Mobile app code</li>
          <li>Public repositories</li>
          <li>Client-side configuration files</li>
        </ul>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon">🔐</div>
      <div className="security-content">
        <h4>Use Environment Variables</h4>
        <p>Store API keys in environment variables rather than hardcoding them:</p>
        <div className="code-block-container">
          <pre className="code-block">

```javascript
// Node.js example
const apiKey = process.env.LIASONPAY_API_KEY;
```

          </pre>
        </div>
        <div className="code-block-container">
          <pre className="code-block">

```python
# Python example
import os
api_key = os.environ.get('LIASONPAY_API_KEY')
```

          </pre>
        </div>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon">👥</div>
      <div className="security-content">
        <h4>Implement Proper Access Controls</h4>
        <ul>
          <li>Restrict API key access to only those who need it</li>
          <li>Use different API keys for different applications or services</li>
          <li>Implement the principle of least privilege</li>
        </ul>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon">🔄</div>
      <div className="security-content">
        <h4>Rotate API Keys Regularly</h4>
        <ul>
          <li>Generate new API keys periodically (every 90 days recommended)</li>
          <li>Update your applications to use the new keys</li>
          <li>Revoke old keys after confirming the new ones work</li>
        </ul>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon">📊</div>
      <div className="security-content">
        <h4>Monitor API Key Usage</h4>
        <ul>
          <li>Regularly review API usage logs</li>
          <li>Set up alerts for unusual activity</li>
          <li>Revoke compromised keys immediately</li>
        </ul>
      </div>
    </div>

  </div>
</div>

## Handling Authentication Errors

<div className="error-handling-section">
  <div className="error-checklist">
    <h3>🔍 Troubleshooting Authentication Issues</h3>
    <p>If you encounter authentication errors (HTTP 401), check:</p>

    <div className="checklist-items">
      <div className="checklist-item">
        <div className="checklist-icon">✓</div>
        <div className="checklist-content">
          <h4>Verify API Key Correctness</h4>
          <p>Ensure you're using the correct API key</p>
        </div>
      </div>

      <div className="checklist-item">
        <div className="checklist-icon">✓</div>
        <div className="checklist-content">
          <h4>Check Header Format</h4>
          <p>Confirm the API key is properly formatted in the Authorization header</p>
        </div>
      </div>

      <div className="checklist-item">
        <div className="checklist-icon">✓</div>
        <div className="checklist-content">
          <h4>Verify Key Status</h4>
          <p>Check that the API key has not been revoked</p>
        </div>
      </div>

      <div className="checklist-item">
        <div className="checklist-icon">✓</div>
        <div className="checklist-content">
          <h4>Confirm Environment Match</h4>
          <p>Ensure you're using the right key type for your environment (test vs. live)</p>
        </div>
      </div>
    </div>

  </div>

  <div className="error-example">
    <h3>Example Authentication Error Response</h3>
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
  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-item">
    <h3>Can I use the same API key for multiple applications?</h3>
    <p>While it's technically possible, we recommend using separate API keys for different applications to improve security and make it easier to track usage and revoke access if needed.</p>
  </div>

  <div className="faq-item">
    <h3>What happens if my API key is compromised?</h3>
    <p>If you suspect your API key has been compromised, immediately revoke it from the LiasonPay Dashboard and generate a new one. Monitor your account for any unauthorized activity.</p>
  </div>

  <div className="faq-item">
    <h3>How do I rotate API keys without disrupting service?</h3>
    <p>Generate a new API key, update your applications to use the new key, verify everything works correctly, and then revoke the old key. This ensures a smooth transition without service disruption.</p>
  </div>

  <div className="faq-item">
    <h3>Can I restrict what an API key can do?</h3>
    <p>Currently, API keys have full access to your account. We recommend using different API keys for different applications and implementing proper access controls in your own systems.</p>
  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-step-card">
    <h3>🌐 Environment Information</h3>
    <p>Learn about the available environments and how to use them</p>
    <a href="./environment-information" className="button button--secondary">View Environment Guide</a>
  </div>

  <div className="next-step-card">
    <h3>📚 How to Use the API</h3>
    <p>Explore detailed instructions for using the API</p>
    <a href="./how-to-use" className="button button--secondary">View API Usage Guide</a>
  </div>

  <div className="next-step-card">
    <h3>🔒 Security Best Practices</h3>
    <p>Learn more about securing your integration</p>
    <a href="/developer-guide/best-practices/security" className="button button--secondary">View Security Guide</a>
  </div>
</div>
