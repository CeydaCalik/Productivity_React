import axios from "axios";


const authService = {

    register : async (userData) => {

        const reponse = await axios.post("http://localhost:3000/api/auth/register", userData);
        return reponse.data;
    },

    login : async ({ email, password }) => {

        const reponse = await axios.post("http://localhost:3000/api/auth/login", { email, password });
        console.log("token : ", reponse.data.token );
        
        
        return reponse.data;
        

    }

};

export default authService;