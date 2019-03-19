import React from 'react';
import List from "./../../libs/list/index"

class componentName extends React.Component {

    render() {
        return (
            <div className="demo">
                <h3>List组件：</h3>

                <h4>默认：</h4>
                <List>习近平给意大利罗马国立住读学校师生回信</List>
                <List>《习近平在正定》出版</List>
                <List>两会故事 坚定走好生态优先绿色发展新路</List>
                <List>激发改革创新的澎湃动力  要死就死在这片茶山上</List>

                <h4>不带箭头：</h4>
                <List showArrow={false}>习近平给意大利罗马国立住读学校师生回信</List>
                <List showArrow={false}>《习近平在正定》出版</List>
                <List showArrow={false}>两会故事 坚定走好生态优先绿色发展新路</List>
                <List showArrow={false}>激发改革创新的澎湃动力  要死就死在这片茶山上</List>

                <h4>disable:</h4>
                <List disable>两会故事 坚定走好生态优先绿色发展新路</List>
                <List disable>激发改革创新的澎湃动力  要死就死在这片茶山上</List>

            </div>
        );
    }
}

export default componentName;