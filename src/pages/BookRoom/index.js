import { Input, Row, Col, Checkbox, Space, DatePicker, Radio, Select } from 'antd';
import { Button } from 'antd/es/radio';
import { useState } from 'react';
import { bookRoom } from '../../services/bookRoomService';
const { RangePicker } = DatePicker;

function BookRoom() {
  const [data, setData] = useState({
    time: "14 giờ"
  });

  const optionsTime = [];

  for (let i = 7; i <= 24; i++) {
    optionsTime.push({
      value: i > 9 ? `${i} giờ` : `0${i} giờ`,
      label: i > 9 ? `${i} giờ` : `0${i} giờ`
    });
  }

  const handleChangeInput = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value
    };
    setData(object);
  }

  const handleChangeCheckBox = (e) => {
    const object = {
      ...data,
      services: e
    };
    setData(object);
  }

  const handleChangeDate = (date, dateString) => {
    const object = {
      ...data,
      date: dateString
    }
    setData(object);
  }

  const handleChangeRadio = (e) => {
    const object = {
      ...data,
      gift: e.target.value
    }
    setData(object);
  }

  const handleChangeSelect = (e) => {
    const object = {
      ...data,
      time: e
    };
    setData(object);
  }

  const handleSubmit = async () => {
    const response = await bookRoom(data);
    if(response) {
      alert("Chúc mừng bạn đã đặt phòng thành công");
    } else {
      alert("Xin lỗi, vui lòng đặt lại sau");
    }
  }

  return (
    <>
      <h2>Đặt phòng</h2>

      <Row gutter={[20, 20]}>
        <Col span={24}>
          <p>Họ tên: </p>
          <Input name='fullName' placeholder="Nhập họ tên" onChange={handleChangeInput} />
        </Col>

        <Col span={12}>
          <p>Số điện thoại: </p>
          <Input name='phone' placeholder="Nhập số điện thoại" onChange={handleChangeInput} />
        </Col>

        <Col span={12}>
          <p>Email: </p>
          <Input name='email' placeholder="Nhập email" onChange={handleChangeInput} />
        </Col>

        <Col span={12}>
          <p>Dịch vụ thêm: </p>
          <Checkbox.Group onChange={handleChangeCheckBox}>
            <Space direction='vertical'>
              <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
              <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 7 chỗ">Thuê ô tô 7 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>

        <Col span={12}>
          <p>Quà tặng: </p>
          <Radio.Group name='gifts' onChange={handleChangeRadio}>
            <Space direction='vertical'>
              <Radio value="Áo cộc">Áo cộc</Radio>
              <Radio value="Mũ">Mũ</Radio>
              <Radio value="Kem chống nắng">Kem chống nắng</Radio>
            </Space>
          </Radio.Group>
        </Col>

        <Col span={12}>
          <p>Chọn ngày: </p>
          <RangePicker placeholder={["Ngày nhận", "Ngày trả"]} format={"DD/MM/YYYY"} onChange={handleChangeDate} />
        </Col>

        <Col span={12}>
          <p>Giờ nhận phòng: </p>
          <Select
            style={{ width: "100%" }}
            defaultValue={data.time}
            options={optionsTime}
            onChange={handleChangeSelect}
          />
        </Col>

        <Col span={24}>
          <Button type='primary' onClick={handleSubmit}>Đặt phòng</Button>
        </Col>
      </Row>
    </>
  );
}

export default BookRoom;
