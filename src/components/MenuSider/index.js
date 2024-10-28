import { Menu } from 'antd';
import {
  PlayCircleOutlined,
  SnippetsOutlined,
  HighlightOutlined, 
  FormOutlined,
  PlusCircleOutlined,
  DiffOutlined
} from '@ant-design/icons';
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      key: "menu-1",
      label: "Menu 1",
      icon: <PlayCircleOutlined />,
      children: [
        {
          key: "/",
          label: <Link to="/">Dashboard</Link>,
          icon: <HighlightOutlined />,
        },
        {
          key: "menu-1-2",
          label: "Menu 1-2",
          icon: <HighlightOutlined />,
        },
        {
          key: "menu-1-3",
          label: "Menu 1-3",
          icon: <HighlightOutlined />,
        },
        {
          key: "menu-1-4",
          label: "Menu 1-4",
          icon: <HighlightOutlined />,
        }
      ]
    },
    {
      key: "menu-2",
      label: "Menu 2",
      icon: <SnippetsOutlined />,
      children: [
        {
          key: "menu-2-1",
          label: "Menu 1-1",
          icon: <HighlightOutlined />,
        },
        {
          key: "menu-2-2",
          label: "Menu 1-2",
          icon: <HighlightOutlined />,
        },
        {
          key: "menu-2-3",
          label: "Menu 1-3",
          icon: <HighlightOutlined />,
        },
        {
          key: "menu-2-4",
          label: "Menu 1-4",
          icon: <DiffOutlined />
        }
      ]
    },
    {
      key: "menu-3",
      label: "Menu 3",
      icon: <HighlightOutlined />
    },
    {
      key: "/book-room",
      label: <Link to="/book-room">Book Room</Link>,
      icon: <FormOutlined />
    },
    {
      key: "/create-room",
      label: <Link to="/create-room">Create Room</Link>,
      icon: <PlusCircleOutlined />
    },
    {
      key: "/list-room",
      label: <Link to="/list-room">List Room</Link>,
      icon: <FormOutlined />
    }
  ];

  return (
    <>
      <Menu
        mode="inline"
        theme="light"
        items={items}
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["menu-1"]}
      />
    </>
  );
}

export default MenuSider;
