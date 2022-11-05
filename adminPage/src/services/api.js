import axios from 'axios'
const BASE_URL ="http://localhost:5000"

export const getUsers = async()=>{
    const res =  await axios.get(`${BASE_URL}/allUsers`);
    return res.data;
}

