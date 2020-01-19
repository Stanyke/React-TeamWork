import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import adminCreateUser from './components/register';
import loginUser from './components/login';
import getAllUsers from './components/view-users';

function App() {
  return (
    <Router>
      <div className="App">      

        <div class="container">
            <div class="row">

              <Route path="/" exact component={loginUser} />

              <Route path="/register" component={adminCreateUser} />

              <Route path="/view-users" component={getAllUsers} />

            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;