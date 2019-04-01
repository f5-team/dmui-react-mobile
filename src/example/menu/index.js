import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import asyncComponent from '../../libs/utils/AsyncComponent'

const Nav = asyncComponent(() => import("../nav/index"));
const List = asyncComponent(() => import("../list/index"));
const ListGroup = asyncComponent(() => import("../list-group/index"));
const avatar = asyncComponent(() => import("../avatar/index"));
const Layout = asyncComponent(() => import("../layout/index"));
const noticeBar = asyncComponent(() => import("../notice-bar/index"));
const Money = asyncComponent(() => import("../money/index"));
const image = asyncComponent(() => import("../image/index"));
const countdown = asyncComponent(() => import("../count-down/index"));
const refresh = asyncComponent(() => import("../refresh/index"));

//made in huangjunquan
import Tab from '../tab/index';
import Tabbar from '../tabbar/index';
import Tag from '../tag/index';

const App = () => (
  <div className="demo">
    <h2>
      <span className="logo">DMUI</span>-react-moblie
    </h2>
    <h3>基于creat-react-app的移动端ui组件库</h3>

    <HashRouter>
      <Switch>
        <Route exact path="/" component={Nav} />
        <Route path="/list" component={List} />
        <Route path="/list-group" component={ListGroup} />
        <Route path="/avatar" component={avatar} />
        <Route path="/layout" component={Layout} />
        <Route path="/noticeBar" component={noticeBar} />
        <Route path="/money" component={Money} />
        <Route path="/image" component={image} />
        <Route path="/countdown" component={countdown} />
        <Route path="/refresh" component={refresh} />

        <Route path="/tab" component={Tab} />
        <Route path="/tabbar" component={Tabbar} />
        <Route path="/tag" component={Tag} />

      </Switch>
    </HashRouter>
  </div>
);

export default App;
