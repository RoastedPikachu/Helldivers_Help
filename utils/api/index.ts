import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://localhost:3002/",
});

apiInstance.interceptors.request.use(
  (config) => config,
  (err) => {
    console.debug(err);
  },
);

apiInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    console.debug(err);
  },
);
