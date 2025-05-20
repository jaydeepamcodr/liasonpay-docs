import React from 'react';
import { DOCS_URL } from '../constants';

/**
 * Component that returns a properly formatted documentation URL
 * This ensures that all documentation links are consistent and will work
 * even if the base URL of the documentation changes
 * 
 * @param {Object} props Component props
 * @param {string} props.path The path to append to the base docs URL (should start without a slash)
 * @returns {string} The complete documentation URL
 */
export default function DocsUrl({ path }) {
  // Remove any leading slash from the path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;

  // If DOCS_URL ends with a slash, we don't need to add one
  const baseUrl = DOCS_URL.endsWith('/') ? DOCS_URL.slice(0, -1) : DOCS_URL;

  // Return the complete URL
  return `${baseUrl}/${cleanPath}`;
}

/**
 * Function version of the DocsUrl component for use in non-JSX contexts
 * 
 * @param {string} path The path to append to the base docs URL (should start without a slash)
 * @returns {string} The complete documentation URL
 */
export function getDocsUrl(path) {
  // Remove any leading slash from the path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;

  // If DOCS_URL ends with a slash, we don't need to add one
  const baseUrl = DOCS_URL.endsWith('/') ? DOCS_URL.slice(0, -1) : DOCS_URL;

  // Return the complete URL
  return `${baseUrl}/${cleanPath}`;
}
