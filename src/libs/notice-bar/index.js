/*
 * @Author: denghuaicheng
 * @Date: 2019-03-18 16:13:52
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-20 17:32:27
 * @summary: 通告栏
 */

import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from "./../icons/close/index"
import CastIcon from "./../icons/cast/index"
import Slot from "./../slot/index";
import "./index.css"

class NoticeBar extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            removeComponents: false
        }
    }

    componentDidMount(){
        this.pWidth= parseInt(getComputedStyle(this.refs.bar).getPropertyValue('width'));
        this.cWidth= parseInt(getComputedStyle(this.refs.content).getPropertyValue('width'));
        
        this.setState({
            pWidth: this.pWidth,
            cWidth: this.cWidth
        })
        
    }

    getBarStyle= ()=>{
        const {color, background}= this.props;
        return {color, background}
    }

    getContentClassname= ()=> {
        const {showleftIcon, showcloseIcon, scrollable}= this.props;
        return `dmui-notice-content ${scrollable ? 'run' : 'no-run'} ${showleftIcon ? 'has-icon-left' : ''} ${showcloseIcon ? 'has-icon-right' : ''}`
    }

    getContentStyle= ()=> {
        
        const {speed, scrollable}= this.props;
        const {pWidth, cWidth}= this.state;

        if(!this.pWidth || pWidth> cWidth || !scrollable) return {};

        return {
            paddingLeft: `${pWidth}px`,
            animationDuration: cWidth/speed+ 's'
        }

    }

    close= ()=> {
        return ()=>{
            if(this.props.closeHandel instanceof Function){
                this.props.closeHandel();
            }
            this.setState({
                removeComponents: true
            })
        }
    }

    render() {

        if(this.state.removeComponents){
            return (<div></div>);
        }

        const {showleftIcon, showcloseIcon }= this.props;
        return (
            <div ref="bar" className="dmui-notice-bar" style={this.getBarStyle()}>
            
                {
                    showleftIcon ? <div className="left-icon"><CastIcon></CastIcon></div> : ''
                }

                <div className={this.getContentClassname()} ref="content" style={this.getContentStyle()}>
                    <Slot parentComponents={this} />
                </div>

                {
                    showcloseIcon ? <div onClick={this.close()} className="close-icon"><CloseIcon></CloseIcon></div> : ''
                }
                
            </div>
        );
        
    }
}

NoticeBar.defaultProps = {
    // 滚动速率
    speed: 15,
    // 是否溢出自动滚动播放
    scrollable: true,
    // 是否显示左侧图标
    showleftIcon: true,
    // 是否显示右侧图标
    showcloseIcon: true,
    // 文本颜色
    color: "",
    // 滚动条背景
    background: "",
};

NoticeBar.propTypes = {
    speed: PropTypes.number,
    scrollable: PropTypes.bool,
    showleftIcon: PropTypes.bool,
    showcloseIcon: PropTypes.bool,
    color: PropTypes.string,
    background: PropTypes.string
};


export default NoticeBar;