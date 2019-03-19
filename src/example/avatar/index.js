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

                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <p>Avatar组件：可配属项：</p>
                <ul>
                    <li>src: （string）图片地址， 默认："".</li>
                    <li>size: (string) 大小设置(large/normal/small/smaller)， 默认：normal.</li>
                    <li>type: (string) 圆角类型(round/square/"")， 默认："".</li>
                    <li>width: (number) 自定义图片宽度， 默认：0，表示不自定义设置.</li>
                    <li>height: (number) 自定义图片高度， 默认：0，表示不自定义设置.</li>
                </ul>
                
            </div>
            
        );
    }
}

export default avatar;