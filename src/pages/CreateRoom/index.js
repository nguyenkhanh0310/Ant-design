import { Form, Input, Button, Select, InputNumber, Switch, message } from "antd";
import { createRoom } from "../../services/roomsService";
const { Option } = Select;

function CreateRoom() {
  const [form] = Form.useForm();
  const [messageApi, contexHolder] = message.useMessage();

  const rules = [
    {
      required: true,
      message: 'Bắt buộc nhập!',
    },
  ];

  const handleSubmit = async (values) => {
    const response = await createRoom(values);
    if(response) {
      form.resetFields();
      const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Tạo phòng mới thành công!',
          duration: 5
        });
      };
      success();
    } else {
      const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Tạo phòng mới thất bại',
        });
      };
      error();
    }
  }

  return (
    <>
      {contexHolder}
      <h2>Thêm phòng mới</h2>

      <Form
        name="create-room"
        onFinish={handleSubmit}
        layout="vertical"
        form={form}
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
          <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng"/>
        </Form.Item>

        <Form.Item
          label="Loại phòng"
          name="roomType"
          valuePropName="checked"
        >
          <Switch checkedChildren="VIP" unCheckedChildren="Thường"/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Tạo mới
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateRoom;