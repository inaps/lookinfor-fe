import { RootState } from "../index";

export const getUser = (state: RootState) => state.user;

export const getUserId = (state: RootState) => state.user.id;

export const getUserRole = (state: RootState) => state.user.role;
