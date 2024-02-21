import { Navigate, useParams } from "react-router-dom";
import UseAuth from "../hook/use-auth";
import Avartar from "../components/Avartar";
import UseUser from "../hook/use-user";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import PostItem from "../features/post/components/PostItem";
import OtherUserPostItem from "../features/post/components/OtherUserPostItem";

export default function OtherUserProfilePage() {
  const { authUser } = UseAuth();
  const { getUserProfileAndAllPost, userProfileAndPost } = UseUser();
  const { userId } = useParams();

  const [loading, setLoading] = useState(false);
  console.log(userProfileAndPost);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        await getUserProfileAndAllPost(userId);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  if (authUser?.id == userId) return <Navigate to={`/post/me/${userId}`} />;

  if (loading) return <Spinner />;
  return (
    <div className="bg-gray-400 w-[100vw] min-h-[100vh] absolute">
      <div className="w-[80%] mx-auto bg-[#A03232] rounded-lg pt-4 mt-8">
        <div className="mt-5">
          <div className="w-[300px] bg-white mx-[7%] text-[#A03232] font-semibold text-2xl p-2 rounded-lg text-center">
            <h1>{userProfileAndPost?.alias || "Unknown"} profile</h1>
          </div>
          <div className="flex w-[80%] mx-auto my-4 gap-5 py-8 ">
            <Avartar size={10} src={userProfileAndPost?.profileImage} />
            <div className="w-[300px] bg-gray-100 rounded-lg flex-1 p-3 text-lg">
              <h1>alias: {userProfileAndPost?.alias || "-"}</h1>
              <h1>introduction: {userProfileAndPost?.introduction || "-"}</h1>
              <h1>gender:{userProfileAndPost?.gender || "-"}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto ">
        <div className="w-[300px] bg-[#A03232] font-semibold text-2xl text-center rounded-lg p-3 text-white mx-[] mt-8">
          <h1>{userProfileAndPost?.alias || "Unknown"} Posts</h1>
        </div>
      </div>
      <div className="bg-[#A03232] w-[70%] mx-auto rounded-lg p-5 py-8 flex flex-col gap-5 my-5">
        {userProfileAndPost?.user?.posts?.length > 0 ? (
          userProfileAndPost?.user?.posts?.map((post) => (
            <OtherUserPostItem
              key={post.id}
              post={post}
              profile={userProfileAndPost}
            />
          ))
        ) : (
          <div className="w-[90%] bg-white mx-auto rounded-md font-semibold text-2xl text-center text-[#A03232] p-2">
            {userProfileAndPost?.alias || "Unknown"} haven't been post
          </div>
        )}
      </div>
    </div>
  );
}
