/*
 * @Author: denghuaicheng 
 * @Date: 2019-03-19 13:58:22 
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-19 18:01:13
 * summary: col: 布局组件
 */

import React from 'react';
import PropTypes from 'prop-types';
import Slot from "./../slot/index"

import "./index.css"

class Col extends React.Component {


    getClassname= ()=> {
        return `dmui-col-${this.props.span} dmui-offset-${this.props.offset}`
    }

    getStyle= ()=> {
        const {gutter}= this.props;
        if(gutter > 0){
            return {
                paddingLeft: gutter/2+ "px",
                paddingRight: gutter/2+ "px"
            }
        }
        return {}
    }

    render() {
        return (
            <div className={this.getClassname()} style={this.getStyle()} >
                <Slot parentComponents={this}></Slot>
            </div>
        );
    }
    
}

Col.defaultProps= {
    //布局方式 flex
    span: 6,
    //偏移列数
    offset: 0,
    //子元素相邻间隔间距，单位px
    gutter: 8,
};

Col.propTypes= {
    span: PropTypes.number,
    offset: PropTypes.number,
    gutter: PropTypes.number
};

export default Col;