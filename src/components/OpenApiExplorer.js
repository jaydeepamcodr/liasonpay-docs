import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import * as Constants from '../constants';
import '../css/api-explorer.css';

// OpenAPI Explorer component with embedded Swagger UI
export default function OpenApiExplorer() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;

  return (
    <div className="openapi-explorer-container">
      <div className="openapi-explorer-info">
        <p>
          The OpenAPI Explorer allows you to browse and test the LiasonPay API.
          The base URL for all API requests is: <code>{apiBaseUrl}</code>
        </p>
      </div>

      {/* Embedded Swagger UI */}
      <div className="embedded-swagger-ui">
        <h3>Embedded API Explorer</h3>
        <div className="swagger-ui-wrapper">
          <iframe
            src="/swagger-ui/index.html"
            title="LiasonPay API Explorer"
            width="100%"
            height="800px"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      <div className="openapi-explorer-alternatives">
        <h3>Alternative Options</h3>
        <p>If you prefer to use other tools to explore our API, you can:</p>

        <div className="openapi-explorer-options">
          <div className="openapi-explorer-option">
            <h4>Download OpenAPI Specification</h4>
            <p>
              Download the OpenAPI specification file and use it with your preferred OpenAPI viewer:
            </p>
            <a href="/openapi.yaml" download className="button button--primary">
              Download OpenAPI Specification
            </a>
          </div>
        </div>
      </div>

      <div className="openapi-explorer-instructions">
        <h3>Using the API Explorer</h3>
        <p>
          The API Explorer provides an interactive interface for exploring our API:
        </p>
        <ul>
          <li>Browse all available API endpoints</li>
          <li>See detailed parameter descriptions</li>
          <li>Try out API requests directly from your browser</li>
          <li>View request and response schemas</li>
          <li>Understand authentication requirements</li>
        </ul>

        <h4>Authentication</h4>
        <p>
          To authenticate API requests in the explorer:
        </p>
        <ol>
          <li>Click the <strong>Authorize</strong> button at the top of the explorer</li>
          <li>Enter your API key in the format: <code>Bearer {Constants.EXAMPLE_API_KEY}</code></li>
          <li>Click <strong>Authorize</strong></li>
          <li>Close the authorization dialog</li>
        </ol>
        <p>
          All subsequent requests will include your API key in the Authorization header.
        </p>
      </div>
    </div>
  );
}
