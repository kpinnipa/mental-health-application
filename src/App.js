import React from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JournalPage from './containers/JournalPage';
import Resources from './containers/Resources'


function App() {

  const dashboard = (
    <Route path={Dashboard} exact>
      <Dashboard />
    </Route>
  )

  const journal = (
    <Route path={JournalPage}>
      <JournalPage />
    </Route>
  )

  const resources = (
    <Route path={Resources}>
      <Resources />
    </Route>
  )

  return (
    <Router>
      <Switch>
        {dashboard}
        {journal}
        {resources}
      </Switch>
    </Router>
  );
}

export default App;
