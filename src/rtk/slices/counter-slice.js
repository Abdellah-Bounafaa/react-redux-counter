import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  initialState: { value: 0 },
  name: "CounterSlice",
  reducers: {
    increaseCounter: (state, action) => {
      state.value += action.payload;
    },
    decreaseCounter: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state, action) => {
      state.value = 0;
    },
  },
});
export const { increaseCounter, decreaseCounter, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
