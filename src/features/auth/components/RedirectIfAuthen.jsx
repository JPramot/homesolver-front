import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";
import { getToken } from "../../../utilitys/local-storage";

export default function RedirectIfAuthen({ children }) {
  const { authUser } = UseAuth();
  console.log("test", authUser?.role);
  // return !authUser ? children: authUser.role==='admin' <Navigate to="/user" /> ;
  if (getToken()) {
    if (authUser?.role === "admin") return <Navigate to="/admin" />;
    else if (authUser) return <Navigate to="/user" />;
  }
  return children;
  // return authUser?.role === "admin" ? (
  //   <Navigate to="/admin" />
  // ) : authUser ? (
  //   <Navigate to="/user" />
  // ) : (
  //   children
  // );
}
