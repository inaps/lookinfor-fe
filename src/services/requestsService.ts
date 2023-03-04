import { FieldValues } from "react-hook-form";
import { LOCALSTORAGE_KEY_REQUESTS } from "../constants/localstorage";

const getRequestsService = () => {
  const createRequest = (form: FieldValues) => {
    localStorage.setItem(LOCALSTORAGE_KEY_REQUESTS, JSON.stringify(form));
  };

  return {
    createRequest,
  };
};

export const requestService = getRequestsService();
