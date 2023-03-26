import "../style/newPassStyle.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  password: Yup.string().required().min(6, "at least 6 character"),
});

function NewPassword() {
  {
    /* <Form.Group as={Col} md="6" controlId="validationFormik03">
    <Form.Label>City</Form.Label>
    <Form.Control
      type="text"
      placeholder="City"
      name="city"
      value={values.city}
      onChange={handleChange}
      isInvalid={!!errors.city}
    />

    <Form.Control.Feedback type="invalid">
      {errors.city}
    </Form.Control.Feedback>
  </Form.Group>

<Button type="submit">Submit form</Button> */
  }
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        password: "",
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
                />
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
