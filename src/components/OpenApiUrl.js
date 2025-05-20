import React from 'react';
import { DOCS_URL } from '../constants';

/**
 * Component that returns the URL to the OpenAPI specification
 * This ensures that the OpenAPI spec URL is consistent and will work
 * even if the base URL of the documentation changes
 * 
 * @returns {string} The complete OpenAPI spec URL
 */
export default function OpenApiUrl() {
  // If DOCS_URL ends with a slash, we don't need to add one
  const baseUrl = DOCS_URL.endsWith('/') ? DOCS_URL.slice(0, -1) : DOCS_URL;

  // Return the complete URL to the OpenAPI spec
  return `${baseUrl}/openapi.yaml`;
}

/**
 * Function version of the OpenApiUrl component for use in non-JSX contexts
 * 
 * @returns {string} The complete OpenAPI spec URL
 */
export function getOpenApiUrl() {
  // If DOCS_URL ends with a slash, we don't need to add one
  const baseUrl = DOCS_URL.endsWith('/') ? DOCS_URL.slice(0, -1) : DOCS_URL;

  // Return the complete URL to the OpenAPI spec
  return `${baseUrl}/openapi.yaml`;
}
