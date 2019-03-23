import React, { Component }  from 'react'

import PropTypes from 'prop-types';
import './index.css'

class Tag extends Component {
  componentDidMount = () =>{ }
  handler = () => () =>{}
  render() {
    return (
      <div className='dmui-tag' onClick = { () =>this.props.click && this.props.click(this.props.label)}>{ this.props.label}</div>
    )
  }
}
Tag.defaultProps = {  
  label: '',            // 提示消息
  click:null
};

Tag.propTypes = { 
  label:PropTypes.string ,
  click:PropTypes.func
};
export default Tag