import React, { Component } from 'react'

import Tabbar from '../../libs/tabbar'
import TabbarItem from '../../libs/tabbar-item'

class TabBarExample extends Component {
  componentDidMount = () => { }
  handler = () => () => { }

  changeTab = () => (key) => {
    console.log(key)
  }
  render() {
    return (


      <div>
        <div>
          <Tabbar
            selected={'1'}
            position={'bottom'}
            justify={''}
            onChange={this.changeTab()}

          >
            <TabbarItem name='1' label='搜索' icon='DMUI-zhuye'></TabbarItem>
            <TabbarItem name='2' label='主页' icon='DMUI-sousuo'></TabbarItem>
            <TabbarItem name='3' label='我的' icon='DMUI-xiazai'></TabbarItem>
            <TabbarItem name='3' label='设置' icon='DMUI-shezhi'></TabbarItem>
          </Tabbar>
        </div>

        <div style={{ 'marginTop': '40px' }}>
          <p>可配属项：</p>
          <ul>
            <li>selected: （string）默认选中</li>
            <li>position: （string）固定位置，可选['left','right','bottom','top']，默认 '' </li>
            <li>justify: （string）对齐方式，可选['start','end','center']，默认 '' </li>
          </ul>
          <p>事件：</p>
          <ul>
            <li>onChange: 返回值 name ,选中的item </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TabBarExample