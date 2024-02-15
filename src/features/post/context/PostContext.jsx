import { createContext, useEffect, useState } from "react";
import * as postApi from "../../../apis/post";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [postByUser, setPostByUser] = useState({});
  const [allPost, setAllPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const createPost = async (input) => {
    try {
      const res = await postApi.createPost(input);
      setPostByUser(res.data.post);
      setAllPost([postByUser, ...allPost]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      setLoading(true);
      const getAllPosts = async () => {
        const res = await postApi.getPost();
        setAllPost(res.data.posts);
        console.log(res.data.posts);
      };
      getAllPosts();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [postByUser]);
  return (
    <PostContext.Provider value={{ createPost, allPost, postByUser, loading }}>
      {children}
    </PostContext.Provider>
  );
}
