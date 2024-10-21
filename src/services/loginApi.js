import axios from "axios";
import REACT_LOCALHOST from "./host";
//import UrlApi from "./urlApi";
import { authHeader } from './helpers';
import { connect } from "react-redux";
const options = {
    headers: {
        'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Access-Control-Allow-Origin': '*',
         withCredentials : true
    }
  };
const loginAPI = {
    login: (user) => {
      /*return  axios.post(`${REACT_LOCALHOST}/api/login`, user)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log('dfsdfsf',error);
          });*/

      
         return axios.post(`${REACT_LOCALHOST}/api/login`, user,options).catch(err => console.log('kkkkkk',err));;

       
    
     
      


      /* return fetch(`${REACT_LOCALHOST}/api/login`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
        })
        .catch(error => {
        console.error(error);
        });*/
   

       /*return fetch(`${REACT_LOCALHOST}/api/login`,user,
            {   
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
            })
            .then(resp => resp.json())
            .then(data => console.log(data));*/

    },
    profileFetch: () => {
        let token = JSON.parse(localStorage.getItem("token"));
       
        if(token === null){
            localStorage.removeItem("token");
            window.location.reload();
            
        }else{
            return axios.post(`${REACT_LOCALHOST}/api/profile-fetch`, { "accessToken": token }, {"headers":authHeader()} );
        }   
       
    },
    lichsu: (id) => {
        return axios.get(`${REACT_LOCALHOST}/api/show-log-login/${id}`, {"headers":authHeader()});
    },
    doimatkhau: (obj) => {
        return axios.post(`${REACT_LOCALHOST}/api/change-pass`, obj, {"headers":authHeader()} );
    },
};
export default loginAPI;
