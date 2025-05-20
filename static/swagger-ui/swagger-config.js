// Define the base URL for documentation
const DOCS_URL = 'https://liasonpay.net/documentation';

/**
 * Function to get the documentation URL
 * 
 * @param {string} path The path to append to the base docs URL (optional)
 * @returns {string} The complete documentation URL
 */
function getDocsUrl(path) {
  if (!path) {
    return DOCS_URL;
  }

  // Remove any leading slash from the path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;

  // If DOCS_URL ends with a slash, we don't need to add one
  const baseUrl = DOCS_URL.endsWith('/') ? DOCS_URL.slice(0, -1) : DOCS_URL;

  // Return the complete URL
  return `${baseUrl}/${cleanPath}`;
}
