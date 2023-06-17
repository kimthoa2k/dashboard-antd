import {
  CalendarFilled,
  CaretUpOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  PlusOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Descriptions,
  List,
  Row,
  Statistic,
  Typography,
} from "antd";
import React from "react";
import { FaPaypal, FaCcVisa } from "react-icons/fa";

const Billing = () => {
  return (
    // <Space direction="vertical">
    //   <Typography.Title level={4}>Billing</Typography.Title>
    //   <Row gutter={[24, 24]}>
    //     <Col xs={24} md={16}>
    //       <PaymentMethod16 />
    //     </Col>
    //     <Col xs={24} md={8}>
    //       <PaymentMethod8 />
    //     </Col>

    //     {/* Billing 16,8 */}
    //     <Col xs={24} sm={24} md={12} lg={12} xl={16}>
    //       <BillingInfo />
    //     </Col>
    //     <Col xs={24} sm={24} md={12} lg={12} xl={8}>
    //       <YourTransactions />
    //     </Col>
    //   </Row>
    // </Space>

    <Row gutter={[24, 24]}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
          <PaymentMethod16 />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
          <PaymentMethod8 />
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={16}>
          <BillingInfo />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
          <YourTransactions />
        </Col>
      </Row>
    </Row>
  );
};

function PaymentMethod16() {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} sm={24} md={24} lg={12} xl={12}>
        <Pay12 />
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <Pay61 />
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <Pay62 />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Pay24 />
      </Col>
    </Row>
  );
}
function Pay12() {
  return (
    <Card
      style={{
        border: "none",
        height: 225,
        background: "linear-gradient(to right bottom, #36dff1, #1270d4)",
        color: "#fff",
      }}
      cover={
        <div style={{ padding: "16px 24px", fontSize: 25 }}>
          <WifiOutlined />
        </div>
      }
    >
      <div>
        <h5
          style={{
            fontSize: 20,
            fontWeight: 600,
            margin: "0 0 25px",
            wordSpacing: 10,
          }}
        >
          4562 1122 4594 7852
        </h5>
      </div>
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
          <div>
            <Typography.Text style={{ color: "#fff" }}>
              Card Holder
            </Typography.Text>
            <p style={{ fontSize: 16, fontWeight: 600, margin: "0 30px 0 0" }}>
              Jack Peterson
            </p>
          </div>
          <div>
            <Typography.Text style={{ color: "#fff" }}>Expires</Typography.Text>
            <p style={{ fontSize: 16, fontWeight: 600, margin: "0 30px 0 0" }}>
              11/22
            </p>
          </div>
        </div>

        <div style={{ alignSelf: "flex-end" }}>
          <span>
            <img
              src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/mastercard-logo.e1b9bed1.png"
              alt="mastercard"
              style={{ width: 50, height: 30 }}
            ></img>
          </span>
        </div>
      </div>
    </Card>
  );
}
function Pay61() {
  return (
    <Card style={{ border: "none", height: 225 }}>
      <Statistic
        title={
          <div style={{ display: "block" }}>
            <div
              style={{
                width: 64,
                height: 64,
                backgroundColor: "#1890ff",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: 8,
                margin: "auto auto 16px",
              }}
            >
              <CaretUpOutlined
                style={{
                  fontSize: 32,
                  color: "#fff",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <h6
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#000000d9",
                }}
              >
                Salary
              </h6>
              <p style={{ fontWeight: 600 }}>Belong Interactive</p>
            </div>
          </div>
        }
        prefix={<PlusOutlined />}
        value={"$2,000"}
        valueStyle={{
          fontWeight: 600,
          color: "#000000d9",
          fontSize: 20,
          borderTop: "1px solid #eceaea",
          textAlign: "center",
          padding: "8px 16px",
        }}
      ></Statistic>
    </Card>
  );
}
function Pay62() {
  return (
    <Card style={{ border: "none", height: 225 }}>
      <Statistic
        title={
          <div style={{ display: "block" }}>
            <div
              style={{
                width: 64,
                height: 64,
                backgroundColor: "#1890ff",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                borderRadius: 8,
                margin: "auto auto 16px",
              }}
            >
              <FaPaypal
                style={{
                  fontSize: 32,
                  color: "#fff",
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <h6
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#000000d9",
                }}
              >
                Paypal
              </h6>
              <p style={{ fontWeight: 600 }}>Freelance Paymente</p>
            </div>
          </div>
        }
        prefix={<PlusOutlined />}
        value={"$49,000"}
        valueStyle={{
          fontWeight: 600,
          color: "#000000d9",
          fontSize: 20,
          borderTop: "1px solid #eceaea",
          textAlign: "center",
          padding: "8px 16px",
        }}
      ></Statistic>
    </Card>
  );
}
function Pay24() {
  return (
    <Card
      headStyle={{
        border: "none",
        padding: "16px",
        height: 75,
      }}
      bodyStyle={{ padding: 17 }}
      title="Payment Methods"
      extra={
        <Button type="primary" size="large">
          ADD NEW CARD
        </Button>
      }
    >
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ padding: "0 10px" }}>
                <span>
                  <img
                    src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/mastercard-logo.e1b9bed1.png"
                    alt="mastercard"
                    style={{ width: 50, height: 30 }}
                  ></img>
                </span>
              </div>
              <div style={{ padding: "0 10px" }}>
                <h5
                  style={{
                    fontSize: 20,
                    margin: "0 ",
                    wordSpacing: 10,
                  }}
                >
                  **** **** **** 7362
                </h5>
              </div>
              <EditOutlined style={{ padding: "0 10px", fontSize: 20 }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ padding: "0 10px" }}>
                <span>
                  <FaCcVisa
                    style={{ width: 50, height: 30, color: "#1890ff" }}
                  />
                </span>
              </div>
              <div style={{ padding: "0 10px" }}>
                <h5
                  style={{
                    fontSize: 20,
                    margin: "0 ",
                    wordSpacing: 10,
                  }}
                >
                  **** **** **** 3288
                </h5>
              </div>
              <EditOutlined style={{ padding: "0 10px", fontSize: 20 }} />
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

function PaymentMethod8() {
  return (
    <Card
      title="Invoices"
      headStyle={{
        borderBottom: "none",
        fontSize: 16,
        padding: "16px 20px",
      }}
      extra={
        <Button type="primary" size="large">
          VIEW ALL
        </Button>
      }
      bodyStyle={{ padding: "0 16px 16px" }}
    >
      <List>
        <List.Item
          style={{
            border: "none",
            padding: "10px 0",
          }}
          actions={[
            <div style={{ padding: "0 15px" }}>
              <DownloadOutlined
                style={{
                  color: "#000000d9",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
              />
              <span style={{ color: "#000000d9", cursor: "pointer" }}>PDF</span>
            </div>,
          ]}
        >
          <List.Item.Meta
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-123456
              </span>
            }
          />

          <div>$180</div>
        </List.Item>
        <List.Item
          style={{
            border: "none",
          }}
          actions={[
            <div style={{ padding: "0 15px" }}>
              <DownloadOutlined
                style={{
                  color: "#000000d9",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
              />
              <span style={{ color: "#000000d9", cursor: "pointer" }}>PDF</span>
            </div>,
          ]}
        >
          <List.Item.Meta
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-123456
              </span>
            }
          />

          <div>$180</div>
        </List.Item>
        <List.Item
          style={{
            border: "none",
          }}
          actions={[
            <div style={{ padding: "0 15px" }}>
              <DownloadOutlined
                style={{
                  color: "#000000d9",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
              />
              <span style={{ color: "#000000d9", cursor: "pointer" }}>PDF</span>
            </div>,
          ]}
        >
          <List.Item.Meta
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-123456
              </span>
            }
          />
          <div>$180</div>
        </List.Item>
        <List.Item
          style={{
            border: "none",
          }}
          actions={[
            <div style={{ padding: "0 15px" }}>
              <DownloadOutlined
                style={{
                  color: "#000000d9",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
              />
              <span style={{ color: "#000000d9", cursor: "pointer" }}>PDF</span>
            </div>,
          ]}
        >
          <List.Item.Meta
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-123456
              </span>
            }
          />

          <div>$180</div>
        </List.Item>
        <List.Item
          style={{
            border: "none",
          }}
          actions={[
            <div style={{ padding: "0 15px" }}>
              <DownloadOutlined
                style={{
                  color: "#000000d9",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
              />
              <span style={{ color: "#000000d9", cursor: "pointer" }}>PDF</span>
            </div>,
          ]}
        >
          <List.Item.Meta
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-123456
              </span>
            }
          />

          <div>$180</div>
        </List.Item>
      </List>
    </Card>
  );
}

function BillingInfo() {
  return (
    <Card
      title={
        <div style={{ padding: "16px 0", height: 74 }}>Billing Information</div>
      }
      headStyle={{
        border: "none",
      }}
      bodyStyle={{ padding: " 0 16px 16px" }}
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Card
            style={{
              height: 153,
              backgroundColor: "#fafafa",
            }}
            bodyStyle={{
              padding: "16px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <Descriptions
                  title={
                    <div style={{ padding: "0 10px 0 0" }}>Oliver Liam</div>
                  }
                  extra={
                    <div>
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                      <span
                        style={{
                          padding: "10px 20px 10px 10px",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        DELETE
                      </span>
                      <EditOutlined style={{ cursor: "pointer" }} />
                      <span
                        style={{
                          padding: "10px 35px 10px 10px",
                          cursor: "pointer",
                        }}
                      >
                        EDIT
                      </span>
                    </div>
                  }
                >
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Full name</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      marginTop: -10,
                      fontWeight: 600,
                    }}
                  >
                    Sarah Emily Jacob
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Mobile</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      fontWeight: 600,
                    }}
                  >
                    0934523569
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Email</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      fontWeight: 600,
                    }}
                  >
                    sarahjacob@mail.com
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            style={{ height: 153, backgroundColor: "#fafafa" }}
            bodyStyle={{ padding: "16px" }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <Descriptions
                  title={
                    <div style={{ padding: "0 10px 0 0" }}>Oliver Liam</div>
                  }
                  extra={
                    <div>
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                      <span
                        style={{
                          padding: "10px 20px 10px 10px",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        DELETE
                      </span>
                      <EditOutlined style={{ cursor: "pointer" }} />
                      <span
                        style={{
                          padding: "10px 35px 10px 10px",
                          cursor: "pointer",
                        }}
                      >
                        EDIT
                      </span>
                    </div>
                  }
                >
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Full name</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      marginTop: -10,
                      fontWeight: 600,
                    }}
                  >
                    Sarah Emily Jacob
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Mobile</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      fontWeight: 600,
                    }}
                  >
                    0934523569
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Email</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      fontWeight: 600,
                    }}
                  >
                    sarahjacob@mail.com
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card
            style={{ height: 153, backgroundColor: "#fafafa" }}
            bodyStyle={{ padding: "16px" }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <Descriptions
                  title={
                    <div style={{ padding: "0 10px 0 0" }}>Oliver Liam</div>
                  }
                  extra={
                    <div>
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                      <span
                        style={{
                          padding: "10px 20px 10px 10px",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        DELETE
                      </span>
                      <EditOutlined style={{ cursor: "pointer" }} />
                      <span
                        style={{
                          padding: "10px 35px 10px 10px",
                          cursor: "pointer",
                        }}
                      >
                        EDIT
                      </span>
                    </div>
                  }
                >
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Full name</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      marginTop: -10,
                      fontWeight: 600,
                    }}
                  >
                    Sarah Emily Jacob
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Mobile</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      fontWeight: 600,
                    }}
                  >
                    0934523569
                  </Descriptions.Item>
                  <Descriptions.Item
                    label={<span style={{ fontWeight: 600 }}>Email</span>}
                    style={{
                      display: "flex",
                      padding: "1px 1px 6px",
                      fontWeight: 600,
                    }}
                  >
                    sarahjacob@mail.com
                  </Descriptions.Item>
                </Descriptions>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

function YourTransactions() {
  return (
    <Card
      style={{ margin: "0 0 24px" }}
      title={<div style={{ padding: "16px 0" }}>Your Transactions</div>}
      headStyle={{
        borderBottom: "none",
        fontSize: 16,
        padding: "0 24px",
      }}
      bodyStyle={{ padding: "0 16px 16px" }}
      extra={
        <div style={{ padding: "16px 0", fontWeight: 600, color: "#8C8C8C" }}>
          <CalendarFilled style={{ marginRight: "8px" }} />
          <span>23 - 30 March 2023</span>
        </div>
      }
    >
      <div style={{ padding: "0 0 12px" }}>
        <p style={{ margin: "6px 0", fontWeight: 600 }}>NEWEST</p>
      </div>
      <List>
        <List.Item
          style={{
            border: "none",
            padding: "11px 0",
          }}
        >
          <List.Item.Meta
            style={{ alignItems: "center" }}
            avatar={
              <Avatar
                size="small"
                style={{
                  background: "#FDE3CF",
                }}
              >
                <p
                  style={{
                    color: "#fe988f",
                    fontWeight: 500,
                    fontSize: 16,
                    margin: 0,
                    lineHeight: "19px",
                  }}
                >
                  -
                </p>
              </Avatar>
            }
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-415646
              </span>
            }
          />
          <span style={{ color: "red", fontSize: 16, fontWeight: 700 }}>
            - $2,500
          </span>
        </List.Item>
        <List.Item
          style={{
            border: "none",
            padding: "11px 0",
          }}
        >
          <List.Item.Meta
            style={{ alignItems: "center" }}
            avatar={
              <Avatar
                size="small"
                style={{
                  background: "#edf9e7",
                }}
              >
                <p
                  style={{
                    color: "#85d55e",
                    fontWeight: 500,
                    fontSize: 16,
                    margin: 0,
                    lineHeight: "19px",
                  }}
                >
                  +
                </p>
              </Avatar>
            }
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-415646
              </span>
            }
          />
          <span style={{ color: "#52c41a", fontSize: 16, fontWeight: 700 }}>
            + $2,000
          </span>
        </List.Item>
      </List>

      <div style={{ padding: "12px 0" }}>
        <p style={{ margin: "6px 0", fontWeight: 600 }}>YESTERDAY</p>
      </div>
      <List>
        <List.Item
          style={{
            border: "none",
            padding: "11px 0",
          }}
        >
          <List.Item.Meta
            style={{ alignItems: "center" }}
            avatar={
              <Avatar
                size="small"
                style={{
                  background: "#edf9e7",
                }}
              >
                <p
                  style={{
                    color: "#85d55e",
                    fontWeight: 500,
                    fontSize: 16,
                    margin: 0,
                    lineHeight: "19px",
                  }}
                >
                  +
                </p>
              </Avatar>
            }
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-415646
              </span>
            }
          />
          <span style={{ color: "#52c41a", fontSize: 16, fontWeight: 700 }}>
            + $850
          </span>
        </List.Item>
        <List.Item
          style={{
            border: "none",
            padding: "11px 0",
          }}
        >
          <List.Item.Meta
            style={{ alignItems: "center" }}
            avatar={
              <Avatar
                size="small"
                style={{
                  background: "#edf9e7",
                }}
              >
                <p
                  style={{
                    color: "#85d55e",
                    fontWeight: 500,
                    fontSize: 16,
                    margin: 0,
                    lineHeight: "19px",
                  }}
                >
                  +
                </p>
              </Avatar>
            }
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-415646
              </span>
            }
          />
          <span style={{ color: "#52c41a", fontSize: 16, fontWeight: 700 }}>
            + $1,050
          </span>
        </List.Item>
        <List.Item
          style={{
            border: "none",
            padding: "11px 0",
          }}
        >
          <List.Item.Meta
            style={{ alignItems: "center" }}
            avatar={
              <Avatar
                size="small"
                style={{
                  background: "#edf9e7",
                }}
              >
                <p
                  style={{
                    color: "#85d55e",
                    fontWeight: 500,
                    fontSize: 16,
                    margin: 0,
                    lineHeight: "19px",
                  }}
                >
                  +
                </p>
              </Avatar>
            }
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-415646
              </span>
            }
          />
          <span style={{ color: "#52c41a", fontSize: 16, fontWeight: 700 }}>
            + $2,800
          </span>
        </List.Item>
        <List.Item
          style={{
            border: "none",
            padding: "11px 0",
          }}
        >
          <List.Item.Meta
            style={{ alignItems: "center" }}
            avatar={
              <Avatar
                size="small"
                style={{
                  background: "#edf9e7",
                }}
              >
                <p
                  style={{
                    color: "#85d55e",
                    fontWeight: 500,
                    fontSize: 16,
                    margin: 0,
                    lineHeight: "19px",
                  }}
                >
                  +
                </p>
              </Avatar>
            }
            title="March, 01, 2023"
            description={
              <span style={{ fontSize: "12px", fontWeight: 600 }}>
                #MS-415646
              </span>
            }
          />
          <span style={{ color: "#52c41a", fontSize: 16, fontWeight: 700 }}>
            - $2,500
          </span>
        </List.Item>
      </List>
    </Card>
  );
}
export default Billing;
