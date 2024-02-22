import CommentItem from "./CommentItem";

export default function CommentList({ comment }) {
  return (
    <>
      {comment.map((el, idx) => (
        <CommentItem key={el.id} comment={el} idx={idx} />
      ))}
    </>
  );
}
