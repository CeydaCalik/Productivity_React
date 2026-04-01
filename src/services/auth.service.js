import axios from "axios";


const authService = {

    register : async (userData) => {

        const reponse = await axios.post("http://localhost:3000/api/auth/register", userData);
        return reponse.data;
    },

    // login : async (data) => {

    // }

};

export default authService;