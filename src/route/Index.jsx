import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/user",
    element: <UserPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
