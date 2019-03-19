import React, { Component } from 'react';

import ListGroup from "./../../libs/list-group/index"
import List from "./../../libs/list/index"

class listGroup extends Component {

    render() {
        return (
            <div>
                <h3>ListGroup组件：</h3>

                <ListGroup>
                    <List>习近平给意大利罗马国立住读学校师生回信</List>
                    <List>《习近平在正定》出版</List>
                    <List>两会故事 坚定走好生态优先绿色发展新路</List>
                    <List>激发改革创新的澎湃动力  要死就死在这片茶山上</List>
                </ListGroup>

                <ListGroup>
                    <List>习近平给意大利罗马国立住读学校师生回信</List>
                    <List>《习近平在正定》出版</List>
                    <List>两会故事 坚定走好生态优先绿色发展新路</List>
                    <List>激发改革创新的澎湃动力  要死就死在这片茶山上</List>
                </ListGroup>

            </div>
        );
    }
}

export default listGroup;