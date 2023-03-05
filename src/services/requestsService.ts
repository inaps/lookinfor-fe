import { LOCALSTORAGE_KEY_REQUESTS } from "../constants/localstorage";
import { NewRequest, Request } from "../types/common";
import { getId } from "../utils/common-utils";

const mockRequests: Array<Request> = [
  { id: "uuid-1", name: "iPhone 8, 64GB", category: "Телефоны", contacts: "+7 921 359 26 59" },
  { id: "uuid-2", name: "Шины летние R15", category: "Шины", contacts: "+7 911 129 65 81" },
];
const getRequestsService = () => {
  const createRequest = (form: NewRequest) => {
    const currentRequests = getRequests();
    const newRequests: Array<Request> = [...currentRequests, { id: getId(), ...form }];

    localStorage.setItem(LOCALSTORAGE_KEY_REQUESTS, JSON.stringify(newRequests));
  };

  const getRequests = () => {
    const requests = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_REQUESTS) ?? "[]");

    return mockRequests;
    // return (requests ?? []) as Array<Request>;
  };

  return {
    createRequest,
    getRequests,
  };
};

export const requestService = getRequestsService();
