import http from "./http-common";

/**
 * List all entries currently cataloged in the project. All parameters documented at
 * https://api.publicapis.org/#parameters
 *
 * @param {Object} params Query params of the request.
 * @return {Promise} The Promise to be fulfilled.
 */
export default function getEntries(params = {}) {
  return http.get('/entries', { params });
}
