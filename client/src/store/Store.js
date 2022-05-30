// importing the configure store 
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// importing all the slices
import fileReducer from '../features/FileSlice';
// importing as default, we get the reducer

const serializableCheckFunction = getDefaultMiddleware({
    serializableCheck : false
})

export default configureStore({
    reducer : {
        file : fileReducer,
        middleware : [serializableCheckFunction]
    },
})

// the store has a reducer