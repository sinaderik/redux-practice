
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { sub } from "date-fns"

// const initialState = [
//     {
//         id: '1',
//         title: 'Learning Redux Toolkit',
//         content: "I've heard good things.",
//         date: sub(new Date(), { minutes: 10 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         },
//     },
//     {
//         id: '2',
//         title: 'Slices...',
//         content: "The more I say slice, the more I want pizza.",
//         date: sub(new Date(), { minutes: 5 }).toISOString(),
//         reactions: {
//             thumbsUp: 0,
//             wow: 0,
//             heart: 0,
//             rocket: 0,
//             coffee: 0
//         },
//     }
// ]

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPost', async () => {
    const response = await axios.get(POST_URL)
    return response.data
})

const initialState = {
    posts: [],
    status: 'idle', // idle | laading | succeed | failed,
    error: null
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                //in react we cannot mutate the state like the code below and must use spread operator to added update the state
                // but the reason the we are mutating the state as can be seen , is the redux uses Immer js under the hood 
                // as a result we can write js code like this 
                state.posts.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        },
                    }
                }
            }
        },
        reactionAdded: {
            reducer(state, action) {
                const { postId, reaction } = action.payload
                const existingPost = state.posts.find(post => post.id === postId)
                if (existingPost) {
                    existingPost.reactions[reaction]++
                }
            },
            prepare(postId, reaction) {
                return {
                    payload: {
                        postId,
                        reaction
                    }
                }
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                let min = 1
                const loadedPosts = action.payload.map(post => {
                    post.data = sub(new Date(), { minutes: min++ }).toISOString()
                    post.reactions = {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                    return post
                })
                // add any fetch post to the array
                state.posts=state.posts.concat(loadedPosts)
            })
    }
})

export default postSlice.reducer
export const selectAllPosts = (state) => state.posts.posts
export const getPostStatus = (state) => state.posts.status
export const getPostError = (state) => state.posts.error
export const { postAdded, reactionAdded } = postSlice.actions