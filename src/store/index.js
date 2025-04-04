import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart'
import localStorage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage";


const persistConfig ={
    key:"root",
    storage
}

const rootReducer = combineReducers({
    cart:persistReducer(persistConfig,cartReducer),
});

export const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false,
        }),
});

export const persistor = persistStore(store);