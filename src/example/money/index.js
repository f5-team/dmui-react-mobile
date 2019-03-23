import React, { Component } from 'react';
import Money from "./../../libs/money/index";

class money extends Component {

    render() {
        return (
            <div>
                <h3>money组件：</h3>
                默认
                <div>
                    <Money>33.333</Money>
                </div>

                <br></br>
                disable
                <div>
                    <Money disable >33</Money>
                </div>

                <br></br>
                自定义文本颜色
                <div>
                    <Money color="red" >33.5</Money>
                </div>

                <br></br>
                disable，自定义disableColor
                <div>
                    <Money disable disableColor="#aaa">33.1</Money>
                </div>

                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <p>Money组件：可配属性：</p>
                <ul>
                    <li>lang: （string）金额类型（zh）， 默认：zh.</li>
                    <li>color: （string）金额文本颜色（任何颜色值）， 默认：orange.</li>
                    <li>disable: （boolean）是否禁用，中间添加删除线（true/false）， 默认：false.</li>
                    <li>disableColor: （string）disable下的文本颜色（任何颜色值）， 默认：#cdcdcd.</li>
                
                </ul>

            </div>
        );
    }
}

export default money;