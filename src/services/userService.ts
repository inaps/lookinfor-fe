import { login } from "../store/user/actions";
import { UserRole } from "../store/user/slice";
import { dispatch } from "../store";

const customerId = "customer-uuid";
const sellerId = "seller-uuid";

export const getUserService = () => {
  const loginCustomer = () => {
    dispatch(login({ id: customerId, role: UserRole.CUSTOMER }));
  };

  const loginSeller = () => {
    dispatch(login({ id: sellerId, role: UserRole.SELLER }));
  };

  return {
    loginCustomer,
    loginSeller,
  };
};

export const userService = getUserService();
