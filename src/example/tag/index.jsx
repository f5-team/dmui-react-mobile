import React, { Component } from 'react'
import { Tag } from '../../libs'


class TagExample extends Component {
  componentDidMount = () => { }
  handler = () => (label) => {
    alert('tag的值：'+label)
  }
  render() {
    return (
      <div>
        <div>

          <Tag label='999' onHandler={this.handler()}>
            <span>黄军泉</span>
          </Tag>

        </div>

        <div style={{ 'marginTop': '40px' }}>
          <p>Tag组件：可配属项：</p>
          <ul>
            <li>label: （string）提示信息</li>
          </ul>
          <p>Tag组件：事件：</p>
          <ul>
            <li>click: 返回值 label </li>
          </ul>
           
        </div>
      </div>
    )
  }
}

export default TagExample