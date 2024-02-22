import { useEffect, useState } from "react";
import AppealPostList from "../features/post/components/AppealPostList";
import UsePost from "../hook/use-post";
import Spinner from "../components/Spinner";
import BanUserList from "../features/user/components/BanUserList";
import UseUser from "../hook/use-user";

export default function AdminPage() {
  const { getAllBannedUser } = UseUser();
  const { getAllAppealPost } = UsePost();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAppealPost = async () => {
      try {
        setLoading(true);
        await getAllAppealPost();
        await getAllBannedUser();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppealPost();
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="bg-gray-400 min-h-full py-8">
      <div className="flex flex-col gap-8 my-5">
        <AppealPostList />
        <BanUserList />
      </div>
    </div>
  );
}
