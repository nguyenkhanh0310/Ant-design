import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteRoom } from "../../services/roomsService";

function DeleteRoom(props) {
  const { record, onReload } = props;

  const handleDelete = async (id) => {
    const response = await deleteRoom(record.id);
    if(response) {
      onReload();
      alert("Xóa bản ghi thành công!");
    } else {
      alert("Xóa bản ghi không thành công");
    }
  }

  return (
    <>
      <Popconfirm
        title="Bạn có chắc chắn xóa không?"
        onConfirm={() => handleDelete()}>
        <Button danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </>
  )
}

export default DeleteRoom;
