---
sidebar_position: 2
---

import { AppUrl, ApiBaseUrl, ExampleApiKey } from '@site/src/components/DynamicValues';

# Authentication

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Authenticating with the LiasonPay API</h2>
    <p>Learn how to obtain and use API keys to securely authenticate your requests</p>
    <div className="explorer-badges">
      <span className="badge badge--primary">Required</span>
      <span className="badge badge--info">Security</span>
    </div>
    <div className="explorer-buttons">
      <a href={`${AppUrl()}/settings/api-keys`} target="_blank" rel="noopener noreferrer" className="button button--primary button--lg">
        <span>🔑 Get API Keys</span>
      </a>
      <a href="#security-best-practices" className="button button--secondary button--lg">
        <span>🔒 Security Best Practices</span>
      </a>
    </div>
  </div>
</div>

## Obtaining API Keys

<div className="step-by-step-card">
  <h3>How to Get Your API Keys</h3>

  <div className="setup-steps">
    <div className="setup-step">
      <div className="step-number">1</div>
      <div className="step-content">
        <h4>Log in to Your LiasonPay Dashboard</h4>
        <p>Access your account at <a href={AppUrl()} target="_blank" rel="noopener noreferrer">{AppUrl()}</a></p>
      </div>
    </div>

    <div className="setup-step">
      <div className="step-number">2</div>
      <div className="step-content">
        <h4>Navigate to API Keys Section</h4>
        <p>Go to <strong>Settings</strong> → <strong>API Keys</strong> in the dashboard</p>
      </div>
    </div>

    <div className="setup-step">
      <div className="step-number">3</div>
      <div className="step-content">
        <h4>Generate a New API Key</h4>
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
        <h4>Securely Store Your API Key</h4>
        <p>Copy and securely store your API key immediately, as it won't be displayed again</p>
        <div className="note-box">
          <div className="note-icon">⚠️</div>
          <div className="note-content">
            <p><strong>Important:</strong> For security reasons, API keys are only displayed once when generated.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

## Using API Keys in Requests

<div className="api-basics-card">
  <h3>Authentication Methods</h3>

  <div className="api-usage-section">
    <div className="code-tabs">
      <div className="code-tab-headers">
        <div className="code-tab-header active">Authorization Header</div>
        <div className="code-tab-header">Example Request</div>
      </div>

      <div className="code-tab-content active">
        <h4>Authentication Header Format</h4>
        <p>To authenticate your API requests, include an <code>Authorization</code> header with the value <code>Bearer YOUR_API_KEY</code>.</p>

        <div className="code-block-container">
          <div className="code-block-header">
            <span>HTTP Header</span>
          </div>
          <pre className="code-block">

```http
Authorization: Bearer ${ExampleApiKey()}
```

          </pre>
        </div>

        <div className="note-box">
          <div className="note-icon">💡</div>
          <div className="note-content">
            <p><strong>Note:</strong> All authenticated endpoints are marked with a <code>requires authentication</code> badge in the API Reference documentation.</p>
          </div>
        </div>
      </div>

      <div className="code-tab-content">
        <h4>Example Request with Authentication</h4>
        <p>Here's a complete example of an authenticated API request using cURL:</p>

        <div className="code-block-container">
          <div className="code-block-header">
            <span>cURL Example</span>
          </div>
          <pre className="code-block">

```bash
curl --request GET \
  --url "${ApiBaseUrl()}/subscription/get?store_id=STORE_123" \
  --header "Authorization: Bearer ${ExampleApiKey()}" \
  --header "Content-Type: application/json" \
  --header "Accept: application/json"
```

          </pre>
        </div>
      </div>
    </div>

  </div>
</div>

<div id="security-best-practices"></div>

## API Key Security Best Practices

<div className="security-practices-section">
  <div className="security-header">
    <div className="security-header-content">
      <h3>🔒 Securing Your API Keys</h3>
      <p>Follow these essential guidelines to protect your API keys from unauthorized access</p>
    </div>
  </div>

  <div className="security-grid">
    <div className="security-item">
      <div className="security-icon-wrapper">
        <div className="security-icon">🔒</div>
      </div>
      <div className="security-content">
        <h4>Never Expose Keys in Client-Side Code</h4>
        <p>API keys should only be used in server-side code. Never include them in:</p>
        <ul className="security-list">
          <li><span className="list-icon">❌</span> JavaScript that runs in the browser</li>
          <li><span className="list-icon">❌</span> Mobile app code</li>
          <li><span className="list-icon">❌</span> Public repositories</li>
          <li><span className="list-icon">❌</span> Client-side configuration files</li>
        </ul>
        <div className="security-tip">
          <span className="tip-icon">💡</span>
          <span>Use server-side APIs to make authenticated requests instead</span>
        </div>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon-wrapper">
        <div className="security-icon">🔐</div>
      </div>
      <div className="security-content">
        <h4>Use Environment Variables</h4>
        <p>Store API keys in environment variables rather than hardcoding them:</p>

        <div className="code-tabs">
          <div className="code-tab-headers">
            <div className="code-tab-header active">Node.js</div>
            <div className="code-tab-header">Python</div>
            <div className="code-tab-header">PHP</div>
          </div>

          <div className="code-tab-content active">
            <div className="code-block-container">
              <div className="code-block-header">
                <span>Node.js</span>
                <button className="copy-button" title="Copy to clipboard">
                  <span className="copy-icon">📋</span>
                </button>
              </div>
              <pre className="code-block">

```javascript
// Node.js example
const apiKey = process.env.LIASONPAY_API_KEY;

// Using with a request
const response = await fetch("https://api.example.com", {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});
```

              </pre>
            </div>
          </div>

          <div className="code-tab-content">
            <div className="code-block-container">
              <div className="code-block-header">
                <span>Python</span>
                <button className="copy-button" title="Copy to clipboard">
                  <span className="copy-icon">📋</span>
                </button>
              </div>
              <pre className="code-block">

```python
# Python example
import os
import requests

api_key = os.environ.get('LIASONPAY_API_KEY')

# Using with a request
response = requests.get(
    'https://api.example.com',
    headers={'Authorization': f'Bearer {api_key}'}
)
```

              </pre>
            </div>
          </div>

          <div className="code-tab-content">
            <div className="code-block-container">
              <div className="code-block-header">
                <span>PHP</span>
                <button className="copy-button" title="Copy to clipboard">
                  <span className="copy-icon">📋</span>
                </button>
              </div>
              <pre className="code-block">

```php
<?php
// PHP example
$apiKey = getenv('LIASONPAY_API_KEY');

// Using with a request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.example.com');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);
$response = curl_exec($ch);
?>
```

              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon-wrapper">
        <div className="security-icon">👥</div>
      </div>
      <div className="security-content">
        <h4>Implement Proper Access Controls</h4>
        <ul className="security-list">
          <li><span className="list-icon">✓</span> Restrict API key access to only those who need it</li>
          <li><span className="list-icon">✓</span> Use different API keys for different applications or services</li>
          <li><span className="list-icon">✓</span> Implement the principle of least privilege</li>
          <li><span className="list-icon">✓</span> Revoke access immediately when no longer needed</li>
        </ul>
        <div className="security-tip">
          <span className="tip-icon">🔍</span>
          <span>Regularly audit who has access to your API keys</span>
        </div>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon-wrapper">
        <div className="security-icon">🔄</div>
      </div>
      <div className="security-content">
        <h4>Rotate API Keys Regularly</h4>
        <ul className="security-list">
          <li><span className="list-icon">✓</span> Generate new API keys periodically (every 90 days recommended)</li>
          <li><span className="list-icon">✓</span> Update your applications to use the new keys</li>
          <li><span className="list-icon">✓</span> Revoke old keys after confirming the new ones work</li>
          <li><span className="list-icon">✓</span> Maintain a rotation schedule and document the process</li>
        </ul>
        <div className="security-tip">
          <span className="tip-icon">📅</span>
          <span>Set calendar reminders for key rotation dates</span>
        </div>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon-wrapper">
        <div className="security-icon">📊</div>
      </div>
      <div className="security-content">
        <h4>Monitor API Key Usage</h4>
        <ul className="security-list">
          <li><span className="list-icon">✓</span> Regularly review API usage logs</li>
          <li><span className="list-icon">✓</span> Set up alerts for unusual activity</li>
          <li><span className="list-icon">✓</span> Revoke compromised keys immediately</li>
          <li><span className="list-icon">✓</span> Track usage patterns to detect anomalies</li>
        </ul>
        <div className="security-tip">
          <span className="tip-icon">⚠️</span>
          <span>Implement rate limiting to prevent abuse</span>
        </div>
      </div>
    </div>

    <div className="security-item">
      <div className="security-icon-wrapper">
        <div className="security-icon">🛡️</div>
      </div>
      <div className="security-content">
        <h4>Implement Additional Security Measures</h4>
        <ul className="security-list">
          <li><span className="list-icon">✓</span> Use HTTPS for all API requests</li>
          <li><span className="list-icon">✓</span> Implement IP whitelisting when possible</li>
          <li><span className="list-icon">✓</span> Consider using a secret manager service</li>
          <li><span className="list-icon">✓</span> Add request signing for additional security</li>
        </ul>
        <div className="security-tip">
          <span className="tip-icon">🔒</span>
          <span>Defense in depth: use multiple security layers</span>
        </div>
      </div>
    </div>

  </div>

  <div className="security-summary-box">
    <div className="summary-icon">⚠️</div>
    <div className="summary-content">
      <h4>What to Do If Your API Key Is Compromised</h4>
      <ol className="action-steps">
        <li>Immediately revoke the compromised key from your LiasonPay Dashboard</li>
        <li>Generate a new API key and update all your applications</li>
        <li>Review your account for any unauthorized activity</li>
        <li>Investigate how the key was compromised and fix the security issue</li>
        <li>Document the incident and improve your security practices</li>
      </ol>
    </div>
  </div>
</div>

## Handling Authentication Errors

<div className="api-basics-card">
  <h3>Troubleshooting Authentication Issues</h3>

  <div className="error-handling-grid">
    <div className="error-checklist-card">
      <h4>🔍 Common Authentication Issues</h4>
      <p>If you encounter authentication errors (HTTP 401), check:</p>

      <div className="checklist-items">
        <div className="checklist-item">
          <div className="checklist-icon">✓</div>
          <div className="checklist-content">
            <h5>Verify API Key Correctness</h5>
            <p>Ensure you're using the correct API key</p>
          </div>
        </div>

        <div className="checklist-item">
          <div className="checklist-icon">✓</div>
          <div className="checklist-content">
            <h5>Check Header Format</h5>
            <p>Confirm the API key is properly formatted in the Authorization header</p>
          </div>
        </div>

        <div className="checklist-item">
          <div className="checklist-icon">✓</div>
          <div className="checklist-content">
            <h5>Verify Key Status</h5>
            <p>Check that the API key has not been revoked</p>
          </div>
        </div>

        <div className="checklist-item">
          <div className="checklist-icon">✓</div>
          <div className="checklist-content">
            <h5>Confirm Environment Match</h5>
            <p>Ensure you're using the right key type for your environment (test vs. live)</p>
          </div>
        </div>
      </div>
    </div>

    <div className="error-example-card">
      <h4>Example Authentication Error Response</h4>
      <div className="code-block-container">
        <div className="code-block-header">
          <span>JSON Response</span>
          <span className="code-example-badge bad">Error Response</span>
        </div>
        <pre className="code-block">

```json
{
  "status": false,
  "message": "Invalid or inactive API key.",
  "data": {}
}
```

        </pre>
      </div>
    </div>

  </div>
</div>

## Frequently Asked Questions

<div className="faq-section">
  <div className="faq-grid">
    <div className="faq-item">
      <div className="faq-question">
        <div className="faq-icon">❓</div>
        <h4>Can I use the same API key for multiple applications?</h4>
      </div>
      <div className="faq-answer">
        <p>While it's technically possible, we recommend using separate API keys for different applications to improve security and make it easier to track usage and revoke access if needed.</p>
      </div>
    </div>

    <div className="faq-item">
      <div className="faq-question">
        <div className="faq-icon">❓</div>
        <h4>What happens if my API key is compromised?</h4>
      </div>
      <div className="faq-answer">
        <p>If you suspect your API key has been compromised, immediately revoke it from the LiasonPay Dashboard and generate a new one. Monitor your account for any unauthorized activity.</p>
      </div>
    </div>

    <div className="faq-item">
      <div className="faq-question">
        <div className="faq-icon">❓</div>
        <h4>How do I rotate API keys without disrupting service?</h4>
      </div>
      <div className="faq-answer">
        <p>Generate a new API key, update your applications to use the new key, verify everything works correctly, and then revoke the old key. This ensures a smooth transition without service disruption.</p>
      </div>
    </div>

    <div className="faq-item">
      <div className="faq-question">
        <div className="faq-icon">❓</div>
        <h4>Can I restrict what an API key can do?</h4>
      </div>
      <div className="faq-answer">
        <p>Currently, API keys have full access to your account. We recommend using different API keys for different applications and implementing proper access controls in your own systems.</p>
      </div>
    </div>

  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-steps-header">
    <div className="next-steps-header-content">
      <h3>Continue Your Integration Journey</h3>
      <p>Follow these steps to complete your LiasonPay API integration</p>
      <div className="progress-indicator">
        <div className="progress-step completed">
          <div className="progress-step-number">1</div>
          <div className="progress-step-label">Authentication</div>
        </div>
        <div className="progress-connector"></div>
        <div className="progress-step">
          <div className="progress-step-number">2</div>
          <div className="progress-step-label">Environment</div>
        </div>
        <div className="progress-connector"></div>
        <div className="progress-step">
          <div className="progress-step-number">3</div>
          <div className="progress-step-label">Implementation</div>
        </div>
      </div>
    </div>
  </div>

  <div className="next-steps-grid">
    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">🌐</div>
        </div>
        <div className="next-step-number">Step 2</div>
      </div>
      <div className="next-step-card-content">
        <h4>Environment Information</h4>
        <p>Learn about the available environments and how to use them for testing and production</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Configure your development environment</li>
          <li><span className="benefit-icon">✓</span> Understand testing vs. production</li>
          <li><span className="benefit-icon">✓</span> Set up proper environment variables</li>
        </ul>
        <div className="next-step-action">
          <a href="./environment-information" className="button button--primary">
            <span className="button-text">View Environment Guide</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">📚</div>
        </div>
        <div className="next-step-number">Step 3</div>
      </div>
      <div className="next-step-card-content">
        <h4>How to Use the API</h4>
        <p>Explore detailed instructions for making API requests and handling responses</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Learn request/response formats</li>
          <li><span className="benefit-icon">✓</span> Understand error handling</li>
          <li><span className="benefit-icon">✓</span> See practical code examples</li>
        </ul>
        <div className="next-step-action">
          <a href="./how-to-use" className="button button--primary">
            <span className="button-text">View API Usage Guide</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">🔒</div>
        </div>
        <div className="next-step-number">Advanced</div>
      </div>
      <div className="next-step-card-content">
        <h4>Security Best Practices</h4>
        <p>Learn more about securing your integration and protecting sensitive data</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Implement advanced security measures</li>
          <li><span className="benefit-icon">✓</span> Protect customer information</li>
          <li><span className="benefit-icon">✓</span> Follow industry best practices</li>
        </ul>
        <div className="next-step-action">
          <a href="/developer-guide/best-practices/security" className="button button--primary">
            <span className="button-text">View Security Guide</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

  </div>

  <div className="help-resources-box">
    <div className="help-icon">💬</div>
    <div className="help-content">
      <h4>Need Help?</h4>
      <p>If you have any questions or need assistance with your integration, our support team is here to help.</p>
      <div className="help-actions">
        <a href="https://liasonpay.net/support" target="_blank" rel="noopener noreferrer" className="button button--secondary">
          <span className="button-text">Contact Support</span>
        </a>
        <a href="/developer-guide/faq" className="button button--secondary">
          <span className="button-text">View FAQ</span>
        </a>
      </div>
    </div>
  </div>
</div>
