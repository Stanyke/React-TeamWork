import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createBrowserHistory as createHistory } from "history";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import adminCreateUser from './components/register';
import loginUser from './components/login';
import getAllUsers from './components/view-users';
import feedsComponent from './components/feeds';


const history = createHistory();


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Navbar.Brand href="/">TeamWork</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav><Link to="/">Home</Link></Nav>
              <Nav><Link to="/register">Register</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact component={loginUser} />
      

      <Route path="/register" component={adminCreateUser} />

      <Route path="/view-users" component={getAllUsers} />

      <Route path="/feeds" component={feedsComponent} />
    </Router>
    </div>
  );
}

export default App;