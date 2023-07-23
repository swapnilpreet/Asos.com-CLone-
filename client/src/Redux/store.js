import { configureStore } from '@reduxjs/toolkit';
import { LoadersSlice } from './LoaderSlice';
import { usersSlice } from './UserSlice';
import { CartSlice } from './Cartslice';
import { WomenProductSlice } from './WomesProductSlice';
import { AddressSlice } from './AddressSlice';

const store = configureStore({
    reducer:{
        loaders:LoadersSlice.reducer,
        users:usersSlice.reducer,
        carts:CartSlice.reducer,
        womenProduct:WomenProductSlice.reducer,
        address:AddressSlice.reducer,
    }
})

export default store;