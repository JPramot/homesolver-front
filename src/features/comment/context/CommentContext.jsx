import { createContext, useState } from "react";
import * as commentApi from "../../../apis/comment";

export const CommentContext = createContext();

export default function CommentContextProvider({ children }) {
  const [commentByUser, setCommentByUser] = useState(null);

  const createComment = async (data, postId) => {
    const res = await commentApi.createComment(data, postId);
    setCommentByUser(res.data.comment);
  };

  const deleteComment = async (commentId, postId) => {
    await commentApi.deleteComment(commentId, postId);
  };

  return (
    <CommentContext.Provider
      value={{ createComment, deleteComment, commentByUser }}
    >
      {children}
    </CommentContext.Provider>
  );
}
