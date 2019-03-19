/*
 * @Author: denghuaicheng
 * @Date: 2019-03-19 13:58:22
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-19 18:01:05
 * summary: row: 布局组件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slot from '../slot/index';

class Row extends Component {
  getRowClassname = () => {
    const { type, pack, align } = this.props;
    if (type === 'flex') {
      return `dmui-row ${type}${pack ? ` flex-pack-${pack}` : ''}${
        align ? ` flex-align-${align}` : ''
      }`;
    }
    return `dmui-row ${type}`;
  };

  getStyle = () => {
    const { gutter } = this.props;
    if (gutter > 0) {
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`,
      };
    }
    return {};
  };

  render() {
    return (
      <div className={this.getRowClassname()} style={this.getStyle()}>
        <Slot parentComponents={this} />
      </div>
    );
  }
}

Row.defaultProps = {
  // 布局方式 flex
  type: 'flex',
  // 是否垂直布局flex
  // flexV: false,
  // flex布局下水平对其方式: start center end around between
  pack: '',
  // flex布局下垂直对其方式: start center end
  align: '',
  // 子元素相邻间隔间距，单位px
  gutter: 8,
};

Row.propTypes = {
  type: PropTypes.string,
  // flexV: PropTypes.bool,
  pack: PropTypes.string,
  align: PropTypes.string,
  gutter: PropTypes.number,
};

export default Row;
