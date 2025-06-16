import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmout: (state, actions) => {
      state.value += Number(actions.payload);
    },
  },
});

export const { increment, decrement, incrementByAmout } = counterSlice.actions;
export default counterSlice.reducer;
