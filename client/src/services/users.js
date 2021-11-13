import axios from "axios";

export const instance = axios.create({
  baseURL: "/api/users",
});

export const signup = async (userData) => {
  return await instance.post("/signup", userData);
};

export const login = async (userData) => {
  return await instance.post("/login", userData);
};

export const getProfile = async (userId) => {
  return await instance.get(`/${userId}`);
};

export const savePin = async ({ userId, photoUrl }) => {
  return await instance.put(`/${userId}/save-pin`, { photoUrl });
};

export const deleteSavedPin = async ({ userId, photoUrl }) => {
  return await instance.put(`/${userId}/delete-pin`, { photoUrl });
};
