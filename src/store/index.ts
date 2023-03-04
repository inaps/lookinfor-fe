import { store, dispatch } from "./store";

export type AppDispatch = typeof dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store, dispatch };
