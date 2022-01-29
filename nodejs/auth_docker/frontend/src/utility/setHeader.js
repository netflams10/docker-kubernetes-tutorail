import axios from 'axios';

const setHeader = () => {
    console.log(localStorage.getItem("@token"))
    // axios.defaults.baseURL = "http://localhost:8000/admin";
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common['Content-Type'] = "application/json";
    axios.defaults.headers.common["x-auth-token"] = 'bearer ' + localStorage.getItem('@token') || "";
}

export default setHeader