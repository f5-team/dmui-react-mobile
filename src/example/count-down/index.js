import React, { Component } from 'react';
import CountDown from "./../../libs/count-down/index"

class countdown extends Component {

    end(){
        alert("倒计时结束")
    }

    render() {
        return (
            <div>

                <h3>CountDown组件：</h3>

                默认<br></br><br></br>
                -- <CountDown></CountDown>
                <br></br><br></br>
                自定义时间格式、结束时间<br></br><br></br>
                -- <CountDown format="hh:ss:mm" targetTime={new Date().getTime()+ 40* 1000}></CountDown>
                <br></br><br></br>
                自定义时间格式、结束时间<br></br><br></br>
                -- <CountDown format="hh-ss-mm" targetTime={new Date().getTime()+ 50* 1000}></CountDown>
                <br></br><br></br>
                自定义时间格式， 倒计时结束handel<br></br><br></br>
                -- <CountDown format="ss分mm秒" endHandel={this.end}></CountDown>
                <br></br><br></br>
                自定义此刻时间、结束时间<br></br><br></br>
                -- <CountDown nowTime={new Date().getTime()} targetTime={new Date().getTime()+ 60* 1000} ></CountDown>
                <br></br><br></br>
                自定义此刻时间 = 结束时间<br></br><br></br>
                -- <CountDown format="hh:ss:mm" nowTime={new Date().getTime()} targetTime={new Date().getTime()} ></CountDown>

                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <p>CountDown组件：可配属性：</p>
                <ul>
                    <li>nowTime: （number）此时时间戳， 默认：Date.now().</li>
                    <li>targetTime: （number）结束时间戳， 默认：Date.now()+ 30* 1000.</li>
                    <li>format: （string）输出时间格式， 默认："DD天hh时ss分mm秒".</li>
                </ul>
                <p>CountDown组件：事件：</p>
                <ul>
                    <li>endHandel: 倒计时结束回调.</li>
                </ul>

            </div> 
        );
    }
}

export default countdown;