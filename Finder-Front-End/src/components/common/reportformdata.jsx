const reportfrominputs = [
  {
    id: 1,
    type: "text",
    classes: " col-sm-12 col-md-6  col-lg-4 ",
    label: "First Name",
    formid: "missing_fname",
  },
  {
    id: 2,
    type: "text",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "Middle Name",
    formid: "missing_mname",
  },
  {
    id: 3,
    type: "text",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "Last Name",
    formid: "missing_lname",
  },
  {
    id: 4,
    type: "number",
    classes: "col-sm-12 col-md-6  col-lg-4 ",
    label: "Age",
    formid: "missing_age",
  },
  {
    id: 5,
    type: "number",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "Height in Foot",
    formid: "missing_height",
  },
  {
    id: 6,
    type: "text",
    classes: "col-md-6",
    label: "city",
    formid: "missing_city",
  },
  {
    id: 7,
    type: "number",
    classes: "col-md-2",
    label: "Zip Code",
    formid: "missing_zip",
  },
  {
    id: 8,
    type: "text",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "First Name",
    formid: "user_fname",
  },
  {
    id: 9,
    type: "text",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "Middle Name",
    formid: "user_mname",
  },
  {
    id: 10,
    type: "text",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "Last Name",
    formid: "user_lname",
  },
  {
    id: 11,
    type: "text",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "Relation with Missing Person",
    formid: "user_relation",
  },
  {
    id: 12,
    type: "number",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "Contact Number 1",
    formid: "user_contact_1",
  },
  {
    id: 13,
    type: "number",
    classes: "col-sm-12 col-md-6  col-lg-4",
    label: "Contact Number 2 (optional)",
    formid: "user_contact_2",
  },
];

export function inputs() {
  return reportfrominputs;
}
