import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import MainPage from './components/MainPage.js';
import ProjectDetails from './components/ProjectDetails.js';
import Default from './components/Default.js';
import Testing from './components/Testing.js';
import ErrorExample from './components/ErrorExample.js';

function App() {

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/project-details" component={ProjectDetails} />
                <Route exact path="/test" component={Testing} />
                <Route exact path="/errshowpage" component={ErrorExample} />
                <Route component={Default} />
            </Switch>
        </React.Fragment>
    );
}

export default App;
