import axios from "axios";

/* base url fro the requests*/
const instance = axios.create({

   baseURL : "https://api.themoviedb.org/3",

});

export default instance;