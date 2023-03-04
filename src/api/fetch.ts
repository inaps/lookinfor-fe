import { JsonObject } from "type-fest";
import axios, { AxiosResponse, Method } from "axios";
import { BASE_URL } from "../constants/api";

type BaseFetchRequest = {
  path: string;
  body?: JsonObject;
};

const createFetch = () => {
  const baseFetchHandler =
    (method: Method) =>
    <T = void>({ path, body }: BaseFetchRequest) => {
      return axios
        .request({
          url: `${BASE_URL}${path}`,
          method,
          data: body,
        })
        .then(({ data }: AxiosResponse) => data)
        .catch((error) => {
          console.log(error)
          throw error;
        }) as Promise<T>;
    };

  return {
    get: baseFetchHandler("GET"),
    post: baseFetchHandler("POST"),
    put: baseFetchHandler("PUT"),
    delete: baseFetchHandler("DELETE"),
  };
};

export const fetch = createFetch();
