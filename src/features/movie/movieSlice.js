import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        trending: [],
        recommend: [],
        newDisney: [],
        original: [],
    },
    reducers:{
        setMovies: (state, action) => {
            state.trending = action.payload.trending;
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
        }
    }
})

export const {setMovies} = movieSlice.actions;

export default movieSlice.reducer;