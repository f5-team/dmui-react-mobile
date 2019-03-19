/*
 * @Author: denghuaicheng 
 * @Date: 2019-03-19 13:58:22 
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-19 14:41:26
 * summary: col: 布局组件
 */

import React from 'react';
import Slot from "./../slot/index"

class Col extends React.Component {

    render() {
        return (
            <div>
                <Slot parentComponents={this}></Slot>
            </div>
        );
    }
    
}

export default Col;