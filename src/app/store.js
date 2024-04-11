import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postsReducer from "../components/Posts/features/postsSlice"

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        posts:postsReducer
    }
})