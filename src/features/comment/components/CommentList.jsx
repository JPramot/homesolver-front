import { IoTrashBin } from "react-icons/io5";
import Avartar from "../../../components/Avartar";
import { useState } from "react";
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
      {allComment.map((el, idx) => (
        <CommentItem key={el.id} comment={el} idx={idx} />
      ))}
    </>
  );
}
