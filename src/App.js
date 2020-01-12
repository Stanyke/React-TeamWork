import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import adminCreateUser from './components/adminCreateUser';

function App() {
  return (
    <Router>
      <div className="App">      

        <div class="container">
            <div class="row">

              <Route path="/" exact component={adminCreateUser} />

            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;