import { Button, Form, Modal, Select, Switch, Input, InputNumber, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { updateRoom } from "../../services/roomsService";
const { Option } = Select;


function EditRoom(props) {
  const { record, onReload } = props
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contexHolder] = message.useMessage();

  const rules = [
    {
      required: true,
      message: 'Bắt buộc nhập!',
    },
  ];

  const handleSubmit = async (values) => {
    const response = await updateRoom(record.id, values);
    if (response) {
      messageApi.open({
        type: 'success',
        content: 'Cập nhật thành công!',
        duration: 5
      });
      setShowModal(false);
      onReload();
    } else {
      messageApi.open({
        type: 'error',
        content: 'Cập nhật thất bại',
      });
      setShowModal(false);
    }
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
      {contexHolder}
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
      </Modal>
    </>
  );
}

export default EditRoom;
