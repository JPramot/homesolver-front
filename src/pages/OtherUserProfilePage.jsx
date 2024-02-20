import { Navigate, useParams } from "react-router-dom";
import UseAuth from "../hook/use-auth";

export default function OtherUserProfilePage() {
  const { authUser } = UseAuth();
  const { userId } = useParams();

  if (authUser.id == userId) return <Navigate to={`/post/me/${userId}`} />;
  return <div>OtherUserProfilePage</div>;
}
