import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const buttonSlice = createSlice({
  initialState, // initialState : initialState
  name: "button",
  reducers: {
    switchToTrue: (state) => {
      state.value = true;
    },
    switchToFalse: (state) => {
      state.value = false;
    },
  },
});

export default buttonSlice.reducer;
export const { switchToTrue, switchToFalse } = buttonSlice.actions; //named exports
