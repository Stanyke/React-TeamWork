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
          fullDetails:[],
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
        console.log(response.data[0])
        this.setState({
          fullDetails: response.data
        })
      })
      .catch(error =>
        {
          console.log(error);
          this.setState({erroMsg: `${error}`});
        })
  }
      render(){

        const { fullDetails, erroMsg } = this.state

        return (
          <div class="container">
              
            <div class="newT">
              <Link class="btn btn-outline-success" to="/">Register User</Link>
              <button type="button" class="btn btn-outline-danger" onClick={()=>this.sendLogout()}>Logout</button>
            </div>

            <div class="Banna" align="center"><h3>All Users</h3></div>
            

            <div class="container">
              <div class="table-responsive">
                <table class="table">
                  

                  {
                    fullDetails.length ?
                    fullDetails.map(names => <div key={names.id}>
                    <tbody class="thead-dark">
                        <tr>
                          <th>{names.user_id}</th>
                          <td>{names.firstname+" "+names.lastname}</td>
                          <td>{names.email}</td>
                          <td>{names.gender}</td>
                          <td>{names.jobrole}</td>
                          <td>{names.department}</td>
                          <td>{names.address}</td>
                          <td>{names.isadmin}</td>
                          <td><Link class="btn btn-outline-info" to={"/view-user/"+names.user_id}>View</Link></td>
                        </tr>
                      </tbody>
                      </div>) : null
                    }
                    {
                      erroMsg ? <div col="12">{erroMsg}</div> : null
                    }
                </table>
              </div>
            </div>
            
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
        
     
      }
}


export default getAllUsers;