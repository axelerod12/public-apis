import http from "./http-common";

/**
 * List all categories currently cataloged in the project.
 *
 * @return {Promise} The Promise to be fulfilled.
 */
export default function getCategories() {
  return http.get('/categories');
}
