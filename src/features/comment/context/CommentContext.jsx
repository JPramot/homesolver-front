import { createContext } from "react";
import * as commentApi from "../../../apis/comment";

export const CommentContext = createContext();

export default function CommentContextProvider({ children }) {
  const createComment = async (data, postId) => {
    await commentApi.createComment(data, postId);
  };

  const deleteComment = async (commentId, postId) => {
    await commentApi.deleteComment(commentId, postId);
  };

  return (
    <CommentContext.Provider value={{ createComment, deleteComment }}>
      {children}
    </CommentContext.Provider>
  );
}
