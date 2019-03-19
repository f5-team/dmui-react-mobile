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
                    <Col span={4}><div className="col-cont">4</div></Col>
                    <Col span={4}><div className="col-cont">4</div></Col>
                    <Col span={4}><div className="col-cont">4</div></Col>
                    <Col span={4}><div className="col-cont">4</div></Col>
                    <Col span={8}><div className="col-cont">8</div></Col>
                </Row>

                <div>&nbsp;</div>
                <Row >
                    <Col span={6}><div className="col-cont">6</div></Col>
                    <Col span={6}><div className="col-cont">6</div></Col>
                    <Col span={6}><div className="col-cont">6</div></Col>
                    <Col span={6}><div className="col-cont">6</div></Col>
                </Row>

                <div>&nbsp;</div>
                <Row gutter={10} >
                    <Col gutter={10} span={12}><div className="col-cont">12</div></Col>
                    <Col gutter={10} span={12}><div className="col-cont">12</div></Col>
                </Row>

                <div>&nbsp;</div>
                <Row >
                    <Col span={12} offset={4}><div className="col-cont">12 offset-4</div></Col>
                    <Col span={8}><div className="col-cont">8</div></Col>
                </Row>

                <div>&nbsp;</div>
                <Row >
                    <Col span={7} offset={3}><div className="col-cont">7 offset-10</div></Col>
                    <Col span={9} offset={5}><div className="col-cont">9 offset-5</div></Col>
                </Row>

                <div>&nbsp;</div>
                <Row >
                    <Col span={7}><div className="col-cont">7</div></Col>
                    <Col span={9} offset={8}><div className="col-cont">9 offset-8</div></Col>
                </Row>

                <div>around:</div>
                <Row pack={'around'}>
                    <Col span={4}><div className="col-cont">4</div></Col>
                    <Col span={4}><div className="col-cont">4</div></Col>
                </Row>

                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <p>Row组件：可配属性：</p>
                <ul>
                    <li>type: （string）布局类型（flex和grad布局）， 默认：flex.</li>
                    <li>flexV: （boolean）flex布局下是否垂直布局（true/false）， 默认：false.</li>
                    <li>pack: (string) flex布局下子元素水平对其方式(start/center/end/around/between)， 默认：start.</li>
                    <li>align: (string) flex布局下子元素垂直对其方式(start/center/end)， 默认：start.</li>
                    <li>gutter: (number) 子组件Col相邻间隔间距（单位px）， 默认：8.</li>
                </ul>

                <div>&nbsp;</div>
                <p>Col组件：可配属性：</p>
                <ul>
                    <li>gutter: (number) 组件相邻间隔间距（单位px）， 默认：8.</li>
                    <li>span: (number) 元素所占列数，总共24列， 默认：6.</li>
                </ul>

            </div>
        );
    }
}

export default Layout;