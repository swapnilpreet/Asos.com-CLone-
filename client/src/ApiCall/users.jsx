import { axiosInstance } from "./axiosinstance";

// register user
export const RegisterUser = async (payload)=>{
    try{
       const response = await axiosInstance.post('/api/user/register', payload);
       return response.data;
    }catch(error){
      return error.message;
    }
}

// login user
export const LoginUser = async (payload)=>{
    try{
       const response = await axiosInstance.post('/api/user/login', payload);
       return response.data;
    }catch(error){
      return error.message;
    }
}

// get current user
export const GetCurrentUser = async ()=>{
    try{
       console.log(axiosInstance);
       const response = await axiosInstance.get('/api/user/profile');
       return response.data;
    }catch(error){
       return error.message;
    }
}
