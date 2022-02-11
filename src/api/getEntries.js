import axios from "axios";

/**
 * List all entries currently cataloged in the project. All parameters documented at
 * https://api.publicapis.org/#parameters
 *
 * @param {Object} params Query params of the request.
 * @return {Promise} The Promise to be fulfilled.
 */
export default function getEntries(params = {}) {
  return axios.get('https://api.publicapis.org/entries', { params });
}
