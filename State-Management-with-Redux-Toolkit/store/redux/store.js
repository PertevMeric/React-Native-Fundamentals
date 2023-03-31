import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonSlice";

export const store = configureStore({
  reducer: {
    default: buttonReducer,
  },
});

/*

export const buttonSlice = createSlice({
  name: "button",
  initialState: {
    buttonState: [],
  },
  reducers: {
    changeButtonState: (state) => {
      (previousState) => !previousState;
    },
  },
});

const changeState = buttonSlice.actions.changeButtonState;

export const changeButtonState = buttonSlice.actions.changeButtonState;
export default buttonSlice.reducer;
*/
