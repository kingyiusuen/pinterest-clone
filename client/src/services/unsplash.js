import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
  },
});

export const search = async (params) => {
  return await instance.get(`/search/photos/`, { params });
};

export const random = async (params) => {
  return await instance.get(`/photos/random/`, { params });
};
