import http from "../services/httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/gallary";

export function gallaryGet() {
  return http.get(apiEndpoint);
}
