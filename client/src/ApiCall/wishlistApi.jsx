import { axiosInstance } from "./axiosinstance";


export const GetAllWishlistProducts = async (filters)=>{
    try {
        const response = await axiosInstance.get('/api/wishlist/get-wishlist',filters);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export const AddProductToWishlist = async (prodId)=>{
    console.log('ProdId: '+prodId)
    try {
        const response = await axiosInstance.put('/api/wishlist/add-to-wishlist', prodId);
        return response.data;
    } catch (error) {
        return error.message;
    }
}