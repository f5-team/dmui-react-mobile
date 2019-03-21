import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import './index.css'
import TabBarItem from '../tabbar-item';

class Tabbar extends Component {
  componentDidMount = () =>{ }
  handler = () => () =>{}

  getTabbarClassName = ()=>{
    let { position } = this.props;
    let className = 'dmui-tabbar ';
    
    className += `is-${position}`;
    
    return className
  }

  onChange = (value) =>{
    console.log(value)
  }

  render() {
    let { children,selected } = this.props
    return (
      <div className={ this.getTabbarClassName() }>
        {
          React.Children.map(children,(child,index)=>{
            if(child.type === TabBarItem){
              return React.cloneElement(child,{
                active:selected,
                handler:this.onChange
              })
            }else{
              return (
                <div>
                  { child }
                </div>
              )
            }
            
          })
        }
      
      </div>
    )
  }
}

Tabbar.defaultProps = {  
  position: 'top',      //固定在窗口的位置，默认normal，不固定，可选 [ 'top','bottom','left','right','normal']
  selected:'',       //默认激活选项
  onChange:null,       // 事件 - 切换
};

Tabbar.propTypes = { 
  position:PropTypes.string,
  selected:PropTypes.string,
  onChange:PropTypes.func
};

export default Tabbar