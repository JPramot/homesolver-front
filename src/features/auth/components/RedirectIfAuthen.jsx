import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";

export default function RedirectIfAuthen({ children }) {
  const { authUser } = UseAuth();
  console.log("test", authUser?.role);
  // return !authUser ? children: authUser.role==='admin' <Navigate to="/user" /> ;
  return authUser?.role === "admin" ? (
    <Navigate to="/admin" />
  ) : authUser ? (
    <Navigate to="/user" />
  ) : (
    children
  );
}
