import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../style/formStyle.css";
import { Link } from "react-router-dom";


function FormComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="loginForm bg-light">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="loginContent">
          <h3 className="mb-4 fw-bold">Login</h3>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Username</Form.Label>
            <Form.Control className="italicText" type="text" placeholder="Value" required />
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
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check label="Ingat Saya" />
          </Form.Group>

          <Button type="submit" className="w-100 d-grid bg-success mb-2">Login</Button>
        </div>
      <div className="justify-content-end align-items-end d-flex">
      <Link className="text-success" to={'/blank'}>Lupa Sandi</Link>
      </div>
      </Form>
    </div>
  );
}
export default FormComponent;
