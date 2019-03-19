/*
 * @Author: denghuaicheng 
 * @Date: 2019-03-18 21:06:21 
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-18 21:09:17
 * summary: 数据展示： list-group
 */


import React from 'react';
import Slot from './../slot/index'

import './index.css'

class ListGroup extends React.Component {

    render() {
        return (
            <div className="dmui-group-list">
                <Slot parentComponents={this}></Slot>
            </div>
        );
    }
}

export default ListGroup;