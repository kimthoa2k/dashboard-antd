import React from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  TableOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AppRouters from "../AppRouters";

const { Header, Sider, Content, Footer } = Layout;

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  const naviage = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          style={{
            fontSize: 20,
          }}
          className="sideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            naviage(item.key);
          }}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined style={{ fontSize: 20 }} />,
              key: "/",
            },
            {
              label: "Tables",
              icon: <TableOutlined style={{ fontSize: 20 }} />,
              key: "/tables",
            },
            {
              label: "Billing",
              icon: <AiOutlineCreditCard style={{ fontSize: 22 }} />,
              key: "/billing",
            },
            {
              label: "Profile",
              icon: <ProfileOutlined style={{ fontSize: 20 }} />,
              key: "/profile",
            },
            {
              label: "Singin",
              icon: <UserOutlined style={{ fontSize: 20 }} />,
              key: "/singin",
            },
          ]}
        ></Menu>
      </Sider>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            // background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <AppRouters />
        </Content>
        <Footer className="appFooter">FOOTER</Footer>
      </Layout>
    </Layout>
  );
};
export default Layouts;
