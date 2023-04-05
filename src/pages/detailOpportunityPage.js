import React from "react";
import { Breadcrumb, Button } from "antd";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import PageLayout from "../layouts/pageLayout";
import TableUser from "../components/opportunityListComponent";
import OpportunityListComponent from "../components/opportunityListComponent";
import "../assets/style/opportunityPageStyle.css";

const DetailOpportunityPage = () => {
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
                title: "Detail",
              },
            ]}
          />

          {/* page */}
          {/* <Card>
                    <Card.Body>
                    <OpportunityListComponent />
                    </Card.Body>
                </Card> */}
          <Card className="card-content card w-90 m-auto">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Next Step</Form.Label>
                    <Form.Control required type="text" placeholder="Text" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Contact Roles</Form.Label>
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
                    <Form.Label>Annount (Rp)</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Description"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Partnership</Form.Label>
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
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Opportunity Owner</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Expected Revenue (Rp)</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        type="text"
                        placeholder="Description"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Stage</Form.Label>
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
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Description</Form.Label>
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
          </Card>
          <Card
            body
            style={{ width: "100%" }}
            className=" card-content cards mt-4"
          >
            <OpportunityListComponent />
          </Card>
        </div>
      }
    ></PageLayout>
  );
};

export default DetailOpportunityPage;
