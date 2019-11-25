import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
  constructor(){
    super();
    this.state={ email: '', password: '' }
  }

  handleChange = event =>
  {
    this.setState({ [event.target.name]:event.target.value })
  }

  handleSubmit = event =>
  {
    event.preventDefault();
    console.log("Email : " + this.state.email)
    console.log("Password : " + this.state.password)

    const url = "https://teamworkapps.herokuapp.com/api/v1/auth/signin";

    const data = { email:this.state.email, password:this.state.password }

    fetch(url, { method: 'POST', // or ‘PUT’
    
    body: JSON.stringify(data), // data can be `string` or {object}!
    
    headers:{'Content-Type': 'application/json' } }).then(res => res.json()).catch(error => console.error('Error:', error)).then(response => console.log("Yesssss", response)); 
  };

    render()
    {
      return(
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" onChange={this.handleChange} />
        <input type="text" name="password" onChange={this.handleChange} />
        <input type="submit" value="Login" /> 
      </form> )
    }
  }