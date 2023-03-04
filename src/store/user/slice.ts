import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum UserRole {
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
}

export type UserState = {
  id: string;
  role: UserRole | null;
};

const initialState: UserState = {
  id: "",
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ id: string; role: UserRole }>) => {
      state.id = action.payload.id;
      state.role = action.payload.role;
    },
  },
});

export const reducer = userSlice.reducer;
