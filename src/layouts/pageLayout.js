import React from "react";
import {
  AppstoreOutlined,
  TeamOutlined,
  PieChartOutlined,
  UserAddOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Image, Input } from "antd";
import { useState } from "react";

import "../assets/style/pageLayout.css";
import { useNavigate } from "react-router-dom";

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
  getItem("Dashboard", "/dashboard", <AppstoreOutlined />),
  {
    type: "divider",
  },
  getItem("MANAGEMENT", "sub1", <SettingOutlined />, [
    getItem("Lead", "/lead", <TeamOutlined />),
    getItem("Opportunity", "/opportunity", <PieChartOutlined />),
    getItem("User Management", "/user", <UserAddOutlined />),
  ]),
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
            margin: 16,
          }}
        >
          <Image height={"60px"} src={require("../assets/img/logo.png")} />
        </div>
        <Menu
          onClick={({ key }) => {
            navigate(key);
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

        <Content className="page-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
