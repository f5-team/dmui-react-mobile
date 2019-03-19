import React from 'react';

import List from '../../libs/list/index';

const Nav = () => (
  <div>
    <h3>布局组件</h3>
    <List>
      <a href="#/layout">layout</a>
    </List>

    <h3>数据展示</h3>
    <List>
      <a href="#/list">list</a>
    </List>
    <List>
      <a href="#/list-group">listGroup</a>
    </List>
    <List>
      <a href="#/avatar">avatar</a>
    </List>
  </div>
);

export default Nav;
