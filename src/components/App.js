// react imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import notFound from './404';
import NavBar from './navbar';

import jumbotron from '../pages/Landing/Jumbotron';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={jumbotron} />
                        <Route component={notFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
