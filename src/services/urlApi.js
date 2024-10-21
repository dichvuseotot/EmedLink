import axios from 'axios';
//import * as Config from '../constants/Config';
import REACT_LOCALHOST from "./host";
export default function UrlApi(endpoint, method, body, token){
    return axios({
        method: method,
        url: `${REACT_LOCALHOST}/${endpoint}`,
        data: body,
        headers:token
      }).catch(err=>{
         // window.location.href = './';
      });
}
