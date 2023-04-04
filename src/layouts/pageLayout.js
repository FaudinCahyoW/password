import React from "react";
import {
  AppstoreOutlined,
  TeamOutlined,
  PieChartOutlined,
  UserAddOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  BellOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Image, Input, Avatar } from "antd";
import { useState } from "react";

import "../assets/style/pageLayout.css";
import { Outlet, useNavigate } from "react-router-dom";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  {
    type: "divider",
  },
  getItem("Dashboard", "/dashboard", <AppstoreOutlined />),
  getItem("Lead", "/lead", <TeamOutlined />),
  getItem("Opportunity", "/opportunity", <PieChartOutlined />),
  getItem("User Management", "/user", <UserAddOutlined />),
  {
    type: "divider",
  },
  getItem(
    <span>
      <strong>Username</strong>
    </span>,
    "/profile",
    <Avatar
      src={<img src={require("../assets/img/avatar.png")} alt="avatar" />}
      size={14}
    />
  ),
  getItem(
    <span className="text-danger">
      <strong>Log Out</strong>
    </span>,
    "logout",
    <ExportOutlined rotate={180} className="text-danger" />
  ),
];

const PageLayout = (props) => {
  const children = props.isiPage;
  const title = props.titlePage;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
        width="240"
        style={{
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          position: "relative",
          zIndex: "11",
        }}
      >
        <div
          style={{
            padding: 10,
          }}
        >
          <Image
            height={"55px"}
            src={
              collapsed
                ? require("../assets/img/logo-crop.png")
                : require("../assets/img/logo.png")
            }
            preview={false}
          />
        </div>
        <Menu
          onClick={({ key }) => {
            if (key === "logout") {
              // call function logout
            } else {
              navigate(key);
            }
          }}
          theme="light"
          defaultSelectedKeys={["dashboard"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          style={{
            padding: "20px",
            height: "auto",
            background: colorBgContainer,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            position: "relative",
            zIndex: "10",
          }}
        >
          <div className="d-flex align-items-center">
            {React.createElement(
              collapsed ? RightCircleOutlined : LeftCircleOutlined,
              {
                className: "trigger me-4",
                onClick: () => setCollapsed(!collapsed),
                style: { fontSize: "18px", color: "#9e9e9e" },
              }
            )}
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ width: "100%" }}
            >
              <h4>
                <strong>{title}</strong>
              </h4>
              <div className="d-flex align-items-center">
                <Search
                  placeholder="Search"
                  allowClear
                  onSearch={onSearch}
                  style={{
                    width: 200,
                  }}
                  className="me-4"
                />
                <BellOutlined style={{ fontSize: "20px", color: "#9e9e9e" }} />
              </div>
            </div>
          </div>
        </Header>

        <Content className="page-content">
          {children}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
