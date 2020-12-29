import http from "../services/httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/notification";

export function notificationGet() {
  return http.get(apiEndpoint);
}

export function notificationDelete(Id) {
  return http.delete(`${apiEndpoint}/${Id}`);
}

export function notificationPut(Id) {
  return http.put(apiEndpoint, { id: Id });
}
