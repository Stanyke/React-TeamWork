import React from 'react';

import { Link } from "react-router-dom";

import axios from 'axios';

import "./style.css";

class adminCreateUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname:"",
            email:"",
            password:"",
            gender:"",
            jobRole:"",
            department:"",
            address:"",
            isAdmin:"",
            verifyAdmin:""
        }
      }

      render(){
        return (
          <div class="container mt-3">
              <div class="loginUser">
                <Link class="btn btn-outline-success" to="/">Login</Link>
              </div>

                <div class="Banna" align="center"><h3>Create New User</h3></div>
                
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa">&#xf2bc;</i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="First Name" value={this.state.firstname} onChange={(value) => this.setState({ firstname: value.target.value })} />
                  <input type="text" class="form-control" placeholder="Last Name" value={this.state.lastname} onChange={(value) => this.setState({ lastname: value.target.value })} />
                </div>

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

                <div class="form-group col-md-12">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-male"></i></span>
                    </div>
                    <select id="inputState" class="form-control" onChange={(value)=> this.setState({gender:value.target.value})}>
                      <option selected>Choose Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>

                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-map-marker"></i></span>
                    </div>
                    <input type="text" class="form-control"  placeholder="Address" value={this.state.address} onChange={(value)=> this.setState({address:value.target.value})}/>
                  </div>
                  </div>


                <div class="form-group col-md-12">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-laptop"></i></span>
                    </div>
                    <input type="text" class="form-control"  placeholder="Job Role" value={this.state.jobRole} onChange={(value)=> this.setState({jobRole:value.target.value})}/>
                    

                    <select id="inputState" class="form-control" onChange={(value)=> this.setState({department:value.target.value})}>
                      <option selected>Choose Department</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Programmer">Programer</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Content Writer">Content Writer</option>
                    </select>
                  </div>
                </div>


                <div class="form-group col-md-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-check-circle-o"></i></span>
                    </div>
                    <select id="inputState" class="form-control" onChange={(value)=> this.setState({isAdmin:value.target.value})}>
                      <option selected>Confirm If An Admin</option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                  </div>
                </div>

                <div class="form-group col-md-6">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fa fa-envelope-open-o"></i></span>
                    </div>
                    <input type="email" class="form-control"  placeholder="Enter An Admin Email" value={this.state.verifyAdmin} onChange={(value)=> this.setState({verifyAdmin:value.target.value})}/>
                  </div>
                </div>

              


              <button type="submit" class="col-md-12 btn btn-primary" onClick={()=>this.sendSave()}>Save</button>

              <br/>

              <div class="form-group col-md-12">
                <div id="results1"></div>
                <div id="results2"></div>
              </div>

              </div>
        </div>
        );
      }


      sendSave()
      {
        if (this.state.firstname==="")
        {
            document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa'>&#xf2bc;</i><strong> Firstname Is Empty</strong></div>";
        }
        else if (this.state.lastname==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa'>&#xf2bc;</i><strong> Lastname Is Empty</strong></div>";
        }
        else if (this.state.email==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-envelope-o'><strong> Email Is Empty</strong></div>";
        }
        else if (this.state.password==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-lock'><strong> Password Is Empty</strong></div>";
        }
        else if (this.state.gender==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-male'><strong> Gender Not Selected</strong></div>";
        }
        else if (this.state.address==="") 
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-map-marker'><strong> Location Is Empty</strong></div>";
        }
        else if (this.state.jobRole==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-laptop'><strong> Job Role Is Empty</strong></div>";
        }
        else if (this.state.department==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-laptop'><strong> Department Not Selected</strong></div>";
        }
        else if (this.state.isAdmin==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-check-circle-o'><strong> Confirmation Of Admin Not Selected</strong></div>";
        }
        else if (this.state.verifyAdmin==="")
        {
          document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-envelop-open-o'><strong> Email To Check If Admin Is Empty</strong></div>";
        }
        else {
     
          const baseUrl = "https://teamworkapps.herokuapp.com/api/v1/auth/create-user"
     
          const datapost = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            password : this.state.password,
            gender  : this.state.gender,
            jobRole  : this.state.jobRole,
            department  : this.state.department,
            address  : this.state.address,
            isAdmin  : this.state.isAdmin,
            verifyAdmin  : this.state.verifyAdmin
          }
     
          axios.post(baseUrl,datapost)
          .then(response=>{

            if (response.status === 201)
            {
              document.getElementById("results1").innerHTML = "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-check-circle-o'><strong>Success:</strong> "+response.data.data.message+"</div>";

              document.getElementById("results2").innerHTML += "<div class='alert alert-danger alert-dismissible fade show'><button type='button' class='close' data-dismiss='alert'>&times;</button><i class='fa fa-check-circle-o'><strong>User ID:</strong> "+response.data.data.userId+"</div>";
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


export default adminCreateUser;