import axios from "axios";


const authService = {

    register : async (userData) => {

        const reponse = await axios.post("http://localhost:3000/api/auth/register", userData);
        return reponse.data;
    },

    login : async (userData) => {

        const reponse = await axios.post('http://localhost:3000/api/auth/login', userData)
        return reponse.data;
        console.log(userData);
        

    }

};

export default authService;