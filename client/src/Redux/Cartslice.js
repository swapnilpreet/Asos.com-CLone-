import {createSlice} from '@reduxjs/toolkit';


export const CartSlice=createSlice({
    name: 'carts',
    initialState:{
        cart:[],
    },
    reducers:{
        AddtoCart:(state,action)=>{
            state.cart=action.payload
        },
        IncremnetQuantity:(state,action)=>{
            const item = state.cart.find((item)=>item.id===action.payload);
            item.quantity++;
        },
        DecremnetQuantity:(state,action)=>{
          const item = state.cart.find((item)=>item.id===action.payload);

          if(item.quantity === 1){
            item.quantity=1
          }else{
            item.quantity--;
          }
        },
        RemoveItem:(state,action)=>{
            const removeItem=state.cart.filter((item)=> item.id !== action.payload);
            state.cart=removeItem;
        },
        ClearCart:(state,action)=>{
            state.cart=action.payload;
        }
    }
})

export const {AddtoCart,IncremnetQuantity,DecremnetQuantity,RemoveItem,ClearCart} = CartSlice.actions;
