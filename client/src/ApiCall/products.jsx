import { axiosInstance } from "./axiosinstance";


// add a new product
export const AddProduct = async (payload)=>{
    try {
        const response = await axiosInstance.post('/api/products/add-products',payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}


// get all womens products
export const GetAllWomensProducts = async (filters)=>{
    try {
        const response = await axiosInstance.post('/api/product/get-all-products-with-filters',filters);
        return response.data;
    } catch (error) {
        return error.message;
    }
}


// get all womens products
export const GetAllMensProducts = async (filters)=>{
    try {
        const response = await axiosInstance.post('/api/product/get-all-products-with-filters',filters);
        return response.data;
    } catch (error) {
        return error.message;
    }
}


export const GetProductsBysearch = async (key)=>{
    try {
        const response = await axiosInstance.get(`/api/product/search/${key}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

// edit a products
export const EditProduct = async(id,payload)=>{
    try {
        const response = await axiosInstance.put(`/api/products/edit-products/${id}`,payload);
        return response.data;
    } catch (error) {
        return error.message;
    }
}
// get products by id


// GetProductById
export const GetProductById=async(id)=>{
    try {
        const response  = await axiosInstance.get(`/api/product/product-by-id/${id}`)
        return response.data;
    } catch (error) {
        return error.message;
    }
}
// /delete-product/:id
// Delete a product by id

export const DeleteProduct = async(id)=>{
    try {
        const response = await axiosInstance.delete(`/api/products/delete-products/${id}`);
        return response.data;
    } catch (error) {
         return error.message;
    }
}

// upload products images

export const UploadProductImage = async(payload)=>{
      try {
        const response = await axiosInstance.post('/api/products/upload-product-image', payload);
        return response.data;
      } catch (error) {
        return error.message;
      }
}


// update product status
export const updateProductStatus =async(id,status)=>{
    try {
        const response = await axiosInstance.put(`/api/products/update-product-status/${id}`, {status});
        return response.data;
    } catch (error) {
        return error.message;
    }
};


export const PlaceNewBids = async (payload)=>{
       try {
          const response = await axiosInstance.post('/api/bids/place-new-bid', payload);
          return response.data;
       } catch (error) {
         return error.message;
       }
}


export const getAllBids = async (filters)=>{
    try {
        const response = await axiosInstance.post('/api/bids/get-all-bid', filters);
        return response.data;
    } catch (error) {
        return error.message;
    }
};

