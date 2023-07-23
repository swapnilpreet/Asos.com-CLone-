import { axiosInstance } from "./axiosinstance";


export const getpaymentOrder = async (amount)=>{
    try {
        const response = await axiosInstance.post('/api/payment/order',amount);
        return response.data;
    } catch (error) {
        return error.message;
    }
 }

 export const getpaymentVerify = async (response)=>{
    try {
        const res = await axiosInstance.post('/api/payment/verify',response);
        return res;
    } catch (error) {
        return error.message;
    }
 }