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

  return (
    <CommentContext.Provider value={{ createComment, commentByUser }}>
      {children}
    </CommentContext.Provider>
  );
}
