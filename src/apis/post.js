import axios from "../config/axios";

export const createPost = (data) => axios.post("/posts", data);

export const getPost = () => axios.get("/posts");

export const deletePost = (postId) => axios.delete(`/posts/${postId}`);

export const getPostWithComment = (postId) =>
  axios.get(`/posts/${postId}/comment`);

export const appealPost = (data, postId) =>
  axios.post(`/posts/${postId}/appeal`, data);
