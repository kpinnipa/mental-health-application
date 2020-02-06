import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './containers/Dashboard';
import JournalPage from './containers/JournalPage';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Resources from './containers/Resources';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/journal-page" component={JournalPage} />
            <Route path="/resources" component={Resources} />
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
