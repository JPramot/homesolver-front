import { useState } from "react";
import Avartar from "../components/Avartar";
import Button from "../components/Button";
import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";
import Modal from "../components/Modal";
import PostContainer from "../features/post/components/PostContainer";
import Dropdown from "./Dropdown";
import UseAuth from "../hook/use-auth";
import UserContainer from "./UserContainer";

export default function HeadContainer() {
  const { authUser } = UseAuth();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header>
        {authUser && authUser.role === "admin" ? (
          <UserContainer />
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
