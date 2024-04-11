
import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
    }
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: (state, action) => {
        //in react we cannot mutate the state like the code below and must use spread operator to added update the state
        // but the reason the we are mutating the state as can be seen , is the redux uses Immer js under the hood 
        // as a result we can write js code like this 
            state.push(action.payload)
        }
    }
})

export default postSlice.reducer
export const selectAllPosts = (state) => state.posts
export const { postAdded } = postSlice.actions