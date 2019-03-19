import React from 'react';
import Row from "./../../libs/row/index"
import Col from "./../../libs/col/index"

import "./index.css"

class Layout extends React.Component {

    render() {
        return (
            <div>
                <h3>layout组件：</h3>

                <Row >
                    <Col span={8}><div className="col-cont">8</div></Col>
                    <Col span={8}><div className="col-cont">8</div></Col>
                    <Col span={8}><div className="col-cont">8</div></Col>
                </Row>

                <div>&nbsp;</div>
                <Row gutter={8} >
                    <Col gutter={8} span={4}><div className="col-cont">4</div></Col>
                    <Col gutter={8} span={4}><div className="col-cont">4</div></Col>
                    <Col gutter={8} span={4}><div className="col-cont">4</div></Col>
                    <Col gutter={8} span={4}><div className="col-cont">4</div></Col>
                    <Col gutter={8} span={8}><div className="col-cont">8</div></Col>
                </Row>

                <div>&nbsp;</div>
                <Row gutter={8} >
                    <Col gutter={8} span={6}><div className="col-cont">6</div></Col>
                    <Col gutter={8} span={6}><div className="col-cont">6</div></Col>
                    <Col gutter={8} span={6}><div className="col-cont">6</div></Col>
                    <Col gutter={8} span={6}><div className="col-cont">6</div></Col>
                </Row>

                <div>&nbsp;</div>
                <Row gutter={10} >
                    <Col gutter={10} span={12}><div className="col-cont">12</div></Col>
                    <Col gutter={10} span={12}><div className="col-cont">12</div></Col>
                </Row>

            </div>
        );
    }
}

export default Layout;