import { createContext, useState } from "react";
import * as postApi from "../../../apis/post";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [postByUser, setPostByUser] = useState({});

  const createPost = async (input) => {
    const res = await postApi.createPost(input);
    console.log(res.data.post);
  };
  return (
    <PostContext.Provider value={{ createPost }}>
      {children}
    </PostContext.Provider>
  );
}
