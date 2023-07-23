import {createSlice} from '@reduxjs/toolkit';


export const AddressSlice=createSlice({
    name: 'address',
    initialState:{
        address:[],
    },
    reducers:{
        AddAddress:(state,action)=>{
            state.address=action.payload

            localStorage.setItem("Address", JSON.stringify(state.address));
        },
    }
})

export const {AddAddress} = AddressSlice.actions;