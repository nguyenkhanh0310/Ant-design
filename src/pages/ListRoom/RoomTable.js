import { Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./DeleteRoom";
import EditRoom from "./EditRoom";

function RoomTable(props) {
  const { rooms, onReload } = props;

  const columns = [
    {
      title: 'Tên phòng',
      dataIndex: 'roomName',
      key: 'roomName'
    },
    {
      title: 'Số giường',
      dataIndex: 'bedQuantity',
      key: 'bedQuantity'
    },
    {
      title: 'Số người tối đa',
      dataIndex: 'maximumPeople',
      key: 'maximumPeople'
    },
    {
      title: 'Loại phòng',
      dataIndex: 'roomType',
      key: 'roomType',
      render: (_, record) => {
        return (
          <>{record.roomType ? (
            <Tooltip title="Phòng VIP chuẩn 5 sao">
              <Tag color="yellow">VIP</Tag>
            </Tooltip>
            // <Badge color="purple" text="VIP" />
          ) : (
            <Tooltip title="Phòng thường chuẩn 3 sao">
              <Tag color="gray">Thường</Tag>
            </Tooltip>
            // <Badge color="gray" text="Thường" />
          )}</>
        )
      }
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (_, record) => {
        return (
          <>{record.status ? (
            <Tooltip title="Phòng chưa có khách đặt" color="green">
              <Tag color="green">Còn phòng</Tag>

            </Tooltip>
            // <Badge color="green" text="Còn phòng" />
          ) : (
            <Tooltip title="Hết phòng" color="red">
              <Tag color="#f50">Hết phòng</Tag>
            </Tooltip>
            // <Badge color="red" text="Hết phòng" />
          )}</>
        )
      }
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => {
        return (
          <>
            <DeleteRoom record={record} onReload={onReload} />
            <EditRoom record={record} onReload={onReload}/>
          </>
        )
      }
    }
  ];

  return (
    <>
      <Table dataSource={rooms} columns={columns} rowKey="id" />
    </>
  );
}

export default RoomTable;
