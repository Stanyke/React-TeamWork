import React from 'react';

import axios from 'axios';

import cookie from 'cross-cookie';

import "./style.css";

class feedsComponent extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
          listArticles:[],
          listGifs:[],
          erroMsg:""
        }
      }

      componentDidMount()
      {
        cookie.get('userToken').then(value =>
        {
          axios.get("https://teamworkapps.herokuapp.com/api/v1/feeds", {
          headers: {
              'authorization': 'Bearer '+value,
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
          }}).then(response =>
          {
            console.log(response.data.data[0].Gifs);
            this.setState({
              listArticles: response.data.data[0].Articles,
              listGifs: response.data.data[0].Gifs
            })
          })
          .catch(error =>
            {
              console.log(error);
              this.setState({erroMsg: `${error.response.data.error}`});
            })
        })
      }
      render(){        

        const { listArticles, listGifs, erroMsg } = this.state;
        return (
          <div class="container">
              <div class="row">
              {
                    Array.isArray(listGifs) && listGifs.length > 0 && listGifs.map(names => <div key={names.gif_id} class="card col-sm-4 col-6">
                      <img class="card-img-top" src={names.imageurl} width="100%" />
                      <div class="card-body">
                        <h4 class="card-title">{names.postedby}</h4>
                        <p class="card-text">{names.title}</p>
                        <a href="#" class="btn btn-primary">{names.createdon}</a>
                      </div>
                      </div>)
                      }

<center>
                {
                 erroMsg ? <div col="12" id="viewer">{erroMsg}</div> : null
                }
              </center>
              
              </div>
            

        </div>
        );
      }

}

export default feedsComponent;