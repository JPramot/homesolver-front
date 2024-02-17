import { createContext, useState } from "react";
import * as commentApi from "../../../apis/comment";

export const CommentContext = createContext();

export default function CommentContextProvider({ children }) {
  const [commentByUser, setCommentByUser] = useState(null);

  const createComment = async (data, postId) => {
    try {
      const res = await commentApi.createComment(data, postId);
      setCommentByUser(res.data.comment);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComment = async (commentId, postId) => {
    try {
      await commentApi.deleteComment(commentId, postId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentContext.Provider
      value={{ createComment, deleteComment, commentByUser }}
    >
      {children}
    </CommentContext.Provider>
  );
}
