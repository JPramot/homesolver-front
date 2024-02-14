import { useContext } from "react";
import { PostContext } from "../features/post/context/PostContext";

export default function UsePost() {
  return useContext(PostContext);
}
