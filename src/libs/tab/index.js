 
import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import TabItem from '../tab-item';

export default class Tab extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
  }
  state = { 
    lineStyle:{}
  }

  changeTab = (name,index) =>{ 
    setTimeout(()=>{
       this.setLinePos(index);
       this.props.onChange(name)
    },100) 

  }

  // 设置下滑线的位置
  setLinePos = (index) =>{

    let currentItemWidth = this.wrapChildNodes[index]['itemWidth'];

    let currentLabelWidth = this.wrapChildNodes[index]['labelWidth'];
    
    let translateXArr =  this.wrapChildNodes.filter((item,i)=>{ return i < index  }) ;

    let translateX = 0 ;

    //下划线的宽度判断

    if(this.props.lineWidth){ 
      translateXArr.forEach((item,i)=>{ translateX += item['itemWidth'] }) 

      this.setState({
        lineStyle:{
          'transform':'translateX('+translateX+'px)',
          'width':currentItemWidth + 'px'
        }
      })
    }else{

      translateX = ( currentItemWidth - currentLabelWidth ) / 2 ;

      translateXArr.forEach((item,i)=>{ translateX += item['itemWidth'] }) 

      this.setState({
        lineStyle:{
          'transform':'translateX('+translateX+'px)',
          'width':currentLabelWidth +   'px'
        }
      })
    }
    


  }


  componentDidMount = ()=>{
    this.wrapWidth = this.wrap.offsetWidth ;
    this.wrapChildNodes = [] 
    let childs = Array.from(this.wrap.childNodes);
    for(let n = 0 ; n < childs.length;n++){
       
      let isItem = Array.from(childs[n].classList).some((item)=>{ return item === 'dmui-tab__item'})
      
      if(isItem){
        let itemWidth = childs[n].offsetWidth; // tabItem的可见宽度
        let labelWidth = childs[n].childNodes[0].offsetWidth 
        this.wrapChildNodes.push( {itemWidth, labelWidth})
      }
    } 
  } 
  render(){  
    let { children } = this.props;
    this.tabs = []; // 保存起来后续需要使用 
    return (
       <div className='dmui-tab'>
          <div className='dmui-tab__wrap' ref={ ( wrap) => { this.wrap = wrap }}>
          { 
            React.Children.map(children,(child,index)=>{
              if(child.type === TabItem ){

                this.tabs.push(child.props.name)

                return React.cloneElement(child,{
                // 把父组件的props.name赋值给每个子组件（父组件传值给子组件）
                  active: this.props.active,
                  index:index,
                // 父组件的方法挂载到props.onClick上，以便子组件内部通过props调用
                  onChange: this.changeTab
                })
              } 
            })
           }
           <div className='dmui-tab__line' style={ this.state.lineStyle }></div>
          </div>
          <div className='dmui-tab__content'>
           
          </div>
          
       </div>
    )
  }
}

Tab.defaultProps = { 
  onChange:null, 
  active: '', //选中的tab
  lineWidth:false, // 下划线的宽度，文本的宽度 - false ，tabItem的宽度- true,默认false
};

Tab.propTypes = { 
  onChange:PropTypes.func,
  active: PropTypes.string,  
  lineWidth:PropTypes.bool
};