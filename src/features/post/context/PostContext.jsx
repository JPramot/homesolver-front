import { createContext, useEffect, useState } from "react";
import * as postApi from "../../../apis/post";
import * as appealApi from "../../../apis/appeal";

export const PostContext = createContext();

export default function PostContextProvider({ children }) {
  const [postByUser, setPostByUser] = useState({});
  const [allPost, setAllPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postWithComment, setPostWithComment] = useState({});
  const [allAppealPost, setAllAppealPost] = useState(null);

  const createPost = async (input) => {
    const res = await postApi.createPost(input);
    setPostByUser(res.data.post);
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
  };

  const appealPost = async (data, postId) => {
    await appealApi.appealPost(data, postId);
  };

  const getAllAppealPost = async () => {
    const res = await appealApi.getAllAppealPost();
    setAllAppealPost(res.data.appealPost);
  };

  const deleteAppealPost = async (appealPostId) => {
    await appealApi.deleteAppealPost(appealPostId);
  };

  const editPost = async (data, postId) => {
    const res = await postApi.editPost(data, postId);
    console.log(res?.data);
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
        appealPost,
        getAllPosts,
        getAllAppealPost,
        editPost,
        deleteAppealPost,
        allPost,
        allAppealPost,
        postByUser,
        loading,
        postWithComment,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
