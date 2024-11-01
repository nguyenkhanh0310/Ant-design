import { Button, Form, Modal, Select, Switch, Input, InputNumber, notification, Spin } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { updateRoom } from "../../services/roomsService";
const { Option } = Select;


function EditRoom(props) {
  const { record, onReload } = props
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [spinning, setSpinning] = useState(false);
  const [notiApi, contextHolder] = notification.useNotification();

  const rules = [
    {
      required: true,
      message: 'Bắt buộc nhập!',
    },
  ];

  const handleSubmit = async (values) => {
    setSpinning(true);
    const response = await updateRoom(record.id, values);
    setTimeout(() => {
      if (response) {
        notiApi.success({
          message: 'Cập nhật thành công!',
          description: `Bạn đã cập nhật thành công phòng ${record.roomName}`,
          duration: 3
        });
        setShowModal(false);
        onReload();
      } else {
        notiApi.error({
          message: 'Cập nhật thất bại!',
          description: `Bạn đã cập nhật thất bại phòng ${record.roomName}`,
          duration: 3
        });
        // setShowModal(false);
      }
      setSpinning(false);
    }, 3000);
  }

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  }

  return (
    <>
      {contextHolder}
      <Button
        size="small"
        type="primary"
        icon={<EditOutlined />}
        onClick={handleShowModal}
      />

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title="Chỉnh sửa phòng"
        footer={null}
      >
        <Spin spinning={spinning} tip="Đang cập nhật...">
          <Form
            name="create-room"
            onFinish={handleSubmit}
            layout="horizonal"
            form={form}
            initialValues={record}
          >
            <Form.Item
              label="Tên phòng"
              name="roomName"
              rules={[
                {
                  required: true,
                  message: 'Please input your room name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Số lượng giường"
              name="bedQuantity"
              rules={rules}
            >
              <InputNumber min={1} />
            </Form.Item>

            <Form.Item
              label="Số người tối đa"
              name="maximumPeople"
              rules={rules}
            >
              <InputNumber min={1} />
            </Form.Item>

            <Form.Item
              name="description"
              label="Mô tả"
            >
              <Input.TextArea rows={6} showCount maxLength={100} />
            </Form.Item>

            <Form.Item
              label="tiện ích"
              name="utilities"
              rules={rules}
            >
              <Select
                mode="multiple"
                placeholder="Chọn dịch vụ"
                allowClear
              >
                <Option value="Điều hòa">Điều hòa</Option>
                <Option value="Nóng lạnh">Nóng lạnh</Option>
                <Option value="Wifi">Wifi</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Trạng thái"
              name="status"
              valuePropName="checked"
            >
              <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
            </Form.Item>

            <Form.Item
              label="Loại phòng"
              name="roomType"
              valuePropName="checked"
            >
              <Switch checkedChildren="VIP" unCheckedChildren="Thường" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
}

export default EditRoom;
