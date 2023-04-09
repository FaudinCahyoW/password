import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "../api/axios";

import "../assets/style/loginFormStyle.css";

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

function LoginFormComponent() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  function handleSubmit(e){
    e.preventDefault()
    console.log(email,password)
    axios
      .post(
        "/login-user",
        JSON.stringify({
          email: "cek@gmail.com",
          password : "12345"
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then(function (response){
        console.log(response)
      })
      .then(function (error) {
        console.log(error)
      })
  }
  

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      {({ errors }) => (
        <div className="loginForm bg-light">
          <Form noValidate onSubmit={handleSubmit}>
            <div className="loginContent">
              <h3 className="mb-4 fw-bold">Login Page</h3>
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e)=> setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
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
