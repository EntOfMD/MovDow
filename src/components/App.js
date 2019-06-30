// react imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import notFound from './404';
import nav from './navbar';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        {/* <Route path='/nav' component={nav} /> */}
                        <Route component={notFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
