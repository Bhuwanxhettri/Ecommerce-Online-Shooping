import axios from 'axios';
const url = 'http://localhost:5000';

export const flashDeals = async()=>{
       try {
        let response = await axios.get(`${url}/products?page=1`);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ',error);
    }
}