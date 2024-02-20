import Button from "../../../components/Button";
import UsePost from "../../../hook/use-post";

export default function AppealPostItem({ appealPost }) {
  const { deletePost } = UsePost();

  const handleDeleteAppealPost = async () => {
    await deletePost(appealPost.postId);
  };

  return (
    // <div className="bg-[#A03232] w-[70%] mx-auto rounded-lg p-5 py-8">
    <div className="w-[90%] bg-white mx-auto rounded-md px-5 text-[#A03232] text-xl font-light py-3 my-6">
      <div className="flex gap-3">
        <h1>Post</h1>
        <h1 className="font-semibold">{appealPost?.post?.title}</h1>
        <h1>was appealed by</h1>
        <h1 className="font-semibold">
          {appealPost?.user?.userProfile?.alias}
        </h1>
      </div>
      <div>{appealPost?.content}</div>
      <div className="flex text-lg gap-4 justify-end">
        <Button bg="second">delete appeal</Button>
        <Button bg="second">delete post</Button>
        <Button bg="second">ban user</Button>
      </div>
    </div>
    // </div>
  );
}
