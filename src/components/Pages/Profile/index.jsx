import {
  Avatar,
  Button,
  Card,
  Col,
  Descriptions,
  List,
  Radio,
  Row,
  Switch,
  Tag,
  Typography,
} from "antd";

import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Profile = () => {
  return (
    // <Space direction="vertical">
    //   <Typography.Title level={3}>Profile</Typography.Title>
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <AvatarCard />
      </Col>
      {/* span8 span={24} md={8}*/}
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={8}>
          <PlatformSetting />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={8}>
          <ProfileInformations />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
          <Conversations />
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <ProjectCards />
        </Col>
      </Row>
    </Row>
    // </Space>
  );
};

function AvatarCard() {
  const onChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };
  return (
    <Card>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ margin: 6 }}>
            <Avatar
              src="	https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-1.d85d07a1.jpg"
              style={{ width: 130, height: 130 }}
            />
          </div>
          <div style={{ margin: 12 }}>
            <Typography.Title level={4}>Sarah Jacob</Typography.Title>
            <p>CEO/Co-Founder</p>
          </div>
        </div>

        <div>
          <Radio.Group onChange={onChange} defaultValue="a" size="large">
            <Radio.Button value="a">OVER VIEW</Radio.Button>
            <Radio.Button value="b">TEAMS</Radio.Button>
            <Radio.Button value="c">PROJECT</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </Card>
  );
}

function PlatformSetting() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <Card
      title="Platform Setting"
      headStyle={{
        borderBottom: "none",
        fontSize: 20,
        padding: "16px 20px",
      }}
      bodyStyle={{ padding: "16px" }}
    >
      <Typography.Title level={5} style={{ fontSize: 14, padding: 7 }}>
        ACOUNT
      </Typography.Title>
      <List style={{ width: 480 }}>
        <List.Item
          style={{
            border: "none",
          }}
        >
          <Switch defaultChecked onChange={onChange} />
          <span style={{ flex: 1, marginLeft: 16 }}>
            Email me when someone follows me
          </span>
        </List.Item>
        <List.Item style={{ border: "none" }}>
          <Switch checkedChildren unCheckedChildren />
          <span style={{ flex: 1, marginLeft: 16 }}>
            Email me when someone follows me
          </span>
        </List.Item>
        <List.Item style={{ border: "none" }}>
          <Switch defaultChecked onChange={onChange} />
          <span style={{ flex: 1, marginLeft: 16 }}>
            Email me when someone follows me
          </span>
        </List.Item>
      </List>

      {/* APPLICATION */}
      <Typography.Title level={5} style={{ fontSize: 14, padding: 7 }}>
        APPLICATION
      </Typography.Title>
      <List style={{ width: 480 }}>
        <List.Item
          style={{
            border: "none",
          }}
        >
          <Switch defaultChecked onChange={onChange} />
          <span style={{ flex: 1, marginLeft: 16 }}>
            New launches and projects
          </span>
        </List.Item>
        <List.Item style={{ border: "none" }}>
          <Switch defaultChecked onChange={onChange} />
          <span style={{ flex: 1, marginLeft: 16 }}>
            New launches and projects
          </span>
        </List.Item>
        <List.Item style={{ border: "none" }}>
          <Switch defaultChecked onChange={onChange} />
          <span style={{ flex: 1, marginLeft: 16 }}>
            New launches and projects
          </span>
        </List.Item>
      </List>
    </Card>
  );
}
function ProfileInformations() {
  return (
    <Card
      title="Profile Information"
      headStyle={{
        borderBottom: "none",
        fontSize: 20,
        padding: "16px 20px",
      }}
      bodyStyle={{ padding: "16px" }}
    >
      <p
        style={{
          padding: "0 0 22px 0",
          borderBottom: "1px solid #eceaea",
        }}
      >
        Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no.
        If two equally difficult paths, choose the one more painful in the short
        term (pain avoidance is creating an illusion of equality).
      </p>

      {/* DESCRIPTION */}
      <Descriptions
        style={{ width: 480, marginTop: 10, padding: 9 }}
        title="Oliver Liam"
      >
        <Descriptions.Item label="Full name" style={{ display: "flex" }}>
          Sarah Emily Jacob
        </Descriptions.Item>
        <Descriptions.Item label="Mobile" style={{ display: "flex" }}>
          0934523569
        </Descriptions.Item>
        <Descriptions.Item label="Email" style={{ display: "flex" }}>
          sarahjacob@mail.com
        </Descriptions.Item>
        <Descriptions.Item label="Location" style={{ display: "flex" }}>
          USA
        </Descriptions.Item>
        <Descriptions.Item label="Social" style={{ display: "flex" }}>
          <TwitterOutlined
            style={{
              marginLeft: 10,
              alignSelf: "center",
              color: "#1890ff",
            }}
          />
          <FacebookOutlined
            style={{ marginLeft: 10, alignSelf: "center", color: "#344e86" }}
          />
          <InstagramOutlined
            style={{ marginLeft: 10, alignSelf: "center", color: "#e23a73" }}
          />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}
function Conversations() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 5",
    },
  ];
  return (
    <Card
      title="Conversations"
      headStyle={{
        borderBottom: "none",
        fontSize: 20,
        padding: "16px 20px",
      }}
      bodyStyle={{ padding: "16px" }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            style={{
              border: "none",
              fontWeight: 600,
            }}
            extra={
              <Button type="link" style={{ padding: "0 15px" }}>
                <span>REPLY</span>
              </Button>
            }
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 5,
                  }}
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={
                <div style={{ fontSize: 12 }}>
                  Ant Design, a design language for background applications
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}

// PROJECT CARDS

function ProjectCards() {
  return (
    <Card
      title={
        <div style={{ padding: "16px 0" }}>
          <Typography.Title level={4} style={{ margin: 0 }}>
            Projects
          </Typography.Title>
          <p style={{ fontSize: 14, color: "#8C8C8C", margin: 0 }}>
            Architects design houses
          </p>
        </div>
      }
      headStyle={{
        borderBottom: "none",
      }}
    >
      <div>
        <Row gutter={[24, 24]}>
          {/* span 6 */}
          <Col xs={24} sm={24} md={12} lg={12} xl={6}>
            <ProjectInfo1 />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6}>
            <ProjectInfo2 />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6}>
            <ProjectInfo3 />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6}>
            <ProjectInfo4 />
          </Col>
        </Row>
      </div>
    </Card>
  );
}

function ProjectInfo1() {
  return (
    <Card
      style={{ border: "none" }}
      cover={
        <div>
          <img
            style={{ width: "100%", height: "250px" }}
            alt="room1"
            src="https://wpmedia.roomsketcher.com/content/uploads/2021/12/09103646/Subtle_Blue_Shades_Large_Bedroom_idea-1024x768.jpg"
          ></img>
        </div>
      }
      bodyStyle={{ padding: "16px 0 0" }}
    >
      <div>
        <Tag
          style={{
            border: "none",
            backgroundColor: "#ffff",
            fontSize: 14,
            margin: "0 0 10px",
            padding: 0,
            width: "100%",
            color: "#8C8C8C",
          }}
        >
          Project #1
        </Tag>
        <p style={{ margin: "0 0 25px" }}>
          House architecture and design, including a seaside getaway in Devon,
          an off-grid home in Brazil and a greenery-lined residence in Vietnam.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Button size="large">VIEW PROJECT</Button>
        </div>
        <div>
          <Avatar.Group>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
              >
                K
              </Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              ></Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#1677ff",
                }}
              >
                B
              </Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#e986a4",
                }}
                icon={<UserOutlined />}
              ></Avatar>
            </a>
          </Avatar.Group>
        </div>
      </div>
    </Card>
  );
}
function ProjectInfo2() {
  return (
    <Card
      style={{ border: "none" }}
      cover={
        <div>
          <img
            style={{ width: "100%", height: "250px" }}
            alt="room1"
            src="https://www.home-designing.com/wp-content/uploads/2018/08/modern-master-bedroom-ideas.jpg"
          ></img>
        </div>
      }
      bodyStyle={{ padding: "16px 0 0" }}
    >
      <div>
        <Tag
          style={{
            border: "none",
            backgroundColor: "#ffff",
            fontSize: 14,
            margin: "0 0 10px",
            padding: 0,
            width: "100%",
            color: "#8C8C8C",
          }}
        >
          Project #2
        </Tag>
        <p style={{ margin: "0 0 25px" }}>
          House architecture and design, including a seaside getaway in Devon,
          an off-grid home in Brazil and a greenery-lined residence in Vietnam.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Button size="large">VIEW PROJECT</Button>
        </div>
        <div>
          <Avatar.Group>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
              >
                K
              </Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              ></Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#1677ff",
                }}
              >
                B
              </Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#e986a4",
                }}
                icon={<UserOutlined />}
              ></Avatar>
            </a>
          </Avatar.Group>
        </div>
      </div>
    </Card>
  );
}
function ProjectInfo3() {
  return (
    <Card
      style={{ border: "none" }}
      cover={
        <div>
          <img
            style={{ width: "100%", height: "250px" }}
            alt="room1"
            src="https://roomdesign.gr/wp-content/uploads/2022/09/bali_table_main2.jpg"
          ></img>
        </div>
      }
      bodyStyle={{ padding: "16px 0 0" }}
    >
      <div>
        <Tag
          style={{
            border: "none",
            backgroundColor: "#ffff",
            fontSize: 14,
            margin: "0 0 10px",
            padding: 0,
            width: "100%",
            color: "#8C8C8C",
          }}
        >
          Project #3
        </Tag>
        <p style={{ margin: "0 0 25px" }}>
          House architecture and design, including a seaside getaway in Devon,
          an off-grid home in Brazil and a greenery-lined residence in Vietnam.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Button size="large">VIEW PROJECT</Button>
        </div>
        <div>
          <Avatar.Group>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
              >
                K
              </Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              ></Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#1677ff",
                }}
              >
                B
              </Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#e986a4",
                }}
                icon={<UserOutlined />}
              ></Avatar>
            </a>
          </Avatar.Group>
        </div>
      </div>
    </Card>
  );
}
function ProjectInfo4() {
  return (
    <Card
      style={{ border: "none" }}
      cover={
        <div>
          <img
            style={{ width: "100%", height: "250px" }}
            alt="room1"
            src="https://www.home-designing.com/wp-content/uploads/2018/08/modern-platform-bedroom-sets.jpg"
          ></img>
        </div>
      }
      bodyStyle={{ padding: "16px 0 0" }}
    >
      <div>
        <Tag
          style={{
            border: "none",
            backgroundColor: "#ffff",
            fontSize: 14,
            margin: "0 0 10px",
            padding: 0,
            width: "100%",
            color: "#8C8C8C",
          }}
        >
          Project #4
        </Tag>
        <p style={{ margin: "0 0 25px" }}>
          House architecture and design, including a seaside getaway in Devon,
          an off-grid home in Brazil and a greenery-lined residence in Vietnam.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Button size="large">VIEW PROJECT</Button>
        </div>
        <div>
          <Avatar.Group>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
              >
                K
              </Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#87d068",
                }}
                icon={<UserOutlined />}
              ></Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#1677ff",
                }}
              >
                B
              </Avatar>
            </a>
            <a href="https://ant.design">
              <Avatar
                style={{
                  backgroundColor: "#e986a4",
                }}
                icon={<UserOutlined />}
              ></Avatar>
            </a>
          </Avatar.Group>
        </div>
      </div>
    </Card>
  );
}

export default Profile;
