import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store";
import { router } from "./components/pages/Root/router";

export const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
