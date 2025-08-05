import {configureStore} from '@reduxjs/toolkit';

import UserReducer from './UserSlice';



const store = configureStore({
    reducer:{
        userInfo : UserReducer
    }
});

export default store;