/*
 * @Author: denghuaicheng
 * @Date: 2019-03-19 13:58:22
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-19 22:41:20
 * summary: avatar: 头像组件
 */

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Avatar extends React.Component {
  getClassName = () => {
    return `dmui-avatar ${this.props.size} ${this.props.type}`;
  };

  getStyle = () => {
    if (this.props.width && this.props.height) {
      return {
        width: `${this.props.width}rem`,
        height: `${this.props.height}rem`,
      };
    }
    return {};
  };

  render() {
    const { src } = this.props;

    return <img src={src} className={this.getClassName()} style={this.getStyle()} />;
  }
}

Avatar.defaultProps = {
  // size: large normal small smaller
  size: 'normal',
  // type: round square
  type: '',
  // 0表示不自定义设置宽度
  width: 0,
  // 0表示不自定义设置高度
  height: 0,
  src: '',
};

Avatar.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
};

export default Avatar;
