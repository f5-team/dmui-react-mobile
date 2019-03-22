/*
 * @Author: denghuaicheng
 * @Date: 2019-03-18 16:13:52
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-22 18:21:01
 * @summary: 下拉刷新组件
 */

import React from 'react';
import PropTypes from 'prop-types';
import Slot from '../slot/index';
import {throttle} from "./../utils/tool"
import "./index.css"

class Refresh extends React.Component {

    constructor(){
        super();
        this.state= {
            offsetY: 0,
            tranTime: 300,
            status: 1
        }
    }

    componentDidMount(){
        this.addListen();
    }

    componentWillUnmount(){
        this.offListener();
    }

    addListen(){
        this.refs.refresh.addEventListener("touchstart", this.touchStartFun.bind(this))
        this.refs.refresh.addEventListener("touchmove", this.touchMoveFun.bind(this))
        this.refs.refresh.addEventListener("touchend", this.touchEndFun.bind(this))
    }
    offListener(){
        this.refs.refresh.removeEventListener("touchstart", this.touchStartFun.bind(this))
        this.refs.refresh.removeEventListener("touchmove", this.touchMoveFun.bind(this))
        this.refs.refresh.removeEventListener("touchend", this.touchEndFun.bind(this))
    }
    touchStartFun(e){
        return (throttle(()=>{
            this.startY= e.targetTouches[0].pageY; 
        }, 300))();
    }
    touchMoveFun(e){
        return (throttle(()=>{

            //console.log(e)

            this.moveY= e.targetTouches[0].pageY; 

            if(this.moveY<= this.startY) return;

            this.setState({
                offsetY: (this.moveY- this.startY)* .8,
                tranTime: 50
            }, ()=>{
                if(this.state.offsetY > this.props.distance){
                    this.setState({
                        status: 2
                    })
                }
            })

            this.pullingHandel()

        }, 300))();
    }
    touchEndFun(e){
        return (throttle(()=>{

            if(this.state.offsetY>= this.props.distance){
                this.setState({
                    offsetY: this.props.distance,
                    tranTime: 120,
                    status: 3,
                })
                this.refreshHandel()

            }
            else{
                this.stopRefresh()
            }
            
        }, 300))();
    }

    stopRefresh(){
        this.setState({
            offsetY: 0,
            tranTime: 200,
            status: 1
        })
    }

    refreshHandel(){
        if(this.props.refreshHandel instanceof Function){
            this.props.refreshHandel();
        }
    }
    pullingHandel(){
        if(this.props.pullingHandel instanceof Function){
            this.props.pullingHandel();
        }
    }

    getRefreshStyle= ()=> {
        const {maxDistance}= this.props;
        const {offsetY, tranTime}= this.state;
        return {
            transform: 'translate3d(0,'+ (offsetY> maxDistance ? maxDistance : offsetY) +'px, 0)',
            transitionDuration: tranTime+ 'ms',
            //paddingBottom: offsetY+ 'px',
        }
    }
    getStatusStyle= ()=> {
        let opacity= this.state.offsetY / this.props.distance;
        if(opacity > 1){
            opacity= 1
        }
        return {
            opacity,
            transitionDuration: opacity ? '0ms' : this.state.tranTime+ 'ms',
        }
    }

    render() {
        const {pullingText, refreshingText} = this.props;
        const {status} = this.state;
        return (
            <div ref="refresh" className="dmui-refresh" style={this.getRefreshStyle()}>
                <div className="refresh-status flex flex-align-center flex-pack-center" style={this.getStatusStyle()}>
                    { status=== 3 ? 
                        <span className="iconfont DMUI-jiantouarrow494"></span> : 
                        <span className="iconfont DMUI-iconfontjiantou"></span> 
                    }
                    { status=== 3 ? refreshingText : pullingText}
                </div>
                <Slot parentComponents={this} />
            </div>
        );
    }


}

Refresh.defaultProps = {
    //下拉多少像素可以执行下拉刷新回调
    distance: 50,
    //最大下拉距离
    maxDistance: 100,
    //下拉刷新时icon样式名
    pullingIcon: "",
    //下拉刷新时文本
    pullingText: "下拉刷新",
    //刷新时icon样式名
    refreshingIcon: "",
    //刷新时文本
    refreshingText: "正在刷新",
    //是否禁用图标旋转效果
    disablePullingRotation: true
};

Refresh.propTypes = {
    distance: PropTypes.number,
    pullingIcon:  PropTypes.string,
    pullingText:  PropTypes.string,
    refreshingIcon:  PropTypes.string,
    refreshingText:  PropTypes.string,
    disablePullingRotation:  PropTypes.bool
};

export default Refresh;