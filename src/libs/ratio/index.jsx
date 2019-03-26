
/**
 * ratio组件 - 等比缩放盒子，即高度会根据宽度自适应
 */

import React from 'react'
import PropTypes from 'prop-types';

class Ratio extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        我是ratio
      </div>
    )
  }
}
Ratio.defaultProps = {
  ratio: '1:1',      //比例
};

Ratio.propTypes = {
  ratio: PropTypes.string,
};

export default Ratio