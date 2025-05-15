---
sidebar_position: 1
---

import { AppUrl, ApiBaseUrl } from '@site/src/components/DynamicValues';

# Overview

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Welcome to the LiasonPay API</h2>
    <p>A comprehensive payment processing platform for managing subscriptions, processing payments, and more</p>
  </div>
</div>

## What is LiasonPay?

<div className="features-grid">
  <div className="feature-card">
    <h3>🏢 About LiasonPay</h3>
    <p>LiasonPay is a comprehensive payment processing platform that allows businesses to:</p>
    <ul>
      <li>Accept payments securely</li>
      <li>Manage subscription plans</li>
      <li>Handle recurring billing</li>
      <li>Track payment analytics</li>
      <li>Receive real-time notifications</li>
    </ul>
    <p>Our API provides a flexible and powerful way to integrate these capabilities into your applications.</p>
  </div>

  <div className="feature-card">
    <h3>🔍 Why Choose LiasonPay?</h3>
    <ul>
      <li><strong>Simplicity</strong> - Easy to integrate and use</li>
      <li><strong>Flexibility</strong> - Customizable to fit your needs</li>
      <li><strong>Security</strong> - PCI compliant with robust security measures</li>
      <li><strong>Reliability</strong> - High uptime and performance</li>
      <li><strong>Support</strong> - Comprehensive documentation and support</li>
    </ul>
  </div>
</div>

## API Capabilities

<div className="capabilities-section">
  <div className="capabilities-grid">
    <div className="capability-card">
      <div className="capability-icon">💳</div>
      <div className="capability-content">
        <h3>Process Payments</h3>
        <p>Accept one-time payments from your customers with support for multiple payment methods.</p>
      </div>
    </div>

    <div className="capability-card">
      <div className="capability-icon">🔄</div>
      <div className="capability-content">
        <h3>Manage Subscriptions</h3>
        <p>Create, verify, cancel, and upgrade subscription plans for recurring billing.</p>
      </div>
    </div>

    <div className="capability-card">
      <div className="capability-icon">📦</div>
      <div className="capability-content">
        <h3>Handle Packages</h3>
        <p>Retrieve and manage package information for your products and services.</p>
      </div>
    </div>

    <div className="capability-card">
      <div className="capability-icon">🔔</div>
      <div className="capability-content">
        <h3>Receive Webhooks</h3>
        <p>Get real-time notifications about payment events and subscription changes.</p>
      </div>
    </div>

    <div className="capability-card">
      <div className="capability-icon">📊</div>
      <div className="capability-content">
        <h3>Generate Reports</h3>
        <p>Access transaction data and analytics to track your business performance.</p>
      </div>
    </div>

  </div>
</div>

## Getting Started

<div className="setup-steps">
  <div className="setup-step">
    <div className="step-number">1</div>
    <div className="step-content">
      <h3>Create an Account</h3>
      <p><a href={AppUrl()} target="_blank" rel="noopener noreferrer">Sign up for a LiasonPay account</a> to get access to the dashboard and API.</p>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">2</div>
    <div className="step-content">
      <h3>Obtain API Keys</h3>
      <p>Generate your API keys from the dashboard to authenticate your API requests.</p>
      <div className="info-callout">
        <p><strong>💡 Tip:</strong> Keep your API keys secure and never share them publicly.</p>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">3</div>
    <div className="step-content">
      <h3>Understand Authentication</h3>
      <p>Learn how to authenticate your API requests using your API keys.</p>
      <div className="code-block-container">
        <pre className="code-block">
```http
Authorization: Bearer sk_test_your_api_key
```
        </pre>
      </div>
    </div>
  </div>

  <div className="setup-step">
    <div className="step-number">4</div>
    <div className="step-content">
      <h3>Explore Endpoints</h3>
      <p>Familiarize yourself with the available API endpoints and their functionality.</p>
      <a href="/api-reference" className="button button--secondary">View API Reference</a>
    </div>
  </div>
</div>

## API Environments

<div className="environments-section">
  <div className="environment-cards">
    <div className="environment-card">
      <div className="environment-header sandbox">
        <h3>🧪 Sandbox Environment</h3>
      </div>
      <div className="environment-content">
        <p><strong>Purpose:</strong> For testing and development</p>
        <p><strong>Base URL:</strong> <code>https://liasonpay.test/api/v1</code></p>
        <p><strong>API Keys:</strong> Use test keys (<code>sk_test_</code>)</p>
        <div className="info-callout">
          <p><strong>💡 Tip:</strong> Always use the sandbox environment for testing before moving to production.</p>
        </div>
      </div>
    </div>

    <div className="environment-card">
      <div className="environment-header production">
        <h3>🚀 Production Environment</h3>
      </div>
      <div className="environment-content">
        <p><strong>Purpose:</strong> For live transactions</p>
        <p><strong>Base URL:</strong> <code>{ApiBaseUrl()}</code></p>
        <p><strong>API Keys:</strong> Use live keys (<code>sk_live_</code>)</p>
        <div className="warning-callout">
          <p><strong>⚠️ Important:</strong> Production environment processes real payments and affects live data.</p>
        </div>
      </div>
    </div>

  </div>
</div>

## Next Steps

<div className="next-steps-section">
  <div className="next-step-card">
    <h3>🔐 Authentication</h3>
    <p>Learn how to authenticate your API requests</p>
    <a href="./authentication" className="button button--secondary">View Authentication Guide</a>
  </div>

  <div className="next-step-card">
    <h3>📘 How to Use the API</h3>
    <p>Understand how to make API requests</p>
    <a href="./how-to-use" className="button button--secondary">View Usage Guide</a>
  </div>

  <div className="next-step-card">
    <h3>✅ Best Practices</h3>
    <p>Explore best practices for integration</p>
    <a href="./best-practices" className="button button--secondary">View Best Practices</a>
  </div>

  <div className="next-step-card">
    <h3>🔔 Webhooks</h3>
    <p>Set up real-time notifications</p>
    <a href="./webhooks" className="button button--secondary">View Webhooks Guide</a>
  </div>
</div>
