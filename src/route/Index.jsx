import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import RedirectIfAuthen from "../features/auth/components/RedirectIfAuthen";
import ProtectRoute from "../features/auth/components/ProtectRoute";

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
    path: "/admin",
    element: (
      <ProtectRoute>
        <AdminPage />,
      </ProtectRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectRoute>
        <UserPage />
      </ProtectRoute>
    ),
  },
  {
    path: "/profile/:userId",
    element: <ProfilePage />,
  },
  {
    path: "/post/:postId",
    element: <PostPage />,
  },
  {
    path: "*",
    element: <Homepage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
