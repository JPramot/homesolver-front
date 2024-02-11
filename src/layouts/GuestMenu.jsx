import React from "react";
import Header from "../components/Header";
import SignInContainer from "../features/auth/components/SignInContainer";
import SignUpContainer from "../features/auth/components/SignUpContainer";

export default function GuestMenu() {
  return (
    <div>
      <Header>
        <SignUpContainer />
        <SignInContainer />
      </Header>
    </div>
  );
}
