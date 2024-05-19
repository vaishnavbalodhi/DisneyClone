import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from '../features/user/userSlice'
import movieReducer from '../features/movie/movieSlice'

export const store = configureStore({
    reducer:{
        userDetail: userDetailReducer,
        movie: movieReducer,
    }
})