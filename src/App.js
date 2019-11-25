import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

import Login from './components/auth/Login';

const App = () =>
{
  return(
    <Fragment>
      <Navbar />
      <Login />
    </Fragment>
  )
};

export default App;