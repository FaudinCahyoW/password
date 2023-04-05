import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Card from 'react-bootstrap/Card';
import { BiSearchAlt, BiPlus } from "react-icons/bi";

import PageLayout from "../layouts/pageLayout";
import TableUser from "../components/opportunityListComponent";
import OpportunityListComponent from "../components/opportunityListComponent";
import '../assets/style/opportunityPageStyle.css';

const OpportunityPage = () => {
  const navigate = useNavigate();
  const operations = (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={() => navigate("/opportunity/create")}
    >
      Add User
    </Button>
  );

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
              },
            ]}
          />

          {/* page */}
          {/* <Card>
            <Card.Body>
              <OpportunityListComponent />
            </Card.Body>
          </Card> */}

          <Card body style={{width: '95%'}} className="cards">
            <div className="header">     
              <button className="add float-right" type="button" onClick={() => navigate('/opportunity/create')}>
                  <i className="logo"><BiPlus /></i>
                  <span className="team">Add Opportunity</span>
              </button>
            </div>
            <OpportunityListComponent />
          </Card> 
        </div>
      }
    ></PageLayout>
  );
};

export default OpportunityPage;
