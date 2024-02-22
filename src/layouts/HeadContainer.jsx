import Button from "../components/Button";
import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";
import UseAuth from "../hook/use-auth";
import UserContainer from "./UserContainer";
import AdminContainer from "./AdminContainer";

export default function HeadContainer() {
  const { authUser } = UseAuth();
  return (
    <div>
      <Header>
        {authUser && authUser.role === "admin" ? (
          <AdminContainer />
        ) : authUser ? (
          <UserContainer />
        ) : (
          <Link to="/login">
            <Button bg="main">Log in / Register</Button>
          </Link>
        )}
      </Header>
      <Outlet />
    </div>
  );
}
