import React from 'react';

import { Link } from "react-router-dom";

import cookie from 'cross-cookie';

import axios from 'axios';

import "./style.css";

class loginUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",

            token:""
        }
      }

      render(){
        return (
          <div class="container mt-3">
              
              <div class="newT">
                <Link class="btn btn-outline-success" to="/register">Register User</Link>
              </div>

                <div class="Banna" align="center"><h3>Login</h3></div>
                

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-envelope-o"></i></span>
                </div>
                <input type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={(value) => this.setState({ email: value.target.value })} />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-lock"></i></span>
                </div>
                <input type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={(value) => this.setState({ password: value.target.value })} />
              </div>

              <div class="form-row">

              <button type="submit" class="col-md-12 btn btn-primary" onClick={()=>this.sendLogin()}>Login</button>

              <br/>

              <div class="form-group col-md-12">
                <div id="results1"></div>
                <div id="results2"></div>
              </div>

              </div>
        </div>
        );
      }


      sendLogin()
      {
        if (this.state.email==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-envelope-o'><strong> Email Is Empty</strong></div>";
        }
        else if (this.state.password==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-lock'><strong> Password Is Empty</strong></div>";
        }
        else
        {
     
          const baseUrl = "https://teamworkapps.herokuapp.com/api/v1/auth/signin"
     
          const datapost = {
            email : this.state.email,
            password : this.state.password
          }
     
          axios.post(baseUrl,datapost)
          .then(response=>{

            if (response.status === 200)
            {
              document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-check-circle-o'><strong> Login Successful</strong></div>";

              document.getElementById("results2").innerHTML += "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-check-circle-o'><strong> User ID:</strong> "+response.data.data.userId+"</div>";

              const tokenPost = {
                token : response.data.data.token
              }

              cookie.set('userToken', response.data.data.token );

              window.location.assign("/feeds");

              cookie.get('userToken').then(value => console.log("Who Logged In ? "+value));

            }

            console.log(response.data);
          }).catch(error=>{
            if (error.response)
            {
              document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-exclamation-triangle'><strong> "+error.response.data+"</strong></div>";
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          })
     
        }
     
      }
}


export default loginUser;