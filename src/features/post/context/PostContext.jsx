import { createContext, useEffect, useState } from "react";
import * as postApi from "../../../apis/post";
import { useParams } from "react-router-dom";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [postByUser, setPostByUser] = useState({});
  const [allPost, setAllPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postWithComment, setPostWithComment] = useState({});

  const createPost = async (input) => {
    try {
      const res = await postApi.createPost(input);
      setPostByUser(res.data.post);
      setAllPost([postByUser, ...allPost]);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllPosts = async () => {
    const res = await postApi.getPost();
    setAllPost(res.data.posts);
  };
  const deletePost = async (postId) => {
    await postApi.deletePost(postId);
    getAllPosts();
  };

  const getPostAndComment = async (postId) => {
    const res = await postApi.getPostWithComment(postId);
    setPostWithComment(res.data.post);
    console.log(res?.data.post);
  };

  useEffect(() => {
    try {
      setLoading(true);
      getAllPosts();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [postByUser]);

  return (
    <PostContext.Provider
      value={{
        createPost,
        deletePost,
        getPostAndComment,
        allPost,
        postByUser,
        loading,
        postWithComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
