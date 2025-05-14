import React, { useState } from 'react';

export default function ApiTester({ endpoint, method, params = [], baseUrl = 'https://api.yourdomain.com' }) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
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
          // Add your authentication headers here if needed
          // 'Authorization': 'Bearer YOUR_TOKEN'
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
                onChange={(e) => setFormData({...formData, [param.name]: e.target.value})}
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
