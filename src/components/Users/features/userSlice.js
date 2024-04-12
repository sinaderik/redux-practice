import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'alireza naderi' },
    { id: '1', name: 'hamed javadi' },
    { id: '2', name: 'kamran ghasemi' },
]

const postSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users
export default postSlice.reducer