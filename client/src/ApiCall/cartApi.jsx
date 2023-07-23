import { axiosInstance } from "./axiosinstance";

export const GetAllCartProducts = async ()=>{
    try {
        const response = await axiosInstance.get('/api/cart/get-user-cart');
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const AddProductTocart = async (prodId)=>{
    // console.log('ProdId: '+prodId)
    try {
        const response = await axiosInstance.post('/api/cart/add-to-cart', prodId);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
export const RemoveProductFromCart = async (prodId)=>{
    console.log('ProdId: '+prodId)
    try {
        const response = await axiosInstance.post('/api/cart/remove-from-cart', {productId: prodId});
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const ClearcartApi = async ()=>{
    try {
        const response = await axiosInstance.delete('/api/cart/clear-cart');
        return response.data;
    } catch (error) {
        return error.message;
    }
}