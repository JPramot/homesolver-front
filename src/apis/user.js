import axios from "../config/axios";

const updateProfile = (data) => axios.patch("/users", data);
