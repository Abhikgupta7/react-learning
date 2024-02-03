// slices/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 5,
    reducers: {
        increment: (state, action) => state + action.payload,
        decrement: (state, action) => state - action.payload,
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
