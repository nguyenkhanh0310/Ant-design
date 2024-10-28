import { Badge, Table } from "antd";
import DeleteRoom from "./DeleteRoom";

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
            <Badge color="purple" text="VIP" />
          ) : (<Badge color="gray" text="Thường" />)}</>
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
            <Badge color="green" text="Còn phòng" />
          ) : (<Badge color="red" text="Hết phòng" />)}</>
        )
      }
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => {
        return (
          <>
            <DeleteRoom record={record} onReload={onReload}/>
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
