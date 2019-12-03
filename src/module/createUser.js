import React from 'react';

import axios from 'axios';

import "./style.css";

class CreateUser extends React.Component{
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
          <div class="container">
            <div class="row">

              <div class="form-group col-md-6">
                <label for="inputPassword4">First Name </label>
                <input type="text" class="form-control"  placeholder="First Name" value={this.state.firstname} onChange={(value)=> this.setState({firstname:value.target.value})}/>
              </div>

              <div class="form-group col-md-6">
                <label for="inputPassword4">Last Name </label>
                <input type="text" class="form-control"  placeholder="Last Name" value={this.state.lastname} onChange={(value)=> this.setState({lastname:value.target.value})}/>
              </div>

              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control"  placeholder="Email" value={this.state.email} onChange={(value)=> this.setState({email:value.target.value})}/>
              </div>

              <div class="form-group col-md-6">
                <label for="inputEmail4">Password</label>
                <input type="password" class="form-control"  placeholder="Password" value={this.state.password} onChange={(value)=> this.setState({password:value.target.value})}/>
              </div>

            </div>

            <div class="form-row">

                <div class="form-group col-md-6">
                    <label for="inputState">Gender</label>
                    <select id="inputState" class="form-control" onChange={(value)=> this.setState({gender:value.target.value})}>
                    <option selected>Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                </div>

                <div class="form-group col-md-6">
                    <label for="inputEmail4">Job Role</label>
                    <input type="text" class="form-control"  placeholder="JobRole" value={this.state.jobRole} onChange={(value)=> this.setState({jobRole:value.target.value})}/>
                </div>

              <div class="form-group col-md-6">
                <label for="inputState">Department</label>
                <select id="inputState" class="form-control" onChange={(value)=> this.setState({department:value.target.value})}>
                  <option selected>Choose...</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Programmer">Programer</option>
                </select>
              </div>

                <div class="form-group col-md-6">
                    <label for="inputEmail4">Address</label>
                    <input type="text" class="form-control"  placeholder="Address" value={this.state.address} onChange={(value)=> this.setState({address:value.target.value})}/>
                </div>

                <div class="form-group col-md-6">
                    <label for="inputState">Is Amdin</label>
                    <select id="inputState" class="form-control" onChange={(value)=> this.setState({isAdmin:value.target.value})}>
                    <option selected>Choose...</option>
                    <option value="1">True</option>
                    <option value="0">False</option>
                    </select>
                </div>

                <div class="form-group col-md-6">
                    <label for="inputPassword4">Verify If Admin With Admin's Email</label>
                    <input type="email" class="form-control"  placeholder="Verify Admin" value={this.state.verifyAdmin} onChange={(value)=> this.setState({verifyAdmin:value.target.value})}/>
                </div>

            <button type="submit" class="col-md-12 btn btn-primary" onClick={()=>this.sendSave()}>Save</button>

            <br/>

            <div class="col-md-12">
              <font color="red"><div id="results1" class="col-md-12"></div>
              <br/>
              <div id="results2" class="row col-md-12"></div>
              <br/>
              <div id="results3" class="col-md-12"></div></font>
            </div>

          </div>
          </div>
        );
      }


      sendSave()
      {
        if (this.state.firstname==="") {
          alert("Firstname Is Empty")
        }
        else if (this.state.lastname==="") {
           alert("Lastname Is Empty")
        }
        else if (this.state.email==="") {
           alert("Email Is Empty")
        }
        else if (this.state.password==="") {
           alert("Password Is Empty")
        }
        else if (this.state.gender==="") {
            alert("Gender Not Selected")
        }
        else if (this.state.jobRole==="") {
           alert("Job Role Is Empty")
        }
        else if (this.state.department==="") {
            alert("Department Not Selected")
        }
        else if (this.state.address==="") {
            alert("Address Is Empty")
        }
        else if (this.state.isAdmin==="") {
            alert("IsAdmin Not Selected")
         }
        else if (this.state.verifyAdmin==="") {
            alert("Email to check if Admin Is Empty")
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

            if (!response.data.data)
            {
              document.getElementById("results1").innerHTML = response.data;
            }

            if (response.data.data)
            {
              document.getElementById("results1").innerHTML = "Success: "+response.data.data.message;
              document.getElementById("results2").innerHTML = "Token: "+response.data.data.token;
              document.getElementById("results3").innerHTML = "User ID: "+response.data.data.userId;
            }
            console.log(response.data);
          }).catch(error=>{
            document.getElementById("results1").innerHTML = error;
            console.log(error);
          })
     
        }
     
      }
}


export default CreateUser;