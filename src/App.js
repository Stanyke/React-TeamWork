import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Homepage from './components/layout/Homepage';

const App = () =>
{
  return(
    <Fragment>
      <Navbar />
      <Homepage />
    </Fragment>
  )
};

export default App;