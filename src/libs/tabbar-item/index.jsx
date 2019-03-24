import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import './index.css'

class TabbarItem extends Component {
  componentDidMount = () =>{ }
  handler = (name,label) => () =>{
    this.props.handler && this.props.handler(name,label)
    this.props.onHandler && this.props.onHandler(name,label)
  }

  getItemClassName = () =>{
    let { name , active } = this.props
    let className = 'dmui-tabbar__item '; 
    if( name === active ) className += 'is-active '
    return className
  }
 
  render() {  
 
    let { children,name,label } = this.props
    return (
      <div onClick={ this.handler(name,label) } className = { this.getItemClassName() }>
         {
          (()=>{
            if(children){
              return children
            }else{
              return label
            }
          })()
         }
      </div>
    )
  }
}

TabbarItem.defaultProps = {  
  name: '',              // 标志属性
  label:'',              // 显示属性，当且仅当子元素不存在的时候显示该值
  onHanlder:null,        // 事件
};

TabbarItem.propTypes = { 
  name:PropTypes.string,
  label:PropTypes.string,
  onChange:PropTypes.func, 
};
export default TabbarItem