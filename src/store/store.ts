import { configureStore as configureReduxStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "./user";

const reducer = {
  user: userReducer,
};

export const store = configureReduxStore({
  reducer,
});

export const dispatch = store.dispatch;
