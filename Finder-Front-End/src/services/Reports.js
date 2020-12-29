import http from "../services/httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/missingreports";

/* prettier-ignore */
const Label = ["Fname","Mname","Lname","Gender","Age","City","State","Zip","User_Fname","User_Mname","User_Lname","Relation","Contact_1","Contact_2",];

/* prettier-ignore */
const Data = ["missing_fname","missing_mname","missing_lname","missing_gender","missing_age","missing_city","missing_state","missing_zip","user_fname","user_mname","user_lname","user_relation","user_contact_1","user_contact_2",
];

export function reportPost(data, file) {
  let formdata = new FormData();
  formdata.append("Image", file);
  for (let i = 0; i < 14; i++) formdata.append(Label[i], data[Data[i]]);
  return http.post(apiEndpoint, formdata);
}

export function reportPut(data, file) {
  let formdata = new FormData();
  if (file !== "") formdata.append("Image", file);
  for (let i = 0; i < 14; i++) formdata.append(Label[i], data[Data[i]]);
  return http.put(apiEndpoint, formdata);
}

export function reportGet() {
  return http.get(apiEndpoint);
}
