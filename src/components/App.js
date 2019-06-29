// react imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import notFound from './404';

// assets
import '../assets/css/App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route component={notFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
