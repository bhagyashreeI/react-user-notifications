import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../features/Auth/adminSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'
import userReducer from "../features/Auth/userSlice";
const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    admin: adminReducer,
    customer:userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)