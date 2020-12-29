import http from "../services/httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/found";

/* prettier-ignore */
const Label = ["Fname","Mname","Lname","Gender","Age","User_Fname","User_Mname","User_Lname","Contact_1","Contact_2",
];
/* prettier-ignore */
const Data = ["missing_fname","missing_mname","missing_lname","missing_gender","missing_age","user_fname","user_mname","user_lname","user_contact_1","user_contact_2",
];

export function foundPost(data, file) {
  let formdata = new FormData();
  formdata.append("Image", file);
  for (let i = 0; i < 10; i++) formdata.append(Label[i], data[Data[i]]);
  return http.post(apiEndpoint, formdata);
}

export function foundPut(data, file, id) {
  let formdata = new FormData();
  if (file !== "") formdata.append("Image", file);

  formdata.append("id", id);
  for (let i = 0; i < 10; i++) formdata.append(Label[i], data[Data[i]]);
  return http.put(apiEndpoint, formdata);
}

export function foundGet(id) {
  return http.get(`${apiEndpoint}/${id}`);
}
