---
sidebar_position: 4
---

# Compliance Requirements

<div className="explorer-header">
  <div className="explorer-header-content">
    <h2>Regulatory Compliance Guide</h2>
    <p>Essential compliance considerations for your payment integration</p>
    <div className="explorer-badges">
      <span className="badge badge--primary">Compliance</span>
      <span className="badge badge--info">Best Practices</span>
    </div>
  </div>
</div>

<div className="introduction-section">
  <div className="introduction-card">
    <p>
      Adhering to regulatory requirements and industry standards is essential when processing payments and handling customer data. This guide outlines key compliance considerations for your LiasonPay integration.
    </p>
  </div>
</div>

<div className="step-by-step-section">
  <div className="step-by-step-card">
    <h2>1. Payment Card Industry Data Security Standard (PCI DSS)</h2>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">🔒</div>
        <h3>PCI DSS Overview</h3>
      </div>

      <div className="compliance-content">
        <p>PCI DSS is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.</p>

        <div className="compliance-table-container">
          <h4>Compliance Levels</h4>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Description</th>
                  <th>Requirements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Level 1</td>
                  <td>Merchants processing over 6 million transactions per year</td>
                  <td>Annual on-site assessment by a Qualified Security Assessor (QSA)</td>
                </tr>
                <tr>
                  <td>Level 2</td>
                  <td>Merchants processing 1-6 million transactions per year</td>
                  <td>Annual Self-Assessment Questionnaire (SAQ)</td>
                </tr>
                <tr>
                  <td>Level 3</td>
                  <td>Merchants processing 20,000-1 million e-commerce transactions per year</td>
                  <td>Annual SAQ</td>
                </tr>
                <tr>
                  <td>Level 4</td>
                  <td>Merchants processing fewer than 20,000 e-commerce transactions per year</td>
                  <td>Annual SAQ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">📋</div>
        <h3>Key Requirements</h3>
      </div>

      <div className="compliance-content">
        <div className="requirements-grid">
          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">1</div>
              <h4>Build and Maintain a Secure Network</h4>
            </div>
            <ul className="requirement-list">
              <li>Install and maintain a firewall configuration</li>
              <li>Change vendor-supplied defaults for system passwords</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">2</div>
              <h4>Protect Cardholder Data</h4>
            </div>
            <ul className="requirement-list">
              <li>Protect stored cardholder data</li>
              <li>Encrypt transmission of cardholder data</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">3</div>
              <h4>Maintain a Vulnerability Management Program</h4>
            </div>
            <ul className="requirement-list">
              <li>Use and regularly update anti-virus software</li>
              <li>Develop and maintain secure systems and applications</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">4</div>
              <h4>Implement Strong Access Control Measures</h4>
            </div>
            <ul className="requirement-list">
              <li>Restrict access to cardholder data</li>
              <li>Assign a unique ID to each person with computer access</li>
              <li>Restrict physical access to cardholder data</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">5</div>
              <h4>Regularly Monitor and Test Networks</h4>
            </div>
            <ul className="requirement-list">
              <li>Track and monitor all access to network resources and cardholder data</li>
              <li>Regularly test security systems and processes</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">6</div>
              <h4>Maintain an Information Security Policy</h4>
            </div>
            <ul className="requirement-list">
              <li>Maintain a policy that addresses information security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">✅</div>
        <h3>PCI DSS Implementation with LiasonPay</h3>
      </div>

      <div className="compliance-content">
        <p>Using LiasonPay can significantly reduce your PCI DSS scope:</p>

        <div className="implementation-options">
          <div className="implementation-option">
            <h4>Use LiasonPay's Hosted Checkout</h4>
            <ul className="implementation-list">
              <li>Card data is handled directly by LiasonPay</li>
              <li>Your servers never see or process card data</li>
              <li>Qualifies for SAQ A (simplest compliance path)</li>
            </ul>
          </div>

          <div className="implementation-option">
            <h4>If Using API Integration</h4>
            <ul className="implementation-list">
              <li>Never store, process, or transmit card data</li>
              <li>Use tokenization for recurring payments</li>
              <li>Implement proper security measures</li>
            </ul>
          </div>
        </div>

        <div className="code-example-container">
          <div className="code-example-header">
            <div className="code-example-badge good">Recommended Implementation</div>
          </div>
          <div className="code-block-container">
            <pre className="code-block">

```javascript
// GOOD: Using LiasonPay's hosted checkout
const checkoutSession = await liasonpay.payments.process({
  store_id: "STORE_123",
  currency: "usd",
  products: [{ name: "Product", price: 100, quantity: 1 }],
  success_url: "https://example.com/success",
  cancel_url: "https://example.com/cancel",
  mode: "production",
});

// Redirect to LiasonPay's hosted checkout
window.location.href = checkoutSession.data.checkout_url;
```

            </pre>
          </div>
        </div>

        <div className="note-box">
          <div className="note-icon">💡</div>
          <div className="note-content">
            <p>By using LiasonPay's hosted checkout, you can significantly reduce your PCI DSS compliance burden as sensitive card data never touches your servers.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div className="step-by-step-section">
  <div className="step-by-step-card">
    <h2>2. General Data Protection Regulation (GDPR)</h2>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">🇪🇺</div>
        <h3>GDPR Overview</h3>
      </div>

      <div className="compliance-content">
        <p>GDPR is a regulation in EU law on data protection and privacy that applies to all businesses processing the personal data of EU citizens.</p>

        <div className="warning-callout">
          <div className="warning-icon">⚠️</div>
          <div className="warning-content">
            <p><strong>Important:</strong> GDPR applies to your business if you offer goods or services to EU residents or monitor their behavior, regardless of your company's location.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">📋</div>
        <h3>Key Requirements</h3>
      </div>

      <div className="compliance-content">
        <div className="requirements-grid">
          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">1</div>
              <h4>Lawful Basis for Processing</h4>
            </div>
            <ul className="requirement-list">
              <li>Obtain explicit consent for data processing</li>
              <li>Document the legal basis for processing data</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">2</div>
              <h4>Data Subject Rights</h4>
            </div>
            <ul className="requirement-list">
              <li>Right to access personal data</li>
              <li>Right to rectification</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">3</div>
              <h4>Privacy by Design</h4>
            </div>
            <ul className="requirement-list">
              <li>Implement data protection measures from the start</li>
              <li>Only collect necessary data</li>
              <li>Use pseudonymization and encryption</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">4</div>
              <h4>Data Breach Notification</h4>
            </div>
            <ul className="requirement-list">
              <li>Report breaches within 72 hours</li>
              <li>Maintain a breach response plan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">✅</div>
        <h3>GDPR Implementation</h3>
      </div>

      <div className="compliance-content">
        <div className="implementation-steps">
          <div className="implementation-step">
            <h4>1. Privacy Policy</h4>
            <p>Update your privacy policy to include:</p>
            <ul className="implementation-list">
              <li>What data you collect</li>
              <li>How you use it</li>
              <li>Legal basis for processing</li>
              <li>Data subject rights</li>
              <li>Retention periods</li>
            </ul>
          </div>

          <div className="implementation-step">
            <h4>2. Consent Management</h4>
            <p>Implement proper consent mechanisms:</p>
            <ul className="implementation-list">
              <li>Implement clear consent mechanisms</li>
              <li>Allow users to withdraw consent</li>
              <li>Keep records of consent</li>
            </ul>

            <div className="code-example-container">
              <div className="code-example-header">
                <div className="code-example-badge good">GDPR-Compliant Consent Example</div>
              </div>
              <div className="code-block-container">
                <pre className="code-block">

```html
<!-- Example of GDPR-compliant consent checkbox -->
<div class="consent-checkbox">
  <input type="checkbox" id="data-consent" name="data-consent" required />
  <label for="data-consent">
    I consent to the processing of my personal data according to the
    <a href="/privacy-policy" target="_blank">Privacy Policy</a>.
  </label>
</div>
```

                </pre>
              </div>
            </div>
          </div>

          <div className="implementation-step">
            <h4>3. Data Minimization</h4>
            <p>Implement data minimization practices:</p>
            <ul className="implementation-list">
              <li>Only collect necessary data</li>
              <li>Implement appropriate retention periods</li>
              <li>Securely delete data when no longer needed</li>
            </ul>
          </div>
        </div>

        <div className="note-box">
          <div className="note-icon">💡</div>
          <div className="note-content">
            <p>When using LiasonPay, you remain responsible for GDPR compliance in your own systems, but LiasonPay handles compliance for payment data processed on their servers.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<div className="step-by-step-section">
  <div className="step-by-step-card">
    <h2>3. California Consumer Privacy Act (CCPA)</h2>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">🇺🇸</div>
        <h3>CCPA Overview</h3>
      </div>

      <div className="compliance-content">
        <p>CCPA is a state statute intended to enhance privacy rights and consumer protection for residents of California.</p>

        <div className="warning-callout">
          <div className="warning-icon">⚠️</div>
          <div className="warning-content">
            <p><strong>Important:</strong> CCPA applies to businesses that collect personal information from California residents and meet certain thresholds (annual revenue over $25 million, buying/selling/receiving personal information of 50,000+ consumers, or deriving 50%+ of revenue from selling consumers' personal information).</p>
          </div>
        </div>
      </div>
    </div>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">📋</div>
        <h3>Key Requirements</h3>
      </div>

      <div className="compliance-content">
        <div className="requirements-grid">
          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">1</div>
              <h4>Consumer Rights</h4>
            </div>
            <ul className="requirement-list">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising rights</li>
            </ul>
          </div>

          <div className="requirement-card">
            <div className="requirement-header">
              <div className="requirement-number">2</div>
              <h4>Business Obligations</h4>
            </div>
            <ul className="requirement-list">
              <li>Provide notice at collection</li>
              <li>Respond to consumer requests</li>
              <li>Verify consumer identities</li>
              <li>Maintain reasonable security procedures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="compliance-subsection">
      <div className="compliance-subsection-header">
        <div className="compliance-icon">✅</div>
        <h3>CCPA Implementation</h3>
      </div>

      <div className="compliance-content">
        <div className="implementation-steps">
          <div className="implementation-step">
            <h4>1. Privacy Notice</h4>
            <p>Update your privacy policy to include CCPA-specific disclosures:</p>
            <ul className="implementation-list">
              <li>Update your privacy policy to include CCPA-specific disclosures</li>
              <li>Describe the categories of personal information collected</li>
              <li>Explain consumer rights under CCPA</li>
            </ul>
          </div>

          <div className="implementation-step">
            <h4>2. Request Handling</h4>
            <p>Implement mechanisms to handle consumer requests:</p>
            <ul className="implementation-list">
              <li>Implement mechanisms to handle consumer requests</li>
              <li>Establish verification procedures</li>
              <li>Respond within required timeframes (45 days)</li>
            </ul>

            <div className="code-example-container">
              <div className="code-example-header">
                <div className="code-example-badge good">CCPA Data Request Handler Example</div>
              </div>
              <div className="code-block-container">
                <pre className="code-block">

```javascript
// Example of a CCPA data access request handler
app.post("/privacy/data-request", async (req, res) => {
  try {
    // Verify the user's identity
    const isVerified = await verifyUserIdentity(req.body);

    if (!isVerified) {
      return res.status(401).json({ error: "Identity verification failed" });
    }

    // Process the request based on type
    switch (req.body.requestType) {
      case "access":
        const userData = await getUserData(req.body.userId);
        return res.json({ success: true, data: userData });

      case "delete":
        await deleteUserData(req.body.userId);
        return res.json({
          success: true,
          message: "Data deleted successfully",
        });

      default:
        return res.status(400).json({ error: "Invalid request type" });
    }
  } catch (error) {
    console.error("Error processing privacy request:", error);
    return res
      .status(500)
      .json({ error: "An error occurred processing your request" });
  }
});
```

                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="note-box">
          <div className="note-icon">💡</div>
          <div className="note-content">
            <p>Consider implementing a dedicated privacy portal where users can easily submit access and deletion requests to streamline CCPA compliance.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

## Strong Customer Authentication (SCA)

### SCA Overview

SCA is a requirement of the EU Revised Directive on Payment Services (PSD2) that requires additional authentication for online payments.

### Key Requirements

1. **Two-Factor Authentication**

   - Require at least two of the following:
     - Something the customer knows (password, PIN)
     - Something the customer has (phone, hardware token)
     - Something the customer is (biometrics)

2. **Dynamic Linking**

   - Authentication must be linked to a specific amount and recipient

3. **Exemptions**
   - Low-value transactions (under €30)
   - Recurring transactions of the same amount to the same recipient
   - Transactions assessed as low-risk

### SCA Implementation with LiasonPay

LiasonPay handles SCA requirements automatically:

1. **3D Secure 2.0**

   - LiasonPay implements 3D Secure 2.0 for card payments
   - Dynamically applies SCA when required
   - Handles exemptions appropriately

2. **Recurring Payments**
   - Initial payment requires SCA
   - Subsequent payments may be exempt
   - LiasonPay manages this automatically

```javascript
// LiasonPay handles SCA automatically
const subscription = await liasonpay.subscription.create({
  store_id: "STORE_123",
  price_id: "PRICE_ABC",
  success_url: "https://example.com/success",
  cancel_url: "https://example.com/cancel",
  mode: "production",
});

// Redirect to LiasonPay's checkout with SCA when required
window.location.href = subscription.data.checkout_url;
```

## Anti-Money Laundering (AML) and Know Your Customer (KYC)

### AML/KYC Overview

AML and KYC regulations require businesses to verify customer identities and monitor transactions to prevent financial crimes.

### Key Requirements

1. **Customer Due Diligence**

   - Verify customer identities
   - Assess risk profiles
   - Monitor for suspicious activities

2. **Transaction Monitoring**
   - Screen against sanctions lists
   - Identify unusual transaction patterns
   - Report suspicious activities

### AML/KYC Implementation

1. **Identity Verification**

   - Collect appropriate identification information
   - Verify identities using reliable sources
   - Maintain verification records

2. **Risk Assessment**
   - Implement risk-based approach
   - Apply enhanced due diligence for high-risk customers
   - Regularly review risk assessments

## Accessibility Compliance

### Web Content Accessibility Guidelines (WCAG)

WCAG provides guidelines for making web content accessible to people with disabilities.

### Key Requirements

1. **Perceivable**

   - Provide text alternatives for non-text content
   - Provide captions and alternatives for multimedia
   - Create content that can be presented in different ways
   - Make it easier for users to see and hear content

2. **Operable**

   - Make all functionality available from a keyboard
   - Give users enough time to read and use content
   - Do not use content that causes seizures
   - Help users navigate and find content

3. **Understandable**

   - Make text readable and understandable
   - Make content appear and operate in predictable ways
   - Help users avoid and correct mistakes

4. **Robust**
   - Maximize compatibility with current and future user tools

### Accessibility Implementation

1. **Semantic HTML**

   - Use proper HTML elements
   - Implement appropriate ARIA attributes
   - Ensure logical tab order

2. **Keyboard Navigation**
   - Make all interactive elements keyboard accessible
   - Provide visible focus indicators
   - Test the entire flow using only a keyboard

## Next Steps

- [Understand Testing Strategies](./testing)
- [Review Security Best Practices](./security)
- [Explore Performance Optimization](./performance)
- [Learn about User Experience Guidelines](./user-experience)
