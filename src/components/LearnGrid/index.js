import { Row, Col } from "antd";
import "./LearnGrid.css";
import CartItem from "../CartItem";

function LearnGrid() {
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
          <CartItem title="Box 1"/>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} xs={24}>
          <CartItem title="Box 2"/>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} xs={24}>
          <CartItem title="Box 3"/>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} xs={24}>
          <CartItem title="Box 4"/>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={12} md={24} xs={24}>
          <CartItem title="Box 5" style={{height: "400px"}}/>
        </Col>
        <Col xxl={8} xl={8} lg={12} md={24} xs={24}>
          <CartItem title="Box 6" style={{height: "400px"}}/>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 7" style={{height: "400px"}}/>
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CartItem title="Box 8" style={{height: "400px"}}/>
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 9" style={{height: "400px"}}/>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 10" style={{height: "400px"}}/>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem title="Box 11" style={{height: "400px"}}/>
        </Col>
      </Row>
    </>
  );
}

export default LearnGrid;