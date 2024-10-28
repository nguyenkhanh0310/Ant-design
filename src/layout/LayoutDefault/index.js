import { Layout } from "antd";
import "./LayoutDefault.css";
import logo from "../../images/logo.png";
import logofold from "../../images/logo-fold.png";
import { MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import { useState } from "react";
import Notify from "../../components/Notify";
import MenuSider from "../../components/MenuSider";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;

function LayoutDefault() {
  const [ collapse, setCollapse ] = useState(false);
  return (
    <>
      <Layout className="layout-default">
        <header className="header">
          <div className={"header__logo " + (collapse && "header__logo--collapsed")}>
            <img src={collapse ? logofold : logo} alt="Logo" />
          </div>
          <div className="header__nav">
            <div className="header__nav--left">
              <div className="header__collapse" onClick={() => setCollapse(!collapse)}>
                <MenuUnfoldOutlined/>
              </div>
              <div className="header__search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav--right">
                <Notify/>
            </div>
          </div>
        </header>

        <Layout>
          <Sider className="sider" theme="light" collapsed={collapse}>
            <MenuSider/>
          </Sider>

          <Content className="content">
            <Outlet/>
          </Content>
        </Layout>

      </Layout>
    </>
  );
}

export default LayoutDefault;
