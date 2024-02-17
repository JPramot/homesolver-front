import axios from "../config/axios";

export const createComment = (data, postId) =>
  axios.post(`comments/${postId}`, data);
