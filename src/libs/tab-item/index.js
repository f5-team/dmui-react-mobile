 
import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

export default class TabItem extends React.Component{
  constructor(props){
    super(props)
    //console.log(props)
  } 
  componentDidMount = ()=>{
    let {  name,onChange,index,active } = this.props
    if(name === active) onChange(name,index)
    
  } 

  getLabelClassName = () =>{
    let { active,name } = this.props
    let className = 'dmui-tab__item--label ';
    if(active === name)  className += 'is-active ';
    return className
  }
    
  getItemClassName = () =>{
    let {justify,ellipsis } = this.props
    let className = 'dmui-tab__item ';
    if(ellipsis && justify === 'center'  ) className += 'is-ellipsis ';
    if(justify === 'start')  className += 'is-start ';
    if(justify === 'end')  className += 'is-end ';
    return className
  }
  render(){  
    let {  name,onChange,index } = this.props
    return ( 
       <div className={ this.getItemClassName() } onClick={ ()=>{ onChange(name,index)  } } >
        <span className={ this.getLabelClassName()} >
          { name }
        </span> 
       </div>
    )
  }
}

TabItem.defaultProps = { 
  name:'',          // tab标签名
  ellipsis:true,    // 是否需要截断显示
};

TabItem.propTypes = {  
  name: PropTypes.string,  
  ellipsis:PropTypes.bool
};