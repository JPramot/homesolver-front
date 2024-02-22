import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";
import { getToken } from "../../../utilitys/local-storage";

export default function RedirectIfAuthen({ children }) {
  const { authUser } = UseAuth();
  if (getToken()) {
    if (authUser?.role === "admin") return <Navigate to="/admin" />;
    else if (authUser) return <Navigate to="/user" />;
  }
  return children;
}
