import { useContext } from "react";
import { CommentContext } from "../features/comment/context/CommentContext";

export default function UseComment() {
  return useContext(CommentContext);
}
