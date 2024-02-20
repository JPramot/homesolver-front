import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthContextProvider from "./features/auth/context/AuthContext.jsx";
import UserContextProvider from "./features/user/context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </AuthContextProvider>
);
