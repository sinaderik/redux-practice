import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import postsReducer from "../components/Posts/features/postsSlice"
import usersReducer from "../components/Users/features/userSlice"

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        posts:postsReducer,
        users:usersReducer,
    }
})