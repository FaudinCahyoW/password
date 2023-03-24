import "../style/newPassStyle.css"
import { Button, Form } from "react-bootstrap"

function NewPassword(){
    return(
        <div className="newPassForm">
        <Form>
          <div className="newPassContent">
            <h3 className="mb-4 fw-bold">Buat Password Baru</h3>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="italicText mb-4"
                type="password"
                placeholder="*****"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Konfirmasi Password</Form.Label>
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
    )
}

export default NewPassword