import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import About from '../views/about'
import Home from '../views/home'
import MyNavLink from "./MyNavLink";

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink className='list-group-item' to='/about'>About</MyNavLink>
                            <MyNavLink className='list-group-item' to='/home'>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path='/about' component={About}></Route>
                                    <Route path='/home' component={Home}></Route>
                                </Switch>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}