import axios from "../config/axios";

export const appealPost = (data, postId) =>
  axios.post(`/appeal/${postId}`, data);

export const getAllAppealPost = () => axios.get("/appeal");

export const deleteAppealPost = (appealPostId) =>
  axios.delete(`/appeal/${appealPostId}`);
