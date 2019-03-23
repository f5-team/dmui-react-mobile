import React, { Component } from 'react';
import Refish from "./../../libs/refresh/index"

class refresh extends Component {


    refreshHandel=()=>{
        console.log("refresh....")
        setTimeout(()=>{
            this.refs.test.stopRefresh();
        }, 3000)
    }

    pullingHandel= ()=>{
        console.log("pulling....")
    }

    render() {

        return (
            <div>
                <h3>Refish组件：</h3>
                <Refish ref="test" pullingHandel={this.pullingHandel} refreshHandel={ this.refreshHandel }>
                react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候
                <div style={{padding: '100px 0'}}></div>
                </Refish>

                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <p>Refish组件：可配属性：</p>
                <ul>
                    <li>distance: （number）下拉多少像素可以执行下拉刷新回调， 默认：50.</li>
                    <li>maxDistance: （number）下拉最大距离像素， 默认：100.</li>
                    <li>pullingIcon: （string）下拉刷新时icon样式名， 默认："".</li>
                    <li>pullingText: (string) 下拉刷新时文本, 默认："下拉刷新".</li>
                    <li>refreshingIcon: (string) 刷新时icon样式名， 默认："".</li>
                    <li>refreshingText: (string) 刷新时文本）， 默认："正在刷新".</li>
                    <li>disablePullingRotation: (boolern) 是否禁用图标旋转效果， 默认：true.</li>
                </ul>
                <p>事件：</p>
                <ul>
                    <li>pullingHandel: 下拉回调事件</li>
                    <li>refreshHandel: 刷新回调事件</li>
                </ul>
                <p>外部调用：</p>
                <ul>
                    <li>stopRefresh方法: 停止刷新</li>
                </ul>

            </div>
        );
    }
}

export default refresh;