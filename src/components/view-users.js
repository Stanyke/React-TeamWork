import React from 'react';

import { Link } from "react-router-dom";

import axios from 'axios';

import "./style.css";

class getAllUsers extends React.Component{
    constructor(props)
    {
      super(props);
      
      let gottenToken = this.props.location.state.realToken;
      
      this.state = {
          userDetails:[],
          erroMsg:""
      }
      
    }

  componentDidMount()
  {
    axios.get('https://teamworkapps.herokuapp.com/api/v1/users', {
      headers: {
          'authorization': 'Bearer '+this.props.location.state.realToken,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }}).then(response =>
      {
        this.setState({
          userDetails: response.data
        })
      })
      .catch(error =>
        {
          console.log(error.response.data.error);
          this.setState({erroMsg: `${error.response.data.error}`});
        })
  }


      render(){

        const { userDetails, erroMsg } = this.state;
        
        

        return (
          <div class="container">
              
            <div class="newT">
              <Link class="btn btn-outline-success" to="/register">Register User</Link>
              <button type="button" class="btn btn-outline-danger" onClick={()=>this.sendLogout()}>Logout</button>
            </div>

            <div class="Banna" align="center"><h3>All Users</h3></div>
            

              <div class="table-responsive">
              <table className="table" id="ThrowErrow">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Fullname</th>
                      <th>Email</th>
                      <th>Gender</th>
                      <th>Job Role</th>
                      <th>Department</th>
                      <th>Address</th>
                      <th>Is Admin</th>
                      <th>Articles</th>
                      <th>Gifs</th>
                  </tr>
              </thead>
              <tbody class="thead-dark">
                  

                  {
                    Array.isArray(userDetails) && userDetails.length > 0 && userDetails.map(names => <tr key={names.id}>
                          <th>{names.user_id}</th>
                          <td>{names.firstname+" "+names.lastname}</td>
                          <td>{names.email}</td>
                          <td>{names.gender}</td>
                          <td>{names.jobrole}</td>
                          <td>{names.department}</td>
                          <td>{names.address}</td>
                          <td>{names.isadmin}</td>
                          <td><Link class="btn btn-outline-info" to={"/user/"+names.user_id}>View</Link></td>
                          <td><Link class="btn btn-outline-info" to={"/user/"+names.user_id}>View</Link></td>
                      </tr>)
                      }
                </tbody>
                </table>
              </div>
              <center>
                {
                 erroMsg ? <div col="12" id="viewer">{document.getElementById('ThrowErrow').innerHTML = '', erroMsg}</div> : null
                }
              </center>
            
            <br/>

            <div class="form-group col-md-12">
              <div id="results1"></div>
              <div id="results2"></div>
            </div>

        </div>
        );
      }


      sendLogout()
      {
        axios.get('https://teamworkapps.herokuapp.com/api/v1/users', {
          headers: {
              'authorization': 'Bearer ',
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
          }}).then(response =>
          {
            document.getElementById('viewer').innerHTML = response.data;
            console.log(response.data);
            window.location.assign("/");
          })
          .catch(error =>
            {
              document.getElementById('viewer').innerHTML = error.response.data.error;
              console.log(error.response.data);
              window.location.assign("/");
            })
      }
}


export default getAllUsers;