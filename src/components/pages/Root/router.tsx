import React from "react";
import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { Root } from "./Root";
import { Customer } from "../Customer";
import { ROUTES } from "../../../constants/routes";
import { Admin } from "../Admin/Admin";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={ROUTES.ROOT} element={<Root />} />
      <Route path={ROUTES.PAGE} element={<Customer />} />
      <Route path={ROUTES.ADMIN} element={<Admin />} />
      <Route path={ROUTES.NOT_FOUND} element={<Navigate to={ROUTES.ROOT} />} />
    </Route>
  )
);
