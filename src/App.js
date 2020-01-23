import React from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JournalPage from './containers/JournalPage';


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
  return (
    <Router>
      <Switch>
        {dashboard}
        {journal}
      </Switch>
    </Router>
  )
  // return (
  //   <div className="App">
  //     <Dashboard />
  //   </div>
  // );
}

export default App;
