import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import adminCreateUser from './components/adminCreateUser';
import loginUser from './components/login';
import getAllUsers from './components/view-users';

function App() {
  return (
    <Router>
      <div className="App">      

        <div class="container">
            <div class="row">

              <Route path="/" exact component={adminCreateUser} />

              <Route path="/login" component={loginUser} />

              <Route path="/view-users" component={getAllUsers} />

            </div>
        </div>
      </div>
    </Router>
  );
}

export default App;