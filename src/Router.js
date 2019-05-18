import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Index from "./page/Index";


class Router extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path='/' component={Index}/>
                </Switch>
            </HashRouter>


        );
    }
}

export default Router;