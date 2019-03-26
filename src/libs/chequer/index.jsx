
/**
 * 宫格
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './index.css'
import '../style/style.css'
import ChequerItem from '../chequer-item'


class Chequer extends Component {
  componentDidMount = () => { }
  handler = () => () => { }
  getChequerBodyStyle = () => {
    let { wrapThreshold } = this.props
    wrapThreshold = Math.max(Math.round(wrapThreshold), 1)
    return {
      flexBasis: `${100 / wrapThreshold}%`
    }
  }
  getChequerBodyClassName = (index) => {
    let { wrapThreshold } = this.props
    let className = 'dmui-chequer__body dmui-ratio '
    if( (index + 1) % wrapThreshold === 1  ){
      className += 'is-start'
    }else if((index + 1) % wrapThreshold === 0){
      className += 'is-end'
    }else{
      className += 'is-normal'
    }
    return className
  }
  render() {
    console.log(this.props)
    let { children } = this.props;
    return (
      <div className='dmui-chequer'>
        {
          React.Children.map(children, (child, index) => {

            return (
              <div className={this.getChequerBodyClassName(index)} style={this.getChequerBodyStyle()}>
                <div className='dmui-ratio__outer'>
                  <div className='dmui-ratio__inner'>
                    {
                       child.type === ChequerItem  ? React.cloneElement(child, {}) : child
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
Chequer.defaultProps = {
  wrapThreshold: 3,      //换行阈值
};

Chequer.propTypes = {
  wrapThreshold: PropTypes.number,
};

export default Chequer