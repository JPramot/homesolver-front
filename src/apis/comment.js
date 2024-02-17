import axios from "../config/axios";

export const createComment = (data, postId) =>
  axios.post(`comments/${postId}`, data);

export const deleteComment = (commentId, postId) =>
  axios.delete(`/comments/${commentId}/${postId}`);
