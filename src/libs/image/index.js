/*
 * @Author: denghuaicheng
 * @Date: 2019-03-18 16:13:52
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-21 19:57:00
 * @summary: 数据暂示，image
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./index.css"
import {throttle} from "./../utils/tool"

class Image extends Component {

    constructor(){
        super();
        this.state= {
            _src: null,
            _error: null
        }
    }

    componentDidMount(){
        //不启用懒加载，直接加载
        if(!this.props.lazyLoad){
            this.loadImage();
        }
        // 懒加载 之 IntersectionObserver
        else if(!IntersectionObserver){
            this.loadType= 1;
            this.useIntersectionObserver();
        }
        // 懒加载 之 兼容写法: 移动端
        else if("ontouchstart" in window){
            this.loadType= 2;
            this.useTouchObserver();
            this.listenerCall()();
        }
        // 懒加载 之 兼容写法: pc
        else{
            this.loadType= 3;
            this.useScrollObserver();
            this.listenerCall()();
        }
    }

    componentWillMount(){
        this.offListener();
    }

    //优先使用的实验性方法
    useIntersectionObserver(){
        this.io = new IntersectionObserver( 
            entries => {
                if(entries[0].isIntersecting) this.loadImage();
            }
        );
        this.io.observe(this.refs.imageBox);
    }

    //touch监听
    useTouchObserver(){
        document.body.addEventListener("touchmove", this.listenerCall())
        document.body.addEventListener("mousewheel", this.listenerCall())
    }

    //scroll或mousewheel监听
    useScrollObserver(){
        document.body.addEventListener("mousewheel", this.listenerCall())
        document.body.addEventListener("scroll", this.listenerCall())
    }

    //兼容写法的监听处理函数
    listenerCall = ()=> {
        return throttle(()=>{
            if(this.refs.imageBox && this.refs.imageBox.getBoundingClientRect().top <= window.innerHeight){
                if(this.state._src || this.state._error) return;
                this.loadImage();
            }
        }, 300)
    }

    //释放监听
    offListener(){
        switch(this.loadType){

            case 1 : 
            this.io.unobserve(this.refs.imageBox);
            break;

            case 2 : 
            document.body.removeEventListener("touchmove", this.listenerCall())
            document.body.removeEventListener("onscroll", this.listenerCall())
            break;

            case 3 : 
            document.body.removeEventListener("mousewheel", this.listenerCall())
            document.body.removeEventListener("onscroll", this.listenerCall())

        }
    }

    //资源加载
    loadImage(){

        this.timeout= setTimeout(()=>{

            let image= new window.Image();
            image.onload= ()=> {
                this.setState({
                    _src: this.props.src
                })
                this.offListener();
            };  
            image.onerror= ()=> {
                this.setState({
                    _error: true
                })
                this.offListener();
            };
            image.src= this.props.src;

            clearTimeout(this.timeout);
            this.timeout= null;

        }, this.props.lazyLoadTime);

    }

    getBoxClassname= ()=> {
        return `dmui-image ${this.props.shape}`;
    }

    getBoxStyle= ()=> {
        return {
            width: this.props.width,
            height: this.props.height,
            borderRadius: this.props.radius,
        }
    }

    render() {
        const {_src, _error} = this.state;
        return (
            <div ref="imageBox" className={this.getBoxClassname()} style={this.getBoxStyle()} >

                {
                    _src ? <img src={_src}></img> : ''
                }

                {
                    (_src=== null && _error=== null) ?
                        <div className="loading" ></div>
                    : ''
                }

                {
                    (_error) ?
                        <div className="error" >
                            <span className="iconfont DMUI-File-Error1 icon-error"></span>
                        </div>
                    : ''
                }

            </div>
        );
    }
}

Image.defaultProps = {
    // 宽度
    width: "",
    // 高度
    height: "",
    // 图片地址
    src: "",
    // 是否开启懒加载
    lazyLoad: true,
    // 延迟懒加载时间,单位ms
    lazyLoadTime: 100,
    // 图片形状 round square
    shape: "",
    // 自定义圆角大小
    radius: ""
};

Image.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    src: PropTypes.string,
    lazyLoad: PropTypes.bool,
    lazyLoadTime: PropTypes.number,
    shape: PropTypes.string,
    radius: PropTypes.string,
};

export default Image;