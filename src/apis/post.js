import axios from "../config/axios";

export const createPost = (data) => axios.post("/posts", data);