/*
 * @Author: denghuaicheng 
 * @Date: 2019-03-18 16:13:52 
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-18 21:22:31
 * @summary: 数据暂示：list列表
 */

import React from 'react';
import PropTypes from 'prop-types';
import Arrow from "./../icons/arrow/index";
import Slot from './../slot/index'

import './../style/style.css'
import './index.css'

class List extends React.Component {

    getListStyle= ()=> {
        let style= 'dmui-list flex flex-pack-justify flex-align-center';
        if(this.props.disable){
            style+= ' disable'
        }
        return style;
    }

    render() {
        
        const { showArrow } = this.props;

        return (
            <div className={this.getListStyle()}>
                <Slot parentComponents={this}></Slot>
                <Arrow show={showArrow} />
            </div>
        );

    }
};
 

List.defaultProps= {
    //是否需要展示右箭头
    showArrow: true,
    //是否禁用
    disable: false,
};

List.propTypes= {
    showArrow: PropTypes.bool,
    disable: PropTypes.bool,
};
 
 
export default List;