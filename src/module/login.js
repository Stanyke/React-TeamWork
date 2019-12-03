import React from 'react';

import axios from 'axios';

import "./style.css";

class CreateUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
      }

      render(){
        return (
          <div class="container-fluid">
            <div class="row">

              <div class="form-group col-md-12">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control"  placeholder="Email" value={this.state.email} onChange={(value)=> this.setState({email:value.target.value})}/>
              </div>

              <div class="form-group col-md-12">
                <label for="inputEmail4">Password</label>
                <input type="password" class="form-control"  placeholder="Password" value={this.state.password} onChange={(value)=> this.setState({password:value.target.value})}/>
              </div>

              <button type="submit" class="col-md-12 btn btn-primary" onClick={()=>this.sendSave()}>Save</button>

            <br/>

            <div class="col-sm-12">

<div id="mum"></div>
              </div>
            <div class="col-sm-12">
              <font color="red"><div id="results1" class="col-sm-12"></div>
              <br/>
              <div id="results2" class="col-sm-12"></div>
              <br/>
              <div id="results3" class="col-sm-12"></div></font>
            </div>

            </div>
          </div>
        );
      }


      sendSave()
      {
        if (this.state.email==="") {
           alert("Email Is Empty")
        }
        else if (this.state.password==="") {
           alert("Password Is Empty")
        }
        else {
     
          const baseUrl = "https://teamworkapps.herokuapp.com/api/v1/auth/signin"
     
          const datapost = {
            email : this.state.email,
            password : this.state.password
          }
     
          axios.post(baseUrl,datapost)
          .then(result=>{

            if (!result.data.data)
            {
              document.getElementById("results1").innerHTML = result.data;
            }

            if (result.data.data)
            {
              document.getElementById("results1").innerHTML = "Success: "+result.data.status;
              document.getElementById("mum").innerHTML = "Token: "+result.data.data.token;
              document.getElementById("results3").innerHTML = "User ID: "+result.data.data.userId;
            }

            console.log(result.data);
          }).catch(error=>{
             if (error)
             {
                document.getElementById("results1").innerHTML = "Incorrect Password";
             }
            
            console.log(error);
          })
     
        }
     
      }
}


export default CreateUser;