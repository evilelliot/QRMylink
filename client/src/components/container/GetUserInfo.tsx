// src/api/getUserInfo.ts
import axios from 'axios';

export default async function getUserInfo(token: string) {
    try {
        const response = await axios.get('http://localhost:3000/api/user/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error in getUserInfo:", error);
        throw error;
    }
};

