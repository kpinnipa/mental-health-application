import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Resources
        </p>
      </header>
      <body>
      <div className="App-Resource">
              <header className="Resource">
                  <p>
                  Campus Resources
                  </p>
              </header>
              <div className="Title">
                              <header className="Title1">
                                  <p>
                                  Title1
                                  </p>
                               </header>
                             </div>
        </div>

        <div className="App-Resource">
          <header className="Resource">
             <p>
             Local Resources
             </p>
           </header>
         </div>

        <div className="App-Resource">
          <header className="Resource">
             <p>
             National Resources
             </p>
          </header>
         </div>
      </body>
    </div>



  );
}



export default App;