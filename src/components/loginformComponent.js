import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../style/loginFormStyle.css";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

function LoginFormComponent() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <div className="loginForm bg-light">
          <Form noValidate onSubmit={handleSubmit}>
            <div className="loginContent">
              <h3 className="mb-4 fw-bold">Login</h3>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className="italicText"
                  type="email"
                  placeholder="Value"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="italicText"
                  type="password"
                  placeholder="*****"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check label="Ingat Saya" />
              </Form.Group>

              <Button type="submit" className="w-100 d-grid bg-success mb-2">
                Login
              </Button>
            </div>
            <div className="justify-content-end align-items-end d-flex forgot">
              <Link className="text-success" to={"/confirm"}>
                Forgot Password
              </Link>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
export default LoginFormComponent;
