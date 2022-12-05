 
 import axios from 'axios';

 const instance = axios.create({
    baseURL: "https://tiktok-clone-server.herokuapp.com/",
    headers: {
       'Access-Control-Allow-Origin': '*',
    }
 });
 
 export default instance;