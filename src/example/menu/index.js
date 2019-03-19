import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './index.css';

import Nav from "./../nav/index"
import List from "./../list/index"
import ListGroup from "./../list-group/index"
import avatar from "./../avatar/index"

class App extends Component {
  render() {
    return (
      <div className="demo">

        <h2><span className="logo">DMUI</span> 基于react的移动端ui组件库</h2>
        
        <HashRouter >
            
            <Switch>
                <Route exact path="/" component={Nav}/>
                <Route path="/list" component={List}/>
                <Route path="/list-group" component={ListGroup}/>
                <Route path="/avatar" component={avatar}/>
            </Switch>
           
        </HashRouter>

      </div>
    );
  }
}

export default App;
