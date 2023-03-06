import { LOCALSTORAGE_KEY_REQUESTS } from "../constants/localstorage";
import { NewRequest, Request } from "../types/common";
import { getId } from "../utils/common-utils";
import { mockRequests } from "../api/mock-data";

const getRequestsService = () => {
  const createRequest = (form: NewRequest) => {
    const currentRequests = getRequests();
    const newRequests: Array<Request> = [...currentRequests, { id: getId(), ...form }];

    localStorage.setItem(LOCALSTORAGE_KEY_REQUESTS, JSON.stringify(newRequests));
  };

  const getRequests = () => {
    const requests = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_REQUESTS) ?? "[]");

    return (requests ?? []) as Array<Request>;
  };

  const setMockData = () => {
    localStorage.setItem(LOCALSTORAGE_KEY_REQUESTS, JSON.stringify(mockRequests));
  };

  const resetMockData = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY_REQUESTS);
  };

  return {
    createRequest,
    getRequests,
    setMockData,
    resetMockData,
  };
};

export const requestService = getRequestsService();
