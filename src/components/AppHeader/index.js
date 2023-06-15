import { Badge, Drawer, Image, Space, Typography } from "antd";
import React, { useState } from "react";
import { MailOutlined, SettingFilled, BellOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";

const AppHeader = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className="appHeader">
      <Image
        width={50}
        src="https://pepsilan.com/wp-content/uploads/2022/02/Hinh-Gau-Truc-Cute-Chibi-de-thuong-nhat.jpg"
      ></Image>

      <Space>
        <Search placeholder="Type here..." />
        <SettingFilled style={{ fontSize: 22 }} />
        <Badge count={10} dot>
          <MailOutlined
            style={{ fontSize: 22 }}
            onClick={() => {
              setCommentOpen(true);
            }}
          />
        </Badge>
        <Badge count={20}>
          <BellOutlined
            style={{ fontSize: 22 }}
            onClick={() => {
              setNotificationOpen(true);
            }}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentOpen}
        onClose={() => {
          setCommentOpen(false);
        }}
        maskClosable
      >
        <>
          <Typography.Title level={5}>Coment 1</Typography.Title>
          <p>Some comment...</p>
          <Typography.Title level={5}>Coment 2</Typography.Title>
          <p>Some comment...</p>
          <Typography.Title level={5}>Coment 3</Typography.Title>
          <p>Some comment...</p>
          <Typography.Title level={5}>Coment 4</Typography.Title>
          <p>Some comment...</p>
        </>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationOpen}
        onClose={() => {
          setNotificationOpen(false);
        }}
        maskClosable
      >
        <>
          <Typography.Title level={5}>Notification 1</Typography.Title>
          <p>Some notification...</p>
          <Typography.Title level={5}>Notification 2</Typography.Title>
          <p>Some notification...</p>
          <Typography.Title level={5}>Notification 3</Typography.Title>
          <p>Some notification...</p>
          <Typography.Title level={5}>Notification 4</Typography.Title>
          <p>Some notification...</p>
          <Typography.Title level={5}>Notification 5</Typography.Title>
          <p>Some notification...</p>
          <Typography.Title level={5}>Notification 6</Typography.Title>
          <p>Some notification...</p>
        </>
      </Drawer>
    </div>
  );
};

export default AppHeader;
