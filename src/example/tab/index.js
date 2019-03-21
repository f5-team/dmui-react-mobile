import React from 'react';

import Tab from '../../libs/tab/index'
import TabItem from '../../libs/tab-item/index'

export default class Tabs extends React.Component{
  

  state = {
    active:['电视','电影']
  }

  changeTab  = (index) =>(name)=>{ 
    let active = [...this.state.active]
    active[index] = name;
    this.setState({
      active:active
    })
  } 
  
  render(){
    return (
      <div>
        <h3>文本宽度的下滑线</h3>
        <Tab active={ this.state.active[0] } onChange = {  this.changeTab(0) } lineWidth={ false }>
          <TabItem name='音乐'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='电视'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='军事栏目'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='电影'>
            <div>
              TabItem2
            </div>
          </TabItem>
        </Tab>
        <h3>tabItem宽度的下滑线</h3>
        <Tab active={ this.state.active[1] } onChange = {  this.changeTab(1) } lineWidth={ true } justify='center'>
          <TabItem name='音乐'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='电视'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='军事栏目'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='电影'>
            <div>
              TabItem2
            </div>
          </TabItem> 

        </Tab>
        
        <h3>依次从左边排放，此时文本截断效果失效</h3>
        <Tab active={ this.state.active[2] } onChange = {  this.changeTab(2) } lineWidth={ true } justify='start'>
          <TabItem name='音乐'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='电视'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='军事栏目'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='电影'>
            <div>
              TabItem2
            </div>
          </TabItem>
          <TabItem name='音乐2'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='电视2'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='军事栏目2'>
            <div>
              TabItem1
            </div>
          </TabItem>
          <TabItem name='电影2'>
            <div>
              TabItem2
            </div>
          </TabItem>
          
        </Tab>
      </div>
    )
  }
}


 