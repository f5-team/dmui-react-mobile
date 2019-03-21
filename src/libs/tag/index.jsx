import React, { Component }  from 'react'

import PropTypes from 'prop-types';
import './index.css'

class Tag extends Component {
  componentDidMount = () =>{ }
  handler = () => () =>{}
  render() {
    return (
      <div className='dmui-tag'>{ this.props.label}</div>
    )
  }
}
Tag.defaultProps = {  
  label: '',            // 提示消息
};

Tag.propTypes = { 
  label:PropTypes.string 
};
export default Tag