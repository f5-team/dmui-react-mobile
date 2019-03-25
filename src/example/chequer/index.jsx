import React, { Component } from 'react'
import { Chequer } from '../../libs'


class Example extends Component {
  componentDidMount = () => { }
  handler = () => () => {
     
  }
  render() {
    return (
      <div>
        <div>

          <Chequer wrapThreshold = {3}></Chequer>
        </div>

        <div style={{ 'marginTop': '40px' }}>
          <p>chequer组件：可配属项：</p>
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

export default Example