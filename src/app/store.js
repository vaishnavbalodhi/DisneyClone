import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from '../features/user/userSlice'

export const store = configureStore({
    reducer:{
        userDetail: userDetailReducer,
    }
})