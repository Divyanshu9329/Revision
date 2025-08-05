import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name : 'user',
    initialState : {
        value : {
            islogin : false,
            name : undefined,
            role : undefined,
            token : undefined
        }
    },
    reducers:{
        addUserData : (state,action)=>{
            const data = {...action.payload,islogin:true}
            state.value = data
        },
        remUserData : (state,action)=>{
            state.value = {
                    islogin : false,
                    name : undefined,
                    role : undefined,
                    token : undefined
                }
        }
    }
});

export default slice.reducer;

export const {addUserData,remUserData} =slice.actions;
