import { Card, Row, Col, Badge } from "antd";

function RoomGrid(props) {
  const { rooms } = props;

  return (
    <>
      <Row gutter={[20, 20]}>
        {rooms.map((item) => (
          <Col span={12} key={item.id}>
            <Badge.Ribbon
              text={item.roomType ? "VIP" : "Thường"}
              color={item.status ? "green" : "grey"}>
              <Card title={item.roomName}>
                <p>Số giường: <strong>{item.bedQuantity}</strong></p>
                <p>Số người tối đa: <strong>{item.maximumPeople}</strong></p>
                <p>
                  {item.status ? (
                    <Badge status="success" text="Còn phòng" />
                  ) : (
                    <Badge status="error" text="Hết phòng" />
                  )}
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default RoomGrid;