import axios from "../config/axios";

// import axios from "axios";

export const register = (userData) => axios.post("/auth/register", userData);
