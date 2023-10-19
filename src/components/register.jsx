import React from "react";
import { useFormik, Field, Form } from "formik";
import * as yup from "yup";

/**
 * LoginForm Component
 */
const RegisterForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    active: true,
  };
  const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Please enter a valid email address Fatma@gmail.com")
      .required("Email field is required"),
    password: yup
      .string()
      .required("Password field is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .max(15, "password is too long")
      .min(8, "password is too short"),
    username: yup.string().required("Please Enter Your Name"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password's not match")
      .required("Required!"),
    gender: yup.string().required("should enter your gender"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (

    <form onSubmit={formik.handleSubmit} className="bg-info w-50 m-auto">
      <div style={{ padding: 20 }} className="text-center border-black border ">
        <h1>Register Form</h1>
        <label htmlFor="username" style={{ display: "block" }}>
          User Name
        </label>
        <input
          type="text"
          id="username"
          name="username"
          {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        )}
        <label htmlFor="email" style={{ display: "block" }}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        )}

        <label htmlFor="password" style={{ display: "block" }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        )}
        <label htmlFor="confirmPassword" style={{ display: "block" }}>
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          {...formik.getFieldProps("confirmPassword")}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
        )}

        <div {...formik.getFieldProps("gender")}>
          <label>
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" />
            Female
          </label>
        </div>
        {formik.touched.gender && formik.errors.gender && (
          <div style={{ color: "red" }}>{formik.errors.gender}</div>
        )}

        {/* //   <label htmlFor="gender" style={{ display: "block" }}>
//  gender        </label>
//         <input
//          type="radio" 
//          id="male" 
//          name="gender"
//          value="male"
//          defaultChecked={formik.values.gender=== "male"}

//           {...formik.getFieldProps("gender")}
//         />
//         <label for="male">Male</label>
//         <input
//          type="radio"
//           id="female"
//            name="gender" 
//            value="female"
//            defaultChecked={formik.values.gender=== "female"}

//           {...formik.getFieldProps("gender")}
//         />
//         <label for="male">Female</label>

//         {formik.touched.gender && formik.errors.gender && (
//           <div style={{ color: "red" }}>{formik.errors.gender}</div>
//         )}   */}

        <label htmlFor="active" style={{ display: "block" }}>
          Active
        </label>
        <input
          type="checkbox"
          name="active"
          id="active"
          defaultChecked={formik.values.active}
          {...formik.getFieldProps("active")}
        />

        <button className="btn btn-dark m-auto" style={{ display: "block" }}>
          submit
        </button>
      </div>
      <pre>{JSON.stringify(formik, null, 4)}</pre>
    </form>
  );
};
export default RegisterForm;
