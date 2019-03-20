import React, { Component } from 'react';


import NoticeBar from "./../../libs/notice-bar/index"

class noticeBar extends Component {

    closeHandel(){
        alert("你点我了，兄弟")
    }

    render() {
        return (
            <div>
                <h3>notice组件：</h3>
    
                <br></br>
                <div>超出部分自动滚动</div>
                <br></br>
                <NoticeBar closeHandel={this.closeHandel}>
                    DMUI-react-mobile是基于create-react-app的移动端UI组件库
                </NoticeBar>

                <br></br>
                <div>超出部分自动滚动</div>
                <br></br>
                <NoticeBar speed={40} showcloseIcon={false}>
                    DMUI-react-mobile是基于create-react-app的移动端UI组件库, DMUI-react-mobile是基于create-react-app的移动端UI组件库
                </NoticeBar>
         
                <br></br>
                <div>超出部分自动滚动</div>
                <br></br>
                <NoticeBar showleftIcon={false}>
                    DMUI-react-mobile
                </NoticeBar>
          
                <br></br>
                <div>超出部分禁止滚动</div>
                <br></br>
                <NoticeBar scrollable={false}>
                    DMUI-react-mobile是基于create-react-app的移动端UI组件库
                </NoticeBar>
        
                <br></br>

                <div>&nbsp;</div>
                <p>Notice组件：可配属性：</p>
                <ul>
                    <li>speed: （number）滚动速率， 默认：15.</li>
                    <li>scrollable: （boolean）是否溢出自动滚动播放（true/false）， 默认：true.</li>
                    <li>
                    showleftIcon: (boolean) 是否显示左侧图标(true/false)， 默认：true.
                    </li>
                    <li>
                    showcloseIcon: (boolean) 是否显示右侧关闭图标(true/false)， 默认：true.
                    </li>
                    <li>color: (string) 文本颜色， 默认："".</li>
                    <li>background: (string) 组件背景色， 默认："".</li>
                </ul>
                <p>事件：</p>
                <ul>
                    <li>closeHandel: 关闭回调事件</li>
                </ul>

            </div>
        );
    }
}

export default noticeBar;