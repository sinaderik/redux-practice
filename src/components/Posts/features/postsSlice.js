
import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns"

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
    }
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                //in react we cannot mutate the state like the code below and must use spread operator to added update the state
                // but the reason the we are mutating the state as can be seen , is the redux uses Immer js under the hood 
                // as a result we can write js code like this 
                state.push(action.payload)
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
        reactionAdded:{
            reducer(state, action) {
                console.log(action.payload)
                const { postId, reaction } = action.payload
                const existingPost = state.find(post => post.id === postId)
                if (existingPost) {
                    existingPost.reactions[reaction]++
                }
            },
            prepare(postId,reaction){
                return{
                    payload:{
                        postId,
                        reaction
                    }
                }
            }
        }
    }
})

export default postSlice.reducer
export const selectAllPosts = (state) => state.posts
export const { postAdded,reactionAdded } = postSlice.actions