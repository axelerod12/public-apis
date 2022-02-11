import axios from "axios";

/**
 * List all categories currently cataloged in the project.
 *
 * @return {Promise} The Promise to be fulfilled.
 */
export default function getCategories() {
  return axios.get('https://api.publicapis.org/categories');
}
