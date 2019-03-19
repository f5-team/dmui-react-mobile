/*
 * @Author: denghuaicheng 
 * @Date: 2019-03-18 16:13:52 
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-18 17:12:38
 * @summary: 图标：箭头
 */
import React from 'react';
import PropTypes from 'prop-types';

import "./index.css"

class Arrow extends React.Component {

    render() {
        return (
            <div>
                {this.props.show ? <div className="iconfont DMUI-jiantou1"></div> : '' }
            </div>
        );
    }

}

Arrow.defaultProps= {
    //是否显示
    show: true
};

Arrow.propTypes= {
    show: PropTypes.bool
};

export default Arrow;