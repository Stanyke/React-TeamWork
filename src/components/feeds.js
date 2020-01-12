import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class listComponent extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
          listPosts:[]
        }
      }

      componentDidMount(){

        axios.get("https://teamworkapps.herokuapp.com/api/v1/feeds")
        .then(res => {
          const data = res.data.data;
          this.setState({ listPosts:data });
        })
        .catch(error => {
          alert(error)
        });
  
      }
      loadFillData(){

        return this.state.listEmployee.map((data)=>{
          return(
            <tr>
              <th>{data.id}</th>
              <td>{data.jobRole}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
              <td>{data.jobRole}</td>
              <td>
                <button class="btn btn-outline-info "> Edit </button>
              </td>
              <td>
                <button class="btn btn-outline-danger "> Delete </button>
              </td>
            </tr>
          )
        });
    }
}

export default listComponent;