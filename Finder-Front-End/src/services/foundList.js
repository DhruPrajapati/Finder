import http from "../services/httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/foundlist";

export function foundListGet() {
  return http.get(apiEndpoint);
}

export function foundListDelete(Id) {
  return http.delete(`${apiEndpoint}/${Id}`);
}
