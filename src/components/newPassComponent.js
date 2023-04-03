import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as Yup from "yup";

import "../assets/style/newPassStyle.css";

const schema = Yup.object().shape({
  password: Yup.string().required().min(6, "at least 6 character"),
  confirm_password: Yup.string().required().min(6, "at least 6 character"),
});

function NewPassword() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        password: "",
        confirm_password: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <div className="newPassForm">
          <Form noValidate onSubmit={handleSubmit}>
            <div className="newPassContent">
              <h3 className="mb-4 fw-bold">Create Password</h3>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={"italicText mb-4 ${}"}
                  type="password"
                  placeholder="*****"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Confirmation Password</Form.Label>
                <Form.Control
                  className="italicText mb-4"
                  type="password"
                  placeholder="*****"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  isInvalid={!!errors.confirm_password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirm_password}
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" className="w-100 d-grid bg-success mb-2">
                Login
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default NewPassword;
