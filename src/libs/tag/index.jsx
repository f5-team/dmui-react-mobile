import React, { Component }  from 'react'

import PropTypes from 'prop-types';
import './index.css'

class Tag extends Component {
  componentDidMount = () =>{ }
  handler = () => () =>{}
  render() {
    let { children,label } = this.props
    return (

        <div className = 'dmui-tag'>
          { children }
          <i className='dmui-tag__label' onClick = { () =>this.props.onHandler && this.props.onHandler(this.props.label)}>{label}</i>
        </div>
    )
  }
}
// <div className='dmui-tag' onClick = { () =>this.props.click && this.props.click(this.props.label)}>{ this.props.label}</div>
Tag.defaultProps = {  
  label: '',            // 提示消息
  onHandler:null
};

Tag.propTypes = { 
  label:PropTypes.string ,
  onHandler:PropTypes.func
};
export default Tag