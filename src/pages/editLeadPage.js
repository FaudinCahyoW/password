import {  Breadcrumb, Card,} from "antd";
import React, { useState } from "react";
import PageLayout from "../layouts/pageLayout";
import FormLeadComponent from "../components/formLeadComponent";
import axios from "../api/axios";

function EditLeadPage() {

  return (
    <PageLayout
      titlePage={"Edit Lead"}
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
                title: "Lead",
                href: "/lead",
              },
              {
                title: "edit",
              },
            ]}
          />

          {/* page */}
          <Card className="card-content"><FormLeadComponent textButton={"Save"}/></Card>
        </div>
      }
    ></PageLayout>
  );
}
export default EditLeadPage;
