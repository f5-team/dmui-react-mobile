import React, { Component } from 'react'
import Tag from '../../libs/tag'
import './index.css'

class TagExample extends Component {
  componentDidMount = () => { }
  handler = () => () => { }
  render() {
    return (
      <div>
        <div className='demo-tag'>
          <span>黄军泉</span>
          <Tag label='999'></Tag>

        </div>

        <div  style={{ 'margin-top':'40px'}}>
          <p>Tag组件：可配属项：</p>
          <ul>
            <li>label: （string）提示信息</li> 
          </ul>
          <p>Tag组件：注意事项</p>
          <ul>
            <li>确保父元素有position属性</li> 
          </ul>
        </div>
      </div>
    )
  }
}

export default TagExample