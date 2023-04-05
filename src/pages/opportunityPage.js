import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Card from "react-bootstrap/Card";

import PageLayout from "../layouts/pageLayout";
import OpportunityListComponent from "../components/opportunityListComponent";
import "../assets/style/opportunityPageStyle.css";

const OpportunityPage = () => {
  const navigate = useNavigate();
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
          <Card>
            <Card.Body>
              <Button
                type="primary"
                className="add float-right"
                icon={<PlusOutlined />}
                onClick={() => navigate("/opportunity/create")}
              >
                Add Opportunity
              </Button>
              <OpportunityListComponent />
            </Card.Body>
          </Card>
        </div>
      }
    ></PageLayout>
  );
};

export default OpportunityPage;
