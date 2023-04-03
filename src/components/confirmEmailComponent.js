import "../assets/style/confirmStyle.css";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().required(),
});

function ConfirmEmail() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        email: "",
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <div className="confirmForm">
          <Form noValidate onSubmit={handleSubmit}>
            <div className="confirmContent">
              <h3 className="mb-4 fw-bold">Email Confirmation</h3>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  className="italicText mb-4"
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

              <Button type="submit" className="w-100 d-grid bg-success mb-2">
                Send Verification
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default ConfirmEmail;
