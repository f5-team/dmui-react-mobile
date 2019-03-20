

import React from 'react';

import './index.css'

export default class Tabbar extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  state = {
    value:1
  }
  componentDidMount = ()=>{

  }
  // 切换tab
  changeTab = (index) => (e) =>{
    setTimeout(()=>{
      this.setState({
        value:index
      }) 
    },0)
    
  }

  // 获得class样式
  getStyle = (index) =>{ 
    let className = 'dmui-tabbar-item ';
    
    if( this.state.value === index ) className += 'dmui-tabbar-item--active'

    return className
  }
  render(){
    let { options } = this.props
    return (
      <div className='dmui-tabbar'>
        {
          options.map((item,index)=>{
            return (
              <div key={index} className= { this.getStyle(index) } onClick={this.changeTab(index)}> 
                <div className='dmui-tabbar-title'> { item['name']}</div>
              </div>
            )
          })
        }
        
      </div>
    )
  }
}