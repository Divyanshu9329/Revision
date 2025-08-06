import {configureStore} from '@reduxjs/toolkit';

import UserReducer from './UserSlice';



const store = configureStore({
    reducer:{
        userInfo : UserReducer
    }
});

store.subscribe(()=>{
    const data = store.getState().userInfo.value;
    // console.log("run......",data)
    localStorage.setItem('userinfo',JSON.stringify(data))
})

export default store;