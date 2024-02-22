import axios from "../config/axios";

export const register = (userData) => axios.post("/auth/register", userData);

export const login = (userData) => axios.post("/auth/login", userData);

export const getMe = () => axios.get("/auth/me");
