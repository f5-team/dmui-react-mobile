import React, { Component } from 'react';

import Avatar from "./../../libs/avatar/index"

class avatar extends Component {

    constructor(){
        super();
        this.state= {
            src: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2796651835,2041654306&fm=27&gp=0.jpg"
        }
    }

    render() {

        const {src}= this.state;

        return (
            <div>
                <h3>avatar组件：</h3>
                
                <h4>圆角类型</h4>
                <div>
                    <Avatar type="round" src={src} ></Avatar>
                </div>
                <div>
                    <Avatar src={src} ></Avatar>
                </div>
                <div>
                    <Avatar type="square" src={src} ></Avatar>
                </div>

                <h4>尺寸大小</h4>
                <div>
                    <Avatar size="smaller" src={src} ></Avatar>
                </div>
                <div>
                    <Avatar size="small" src={src} ></Avatar>
                </div>
                <div>
                    <Avatar src={src} ></Avatar>
                </div>
                <div>
                    <Avatar size="large" src={src} ></Avatar>
                </div>
                
            </div>
            
        );
    }
}

export default avatar;