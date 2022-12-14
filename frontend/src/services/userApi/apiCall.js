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

export const registerApi = async(payload)=>{
    try {
     let response = await axios.post(`${url}/register`,payload);
     return response.data;
 } catch (error) {
     console.log('Error while calling addUser API ',error);
 }
}


export const loginApi = async(payload)=>{
    try {
     let response = await axios.post(`${url}/login`,payload);
     console.log(response.data)
     return response.data;
 } catch (error) {
     return error.response.data.message;
 }
}

export const orderApi = async(payload)=>{
    try {
        let response = await axios.post(`${url}/order`,payload);
        return response.data;
    } catch (err) {
        console.log("Error whille calling Api",err)
    }
}
export const getOrderApi = async(payload)=>{
    try {
        let response = await axios.get(`${url}/getOrder/${payload}`);
        return response.data;
    } catch (err) {
        console.log("Error whille calling Api",err)
    }
}


