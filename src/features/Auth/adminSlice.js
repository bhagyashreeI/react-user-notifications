import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

const initialState = { token: null,
data:null,
isLoggedIn:false };

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdminData: (state, action) => {
            
                state.token = action.payload.token;
            state.data = action.payload.data;
            state.isLoggedIn = action.payload.ustatus;
            
        },
         
        getAdminData: (state) => {
            state.data = state.data;
        },
        setLogout:() =>{
            storage.removeItem('persist:root');
        }
    }
})

export const { setAdminData, getAdminData, setLogout } = adminSlice.actions;
export default adminSlice.reducer;