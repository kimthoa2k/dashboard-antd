import {
  Table,
  Space,
  Typography,
  Row,
  Col,
  Card,
  Avatar,
  Rate,
  Modal,
  Input,
} from "antd";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../../API";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Tables = () => {
  return (
    // <Space fontSize={20} direction="vertical">
    //   <Typography.Title level={3}>Tables</Typography.Title>

    //   <Row gutter={[24, 24]}>
    //     <Col span={24}>
    //       <TableProducts />
    //     </Col>
    //   </Row>
    // </Space>
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <TableProducts />
      </Col>
      <Col span={24}>
        <TableProducts />
      </Col>
    </Row>
  );
};

const TableProducts = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const product = await getProducts();
      setDataSource(product.products);
      setLoading(false);
      // console.log("users", users);
      product.products.map((item) => (item.key = item.id));
    }
    fetchData();
  }, []);
  // console.log(dataSource);

  // Delete handle
  const DeleteProduct = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this record?",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((product) => product.id !== record.id);
        });
      },
    });
  };

  // Edit product
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(null);

  const EditingProduct = (record) => {
    setIsVisible(true);
    setIsEditing({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(null);
    setIsVisible(false);
  };
  return (
    <Card>
      <Typography.Title level={4}>Products This Month</Typography.Title>
      <div style={{ overflowX: "auto", alignItems: "center", height: 482 }}>
        <Table
          tableLayout="fixed"
          columns={[
            {
              title: "Image",
              dataIndex: "thumbnail",
              key: "thumbnail",
              render: (link) => {
                return <Avatar src={link} />;
              },
              fixed: true,
            },
            {
              title: "Title",
              dataIndex: "title",
              key: "title",
            },
            {
              title: "Brand",
              dataIndex: "brand",
              key: "brand",
            },
            {
              title: "Category",
              dataIndex: "category",
              key: "category",
            },
            {
              title: "Price",
              dataIndex: "price",
              key: "price",
              render: (value) => <span>${value}</span>,
              sorter: (a, b) => a.price > b.price,
              sortDirections: ["descend"],
            },

            {
              title: "Discount",
              dataIndex: "discountPercentage",
              key: "discountPercentage",
              render: (value) => <span>${value}</span>,
              sorter: (a, b) => a.discountPercentage > b.discountPercentage,
              sortDirections: ["descend"],
            },
            {
              title: "Rating",
              dataIndex: "rating",
              key: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: "Stock",
              dataIndex: "stock",
              key: "stock",
            },
            {
              title: "Action",
              key: "action",
              render: (record) => {
                return (
                  <Space size="middle">
                    <EditOutlined
                      style={{ color: "black" }}
                      onClick={() => EditingProduct(record)}
                    />
                    <DeleteOutlined
                      style={{ color: "red" }}
                      onClick={() => DeleteProduct(record)}
                    />
                  </Space>
                );
              },
            },
          ]}
          style={{
            padding: 8,
            minWidth: 1500,
          }}
          loading={loading}
          dataSource={dataSource}
          pagination={false}
        ></Table>
      </div>

      {/* Modal */}
      <Modal
        centered={true}
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
        <label style={{ fontSize: 16 }}>Thumbnail</label>

        <Input
          size="large"
          value={isEditing?.thumbnail}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, thumbnail: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Title</label>

        <Input
          size="large"
          value={isEditing?.title}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, title: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Brand</label>

        <Input
          size="large"
          value={isEditing?.brand}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, brand: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Category</label>

        <Input
          size="large"
          value={isEditing?.category}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, category: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Price</label>

        <Input
          size="large"
          value={isEditing?.price}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, price: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Discount</label>

        <Input
          size="large"
          value={isEditing?.discountPercentage}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, discountPercentage: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Rating</label>

        <Input
          size="large"
          value={isEditing?.rating}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, rating: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Stock</label>

        <Input
          size="large"
          value={isEditing?.stock}
          onChange={(e) => {
            setIsEditing((pre) => {
              return { ...pre, stock: e.target.value };
            });
          }}
        />
      </Modal>
    </Card>
  );
};

export default Tables;
