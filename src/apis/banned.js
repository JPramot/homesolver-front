import axios from "../config/axios";

export const bannedUser = (userId) => axios.patch(`/banned/${userId}`);

export const unbannedUser = (userId) =>
  axios.patch(`banned/${userId}/unbanned`);

export const getAllBannedUser = () => axios.get("/banned");
