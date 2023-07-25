import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name:'users',
    initialState: {
        user:null,
    },
    reducers:{
        SetUser:(state,action)=>{
            state.user = action.payload;
        },
        LogoutUser:(state,action)=>{
            state.user =null;
        }
    }
})

export const {SetUser,LogoutUser} = usersSlice.actions;
