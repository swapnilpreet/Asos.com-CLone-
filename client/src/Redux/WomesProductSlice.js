import {createSlice} from '@reduxjs/toolkit';

export const WomenProductSlice = createSlice({
    name:'womenProduct',
    initialState: {
        product:[],
        searchkey:""
    },
    reducers:{
        SetWomenProduct:(state,action)=>{
            state.product=action.payload;
        },
        searchKey:(state,action)=>{
            state.searchkey=action.payload
        }
    }
})

export const {SetWomenProduct,searchKey} = WomenProductSlice.actions;