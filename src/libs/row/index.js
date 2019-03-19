/*
 * @Author: denghuaicheng 
 * @Date: 2019-03-19 13:58:22 
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-19 14:38:40
 * summary: row: 布局组件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slot from "./../slot/index"

class Row extends Component {

    getRowClassname= ()=>{
        const {type}= this.props;
        if(type=== 'flex'){
            return `dmui-row ${type} `
        }
        return `dmui-row ${type}`
    }

    render() {
        return (
            <div className={this.getRowClassname()}>
                <Slot parentComponents={this}></Slot>
            </div>
        );
    }

}

Row.defaultProps= {
    //布局方式 flex
    type: "flex",
    //是否垂直布局flex
    flexV: false,
    //flex布局下水平对其方式: start center end around between
    pack: "",
    //flex布局下垂直对其方式: start center end
    align: ""
};

Row.propTypes= {
    type: PropTypes.string,
    flexV: PropTypes.bool,
    pack: PropTypes.string,
    align: PropTypes.string,
};

export default Row;