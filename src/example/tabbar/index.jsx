import React, { Component } from 'react'

import Tabbar from '../../libs/tabbar'
import TabbarItem from '../../libs/tabbar-item'
import { Tag } from '../../libs'


import './index.css'

class TabBarExample extends Component {
  componentDidMount = () => { }

  handler = () => (name) => {
    alert('你的选择是：' + name)
  }

  changeTab = () => (name, label) => {
    console.log(key)
  }

  state = {
    position: 'bottom',
    justify: ''
  }
  show = (position, justify) => () => {
    this.setState({
      position: position,
      justify: justify
    })
  }



  render() {
    return (


      <div>
        <div>
          <Tabbar
            selected={'1'}
            position={this.state.position}
            justify={this.state.justify}
            onChange={this.changeTab()}

          >
            <TabbarItem name='1' label='搜索' onHandler={this.handler()} >
              <Tag label='999'>
                <i className={`iconfont DMUI-sousuo dmui-tabbar__icon`}></i>
              </Tag>
              <span className='dmui-tabbar__label'>搜索</span>
            </TabbarItem>
            <TabbarItem name='2' label='主页' >

              <i className={`iconfont DMUI-zhuye dmui-tabbar__icon`}></i>

              <span className='dmui-tabbar__label'>主页</span>
            </TabbarItem>
            <TabbarItem name='3' label='我的' >

              <i className={`iconfont DMUI-xiazai dmui-tabbar__icon`}></i>

              <span className='dmui-tabbar__label'>我的</span>
            </TabbarItem>
            <TabbarItem name='4' label='设置' >

              <i className={`iconfont DMUI-shezhi dmui-tabbar__icon`}></i>

              <span className='dmui-tabbar__label'>设置</span>
            </TabbarItem>
          </Tabbar>
        </div>


        <div>
          <button onClick={this.show('', '')}>normal</button>

          <button onClick={this.show('top', '')}>top</button>
          <button onClick={this.show('top', 'start')}>top start</button>
          <button onClick={this.show('top', 'center')}>top center</button>
          <button onClick={this.show('top', 'end')}>top end</button>

          <button onClick={this.show('bottom', '')}>bottom</button>
          <button onClick={this.show('bottom', 'start')}>bottom start</button>
          <button onClick={this.show('bottom', 'center')}>bottom center</button>
          <button onClick={this.show('bottom', 'end')}>bottom end</button>

          <button onClick={this.show('right', '')}>right</button>
          <button onClick={this.show('right', 'start')}>right start</button>
          <button onClick={this.show('right', 'center')}>right center</button>
          <button onClick={this.show('right', 'end')}>right end</button>

          <button onClick={this.show('left', '')}>left</button>
          <button onClick={this.show('left', 'start')}>left start</button>
          <button onClick={this.show('left', 'center')}>left center</button>
          <button onClick={this.show('left', 'end')}>left end</button>
        </div>

        <div style={{ 'marginTop': '40px' }}>
          <p>Tabbar:可配属项：</p>
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
        <div style={{ 'marginTop': '40px' }}>
          <p>TabbarItem:可配属项：</p>
          <ul>
            <li>name: （string）标志属性，对应tabbar的select属性</li>
            <li>label: （string）显示属性，当且仅当子元素不存在的时候显示该值</li>
          </ul>
          <p>事件：</p>
          <ul>
            <li>onHandler: 返回值 name,label </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TabBarExample