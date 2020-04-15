import React, { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"

import Home from "./home";
import Counter from "./counter";
import Greeting from "./greeting";
import HideShow from "./hideShow";
import GrowShrink from "./growShrink";
import PushAround from "./pushAround";
import Clock from "./clock";
import ColorChanger from "./colorChanger";
import "../style/main.scss";

export default class App extends Component {
  render() {
    return (
      <div className="App">
      
        <BrowserRouter>
        <div>
          <div className="links-wrapper">
            <NavLink to="/">
              Home
            </NavLink>
            <NavLink to="/counter">
              Counter
            </NavLink>
            <NavLink to="/greeting">
              Greeting
            </NavLink>
            <NavLink to="/hide">
              Hide/Show
            </NavLink>
            <NavLink to="/grow">
              Grow/Shrink
            </NavLink>
            <NavLink to="/push">
              Push Around
            </NavLink>
            <NavLink to="/clock">
              Clock
            </NavLink>
            <NavLink to="/color">
              Color Changer
            </NavLink>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/greeting" component={Greeting} />
            <Route path="/hide" component={HideShow} />
            <Route path="/grow" component={GrowShrink} />
            <Route path="/push" component={PushAround} />
            <Route path="/clock" component={Clock} />
            <Route path="/color" component={ColorChanger} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
