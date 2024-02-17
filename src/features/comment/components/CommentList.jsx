import UseComment from "../../../hook/use-comment";
import CommentItem from "./CommentItem";

export default function CommentList({ comment }) {
  const { commentByUser } = UseComment();
  console.log(commentByUser);
  console.log(comment);
  let allComment = [...comment];
  if (commentByUser) allComment = [...comment, commentByUser];
  return (
    <>
      {comment.map((el, idx) => (
        <CommentItem key={el.id} comment={el} idx={idx} />
      ))}
    </>
  );
}
