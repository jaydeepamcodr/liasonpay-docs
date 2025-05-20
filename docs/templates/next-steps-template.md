<!--
Next Steps Template

Instructions:
1. Copy this template to your page
2. Add the CSS and JS imports in the head section
3. Customize the content for your specific page
4. Set the appropriate "completed" step based on the current page
5. Update the links and content for each card
-->

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
