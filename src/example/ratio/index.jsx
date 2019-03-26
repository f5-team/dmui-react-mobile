import React, { Component } from 'react'
import { Ratio } from '../../libs'


class Example extends Component {
  componentDidMount = () => { }
  handler = () => () => {
     
  }
  render() {
    return (
      <div>
        <div>
           <Ratio ratio='1:1'></Ratio>
        </div>

        <div style={{ 'marginTop': '40px' }}>
          <p>ratio组件：可配属项：</p>
          <ul>
            <li>ratio: （string）比例，可选 '1:1','100%'的形式 </li>
          </ul> 
        </div>
      </div>
    )
  }
}

export default Example