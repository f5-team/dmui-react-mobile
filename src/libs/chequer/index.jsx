
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
  render() {
    console.log(this.props)
    return (
      <div className='dmui-chequer border-mobile--tp border-mobile--lt'>
        {
          [0,1,2,3,4,5,6,7,8].map((item,index)=>{
            return <div className='dmui-chequer__body dmui-ratio border-mobile--bm border-mobile--rt' style={this.getChequerBodyStyle()}>
            <div className='dmui-ratio__outer'>
              <div className='dmui-ratio__inner'>
                <div >
                  胜多负少的脚手架肯定就是四大皆空的
                </div>
              </div>
            </div> 
          </div>
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