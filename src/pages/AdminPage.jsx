import { useEffect, useState } from "react";
import AppealPostList from "../features/post/components/AppealPostList";
import UseAuth from "../hook/use-auth";
import UsePost from "../hook/use-post";
import Spinner from "../components/Spinner";

export default function AdminPage() {
  const { authUser } = UseAuth();
  const { getAllAppealPost, AllAppealPost } = UsePost();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAppealPost = async () => {
      try {
        setLoading(true);
        await getAllAppealPost();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAppealPost();
  }, []);
  return (
    <>
      {loading && <Spinner />}
      <AppealPostList />
    </>
  );
}
