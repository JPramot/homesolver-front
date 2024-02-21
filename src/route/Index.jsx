import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import ProfilePage from "../pages/ProfilePage";
import PostPage from "../pages/PostPage";
import RedirectIfAuthen from "../features/auth/components/RedirectIfAuthen";
import ProtectRoute from "../features/auth/components/ProtectRoute";
import HeadContainer from "../layouts/HeadContainer";
import ProtectAdminRoute from "../features/auth/components/ProtectAdminRoute";
import LoginPage from "../pages/LoginPage";
import RedirectIfNotAuthen from "../features/auth/components/RedirectIfNotAuthen";
import PostByUser from "../pages/PostByUser";
import OtherUserProfilePage from "../pages/OtherUserProfilePage";

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: (
//       <RedirectIfAuthen>
//         <Homepage />
//       </RedirectIfAuthen>
//     ),
//   },

//   {
//     path: "/",
//     element: (
//       <ProtectRoute>
//         <HeadContainer />
//       </ProtectRoute>
//     ),
//     children: [
//       {
//         path: "/admin",
//         element: <AdminPage />,
//       },
//       {
//         path: "user",
//         element: <UserPage />,
//       },
//       {
//         path: "profile/:userId",
//         element: <ProfilePage />,
//       },
//       {
//         path: "post/:postId",
//         element: <PostPage />,
//       },
//     ],
//   },
//   {
//     path: "/admin",
//     element: (
//       // <ProtectAdminRoute>
//       <AdminPage />
//       // </ProtectAdminRoute>
//     ),
//   },

//   {
//     path: "*",
//     element: (
//       <RedirectIfAuthen>
//         <Homepage />
//       </RedirectIfAuthen>
//     ),
//   },
// ]);

const router = createBrowserRouter([
  {
    element: <HeadContainer />,
    children: [
      {
        path: "/",
        element: (
          <RedirectIfAuthen>
            <Homepage />,
          </RedirectIfAuthen>
        ),
      },
      {
        path: "/login",
        element: (
          <RedirectIfAuthen>
            <LoginPage />
          </RedirectIfAuthen>
        ),
      },
      {
        path: "/admin",
        element: (
          <ProtectAdminRoute>
            <AdminPage />
          </ProtectAdminRoute>
        ),
      },
      {
        path: "/user",
        element: (
          <ProtectRoute>
            <UserPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/profile/:userId",
        element: <OtherUserProfilePage />,
      },

      {
        path: "/profile/me/:userId",
        element: (
          <RedirectIfNotAuthen>
            <ProfilePage />,
          </RedirectIfNotAuthen>
        ),
      },
      {
        path: "post/me/:userId",
        element: (
          <RedirectIfNotAuthen>
            <PostByUser />
          </RedirectIfNotAuthen>
        ),
      },
      {
        path: "/post/:postId/comment",
        element: <PostPage />,
      },
      {
        path: "/user/profile/:userId",
        element: <OtherUserProfilePage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <HeadContainer />
        <RedirectIfAuthen>
          <Homepage />
        </RedirectIfAuthen>
      </>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
