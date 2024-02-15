import { useContext } from "react";
import { UserContext } from "../features/user/context/UserContext";

export default function UseUser() {
  return useContext(UserContext);
}
