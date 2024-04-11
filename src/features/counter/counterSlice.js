import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state) => {
            state.count += 1
        },
        decreament: (state) => {
            state.count -= 1
        },
        increamentByAmount: (state, action) => {
            state.count += action.payload
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

export const { increament, decreament, increamentByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;