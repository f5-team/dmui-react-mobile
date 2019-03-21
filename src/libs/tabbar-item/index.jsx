import React, { Component }  from 'react'
import PropType from 'prop-types'
import './index.css'

class TabbarItem extends Component {
  componentDidMount = () =>{ }
  handler = () => () =>{
    this.props.handler('sdsds')
  }

  getItemClassName = () =>{
    let { name , active } = this.props
    let className = 'dmui-tabbar__item '; 
    if( name === active ) className += 'is-active '
    return className
  }

<<<<<<< HEAD
  render() {
    console.log(this.props)
=======
  render() { 
>>>>>>> huangjunquan
    let { children,icon ,label } = this.props
    return (
      <div onClick={ this.handler() } className = { this.getItemClassName() }>
        <i className={ `iconfont ${icon} dmui-tabbar__icon` }></i>
        <span className = 'dmui-tabbar__label'>{  label }</span>
      </div>
    )
  }
}

export default TabbarItem