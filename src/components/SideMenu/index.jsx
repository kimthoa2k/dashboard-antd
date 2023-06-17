import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  TableOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const naviage = useNavigate();
  return (
    <div className="sideMenu">
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
    </div>
  );
};

export default SideMenu;
