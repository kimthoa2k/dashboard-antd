import { Typography } from "antd";
import React from "react";

const AppFooter = () => {
  return (
    <div className="appFooter">
      <Typography.Link style={{ fontSize: 20, color: "black" }}>
        Ant Design Dashboard @2023 Create by Kim Thoa
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
