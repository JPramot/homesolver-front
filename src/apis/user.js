import axios from "../config/axios";

export const updateProfile = (data) => axios.patch("/users", data);

export const getUserProfileAndPost = (userId) =>
  axios.get(`/users/profile/${userId}`);
