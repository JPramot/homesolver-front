import PostItem from "./PostItem";
import UsePost from "../../../hook/use-post";

export default function PostList({ amount, userId }) {
  const { allPost } = UsePost();
  const seePost = allPost?.filter((el, idx) => {
    if (userId) {
      return idx < amount && el.userId == userId;
    }
    return idx < amount;
  });
  return (
    <div className="flex flex-col gap-4">
      {seePost?.map((el) => (
        <PostItem key={el.id} post={el} />
      ))}
    </div>
  );
}
