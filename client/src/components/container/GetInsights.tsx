import axios from "axios";
import { useAuth } from "../../providers/AuthProvider";



export default async function getInsights(token: string) {
    try{    
        const response = await axios.get('http://localhost:3000/api/links/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){  
        console.error("An error has ocurred fetching insights data", error)
    }
}