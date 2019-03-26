import React, { Component } from 'react'
import { Chequer,ChequerItem } from '../../libs'


class Example extends Component {
  componentDidMount = () => { }
  handler = () => () => {
     
  }
  render() {
    return (
      <div>
        <div>
          <Chequer wrapThreshold = {3}>
            <ChequerItem>
              <div>收到收到收到收到收到收到收到收到收到收到收到收到收到收到收到</div>
            </ChequerItem>
            <ChequerItem>
              <div>收到收到收到收到收到收到收到收到收到收到收到收到收到收到收到 </div>
            </ChequerItem>

            <div>收到收到收到收到收到收到收到收到收到收到收到收到收到收到收到 </div>
            <ChequerItem>
              <div>大声地说</div>
            </ChequerItem>
            <ChequerItem>
              <div>收到收收到收到收到收到收到收到收到收到收到收到收到收到收到收到收到到收到 </div>
            </ChequerItem>

            <div>dfdsfdfdfdfdf </div>

          </Chequer>
        </div>

        <div style={{ 'marginTop': '40px' }}>
          <p>chequer组件：可配属项：</p>
          <ul>
            <li>wrapThreshold: （number）换行阈值</li>
          </ul>
           
           
        </div>
      </div>
    )
  }
}

export default Example