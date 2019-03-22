/*
 * @Author: denghuaicheng 
 * @Date: 2019-03-22 13:31:21 
 * @Last Modified by: denghuaicheng
 * @Last Modified time: 2019-03-22 15:20:25
 * 倒计时组件
 */


import React from 'react';
import PropTypes from 'prop-types';

class CountDown extends React.Component {

    constructor(){
        super();
        //记录倒计时递增毫秒数
        this.cunt= 0;
        this.state= {
            _str: ""
        }
    }

    componentDidMount(){
        this.init();
    }

    getOffset(){
        let {nowTime, targetTime}= this.props;
        nowTime+= this.cunt;
        if(nowTime>= targetTime ) return 0;
        return targetTime- nowTime;
    }

    getStr(){

        const {format}= this.props;

        let offset = this.getOffset(),
            str = "",
            day, hour, minute, second;

        if(offset== 0){
            str = format.replace(/['DD' | 'hh' | 'ss' | 'mm']/ig, '0');
        }
        else{

            day= parseInt(offset/(1000* 60* 60* 24));
            offset-= day*1000* 60* 60* 24;
            day= day < 10 ? '0'+ day : day;

            hour= parseInt(offset/(1000* 60* 60));
            offset-= hour*1000* 60* 60;
            hour= hour < 10 ? '0'+ hour : hour;

            minute= parseInt(offset/(1000* 60));
            offset-= minute*1000* 60;
            minute= minute < 10 ? '0'+ minute : minute;

            second= parseInt(offset/1000);
            second= second < 10 ? '0'+ second : second;

            //console.log(day, hour, minute, second)

            str = format.replace(/DD/g, day)
                        .replace(/hh/g, hour)
                        .replace(/ss/g, minute)
                        .replace(/mm/g, second);
                        
        }

        return {str, offset: this.getOffset() }

    }

    init= ()=> {

        const {str, offset} = this.getStr();

        //console.log(str, offset)

        this.setState({
            _str: str
        })

        if(offset > 0 && !this.interval){
            this.interval= setInterval(()=>{
                this.cunt+= 1000;
                this.init();
            }, 1000);
        }
        else if(offset <= 0 && this.interval){
            clearInterval(this.interval);
            this.interval= null;
            this.endHandel();
        }
        else if(offset <= 0){
            this.endHandel();
        }

    }

    endHandel= ()=> {
        if(this.props.endHandel instanceof Function){
            this.props.endHandel();
        }
    }

    render() {
        return (
            <span>{this.state._str}</span>
        );
    }

}

CountDown.defaultProps = {
    // 此时时间戳
    nowTime: Date.now(),
    // 结束时间戳
    targetTime: Date.now()+ 30* 1000,
    // 输出格式 
    //      天：DD 
    //      时：hh
    //      分：ss
    //      秒：mm
    format: "DD天hh时ss分mm秒",
};

CountDown.propTypes = {
    nowTime: PropTypes.number,
    targetTime: PropTypes.number,
    format: PropTypes.string,
};

export default CountDown;
