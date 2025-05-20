---
sidebar_position: 4
---

import { AppUrl, ApiRateLimit } from '@site/src/components/DynamicValues';

<head>
  <link rel="stylesheet" href="/css/faq-page.css" />
  <script src="/js/faq-page.js"></script>
  <link rel="stylesheet" href="/css/next-steps.css" />
  <script src="/js/next-steps.js"></script>
</head>

<div className="faq-header">
  <div className="faq-header-bg"></div>
  <div className="faq-header-content">
    <h1>FAQ / Troubleshooting</h1>
    <p>Find answers to frequently asked questions and solutions to common issues when working with the LiasonPay API. Browse by category or search for specific topics.</p>
  </div>
</div>

<div className="faq-toc">
  <div className="faq-toc-header">
    <span className="faq-toc-icon">📋</span>
    <span className="faq-toc-title">Quick Navigation</span>
  </div>
  <ul className="faq-toc-list">
    <li><a href="#general-questions">General Questions</a></li>
    <li><a href="#authentication-issues">Authentication Issues</a></li>
    <li><a href="#payment-processing">Payment Processing</a></li>
    <li><a href="#subscription-management">Subscription Management</a></li>
    <li><a href="#webhook-issues">Webhook Issues</a></li>
    <li><a href="#api-integration">API Integration</a></li>
    <li><a href="#technical-issues">Technical Issues</a></li>
  </ul>
</div>

<div id="general-questions" className="faq-category">
  <div className="faq-category-header">
    <div className="faq-category-icon">🔍</div>
    <h2 className="faq-category-title">General Questions</h2>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🧪</span>
        <h3 className="faq-question-text">How can I test my integration without processing real payments?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>You can use test card numbers and special test amounts to simulate different payment scenarios without processing real payments:</p>
      <ul>
        <li>Use test card numbers like <code>4111111111111111</code> for successful payments</li>
        <li>Use specific amounts to trigger different responses (e.g., 999 for insufficient funds)</li>
      </ul>
      <div className="faq-note">
        <span className="faq-note-icon">💡</span>
        <p>For more details, see the <a href="/getting-started/environment-information">Environment Information</a> guide.</p>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🚀</span>
        <h3 className="faq-question-text">How do I set up my production environment?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>To set up your production environment:</p>
      <ol>
        <li>Ensure you're using the correct API key</li>
        <li>Use the base URL <AppUrl /> for all API calls</li>
        <li>Set the <code>mode</code> parameter to <code>production</code> in relevant API calls</li>
        <li>Configure your webhook endpoints to handle events</li>
      </ol>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Example API Request</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`fetch('${AppUrl()}/api/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 1000,
    currency: 'USD',
    mode: 'production'
  })
})`}
          </code>
        </pre>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">💱</span>
        <h3 className="faq-question-text">What currencies are supported?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>LiasonPay currently supports the following currencies:</p>
      <div className="currency-grid">
        <div className="currency-item">
          <span className="currency-code">USD</span>
          <span className="currency-name">US Dollar</span>
        </div>
        <div className="currency-item">
          <span className="currency-code">EUR</span>
          <span className="currency-name">Euro</span>
        </div>
        <div className="currency-item">
          <span className="currency-code">GBP</span>
          <span className="currency-name">British Pound</span>
        </div>
        <div className="currency-item">
          <span className="currency-code">NGN</span>
          <span className="currency-name">Nigerian Naira</span>
        </div>
        <div className="currency-item">
          <span className="currency-code">KES</span>
          <span className="currency-name">Kenyan Shilling</span>
        </div>
        <div className="currency-item">
          <span className="currency-code">GHS</span>
          <span className="currency-name">Ghanaian Cedi</span>
        </div>
        <div className="currency-item">
          <span className="currency-code">ZAR</span>
          <span className="currency-name">South African Rand</span>
        </div>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">⏱️</span>
        <h3 className="faq-question-text">Are there any rate limits?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>Yes, the API has rate limits to prevent abuse:</p>
      <div className="rate-limit-box">
        <div className="rate-limit-icon">🔄</div>
        <div className="rate-limit-content">
          <span className="rate-limit-label">Rate Limit:</span>
          <span className="rate-limit-value"><ApiRateLimit /> requests per minute</span>
        </div>
      </div>
      <p>If you exceed these limits, you'll receive a <code>429 Too Many Requests</code> response.</p>
      <div className="faq-warning">
        <span className="faq-warning-icon">⚠️</span>
        <p>Implement proper retry logic with exponential backoff to handle rate limit errors.</p>
      </div>
    </div>
  </div>
</div>

<div id="authentication-issues" className="faq-category">
  <div className="faq-category-header">
    <div className="faq-category-icon">🔐</div>
    <h2 className="faq-category-title">Authentication Issues</h2>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔑</span>
        <h3 className="faq-question-text">My API key isn't working</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>If your API key isn't working, check the following:</p>
      <div className="troubleshooting-steps">
        <div className="troubleshooting-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <p>Verify that the API key is correctly formatted in the Authorization header: <code>Authorization: Bearer YOUR_API_KEY</code></p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <p>Check that the API key has not expired or been revoked</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <p>Ensure you're making the request to the correct base URL</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <p>Confirm that your account is in good standing</p>
          </div>
        </div>
      </div>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Correct API Key Format</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`// HTTP Header
Authorization: Bearer YOUR_API_KEY`}
          </code>
        </pre>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔄</span>
        <h3 className="faq-question-text">How do I rotate my API keys?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>To rotate your API keys:</p>
      <div className="key-rotation-process">
        <div className="rotation-step">
          <div className="rotation-step-icon">1️⃣</div>
          <div className="rotation-step-content">
            <h4>Access Dashboard</h4>
            <p>Log in to your <a href="https://liasonpay.net" target="_blank" rel="noopener noreferrer">LiasonPay dashboard</a></p>
          </div>
        </div>
        <div className="rotation-step">
          <div className="rotation-step-icon">2️⃣</div>
          <div className="rotation-step-content">
            <h4>Navigate to API Keys</h4>
            <p>Go to <strong>Settings</strong> > <strong>API Keys</strong></p>
          </div>
        </div>
        <div className="rotation-step">
          <div className="rotation-step-icon">3️⃣</div>
          <div className="rotation-step-content">
            <h4>Generate New Key</h4>
            <p>Click <strong>Generate New Key</strong> and save it securely</p>
          </div>
        </div>
        <div className="rotation-step">
          <div className="rotation-step-icon">4️⃣</div>
          <div className="rotation-step-content">
            <h4>Update Integration</h4>
            <p>Update your integration to use the new key</p>
          </div>
        </div>
        <div className="rotation-step">
          <div className="rotation-step-icon">5️⃣</div>
          <div className="rotation-step-content">
            <h4>Revoke Old Key</h4>
            <p>Once your integration is working with the new key, click <strong>Revoke</strong> on the old key</p>
          </div>
        </div>
      </div>
      <div className="faq-note">
        <span className="faq-note-icon">📅</span>
        <p>We recommend rotating your API keys every 90 days as a security best practice.</p>
      </div>
    </div>
  </div>
</div>

<div id="payment-processing" className="faq-category">
  <div className="faq-category-header">
    <div className="faq-category-icon">💳</div>
    <h2 className="faq-category-title">Payment Processing</h2>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">❓</span>
        <h3 className="faq-question-text">Why did a payment fail?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>Payments can fail for various reasons:</p>
      <ol>
        <li><strong>Insufficient funds</strong>: The customer doesn't have enough money in their account</li>
        <li><strong>Card declined</strong>: The card issuer declined the transaction</li>
        <li><strong>Expired card</strong>: The card has expired</li>
        <li><strong>Invalid card details</strong>: The card number, expiry date, or CVV is incorrect</li>
        <li><strong>Fraud detection</strong>: The transaction was flagged as potentially fraudulent</li>
      </ol>
      <div className="faq-note">
        <span className="faq-note-icon">💡</span>
        <p>Check the error message in the API response for more specific information. Each error includes an error code and description.</p>
      </div>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Example Error Response</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`{
  "success": false,
  "error": {
    "code": "card_declined",
    "message": "The card was declined",
    "details": "The card issuer declined this transaction"
  }
}`}
          </code>
        </pre>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">↩️</span>
        <h3 className="faq-question-text">How do I issue a refund?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>To issue a refund:</p>
      <div className="troubleshooting-steps">
        <div className="troubleshooting-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <p>Log in to your <a href="https://liasonpay.net" target="_blank" rel="noopener noreferrer">LiasonPay dashboard</a></p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <p>Navigate to <strong>Payments</strong> > <strong>Transactions</strong></p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <p>Find the transaction you want to refund</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <p>Click <strong>Refund</strong> and follow the prompts</p>
          </div>
        </div>
      </div>
      <div className="faq-warning">
        <span className="faq-warning-icon">⚠️</span>
        <p>Refunds can only be issued for successful payments and may take 5-10 business days to process.</p>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔄</span>
        <h3 className="faq-question-text">Can I partially refund a payment?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>Yes, LiasonPay supports partial refunds. When initiating a refund, you can specify the amount to refund, which can be less than the original payment amount.</p>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Partial Refund API Example</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`fetch('https://liasonpay.net/api/v1/payments/refund', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    transaction_id: 'TRANSACTION_123456789',
    amount: 500, // Refund $5.00 of a larger payment
    reason: 'Customer request'
  })
})`}
          </code>
        </pre>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">⏱️</span>
        <h3 className="faq-question-text">How long does it take for funds to be available?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>Funds are typically available in your LiasonPay account within 2-3 business days after a successful payment. The exact timing depends on your payment processor and account settings.</p>
      <div className="rate-limit-box">
        <div className="rate-limit-icon">📅</div>
        <div className="rate-limit-content">
          <span className="rate-limit-label">Standard Settlement Time:</span>
          <span className="rate-limit-value">2-3 business days</span>
        </div>
      </div>
      <p>For high-volume merchants, we offer accelerated settlement options. Contact our support team to learn more.</p>
    </div>
  </div>
  
  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔒</span>
        <h3 className="faq-question-text">How do I handle 3D Secure authentication?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>LiasonPay automatically handles 3D Secure (3DS) authentication when required. When a payment requires 3DS:</p>
      <ol>
        <li>The API will return a <code>requires_action</code> status with a <code>redirect_url</code></li>
        <li>Redirect your customer to this URL to complete the authentication</li>
        <li>After authentication, the customer will be redirected back to your specified return URL</li>
        <li>Check the payment status using the Verify Payment endpoint</li>
      </ol>
      <div className="faq-note">
        <span className="faq-note-icon">💡</span>
        <p>3D Secure helps reduce fraud and shifts liability from you to the card issuer.</p>
      </div>
    </div>
  </div>
</div>

<div id="subscription-management" className="faq-category">
  <div className="faq-category-header">
    <div className="faq-category-icon">🔄</div>
    <h2 className="faq-category-title">Subscription Management</h2>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">📅</span>
        <h3 className="faq-question-text">How do I change a subscription's billing cycle?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>To change a subscription's billing cycle:</p>
      <div className="troubleshooting-steps">
        <div className="troubleshooting-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <p>Cancel the current subscription using the <a href="/api-reference/subscriptions/cancel-subscription">Cancel a subscription</a> endpoint</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <p>Create a new subscription with the desired billing cycle using the <a href="/api-reference/subscriptions/create-subscription">Create a subscription</a> endpoint</p>
          </div>
        </div>
      </div>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Cancel Subscription Example</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`fetch('https://liasonpay.net/api/v1/subscription/cancel', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    subscription_id: 'SUBSCRIPTION_56FBC7EEE4'
  })
})`}
          </code>
        </pre>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">❌</span>
        <h3 className="faq-question-text">What happens when a subscription payment fails?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>When a subscription payment fails:</p>
      <ol>
        <li>LiasonPay will send a <code>subscription.payment_failed</code> webhook event</li>
        <li>The system will automatically retry the payment after 3 days</li>
        <li>If the retry fails, another webhook event will be sent</li>
        <li>After 3 failed attempts, the subscription will be marked as <code>past_due</code></li>
        <li>You can then decide whether to cancel the subscription or attempt to recover the payment</li>
      </ol>
      <div className="faq-note">
        <span className="faq-note-icon">💡</span>
        <p>We recommend implementing a dunning management system to handle failed payments and communicate with customers.</p>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">💳</span>
        <h3 className="faq-question-text">Can customers update their payment method for a subscription?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>Yes, customers can update their payment method for an existing subscription. You can implement this by:</p>
      <div className="troubleshooting-steps">
        <div className="troubleshooting-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <p>Creating a payment method update session using the LiasonPay dashboard</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <p>Redirecting the customer to the update URL</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <p>LiasonPay will handle the payment method update process</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <p>You'll receive a webhook notification when the payment method is updated</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">⚖️</span>
        <h3 className="faq-question-text">How do I prorate subscription changes?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>LiasonPay automatically handles proration when upgrading or downgrading subscriptions. When you use the <a href="/api-reference/subscriptions/upgrade-subscription">Upgrade a subscription</a> endpoint, you can specify whether to prorate the charges.</p>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Proration Example</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`fetch('https://liasonpay.net/api/v1/subscription/upgrade', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    subscription_id: 'SUBSCRIPTION_56FBC7EEE4',
    new_price_id: 'PRICE_PREMIUM_PLAN',
    prorate: true
  })
})`}
          </code>
        </pre>
      </div>
      <div className="faq-note">
        <span className="faq-note-icon">💡</span>
        <p>When proration is enabled, the customer will be charged or credited the difference between the old and new plan, calculated based on the remaining time in the current billing period.</p>
      </div>
    </div>
  </div>
  
  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔍</span>
        <h3 className="faq-question-text">How do I track subscription metrics?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>LiasonPay provides several ways to track subscription metrics:</p>
      <ol>
        <li><strong>Dashboard Analytics</strong>: View key metrics like MRR, churn rate, and subscriber growth in the LiasonPay dashboard</li>
        <li><strong>Reports API</strong>: Generate custom reports using our reporting endpoints</li>
        <li><strong>Webhooks</strong>: Set up webhooks to track subscription events in real-time</li>
        <li><strong>Data Export</strong>: Schedule regular data exports to your data warehouse</li>
      </ol>
      <p>For detailed subscription analytics, we recommend using the Reports API to pull data into your own analytics platform.</p>
    </div>
  </div>
</div>

<div id="webhook-issues" className="faq-category">
  <div className="faq-category-header">
    <div className="faq-category-icon">🔔</div>
    <h2 className="faq-category-title">Webhook Issues</h2>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔧</span>
        <h3 className="faq-question-text">How do I set up webhooks?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>To set up webhooks:</p>
      <div className="troubleshooting-steps">
        <div className="troubleshooting-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <p>Log in to your <a href="https://liasonpay.net" target="_blank" rel="noopener noreferrer">LiasonPay dashboard</a></p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <p>Navigate to <strong>Developers</strong> > <strong>Webhooks</strong></p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <p>Click <strong>Add Endpoint</strong></p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <p>Enter your endpoint URL and select the events you want to receive</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <p>Save your webhook configuration</p>
          </div>
        </div>
      </div>
      <div className="faq-note">
        <span className="faq-note-icon">💡</span>
        <p>Your webhook endpoint should respond with a 2xx status code to acknowledge receipt of the event.</p>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔒</span>
        <h3 className="faq-question-text">How do I verify webhook signatures?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>To verify webhook signatures and ensure they're coming from LiasonPay:</p>
      <ol>
        <li>Retrieve your webhook secret from the LiasonPay dashboard</li>
        <li>Extract the signature from the <code>Liason-Signature</code> header</li>
        <li>Compute an HMAC with the SHA-256 hash function</li>
        <li>Compare your signature with the one in the header</li>
      </ol>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Node.js Webhook Verification Example</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`const crypto = require('crypto');

// Express route handler
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['liason-signature'];
  const payload = req.body;
  const secret = 'YOUR_WEBHOOK_SECRET';
  
  // Create HMAC
  const hmac = crypto.createHmac('sha256', secret);
  const expectedSignature = hmac.update(payload).digest('hex');
  
  // Compare signatures
  if (crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )) {
    // Signature is valid, process the webhook
    const event = JSON.parse(payload);
    handleWebhookEvent(event);
    res.status(200).send('Webhook received');
  } else {
    // Invalid signature
    res.status(403).send('Invalid signature');
  }
});`}
          </code>
        </pre>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔄</span>
        <h3 className="faq-question-text">I'm not receiving webhook events</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>If you're not receiving webhook events, check the following:</p>
      <div className="troubleshooting-steps">
        <div className="troubleshooting-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <p>Verify that your webhook endpoint is publicly accessible</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <p>Check that your server is responding with a 2xx status code</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <p>Review the webhook logs in your LiasonPay dashboard for delivery attempts and errors</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <p>Ensure you've subscribed to the correct event types</p>
          </div>
        </div>
        <div className="troubleshooting-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <p>Check your server's firewall settings to ensure it allows incoming requests from LiasonPay's IP ranges</p>
          </div>
        </div>
      </div>
      <div className="faq-warning">
        <span className="faq-warning-icon">⚠️</span>
        <p>For testing webhooks locally, we recommend using a tool like <a href="https://ngrok.com/" target="_blank" rel="noopener noreferrer">ngrok</a> to create a secure tunnel to your local environment.</p>
      </div>
    </div>
  </div>
  
  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">📋</span>
        <h3 className="faq-question-text">What webhook events are available?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>LiasonPay provides the following webhook events:</p>
      <div className="webhook-categories">
        <div className="webhook-category">
          <h4>Payment Events</h4>
          <div className="webhook-list">
            <div className="webhook-item">
              <div className="webhook-event-name">payment.succeeded</div>
              <div className="webhook-event-description">A payment was successfully processed</div>
            </div>
            <div className="webhook-item">
              <div className="webhook-event-name">payment.failed</div>
              <div className="webhook-event-description">A payment attempt failed</div>
            </div>
            <div className="webhook-item">
              <div className="webhook-event-name">payment.refunded</div>
              <div className="webhook-event-description">A payment was refunded</div>
            </div>
          </div>
        </div>
        
        <div className="webhook-category">
          <h4>Subscription Events</h4>
          <div className="webhook-list">
            <div className="webhook-item">
              <div className="webhook-event-name">subscription.created</div>
              <div className="webhook-event-description">A new subscription was created</div>
            </div>
            <div className="webhook-item">
              <div className="webhook-event-name">subscription.updated</div>
              <div className="webhook-event-description">A subscription was updated</div>
            </div>
            <div className="webhook-item">
              <div className="webhook-event-name">subscription.cancelled</div>
              <div className="webhook-event-description">A subscription was cancelled</div>
            </div>
            <div className="webhook-item">
              <div className="webhook-event-name">subscription.payment_failed</div>
              <div className="webhook-event-description">A subscription payment failed</div>
            </div>
          </div>
        </div>
      </div>
      <p>For a complete list of webhook events, see our <a href="/api-reference/webhooks">Webhooks documentation</a>.</p>
    </div>
  </div>
</div>

<div id="api-integration" className="faq-category">
  <div className="faq-category-header">
    <div className="faq-category-icon">🔌</div>
    <h2 className="faq-category-title">API Integration</h2>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">📚</span>
        <h3 className="faq-question-text">Are there client libraries available?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>Yes, LiasonPay provides official client libraries for several programming languages:</p>
      <div className="language-grid">
        <div className="language-item">
          <div className="language-icon">
            <span>JS</span>
          </div>
          <div className="language-content">
            <h4>JavaScript/Node.js</h4>
            <p><code>npm install liasonpay</code></p>
            <a href="https://github.com/liasonpay/liasonpay-node" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
        <div className="language-item">
          <div className="language-icon">
            <span>PHP</span>
          </div>
          <div className="language-content">
            <h4>PHP</h4>
            <p><code>composer require liasonpay/liasonpay-php</code></p>
            <a href="https://github.com/liasonpay/liasonpay-php" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
        <div className="language-item">
          <div className="language-icon">
            <span>PY</span>
          </div>
          <div className="language-content">
            <h4>Python</h4>
            <p><code>pip install liasonpay</code></p>
            <a href="https://github.com/liasonpay/liasonpay-python" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
        <div className="language-item">
          <div className="language-icon">
            <span>RB</span>
          </div>
          <div className="language-content">
            <h4>Ruby</h4>
            <p><code>gem install liasonpay</code></p>
            <a href="https://github.com/liasonpay/liasonpay-ruby" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        </div>
      </div>
      <div className="faq-note">
        <span className="faq-note-icon">💡</span>
        <p>Our client libraries handle authentication, request formatting, and error handling for you.</p>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔍</span>
        <h3 className="faq-question-text">How do I handle API errors?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>LiasonPay API errors follow a consistent format:</p>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Error Response Format</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`{
  "success": false,
  "error": {
    "code": "error_code",
    "message": "Human-readable error message",
    "details": "Additional details about the error (optional)"
  }
}`}
          </code>
        </pre>
      </div>
      <p>Best practices for handling API errors:</p>
      <ol>
        <li>Always check the <code>success</code> field to determine if a request succeeded</li>
        <li>Use the <code>error.code</code> for programmatic error handling</li>
        <li>Log the <code>error.message</code> and <code>error.details</code> for debugging</li>
        <li>Implement appropriate retry logic for transient errors</li>
        <li>Display user-friendly error messages to your customers</li>
      </ol>
      <div className="faq-warning">
        <span className="faq-warning-icon">⚠️</span>
        <p>Never expose raw API error messages directly to your end users.</p>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔄</span>
        <h3 className="faq-question-text">How should I implement retries?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>When implementing retries for API requests:</p>
      <ol>
        <li><strong>Use exponential backoff</strong>: Start with a small delay and increase it exponentially with each retry</li>
        <li><strong>Add jitter</strong>: Add random variation to retry intervals to prevent thundering herd problems</li>
        <li><strong>Set a maximum retry count</strong>: Limit the number of retry attempts (3-5 is typically sufficient)</li>
        <li><strong>Only retry idempotent operations</strong>: GET, PUT, and DELETE requests are generally safe to retry</li>
        <li><strong>Be careful with POST requests</strong>: Only retry if you're certain they won't create duplicate resources</li>
      </ol>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>JavaScript Retry Implementation</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`async function fetchWithRetry(url, options, maxRetries = 3) {
  let retries = 0;
  
  while (true) {
    try {
      const response = await fetch(url, options);
      
      if (response.status === 429 || (response.status >= 500 && response.status < 600)) {
        // Retryable error
        if (retries >= maxRetries) {
          throw new Error(\`Maximum retries reached (\${maxRetries})\`);
        }
        
        // Calculate delay with exponential backoff and jitter
        const delay = Math.min(
          1000 * Math.pow(2, retries) + Math.random() * 1000,
          10000 // Maximum delay of 10 seconds
        );
        
        console.log(\`Retrying after \${delay}ms (attempt \${retries + 1})\`);
        await new Promise(resolve => setTimeout(resolve, delay));
        retries++;
        continue;
      }
      
      return response;
    } catch (error) {
      if (retries >= maxRetries) {
        throw error;
      }
      
      const delay = Math.min(
        1000 * Math.pow(2, retries) + Math.random() * 1000,
        10000
      );
      
      console.log(\`Network error, retrying after \${delay}ms (attempt \${retries + 1})\`);
      await new Promise(resolve => setTimeout(resolve, delay));
      retries++;
    }
  }
}`}
          </code>
        </pre>
      </div>
    </div>
  </div>
  
  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔐</span>
        <h3 className="faq-question-text">What are best practices for API security?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>Follow these best practices to ensure secure integration with the LiasonPay API:</p>
      <ol>
        <li><strong>Keep API keys secure</strong>: Never expose API keys in client-side code or public repositories</li>
        <li><strong>Use environment variables</strong>: Store API keys in environment variables, not in your code</li>
        <li><strong>Implement proper access controls</strong>: Restrict access to API keys based on the principle of least privilege</li>
        <li><strong>Rotate API keys regularly</strong>: Change your API keys every 90 days or after staff changes</li>
        <li><strong>Use HTTPS for all requests</strong>: Never make API calls over unencrypted HTTP</li>
        <li><strong>Validate webhook signatures</strong>: Always verify that webhooks are coming from LiasonPay</li>
        <li><strong>Implement rate limiting</strong>: Protect your servers from excessive API calls</li>
        <li><strong>Monitor for unusual activity</strong>: Set up alerts for unexpected API usage patterns</li>
      </ol>
      <div className="faq-warning">
        <span className="faq-warning-icon">⚠️</span>
        <p>Never use your live API keys in development or testing environments.</p>
      </div>
    </div>
  </div>
</div>

<div id="technical-issues" className="faq-category">
  <div className="faq-category-header">
    <div className="faq-category-icon">🛠️</div>
    <h2 className="faq-category-title">Technical Issues</h2>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🐛</span>
        <h3 className="faq-question-text">How do I debug API requests?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>To debug API requests:</p>
      <ol>
        <li><strong>Check request logs</strong>: Review the full request and response in your application logs</li>
        <li><strong>Use request IDs</strong>: Each API response includes a <code>request-id</code> header that can be used when contacting support</li>
        <li><strong>Test in the API Explorer</strong>: Use our <a href="/api-explorer">API Explorer</a> to test requests in a controlled environment</li>
        <li><strong>Check dashboard logs</strong>: The LiasonPay dashboard includes a log of all API requests</li>
        <li><strong>Use tools like Postman</strong>: Test API calls directly with tools that provide detailed request/response information</li>
      </ol>
      <div className="faq-note">
        <span className="faq-note-icon">💡</span>
        <p>When contacting support about an API issue, always include the request ID and timestamp.</p>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🔄</span>
        <h3 className="faq-question-text">How do I handle API versioning?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>LiasonPay uses API versioning to ensure backward compatibility. You can specify the API version in two ways:</p>
      <ol>
        <li><strong>URL path</strong>: Include the version in the URL path (e.g., <code>/api/v1/payments</code>)</li>
        <li><strong>Accept header</strong>: Set the <code>Accept</code> header to <code>application/json;version=1</code></li>
      </ol>
      <p>When we release a new API version:</p>
      <ul>
        <li>We'll announce it in our <a href="/changelog">changelog</a> and via email</li>
        <li>Old versions will continue to work for at least 12 months</li>
        <li>We'll provide migration guides for moving to new versions</li>
      </ul>
      <div className="faq-warning">
        <span className="faq-warning-icon">⚠️</span>
        <p>Always specify an API version in your requests to ensure consistent behavior.</p>
      </div>
    </div>
  </div>

  <div className="faq-item">
    <div className="faq-question">
      <div className="faq-question-content">
        <span className="faq-question-icon">🌐</span>
        <h3 className="faq-question-text">How do I handle CORS issues?</h3>
      </div>
      <span className="faq-toggle-icon">▼</span>
    </div>
    <div className="faq-answer">
      <p>Cross-Origin Resource Sharing (CORS) issues typically occur when making API requests directly from a browser. To avoid CORS issues:</p>
      <ol>
        <li><strong>Use a backend proxy</strong>: Make API requests from your server, not directly from the browser</li>
        <li><strong>Use our client-side SDK</strong>: Our JavaScript SDK handles CORS for you</li>
        <li><strong>Configure CORS headers</strong>: If you must make direct API calls, add your domain to the allowed origins in your LiasonPay dashboard</li>
      </ol>
      <div className="faq-code-block">
        <div className="faq-code-header">
          <span>Node.js Backend Proxy Example</span>
          <button className="copy-button">Copy</button>
        </div>
        <pre>
          <code>
{`// Express.js proxy endpoint
app.post('/api/proxy/payment', async (req, res) => {
  try {
    const response = await fetch('https://liasonpay.net/api/v1/payments', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${process.env.LIASONPAY_API_KEY}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});`}
          </code>
        </pre>
      </div>
      <div className="faq-warning">
        <span className="faq-warning-icon">⚠️</span>
        <p>Never include your API key in client-side code. Always use a backend proxy for API requests.</p>
      </div>
    </div>
  </div>
</div>

<div className="support-section">
  <div className="support-header">
    <div className="support-icon">🤝</div>
    <h2 className="support-title">Need More Help?</h2>
  </div>
  <p>If you couldn't find the answer to your question, our support team is here to help.</p>
  
  <div className="support-options">
    <div className="support-option">
      <div className="support-option-icon">📧</div>
      <div className="support-option-content">
        <h3 className="support-option-title">Email Support</h3>
        <p className="support-option-description">Send us an email at <a href="mailto:support@liasonpay.net">support@liasonpay.net</a></p>
      </div>
    </div>
    
    <div className="support-option">
      <div className="support-option-icon">💬</div>
      <div className="support-option-content">
        <h3 className="support-option-title">Live Chat</h3>
        <p className="support-option-description">Chat with our support team from your dashboard</p>
      </div>
    </div>
    
    <div className="support-option">
      <div className="support-option-icon">📚</div>
      <div className="support-option-content">
        <h3 className="support-option-title">Documentation</h3>
        <p className="support-option-description">Browse our <a href="/">detailed documentation</a></p>
      </div>
    </div>
  </div>
  
  <div className="support-response-times">
    <h4>Response Time Expectations</h4>
    <div className="response-time-grid">
      <div className="response-time-item">
        <div className="priority-indicator high">High Priority</div>
        <div className="time-estimate">1-2 hours</div>
      </div>
      <div className="response-time-item">
        <div className="priority-indicator medium">Medium Priority</div>
        <div className="time-estimate">4-8 hours</div>
      </div>
      <div className="response-time-item">
        <div className="priority-indicator low">Low Priority</div>
        <div className="time-estimate">24-48 hours</div>
      </div>
    </div>
  </div>
</div>

If you're not receiving webhook events, check the following:

1. Verify that your webhook URL is correctly configured in the LiasonPay dashboard
2. Ensure your server is accessible from the internet
3. Check that your server is responding with a 200 status code
4. Look for any firewall or security settings that might be blocking incoming requests
5. Check the webhook logs in your LiasonPay dashboard for any delivery failures

### How do I test webhooks locally?

To test webhooks in a local development environment:

1. Use a tool like [ngrok](https://ngrok.com/) to create a public URL for your local server
2. Configure your webhook URL in the LiasonPay dashboard to point to the ngrok URL
3. Trigger events by creating payments or subscriptions
4. Check your logs to ensure webhooks are being received and processed correctly

### How do I verify webhook signatures?

To verify webhook signatures:

```javascript
const crypto = require("crypto");

function verifyWebhookSignature(payload, signatureHeader, secret) {
  if (!signatureHeader) return false;

  const [timestamp, signature] = signatureHeader.split(",");
  const timestampValue = timestamp.split("=")[1];
  const signatureValue = signature.split("=")[1];

  // Check if the timestamp is too old (5 minutes)
  const now = Math.floor(Date.now() / 1000);
  if (now - parseInt(timestampValue) > 300) {
    return false;
  }

  // Create the expected signature
  const signedPayload = `${timestampValue}.${JSON.stringify(payload)}`;
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex");

  // Compare signatures using a constant-time comparison
  return crypto.timingSafeEqual(
    Buffer.from(signatureValue),
    Buffer.from(expectedSignature)
  );
}
```

## API Integration

### How do I handle idempotency?

To handle idempotency and prevent duplicate operations:

1. Generate a unique idempotency key for each operation
2. Include the idempotency key in the `Idempotency-Key` header of your API request
3. If a request fails or times out, retry the request with the same idempotency key
4. LiasonPay will recognize the duplicate request and return the result of the original request

Example:

```http
Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000
```

### How can I test different payment scenarios?

You can use specific test card numbers to trigger different payment scenarios:

| Card Number      | Scenario                              |
| ---------------- | ------------------------------------- |
| 4111111111111111 | Successful payment                    |
| 4000000000000002 | Declined payment (insufficient funds) |
| 4000000000000069 | Expired card                          |
| 4000000000000119 | Card declined (generic)               |

You can also use specific amounts to trigger different responses:

| Amount | Response                            |
| ------ | ----------------------------------- |
| 100    | Successful payment                  |
| 999    | Failed payment (insufficient funds) |
| 888    | Failed payment (expired card)       |
| 777    | Failed payment (declined)           |

For more test options, see the [Environment Information](/getting-started/environment-information) guide.

### How do I handle errors in my integration?

Implement comprehensive error handling:

1. Use try-catch blocks around API calls
2. Check the response status and error messages
3. Implement retry logic with exponential backoff for transient errors
4. Log detailed error information for debugging
5. Provide user-friendly error messages to your customers

See the [Error Handling](/developer-guide/error-handling) guide for more details.

## Technical Issues

### How do I debug API requests?

To debug API requests:

1. Enable detailed logging in your API client
2. Use tools like Postman or Insomnia to test requests manually
3. Check the request and response headers
4. Verify the request payload format
5. Look for specific error messages in the response

### What should I do if I get a 500 error?

If you receive a 500 error (Internal Server Error):

1. Check if the issue is temporary by retrying the request after a short delay
2. Verify that your request payload is correctly formatted
3. Check the LiasonPay status page for any reported issues
4. Contact LiasonPay support with the request ID and timestamp

### How do I optimize API performance?

To optimize API performance:

1. Minimize the number of API calls
2. Implement caching for non-sensitive data
3. Use connection pooling for HTTP requests
4. Implement proper error handling and retries
5. Use pagination for large data sets

See the [Performance Optimization](/developer-guide/best-practices/performance) guide for more details.

<div id="still-need-help" className="faq-category">
  <div className="faq-category-header">
    <div className="faq-category-icon">💬</div>
    <h2 className="faq-category-title">Still Need Help?</h2>
  </div>

  <div className="support-section">
    <div className="support-header">
      <div className="support-icon">🤝</div>
      <h3 className="support-title">We're Here to Help</h3>
    </div>
    <p>If you couldn't find an answer to your question, our support team is ready to assist you.</p>

    <div className="support-options">
      <div className="support-option">
        <div className="support-option-icon">📧</div>
        <div className="support-option-content">
          <h4 className="support-option-title">Email Support</h4>
          <p className="support-option-description">Send us an email and we'll respond within 24 hours</p>
          <a href="mailto:support@liasonpay.net" className="support-link">support@liasonpay.net</a>
        </div>
      </div>

      <div className="support-option">
        <div className="support-option-icon">🌐</div>
        <div className="support-option-content">
          <h4 className="support-option-title">Support Portal</h4>
          <p className="support-option-description">Submit tickets and track their status</p>
          <a href="https://support.liasonpay.net" target="_blank" rel="noopener noreferrer" className="support-link">support.liasonpay.net</a>
        </div>
      </div>

      <div className="support-option">
        <div className="support-option-icon">📚</div>
        <div className="support-option-content">
          <h4 className="support-option-title">Documentation</h4>
          <p className="support-option-description">Browse our comprehensive documentation</p>
          <a href={`${AppUrl()}/docs`} target="_blank" rel="noopener noreferrer" className="support-link">{AppUrl()}/docs</a>
        </div>
      </div>

      <div className="support-option">
        <div className="support-option-icon">💻</div>
        <div className="support-option-content">
          <h4 className="support-option-title">Developer Community</h4>
          <p className="support-option-description">Connect with other developers</p>
          <a href="https://community.liasonpay.net" target="_blank" rel="noopener noreferrer" className="support-link">community.liasonpay.net</a>
        </div>
      </div>
    </div>

    <div className="support-response-times">
      <h4>Response Time Expectations</h4>
      <div className="response-time-grid">
        <div className="response-time-item">
          <div className="priority-indicator high">High</div>
          <div className="time-estimate">2-4 hours</div>
        </div>
        <div className="response-time-item">
          <div className="priority-indicator medium">Medium</div>
          <div className="time-estimate">24 hours</div>
        </div>
        <div className="response-time-item">
          <div className="priority-indicator low">Low</div>
          <div className="time-estimate">48 hours</div>
        </div>
      </div>
    </div>

  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-steps-header">
    <div className="next-steps-header-content">
      <h3>Continue Your Integration Journey</h3>
      <p>Explore these resources to enhance your LiasonPay integration</p>
    </div>
  </div>

  <div className="next-steps-grid">
    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">🧪</div>
        </div>
        <div className="next-step-number">Tools</div>
      </div>
      <div className="next-step-card-content">
        <h4>API Testing</h4>
        <p>Test API endpoints directly in your browser</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Try out API requests</li>
          <li><span className="benefit-icon">✓</span> See real responses</li>
          <li><span className="benefit-icon">✓</span> Debug your integration</li>
        </ul>
        <div className="next-step-action">
          <a href="/interactive-tools/api-testing" className="button button--primary">
            <span className="button-text">Open API Testing Tool</span>
            <span className="button-icon">→</span>
          </a>
        </div>
      </div>
    </div>

    <div className="next-step-card">
      <div className="next-step-card-header">
        <div className="next-step-icon-wrapper">
          <div className="next-step-icon">⚠️</div>
        </div>
        <div className="next-step-number">Guide</div>
      </div>
      <div className="next-step-card-content">
        <h4>Error Handling</h4>
        <p>Learn how to handle API errors effectively</p>
        <ul className="next-step-benefits">
          <li><span className="benefit-icon">✓</span> Understand error codes and messages</li>
          <li><span className="benefit-icon">✓</span> Implement proper error handling</li>
          <li><span className="benefit-icon">✓</span> Create better user experiences</li>
        </ul>
        <div className="next-step-action">
          <a href="/developer-guide/error-handling" className="button button--primary">
            <span className="button-text">View Error Handling Guide</span>
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
        <div className="next-step-number">Best Practices</div>
      </div>
      <div className="next-step-card-content">
        <h4>Security Guidelines</h4>
        <p>Learn more about securing your integration</p>
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
      <h4>Still Have Questions?</h4>
      <p>If you couldn't find the answer you were looking for, our support team is here to help.</p>
      <div className="help-actions">
        <a href="https://liasonpay.net/support" target="_blank" rel="noopener noreferrer" className="button button--secondary">
          <span className="button-text">Contact Support</span>
        </a>
        <a href="mailto:support@liasonpay.net" className="button button--secondary">
          <span className="button-text">Email Support</span>
        </a>
      </div>
    </div>
  </div>
</div>
