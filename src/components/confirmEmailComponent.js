import "../style/confirmStyle.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function ConfirmEmail() {
  return (
    <div className="confirmForm">
      <Form>
        <div className="confirmContent">
          <h3 className="mb-4 fw-bold">Email Confirmation</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="italicText mb-4"
              type="email"
              placeholder="Value"
            />
          </Form.Group>

          <Link to={"/password"}>
            <Button type="submit" className="w-100 d-grid bg-success mb-2">
              Send Verification
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default ConfirmEmail;
