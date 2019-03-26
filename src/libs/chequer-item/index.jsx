
/**
 * 子宫格
 */

import React, { Component }  from 'react'

import './index.css';

class ChequerItem extends Component {
  componentDidMount = () =>{ }
  handler = () => () =>{}
  render() {
    let { children } = this.props 
    console.log(children)
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default ChequerItem