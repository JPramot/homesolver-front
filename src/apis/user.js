import axios from "../config/axios";

export const updateProfile = (data) => axios.patch("/users", data);
