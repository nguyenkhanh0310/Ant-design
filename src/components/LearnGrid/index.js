import { Row, Col, Carousel, Collapse, Image, Tabs } from "antd";
import "./LearnGrid.css";
import CartItem from "../CartItem";
import Slide from "./Slide";
const { Panel } = Collapse;
function LearnGrid() {
  const list = [
    {
      id: 1,
      title: "Logo 1 là gì?",
      description: "Logo 1 là ...."
    },
    {
      id: 2,
      title: "Logo 2 là gì?",
      description: "Logo 2 là ...."
    },
    {
      id: 3,
      title: "Logo 3 là gì?",
      description: "Logo 3 là ...."
    }
  ];

  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: <Slide/>
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  return (
    <>
      {/* <Row gutter={[10, 20]}>
        <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
          <div className="box">
            Cột 1
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={9} md={6} sm={12} xs={24}>
          <div className="box">
            Cột 2
          </div>
        </Col>
        <Col xxl={8} xl={8} lg={10} md={6} sm={12} xs={24}>
          <div className="box">
            Cột 3
          </div>
        </Col>
        <Col xxl={10} xl={10} lg={2} md={6} sm={12} xs={24}>
          <div className="box">
            Cột 4
          </div>
        </Col>
      </Row> */}

      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} xs={24}>
          <CartItem title="Box 1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} xs={24}>
          <CartItem title="Box 2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} xs={24}>
          <CartItem title="Box 3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} xs={24}>
          <CartItem title="Box 4" />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={12} md={24} xs={24}>
          <CartItem title="Box 5" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={12} md={24} xs={24}>
          <CartItem title="Box 6" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CartItem title="Box 8" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 11" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Carousel effect="fade" autoplay infinite={true}>
        <div className="slider-item">
          1
        </div>
        <div className="slider-item">
          2
        </div>
        <div className="slider-item">
          3
        </div>
        <div className="slider-item">
          4
        </div>
      </Carousel>

      <Collapse defaultActiveKey="1" accordion={true}>
        {list.map(item => (
          <Panel header={item.title} key={item.id}>
            <p>{item.description}</p>
          </Panel>
        ))}
      </Collapse>

      <Image width={200} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/July_night_sky_%2835972569256%29.jpg/420px-July_night_sky_%2835972569256%29.jpg"/>
    
      <Tabs defaultActiveKey="1" items={items}/>
    </>
  );
}

export default LearnGrid;
