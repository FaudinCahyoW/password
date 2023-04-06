import {  Breadcrumb, Card,} from "antd";
import React from "react";
import PageLayout from "../layouts/pageLayout";
import FormLeadComponent from "../components/formLeadComponent";



function DetailLeadPage() {
 

  return (
    <PageLayout
      titlePage={"Detail Lead"}
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
                title: "Detail",
              },
            ]}
          />

          {/* page */}
          <Card className="card-content"><FormLeadComponent textButton={"Export to Opportunity"}/></Card>
        </div>
      }
    ></PageLayout>
  );
}
export default DetailLeadPage;
