import React from 'react';
import logo from './logo.svg';
import './App.css';

import {HashRouter,Route,Switch} from 'react-router-dom';
import App from "./App";


class Router extends React.Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        fetch("",{body:{}})
    }

    render() {
        return(
            <HashRouter>
                <Switch>
                    <Route path='/a' component={App}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default Router;