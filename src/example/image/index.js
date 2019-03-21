import React, { Component } from 'react';
import Image from "./../../libs/image/index"

class image extends Component {

    render() {
        return (
            <div>
                <h3>Image组件：</h3>
                默认
                <div>
                    <Image src="http://img1.imgtn.bdimg.com/it/u=2735633715,2749454924&fm=26&gp=0.jpg"></Image>
                </div>
                <br></br>
                <div>
                    <Image shape="round" src="http://img5.imgtn.bdimg.com/it/u=4060543606,3642835235&fm=26&gp=0.jpg"></Image>
                </div>
                <br></br>
                <div>
                    <Image shape="square" src="http://img5.imgtn.bdimg.com/it/u=3817824897,1768495848&fm=26&gp=0.jpg"></Image>
                </div>
                <br></br>
                <div>
                    <Image src="http://img4.imgtn.bdimg.com/it/u=158639786,3558202094&fm=26&gp=0.jpg"></Image>
                </div>
                <br></br>

                <div>
                    <Image src="http://img0.imgtn.bdimg.com/it/u=3340304544,2833750906&fm=26&gp=0.jpg"></Image>
                </div>
                <br></br>
                <div>
                    <Image src="http://img3.imgtn.bdimg.com/it/u=3398896218,2739939571&fm=26&gp=0.jpg"></Image>
                </div>
                <br></br>
                <div>
                    <Image src="http://img2.imgtn.bdimg.com/it/u=620919022,129761896&fm=26&gp=0.jpg"></Image>
                </div>
                <br></br>
                <div>
                    <Image src="http://img2.imgtn.bdimg.com/i"></Image>
                </div>
                <br></br>

                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <p>Image组件：可配属性：</p>
                <ul>
                    <li>width: （string）宽度， 默认：100px.</li>
                    <li>height: （string）高度， 默认：100px.</li>
                    <li>src: (string) 图片地址， 默认："".</li>
                    <li>lazyLoad: (boolern) 是否开启懒加载， 默认：true.</li>
                    <li>lazyLoadTime: (number) 延迟加载时间（单位ms）， 默认：200.</li>
                    <li>shape: (string) 图片形状（round/square）， 默认："".</li>
                    <li>radius: (string) 自定义圆角大小， 默认："".</li>
                </ul>

            </div>
        );
    }
}

export default image;