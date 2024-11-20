import * as Yup from "yup";

export const registrationSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your first name"),
  lname: Yup.string().min(2).max(25).required("Please enter your last name"),
  ph: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Please enter your phone number"),
  birth_date: Yup.date()
    .max(new Date(), "Birth date cannot be in the future")
    .required("Please enter your birth date"),
  birth_place: Yup.string().max(50).required("Please enter your birth place"),
  address1: Yup.string().max(100).required("Please enter your address"),
  address2: Yup.string().max(100).required("Please enter your address"),
  picture: Yup.string().required("Please select your photo"),
});
