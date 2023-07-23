import axios from 'axios';

// console.log(localStorage.getItem('token'));
export const axiosInstance = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
    }
})