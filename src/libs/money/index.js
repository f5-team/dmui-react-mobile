/*
 * @Author: denghuaicheng
 * @Date: 2019-03-18 16:13:52
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-21 14:35:06
 * @summary: 数据暂示：金额展示
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

class Money extends Component {

    getClassname= ()=> {
        const {lang, disable}= this.props;
        return `dmui-money lang-${lang} ${disable ? 'disable' : ''}`
    }

    getStyle= ()=> {
        const {disable, color, disableColor}= this.props;
        return {
            color: (disable && disableColor) ? disableColor : color,
        }
    }

    getValue= ()=> {
        const {children}= this.props;
        if(!children) return "0.00";
        try{
            let value= Number(children);
            return value.toFixed(2);
        }catch(e){}
        
    }

    render() {
        
        return (
            <span className={this.getClassname()} style={this.getStyle()}>
                {this.getValue()}
            </span>
        );

    }

}

Money.defaultProps = {
    // 人民币语言： ch:¥ 
    lang: "ch",
    // 是否disable
    disable: false,
    // 金额文本颜色
    color: "",
    // disable下金额文本颜色
    disableColor: ""
};

Money.propTypes = {
    lang: PropTypes.string,
    disable: PropTypes.bool,
    color: PropTypes.string,
    disableColor: PropTypes.string
};

export default Money;