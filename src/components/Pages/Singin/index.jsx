import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import React from "react";

const Singin = () => {
  return (
    <Row>
      <Col span={8} offset={8}>
        <SinginForm />
      </Col>
    </Row>
  );
};

function SinginForm() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Card
      title={
        <div>
          <Typography.Title
            level={2}
            style={{
              padding: "15px 0 0",
              margin: 0,
              textAlign: "center",
            }}
          >
            Sing In
          </Typography.Title>
        </div>
      }
      headStyle={{ border: "none" }}
    >
      <Form
        style={{
          padding: 10,
          backgroundColor: "#ffff",
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="UserName" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          required={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            placeholder="Password"
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a style={{ float: "right" }} href="https://ant.design/">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Log in
          </Button>
        </Form.Item>
        <Form.Item>
          Or <a href="https://ant.design/">Register now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default Singin;
