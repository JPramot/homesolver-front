import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import RedirectIfAuthen from "../features/auth/components/RedirectIfAuthen";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuthen>
        <Homepage />,
      </RedirectIfAuthen>
    ),
  },
  {
    path: "/home",
    element: <UserPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/profile/:userId",
    element: <ProfilePage />,
  },
  {
    path: "/post/:postId",
    element: <PostPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
