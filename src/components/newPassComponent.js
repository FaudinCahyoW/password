import "../style/newPassStyle.css"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import React from "react";


function NewPassword(){

    const {register, handleSubmit, formState:{errors}} = useForm({
      defaultValues: {
        passLimit: ""
      }
    });
    const onSubmit = (data) => {console.log(data)};


    return(
        <div className="newPassForm">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="newPassContent">
            <h3 className="mb-4 fw-bold">Buat Password Baru</h3>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className = {'italicText mb-4 ${errors.passLimit && "invalid"}'}
                type="password"
                placeholder="*****"
                {...register("passLimit", {required: true,minLength:{
                  value: 6,
                  message: "minimal 6 karakter"

                }})}
              />
              {errors.passLimit && (<small className="text-danger">Minimal 6 Karakter</small>)}
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