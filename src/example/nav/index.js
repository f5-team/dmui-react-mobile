import React from 'react';


import List from "./../../libs/list/index"

class Nav extends React.Component {

    render() {
        return (
            <div>
                <h3>数据展示</h3>
                <List><a href="#/list">list</a></List>
                <List><a href="#/list-group">listGroup</a></List>
                <List><a href="#/avatar">avatar</a></List>
            </div>
        );
    }
}

export default Nav;