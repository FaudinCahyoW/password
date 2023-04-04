import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Card, Tabs, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import PageLayout from "../layouts/pageLayout";
import TableUser from "../components/userListComponent";

const items = [
  {
    key: 1,
    label: (
      <span>
        <strong>Super Admin User</strong>
      </span>
    ),
    children: <TableUser />,
  },
  {
    key: 2,
    label: (
      <span>
        <strong>Admin User</strong>
      </span>
    ),
    children: `Content of tab Admin User`,
  },
];

const UserManagementPage = () => {
  const navigate = useNavigate();
  const operations = (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={() => navigate("/user/create")}
    >
      Add User
    </Button>
  );

  return (
    <PageLayout
      titlePage={"User Management"}
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
                title: "User Management",
              },
            ]}
          />

          {/* page */}
          <Card>
            <Tabs tabBarExtraContent={operations} items={items} />
          </Card>
        </div>
      }
    ></PageLayout>
  );
};

export default UserManagementPage;
