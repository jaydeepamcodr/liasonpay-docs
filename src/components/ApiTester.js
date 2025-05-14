import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import * as Constants from '../constants';

export default function ApiTester({ endpoint, method, params = [] }) {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;

  // Initialize form data with example values
  const initialFormData = {};
  params.forEach(param => {
    if (param.name === 'store_id') {
      initialFormData[param.name] = Constants.EXAMPLE_STORE_ID;
    } else if (param.name === 'subscription_id') {
      initialFormData[param.name] = Constants.EXAMPLE_SUBSCRIPTION_ID;
    } else if (param.name === 'package_id') {
      initialFormData[param.name] = Constants.EXAMPLE_PACKAGE_ID;
    } else if (param.name === 'transaction_id') {
      initialFormData[param.name] = Constants.EXAMPLE_TRANSACTION_ID;
    } else if (param.name === 'price_id') {
      initialFormData[param.name] = Constants.EXAMPLE_PRICE_ID;
    } else if (param.name === 'coupon') {
      initialFormData[param.name] = Constants.EXAMPLE_COUPON;
    }
  });

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace endpoint parameters with actual values
      let finalEndpoint = endpoint;
      const queryParams = [];

      // Process path parameters and query parameters
      params.forEach(param => {
        if (param.in === 'path') {
          // Replace path parameters like {id} with actual values
          finalEndpoint = finalEndpoint.replace(`{${param.name}}`, formData[param.name] || '');
        } else if (param.in === 'query' && formData[param.name]) {
          // Add query parameters
          queryParams.push(`${param.name}=${encodeURIComponent(formData[param.name])}`);
        }
      });

      // Add query string if needed
      if (queryParams.length > 0) {
        finalEndpoint += `?${queryParams.join('&')}`;
      }

      // Prepare request options
      const options = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${siteConfig.customFields.exampleApiKey || Constants.EXAMPLE_API_KEY}`
        }
      };

      // Add body for POST, PUT, PATCH requests
      if (['POST', 'PUT', 'PATCH'].includes(method)) {
        const bodyParams = {};
        params.forEach(param => {
          if (param.in === 'body' && formData[param.name]) {
            bodyParams[param.name] = formData[param.name];
          }
        });
        options.body = JSON.stringify(bodyParams);
      }

      const res = await fetch(`${baseUrl}${finalEndpoint}`, options);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-tester">
      <h3>Try it: {method} {endpoint}</h3>
      <form onSubmit={handleSubmit}>
        {params.map(param => (
          <div key={param.name} className="param-input">
            <label>
              {param.name} {param.required ? '*' : ''}:
              <input
                type="text"
                placeholder={param.description}
                onChange={(e) => setFormData({ ...formData, [param.name]: e.target.value })}
                required={param.required}
              />
            </label>
            {param.description && <p className="param-description">{param.description}</p>}
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Request'}
        </button>
      </form>

      {error && (
        <div className="error">
          <h4>Error:</h4>
          <p>{error}</p>
        </div>
      )}

      {response && (
        <div className="response">
          <h4>Response:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}


