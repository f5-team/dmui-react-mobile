import React, { Component }  from 'react'

import Tabbar from '../../libs/tabbar'
import TabbarItem from '../../libs/tabbar-item'

class TabBarExample extends Component {
  componentDidMount = () =>{ }
  handler = () => () =>{}
  
  changeTab  = () =>(key)=>{ 
     console.log(key)
  } 
  render() {
    return (
      <div>
        <Tabbar selected = {'1'} position={'bottom'} onChange = {  this.changeTab() }>
          <TabbarItem name='1' label = '搜索' icon='DMUI-zhuye'></TabbarItem>
          <TabbarItem name='2' label = '主页' icon='DMUI-sousuo'></TabbarItem>
          <TabbarItem name='3' label = '我的' icon='DMUI-xiazai'></TabbarItem> 
          <TabbarItem name='3' label = '设置' icon='DMUI-shezhi'></TabbarItem> 
        </Tabbar>
      </div>
    )
  }
}

export default TabBarExample