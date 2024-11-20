import React from "react";
import "./RegistrationForm.css";
import { useFormik } from "formik";
import { registrationSchema } from "../schemas";

const initialValues = {
  fname: "",
  lname: "",
  ph: "",
  address1: "",
  address2: "",
  birth_date: "",
  birth_place: "",
  picture: "",
};

export const RegistrationForm = ({ addUser, currentUser }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: currentUser || initialValues,
    validationSchema: registrationSchema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      const newUser = {
        fname: values.fname,
        lname: values.lname,
        ph: values.ph,
        address1: values.address1,
        address2: values.address2,
        birth_date: values.birth_date,
        birth_place: values.birth_place,
        picture: values.picture,
      };
      addUser(newUser);
      action.resetForm();
    },
  });

  return (
    <form className="regis-form-main" onSubmit={handleSubmit}>
      <div className="regis-form">
        <h1 id="rf">{currentUser ? "Edit User" : "Registration Form"}</h1>

        <div className="fn-ln">
          <div className="fn">
            <label htmlFor="fname">
              First Name<sup>*</sup>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="fn-inp"
              name="fname"
              id="fname"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fname && touched.fname ? (
              <p className="form-error">{errors.fname}</p>
            ) : null}
          </div>

          <div className="ln">
            <label htmlFor="lname">
              Last Name<sup>*</sup>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="ln-inp"
              name="lname"
              id="lname"
              value={values.lname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lname && touched.lname ? (
              <p className="form-error">{errors.lname}</p>
            ) : null}
          </div>
        </div>

        <div className="pn">
          <label htmlFor="ph">
            Phone Number<sup>*</sup>
          </label>
          <input
            type="number"
            placeholder="Phone Number"
            className="pn-inp"
            name="ph"
            id="ph"
            value={values.ph}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.ph && touched.ph ? (
            <p className="form-error">{errors.ph}</p>
          ) : null}
        </div>

        <div className="bd-bp">
          <div className="bd">
            <label htmlFor="birth_date">
              Birth Date<sup>*</sup>
            </label>
            <input
              type="date"
              className="bd-inp"
              name="birth_date"
              id="birth_date"
              value={values.birth_date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.birth_date && touched.birth_date ? (
              <p className="form-error">{errors.birth_date}</p>
            ) : null}
          </div>

          <div className="bp">
            <label htmlFor="birth_place">
              Birth Place<sup>*</sup>
            </label>
            <input
              type="text"
              placeholder="Birth Place"
              className="bp-inp"
              name="birth_place"
              id="birth_place"
              value={values.birth_place}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.birth_place && touched.birth_place ? (
              <p className="form-error">{errors.birth_place}</p>
            ) : null}
          </div>
        </div>

        <div className="address">
          <label htmlFor="address1">
            Address<sup>*</sup>
          </label>
          <textarea
            name="address1"
            placeholder="Address Line 1"
            className="add1-inp"
            rows="3"
            id="address1"
            value={values.address1}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.address1 && touched.address1 ? (
            <p className="form-error">{errors.address1}</p>
          ) : null}

          <textarea
            name="address2"
            placeholder="Address Line 2"
            className="add2-inp"
            rows="3"
            id="address2"
            value={values.address2}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.address2 && touched.address2 ? (
            <p className="form-error">{errors.address2}</p>
          ) : null}
        </div>

        <div className="pp">
          <label htmlFor="picture">Upload a profile picture</label>
          <input
            type="file"
            accept="image/*"
            className="pp-inp"
            name="picture"
            id="picture"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setFieldValue("picture", imageUrl);
              }
            }}
            onBlur={handleBlur}
          />
          {errors.picture && touched.picture ? (
            <p className="form-error">{errors.picture}</p>
          ) : null}
        </div>

        <button className="btn btn-info" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
