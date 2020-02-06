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
  // return (
  //   <div className="App">
  //     <Dashboard />
  //   </div>
  // );
  // <div className="App">
  //    <body>
  //       <div className="Big-Box">
  //          <header className="Resource-Overall">
  //             <h1>Resources</h1>
  //             <p>
  //              Mental health issues are challenging to deal with alone.
  //              </p>
  //              <p>
  //              Just know that we are here for you, please reach out!
  //              </p>
  //         </header>
  //      </div>
  //     <div className="SmallBoxOutline">
  //          <div className="Small-Box">
  //           <header className="Resource">
  //              <h1>Resources</h1>
  //              <p>
  //               Resource 1
  //               </p>
  //           </header>
  //          </div>
  //      <div className="Small-Box">
  //              <header className="Resource">
  //                 <h1>Resources</h1>
  //                 <p>
  //                  Resource 2
  //                  </p>
  //              </header>
  //         </div>
  //     <div className="Small-Box">
  //             <header className="Resource">
  //                <h1>Resources</h1>
  //                <p>
  //                 Resource 3
  //                 </p>
  //             </header>
  //            </div>
  //     <div className="Small-Box">
  //     <header className="Resource">
  //                <h1>Resources</h1>
  //                <p>
  //                 Resource 4
  //                 </p>
  //             </header>
  //              </div>
  //      <div className="Small-Box">
  //              <header className="Resource">
  //                 <h1>Resources</h1>
  //                 <p>
  //                  Resource 5
  //                  </p>
  //              </header>
  //               </div>
  //       <div className="Small-Box">
  //               <header className="Resource">
  //                  <h1>Resources</h1>
  //                  <p>
  //                   Resource 6
  //                   </p>
  //               </header>
  //                </div>
  //       <div className="Small-Box">
  //               <header className="Resource">
  //                  <h1>Resources</h1>
  //                  <p>
  //                   Resource 7
  //                   </p>
  //               </header>
  //               </div>
  //       <div className="Small-Box">
  //             <header className="Resource">
  //                <h1>Resources</h1>
  //                <p>
  //                 Resource 8
  //                 </p>
  //             </header>
  //             </div>
  //       <div className="Small-Box">
  //             <header className="Resource">
  //                <h1>Resources</h1>
  //                <p>
  //                 Resource 9
  //                 </p>
  //             </header>
  //             </div>
  //       <div className="Small-Box">
  //             <header className="Resource">
  //                <h1>Resources</h1>
  //                <p>
  //                 Resource 10
  //                 </p>
  //             </header>
  //             </div>
  //     <div className="Small-Box">
  //           <header className="Resource">
  //              <h1>Resources</h1>
  //              <p>
  //               Resource 11
  //               </p>
  //           </header>
  //           </div>
  //     <div className="Small-Box">
  //           <header className="Resource">
  //              <h1>Resources</h1>
  //              <p>
  //               Resource 12
  //               </p>
  //           </header>
  //           </div>
  //    <div className="Small-Box">
  //          <header className="Resource">
  //             <h1>Resources</h1>
  //             <p>
  //              Resource 13
  //              </p>
  //          </header>
  //          </div>
  //    <div className="Small-Box">
  //          <header className="Resource">
  //             <h1>Resources</h1>
  //             <p>
  //              Resource 14
  //              </p>
  //          </header>
  //          </div>
  //   <div className="Small-Box">
  //         <header className="Resource">
  //            <h1>Resources</h1>
  //            <p>
  //             Resource 15
  //             </p>
  //         </header>
  //         </div>
  //    </div>
  //   </body>
  // </div>
}

export default App;