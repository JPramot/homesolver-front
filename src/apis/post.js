import axios from "../config/axios";

export const createPost = (data) => axios.post("/posts", data);

export const getPost = () => axios.get("/posts");

export const deletePost = (postId) => axios.delete(`/posts/${postId}`);
