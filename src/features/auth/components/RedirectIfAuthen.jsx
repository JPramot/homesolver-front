import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";

export default function RedirectIfAuthen({ children }) {
  const { authUser } = UseAuth();
  return authUser ? <Navigate to="/user" /> : children;
}
