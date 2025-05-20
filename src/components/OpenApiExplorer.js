import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import * as Constants from '../constants';
import { getDocsUrl } from './DocsUrl';
import '../css/api-explorer.css';

// OpenAPI Explorer component with embedded Swagger UI
export default function OpenApiExplorer() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;
  const docsUrl = getDocsUrl('');

  return (
    <div className="openapi-explorer-container">
      <div className="explorer-info-card">
        <div className="explorer-info-icon">🔍</div>
        <div className="explorer-info-content">
          <h3>Interactive API Explorer</h3>
          <p>
            Browse and test the LiasonPay API directly in your browser. The base URL for all API requests is: <code>{apiBaseUrl}</code>
          </p>
        </div>
      </div>

      {/* Embedded Swagger UI */}
      <div className="embedded-swagger-ui">
        <div className="swagger-ui-wrapper">
          <iframe
            src={`${docsUrl}/swagger-ui/index.html`}
            title="LiasonPay API Explorer"
            width="100%"
            height="800px"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      <div className="explorer-options-container">
        <div className="explorer-options-grid">
          <div className="explorer-option-card">
            <div className="option-icon">📥</div>
            <div className="option-content">
              <h4>Download OpenAPI Specification</h4>
              <p>
                Download the OpenAPI specification file and use it with your preferred OpenAPI viewer.
              </p>
              <a href="/openapi.yaml" download className="button button--primary">
                <span>Download Specification</span>
              </a>
            </div>
          </div>

          <div className="explorer-option-card">
            <div className="option-icon">🔗</div>
            <div className="option-content">
              <h4>View in Swagger Editor</h4>
              <p>
                Open the specification in Swagger Editor to view and generate client code.
              </p>
              <a href="https://editor.swagger.io/" target="_blank" rel="noopener noreferrer" className="button button--primary">
                <span>Open Swagger Editor</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="explorer-tips">
        <h3>Quick Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🔐</div>
            <div className="tip-content">
              <h4>Authentication</h4>
              <p>Click the <strong>Authorize</strong> button and enter your API key as: <code>Bearer {Constants.EXAMPLE_API_KEY}</code></p>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🧪</div>
            <div className="tip-content">
              <h4>Testing</h4>
              <p>Click <strong>Try it out</strong> on any endpoint to send a real API request</p>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">💻</div>
            <div className="tip-content">
              <h4>Code Generation</h4>
              <p>After clicking <strong>Try it out</strong>, select a language to generate code</p>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🔍</div>
            <div className="tip-content">
              <h4>Search</h4>
              <p>Use the search box at the top to quickly find specific endpoints</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
