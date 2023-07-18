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
import React, { useState, useEffect, useContext } from "react";
import { getProducts } from "../../../API";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ApiContext from "./ApiContext";

const Tables = () => {
  return (
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
  const { state, dispatch } = useContext(ApiContext);
  const { data, isLoading, error } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const product = await getProducts();

        dispatch({ type: "FETCH_SUCCESS", payload: product.products });
        product.products.map((item) => (item.key = item.id));
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };
    fetchData();
  }, [dispatch]);

  const columns = [
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
              onClick={() => showEditModal(record)}
            />
            <DeleteOutlined
              style={{ color: "red" }}
              onClick={() => DeleteRecord(record.id)}
            />
          </Space>
        );
      },
    },
  ];

  // handle delete record
  const DeleteRecord = (recordId) => {
    Modal.confirm({
      title: "Are you sure you want to delete this record?",
      onOk: () => {
        dispatch({
          type: "DELETE_RECORD",
          payload: recordId,
        });
      },
    });
  };

  //handle edit record
  const [visible, setVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  const showEditModal = (record) => {
    setEditingRecord(record);
    setVisible(true);
  };

  const handleSave = (recordId) => {
    const updatedRecord = { recordId, ...editingRecord };
    dispatch({ type: "UPDATE_RECORD", payload: updatedRecord });
    setVisible(false);
    setEditingRecord(null);
  };

  const handleCancel = () => {
    setVisible(false);
    setEditingRecord(null);
  };

  return (
    <Card>
      <Typography.Title level={4}>Products This Month</Typography.Title>
      <div style={{ overflowX: "auto", alignItems: "center", height: 482 }}>
        <Table
          style={{
            padding: 8,
            minWidth: 1500,
          }}
          tableLayout="fixed"
          loading={isLoading}
          error={error}
          dataSource={data}
          columns={columns}
          pagination={false}
        ></Table>
      </div>

      {/* Modal */}
      <Modal
        centered={true}
        title="Edit Record"
        open={visible}
        onCancel={handleCancel}
        okText="Save"
        onOk={(values) => handleSave(editingRecord.id, values)}
      >
        <label style={{ fontSize: 16 }}>Thumbnail</label>

        <Input
          size="large"
          value={editingRecord?.thumbnail}
          onChange={(e) => {
            setEditingRecord((pre) => {
              return { ...pre, thumbnail: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Title</label>

        <Input
          size="large"
          value={editingRecord?.title}
          onChange={(e) => {
            setEditingRecord((pre) => {
              return { ...pre, title: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Brand</label>

        <Input
          size="large"
          value={editingRecord?.brand}
          onChange={(e) => {
            setEditingRecord((pre) => {
              return { ...pre, brand: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Category</label>

        <Input
          size="large"
          value={editingRecord?.category}
          onChange={(e) => {
            setEditingRecord((pre) => {
              return { ...pre, category: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Price</label>

        <Input
          size="large"
          value={editingRecord?.price}
          onChange={(e) => {
            setEditingRecord((pre) => {
              return { ...pre, price: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Discount</label>

        <Input
          size="large"
          value={editingRecord?.discountPercentage}
          onChange={(e) => {
            setEditingRecord((pre) => {
              return { ...pre, discountPercentage: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Rating</label>

        <Input
          size="large"
          value={editingRecord?.rating}
          onChange={(e) => {
            setEditingRecord((pre) => {
              return { ...pre, rating: e.target.value };
            });
          }}
        />
        <label style={{ fontSize: 16 }}>Stock</label>

        <Input
          size="large"
          value={editingRecord?.stock}
          onChange={(e) => {
            setEditingRecord((pre) => {
              return { ...pre, stock: e.target.value };
            });
          }}
        />
      </Modal>
    </Card>
  );
};

export default Tables;
