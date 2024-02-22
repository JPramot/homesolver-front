import UsePost from "../../../hook/use-post";
import ImageItem from "./ImageItem";

export default function ImageList() {
  const { postWithComment: post } = UsePost();
  return (
    <>
      {post?.postImages &&
        post.postImages.map((image) => (
          <ImageItem key={image.id} image={image.image} />
        ))}
    </>
  );
}
