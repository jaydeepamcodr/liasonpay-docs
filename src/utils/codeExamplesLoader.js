/**
 * Utility for loading and managing code examples
 * This utility helps with dynamically loading code examples and handling long code snippets
 */

import { API_BASE_URL, EXAMPLE_API_KEY, EXAMPLE_STORE_ID } from '../constants';

/**
 * Load code examples for a specific page
 * @param {string} category - The category of examples (e.g., 'payments', 'subscriptions')
 * @param {string} page - The specific page name
 * @returns {Object} The code examples for the specified page
 */
export const loadExamples = (category, page) => {
  try {
    // Dynamic import of code examples
    const examples = require(`../code-examples/${category}/${page}`);
    return examples;
  } catch (error) {
    console.error(`Failed to load code examples for ${category}/${page}:`, error);
    return {};
  }
};

/**
 * Truncate long code snippets for preview
 * @param {string} code - The full code snippet
 * @param {number} maxLines - Maximum number of lines to show (default: 15)
 * @returns {Object} Object containing truncated code and a flag indicating if truncation occurred
 */
export const truncateCode = (code, maxLines = 15) => {
  if (!code) return { code: '', isTruncated: false };
  
  const lines = code.split('\n');
  const isTruncated = lines.length > maxLines;
  
  if (isTruncated) {
    const truncatedCode = lines.slice(0, maxLines).join('\n') + '\n// ... more code ...';
    return { code: truncatedCode, isTruncated, fullCode: code };
  }
  
  return { code, isTruncated: false };
};

/**
 * Get language-specific examples for a specific example key
 * @param {Object} examples - The examples object
 * @param {string} exampleKey - The key for the specific example
 * @returns {Array} Array of language-specific examples for tabs
 */
export const getLanguageExamples = (examples, exampleKey) => {
  if (!examples || !examples[exampleKey]) return [];
  
  const languageKeys = Object.keys(examples[exampleKey]);
  
  return languageKeys.map(lang => {
    const { code, language, label } = examples[exampleKey][lang];
    return {
      language,
      label,
      code
    };
  });
};

/**
 * Replace dynamic values in code examples
 * @param {string} code - The code snippet with placeholders
 * @param {Object} values - Object containing values to replace placeholders
 * @returns {string} Code with replaced values
 */
export const replaceDynamicValues = (code, values = {}) => {
  if (!code) return '';
  
  let result = code;
  
  // Default values
  const defaultValues = {
    API_BASE_URL,
    EXAMPLE_API_KEY,
    EXAMPLE_STORE_ID,
    ...values
  };
  
  // Replace all placeholders
  Object.entries(defaultValues).forEach(([key, value]) => {
    const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
    result = result.replace(regex, value);
  });
  
  return result;
};

export default {
  loadExamples,
  truncateCode,
  getLanguageExamples,
  replaceDynamicValues
};
