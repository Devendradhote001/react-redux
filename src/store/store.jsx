import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/reducers/counterSlice";
import userReducer from "../features/reducers/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
