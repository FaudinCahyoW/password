import React from "react";
import { Breadcrumb } from "antd";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import PageLayout from "../layouts/pageLayout";

const EditOpportunityPage = () => {
  return (
    <PageLayout
      titlePage={"Opportunity"}
      isiPage={
        <div>
          <Breadcrumb
            separator=">"
            style={{ fontWeight: "bold" }}
            className="pb-4"
            items={[
              {
                title: "Dashboard",
                href: "/dashboard",
              },
              {
                title: "Opportunity",
                href: "/opportunity",
              },
              {
                title: "Edit",
              },
            ]}
          />

          {/* page */}
          <Card className="card-content card w-90 m-auto">
            <Card.Header>Profile</Card.Header>
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Opportunity Owner</Form.Label>
                    <Form.Control required type="text" placeholder="Text" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Next Step</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="text"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Opportunity Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Description</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Description"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
              </Form>
            </Card.Body>

            <Card.Header>Budget</Card.Header>
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Rp 1.000.000,00"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Expected Revenue</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Rp 1.000.000,00"
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Card.Body>

            <Card.Header>Resource</Card.Header>
            <Card.Body>
              <Form>
                <Row className="mb-4">
                  <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <div>
                      <Form.Label>Amount</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Rp 1.000.000,00"
                      />
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Expected Revenue</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Rp 1.000.000,00"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom01">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Rp 1.000.000,00"
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom02">
                    <Form.Label>Expected Revenue</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Rp 1.000.000,00"
                    />
                  </Form.Group>
                </Row>
              </Form>
            </Card.Body>

            <div className="btn w-75">
              <button className="save">Save Data</button>
              <button className="cancel">Cancel</button>
            </div>
          </Card>
        </div>
      }
    ></PageLayout>
  );
};

export default EditOpportunityPage;
