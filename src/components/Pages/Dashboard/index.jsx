import {
  UserOutlined,
  HeartOutlined,
  LockOutlined,
  DollarOutlined,
  EditOutlined,
  DeleteOutlined,
  RightOutlined,
} from "@ant-design/icons";
import {
  Card,
  Space,
  // Statistic,
  Typography,
  Table,
  Timeline,
  Row,
  Col,
  Avatar,
  Input,
  Modal,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { getUsers } from "../../../API";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Active Users",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const Dashboard = () => {
  return (
    // <Space fontSize={30} direction="vertical">
    //   <Typography.Title level={3}>Dashboard</Typography.Title>
    <Row gutter={[24, 24]}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Dashboard1 />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Dashboard2 />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Dashboard3 />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6}>
          <Dashboard4 />
        </Col>
      </Row>

      {/* <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <DashboardCard
            icon={
              <DollarOutlined
                style={{
                  color: "#fff",
                  backgroundColor: "#1890ff",
                  borderRadius: "6px",
                  fontSize: 22,
                  padding: 6,
                }}
              />
            }
            title={"Today's Sales"}
            value={12345}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "#fff",
                  backgroundColor: "#1890ff",
                  borderRadius: "6px",
                  fontSize: 22,
                  padding: 6,
                }}
              />
            }
            title={"Today's Users"}
            value={12345}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <DashboardCard
            icon={
              <HeartOutlined
                style={{
                  color: "#fff",
                  backgroundColor: "#1890ff",
                  borderRadius: "6px",
                  fontSize: 22,
                  padding: 6,
                }}
              />
            }
            title={"New Clients"}
            value={12345}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <DashboardCard
            icon={
              <LockOutlined
                style={{
                  color: "#fff",
                  backgroundColor: "#1890ff",
                  borderRadius: "6px",
                  fontSize: 22,
                  padding: 8,
                }}
              />
            }
            title={"New Orders"}
            value={12345}
          />
        </Col>
      </Row> */}

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <DashboardChart />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <DashboardLineChart />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
          <DashboardTable />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
          <DashboardTimeline />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={14}>
          <DashboardCardFooter1 />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={10}>
          <DashboardCardFooter2 />
        </Col>
      </Row>
    </Row>
    // <Row gutter={[24, 24]}>
    //   {/* span 6 */}
    //   <Col xs={24} sm={24} md={12} lg={6} xl={6}>
    //     <DashboardCard
    //       icon={
    //         <DollarOutlined
    //           style={{
    //             color: "#fff",
    //             backgroundColor: "#1890ff",
    //             borderRadius: "6px",
    //             fontSize: 22,
    //             padding: 6,
    //           }}
    //         />
    //       }
    //       title={"Today's Sales"}
    //       value={12345}
    //     />
    //   </Col>
    //   <Col xs={24} sm={24} md={12} lg={6} xl={6}>
    //     <DashboardCard
    //       icon={
    //         <UserOutlined
    //           style={{
    //             color: "#fff",
    //             backgroundColor: "#1890ff",
    //             borderRadius: "6px",
    //             fontSize: 22,
    //             padding: 6,
    //           }}
    //         />
    //       }
    //       title={"Today's Users"}
    //       value={12345}
    //     />
    //   </Col>
    //   <Col xs={24} sm={24} md={12} lg={6} xl={6}>
    //     <DashboardCard
    //       icon={
    //         <HeartOutlined
    //           style={{
    //             color: "#fff",
    //             backgroundColor: "#1890ff",
    //             borderRadius: "6px",
    //             fontSize: 22,
    //             padding: 6,
    //           }}
    //         />
    //       }
    //       title={"New Clients"}
    //       value={12345}
    //     />
    //   </Col>
    //   <Col xs={24} sm={24} md={12} lg={6} xl={6}>
    //     <DashboardCard
    //       icon={
    //         <LockOutlined
    //           style={{
    //             color: "#fff",
    //             backgroundColor: "#1890ff",
    //             borderRadius: "6px",
    //             fontSize: 22,
    //             padding: 8,
    //           }}
    //         />
    //       }
    //       title={"New Orders"}
    //       value={12345}
    //     />
    //   </Col>

    //   {/* Chart span 12*/}
    //   <Col xs={24} sm={24} md={12} lg={12} xl={12}>
    //     <DashboardChart />
    //   </Col>
    //   <Col xs={24} sm={24} md={12} lg={12} xl={12}>
    //     <DashboardLineChart />
    //   </Col>

    // {/* table, timeline 16,8*/}
    // <Col xs={24} sm={24} md={12} lg={12} xl={16}>
    //   <DashboardTable />
    // </Col>
    // <Col xs={24} sm={24} md={12} lg={12} xl={8}>
    //   <DashboardTimeline />
    // </Col>

    //   {/* table, timeline 14,10*/}
    //   <Col xs={24} sm={24} md={12} lg={12} xl={14}>
    //     <DashboardCardFooter1 />
    //   </Col>
    //   <Col xs={24} sm={24} md={12} lg={12} xl={10}>
    //     <DashboardCardFooter2 />
    //   </Col>
    // </Row>
    // </Space>
  );
};

function Dashboard1() {
  return (
    <Card>
      <Row gutter={[24, 24]}>
        <Col xs={18} style={{ width: 280 }}>
          <span>Today’s Sales</span>
          <Typography.Title
            level={3}
            style={{ marginBottom: 0, fontSize: 30, fontWeight: 650 }}
          >
            $53,000{" "}
            <small style={{ fontSize: 14, color: "#52C41A" }}>+30%</small>
          </Typography.Title>
        </Col>
        <Col xs={6} style={{ alignSelf: "center", padding: 8 }}>
          <DollarOutlined
            style={{
              color: "#fff",
              backgroundColor: "#1890ff",
              borderRadius: "6px",
              fontSize: 35,
              padding: 6,
            }}
          />
        </Col>
      </Row>
    </Card>
  );
}
function Dashboard2() {
  return (
    <Card>
      <Row gutter={[24, 24]}>
        <Col xs={18} style={{ width: 280 }}>
          <span>Today’s Sales</span>
          <Typography.Title
            level={3}
            style={{ marginBottom: 0, fontSize: 30, fontWeight: 650 }}
          >
            $53,000{" "}
            <small style={{ fontSize: 14, color: "#52C41A" }}>+30%</small>
          </Typography.Title>
        </Col>
        <Col xs={6} style={{ alignSelf: "center", padding: 12 }}>
          <UserOutlined
            style={{
              color: "#fff",
              backgroundColor: "#1890ff",
              borderRadius: "6px",
              fontSize: 35,
              padding: 6,
            }}
          />
        </Col>
      </Row>
    </Card>
  );
}
function Dashboard3() {
  return (
    <Card>
      <Row gutter={[24, 24]}>
        <Col xs={18} style={{ width: 280 }}>
          <span>Today’s Sales</span>
          <Typography.Title
            level={3}
            style={{ marginBottom: 0, fontSize: 30, fontWeight: 650 }}
          >
            $53,000{" "}
            <small style={{ fontSize: 14, color: "#52C41A" }}>+30%</small>
          </Typography.Title>
        </Col>
        <Col xs={6} style={{ alignSelf: "center", padding: 12 }}>
          <HeartOutlined
            style={{
              color: "#fff",
              backgroundColor: "#1890ff",
              borderRadius: "6px",
              fontSize: 35,
              padding: 6,
            }}
          />
        </Col>
      </Row>
    </Card>
  );
}
function Dashboard4() {
  return (
    <Card>
      <Row gutter={[24, 24]}>
        <Col xs={18} style={{ width: 280 }}>
          <span>Today’s Sales</span>
          <Typography.Title
            level={3}
            style={{ marginBottom: 0, fontSize: 30, fontWeight: 650 }}
          >
            $53,000{" "}
            <small style={{ fontSize: 14, color: "#52C41A" }}>+30%</small>
          </Typography.Title>
        </Col>
        <Col xs={6} style={{ alignSelf: "center", padding: 12 }}>
          <LockOutlined
            style={{
              color: "#fff",
              backgroundColor: "#1890ff",
              borderRadius: "6px",
              fontSize: 35,
              padding: 6,
            }}
          />
        </Col>
      </Row>
    </Card>
  );
}

// function DashboardCard({ title, value, icon }) {
//   return (
//     <Card bodyStyle={{ width: 393 }}>
//       <Space>
//         {icon}
//         <Statistic title={title} value={value} />
//       </Space>
//     </Card>
//   );
// }

function DashboardChart() {
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.random() * 500),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.random() * 500),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <Card>
      <Bar style={{ width: 1000, height: 500 }} options={options} data={data} />
    </Card>
  );
}

function DashboardLineChart() {
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        borderColor: "rgba(208, 211, 23, 0.5",
        data: labels.map(() => Math.random() * 500),
        backgroundColor: "rgb(126, 128, 12, 0.5)",
      },
      {
        label: "Dataset 2",
        borderColor: "rgba(57, 245, 167, 0.5",
        data: labels.map(() => Math.random() * 500),
        backgroundColor: "rgb(13, 112, 71, 0.5)",
      },
      {
        label: "Dataset 3",
        borderColor: "rgba(231, 59, 188, 0.5)",
        data: labels.map(() => Math.random() * 500),
        backgroundColor: "rgb(119, 16, 93, 0.5)",
      },
    ],
  };
  return (
    <Card>
      <Line
        style={{ width: 1000, height: 500 }}
        options={options}
        data={data}
      />
    </Card>
  );
}

function DashboardTable() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const users = await getUsers();
      setDataSource(users.users);
      setLoading(false);
      // console.log("users", users);
      users.users.map((item) => (item.key = item.id));
    }
    fetchData();
  }, []);

  // Delete handle
  const DeleteUser = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this record?",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((user) => user.id !== record.id);
        });
      },
    });
  };

  // Edit product
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  // const inputReft = useRef(null);

  // useEffect(() => {
  //   if (isEditing) {
  //     inputReft.current.focus();
  //   }
  // }, [isEditing]);

  const EditingUser = (record) => {
    setIsVisible(true);
    setIsEditing({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(null);
    setIsVisible(false);
  };

  // const [fixedTop, setFixedTop] = useState(false);

  return (
    <Card>
      <Typography.Title level={4}>Information Users</Typography.Title>
      <div style={{ overflowX: "auto", alignItems: "center", height: 482 }}>
        <Table
          columns={[
            {
              title: "Avatar",
              dataIndex: "image",
              key: "image",
              render: (image) => {
                return <Avatar src={image} />;
              },
              fixed: true,
            },
            {
              title: "First Name",
              dataIndex: "firstName",
              key: "firstName",
            },
            {
              title: "Last Name",
              dataIndex: "lastName",
              key: "lastName",
            },
            {
              title: "Age",
              dataIndex: "age",
              key: "age",
              sorter: (a, b) => a.age > b.age,
              sortDirections: ["descend"],
            },
            {
              title: "Email",
              dataIndex: "email",
              key: "email",
            },
            {
              title: "Address",
              dataIndex: "address",
              key: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
            },
            {
              title: "Action",
              key: "action",
              render: (record) => (
                <Space size="middle">
                  <EditOutlined
                    style={{ color: "black" }}
                    onClick={() => EditingUser(record)}
                  />
                  <DeleteOutlined
                    style={{ color: "red" }}
                    onClick={() => DeleteUser(record)}
                  />
                </Space>
              ),
            },
          ]}
          style={{
            padding: 8,
            minWidth: 1500,
          }}
          loading={loading}
          dataSource={dataSource}
          pagination={false}

          // scroll={{ y: "100vh" }}
        ></Table>
      </div>

      {/* Modal */}
      <Modal
        title="Edit record"
        open={isVisible}
        onCancel={() => resetEditing()}
        okText="Save"
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((product) => {
              if (product.id === isEditing.id) {
                return isEditing;
              } else {
                return product;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={isEditing?.image}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, image: e.target.value };
            });
          }}
        />
        <Input
          value={isEditing?.firstName}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, firstName: e.target.value };
            });
          }}
        />
        <Input
          value={isEditing?.lastName}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, lastName: e.target.value };
            });
          }}
        />
        <Input
          value={isEditing?.age}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, age: e.target.value };
            });
          }}
        />
        <Input
          value={isEditing?.email}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input
          value={isEditing?.address}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
          s
        />
      </Modal>
    </Card>
  );
}

function DashboardTimeline() {
  const items = [
    {
      color: "green",
      children: (
        <>
          <Typography.Title level={5}>
            Solve initial network problems 1
          </Typography.Title>
          <span style={{ color: "#8C8C8C" }}>09 AUG 7:20 PM</span>
        </>
      ),
    },
    {
      color: "green",
      children: (
        <>
          <Typography.Title level={5}>
            Solve initial network problems 2
          </Typography.Title>
          <span style={{ color: "#8C8C8C" }}>18 MAY 1:30 PM</span>
        </>
      ),
    },
    {
      color: "red",
      children: (
        <>
          <Typography.Title level={5}>
            Solve initial network problems 3
          </Typography.Title>
          <span style={{ color: "#8C8C8C" }}>15 MAY 3:30 PM</span>
        </>
      ),
    },
    {
      children: (
        <>
          <Typography.Title level={5}>
            Solve initial network problems 4
          </Typography.Title>
          <span style={{ color: "#8C8C8C" }}>08 JUN 12:20 PM</span>
        </>
      ),
    },
    {
      color: "gray",
      children: (
        <>
          <Typography.Title level={5}>
            Solve initial network problems 5
          </Typography.Title>
          <span style={{ color: "#8C8C8C" }}>10 JUN 7:50 PM</span>
        </>
      ),
    },
    {
      color: "yellow",
      children: (
        <>
          <Typography.Title level={5}>
            Solve initial network problems 6
          </Typography.Title>
          <span style={{ color: "#8C8C8C" }}>22 MAY 3:30 PM</span>
        </>
      ),
    },
  ];
  return (
    <Card>
      <Typography.Title level={4}>Orders History</Typography.Title>
      <span style={{ color: "#8C8C8C" }}>this month</span>
      <Timeline
        style={{
          padding: 8,
        }}
        items={items}
      ></Timeline>
    </Card>
  );
}

function DashboardCardFooter1() {
  return (
    <Card bodyStyle={{ padding: "16px" }}>
      <div className="cardFooter1">
        <span style={{ fontSize: 16, color: "#8C8C8C" }}>
          Built by developers
        </span>
        <Typography.Title level={4} style={{ margin: 10 }}>
          Dashboard for Ant Design
        </Typography.Title>

        <p style={{ fontSize: 16, color: "#8C8C8C", margin: 10 }}>
          From colors, cards, typography to complex elements, you will find the
          full documentation.
        </p>

        <Typography.Link style={{ fontSize: 16, margin: 10 }}>
          Read More
          <RightOutlined style={{ fontSize: 14 }} />
        </Typography.Link>
      </div>
    </Card>
  );
}

function DashboardCardFooter2() {
  return (
    <Card bodyStyle={{ padding: "16px" }}>
      <div className="cardFooter2">
        <Typography.Title level={4} style={{ color: "#fff", margin: 10 }}>
          Work with the best
        </Typography.Title>

        <p style={{ fontSize: 18, color: "#fff", margin: 10 }}>
          Wealth creation is an evolutionarily recent positive-sum game. It is
          all about who take the opportunity first..
        </p>
        <Typography.Link style={{ fontSize: 16, color: "#fff", margin: 10 }}>
          Read More
          <RightOutlined style={{ fontSize: 14, color: "#fff" }} />
        </Typography.Link>
      </div>
    </Card>
  );
}

export default Dashboard;
