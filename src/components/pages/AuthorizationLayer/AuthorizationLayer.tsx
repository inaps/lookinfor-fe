import { Login } from "../Login";
import { UserRole } from "../../../store/user/slice";
import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { getUser } from "../../../store/user/getters";
import { Seller } from "../Seller";
import { Customer } from "../Customer";

export const AuthorizationLayer = () => {
  const user = useAppSelector(getUser);

  if (user.role === UserRole.CUSTOMER) {
    return <Customer />;
  }

  if (user.role === UserRole.SELLER) {
    return <Seller />;
  }

  return <Login />;
};
