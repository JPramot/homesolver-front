import UseAuth from "../../../hook/use-auth";
import { getToken } from "../../../utilitys/local-storage";
import { Navigate } from "react-router-dom";

export default function RedirectIfNotAuthen({ children }) {
  const { authUser } = UseAuth();
  if (!getToken() && !authUser) return <Navigate to="/home" />;
  return children;
}
