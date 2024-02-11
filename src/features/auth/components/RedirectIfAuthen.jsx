import { Navigate } from "react-router-dom";
import UseAuth from "../../../hook/use-auth";

// export default function RedirectIfAuthen({ children }) {
//   const { authUser } = UseAuth();

//   return (
//     // ตรวจสอบว่ามี authUser หรือไม่ และตรวจสอบ role
//     authUser && authUser.role === "admin" ? (
//       <Navigate to="/admin" />
//     ) : authUser ? (
//       <Navigate to="/user" />
//     ) : (
//       children
//     )
//   );
// }

export default function RedirectIfAuthen({ children }) {
  const { authUser } = UseAuth();
  return authUser && authUser.role === "admin" ? (
    <Navigate to="/admin" />
  ) : authUser ? (
    <Navigate to="/user" />
  ) : (
    children
  );
}
