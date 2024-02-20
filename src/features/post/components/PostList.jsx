import PostItem from "./PostItem";
import UsePost from "../../../hook/use-post";

export default function PostList({ amount, userId, action }) {
  const { allPost } = UsePost();
  console.log(allPost);
  const seePost = allPost?.filter((el, idx) => {
    if (userId) {
      return idx < amount && el.userId == userId;
    }
    return idx < amount;
  });
  return (
    <div className="flex flex-col gap-6 my-4">
      {seePost?.length > 0 ? (
        seePost?.map((el) => <PostItem key={el.id} post={el} action={action} />)
      ) : (
        <div className="w-[90%] bg-white mx-auto rounded-md text-center text-[#A03232] text-xl font-semibold py-3">
          <h1>You never post let's post now</h1>
        </div>
      )}
    </div>
  );
}
