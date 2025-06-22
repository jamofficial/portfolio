/**
 * Fetches JSON data from a public API endpoint
 *
 * @param {string} url - The public JSON API URL
 * @returns {Promise<any>} The JSON response data
 * @throws {Error} Network or parsing errors
 */
export default async function getData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}
