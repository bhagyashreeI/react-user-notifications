import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
const initialState = {
    token: null,
    data: null,
    isLoggedIn: false
};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserData: (state, action) => {

            state.token = action.payload.token;
            state.data = action.payload.data;
            state.isLoggedIn = action.payload.ustatus;

        },

        getUserData: (state) => {
            state.data = state.data;
        },
        setCustomerLogout: () => {
            storage.removeItem('persist:root');
        }
    }
})

export const { setUserData, getUserData, setCustomerLogout } = userSlice.actions;
export default userSlice.reducer;