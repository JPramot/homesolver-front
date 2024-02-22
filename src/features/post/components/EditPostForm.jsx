import { useRef, useState } from "react";
import { FaRegImage } from "react-icons/fa6";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ImageItem from "./ImageItem";
import validatePost from "../validations/validate-post";
import UsePost from "../../../hook/use-post";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import { isPostChange } from "../validations/validate-postchange";

export default function EditPostForm({ post, onClose }) {
  const { editPost, getAllPosts } = UsePost();

  const [input, setInput] = useState({
    title: post?.title,
    content: post?.content,
  });
  const [image, setImage] = useState(null);
  const [deletedImage, setDeletedImage] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const fileImageEl = useRef(null);

  const countPostImage = post?.postImages?.length;

  const handleOnchange = (e) => {
    setInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleDeleteImage = (data) => {
    setDeletedImage((cur) => [...cur, data]);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (
        !isPostChange(post, input) &&
        deletedImage?.length == countPostImage &&
        !image
      )
        return toast.error("Please change some post data");
      const validateInputError = validatePost(input);
      if (validateInputError) return setError(validateInputError);
      if (image?.length + post?.postImages?.length - deletedImage?.length > 5)
        return setError((cur) => ({
          ...cur,
          image: "the maximum of images are 5",
        }));
      const formData = new FormData();
      if (input.title) formData.append("title", input.title);
      if (input.content) formData.append("content", input.content);
      if (deletedImage?.length > 0)
        formData.append("deleteImage", deletedImage);
      if (image?.length > 0) {
        [...image].forEach((file) => {
          formData.append("image", file);
        });
      }
      setLoading(true);
      await editPost(formData, post.id);
      onClose();
      getAllPosts();
      toast.success("Edit post success");
    } catch (err) {
      console.log(err);
      toast.error(err?.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 pb-4 ">
          <Input
            name="title"
            label="title"
            color="main"
            onChange={handleOnchange}
            value={input.title}
            error={error.title}
          />
          <div className="w-[80%] mx-auto">
            <label className="text-xl text-[#A03232] " htmlFor="content">
              content
            </label>
            <textarea
              className="resize-none border w-[100%] rounded-lg focus:ring-2 outline-none focus:border-blue-400 mt-2 p-2 overflow-auto"
              name="content"
              id="content"
              rows="10"
              onChange={handleOnchange}
              value={input.content}
            ></textarea>
            {error.content && (
              <small className="text-red-500">{error.content}</small>
            )}
          </div>
          <div>
            <div className="ml-[10%]">
              <h1>Your image</h1>
            </div>
            <div className="border w-[80%] mx-auto p-7 flex gap-5 flex-wrap justify-between bg-white rounded-lg">
              {post?.postImages.map((image) => (
                <ImageItem
                  key={image?.id}
                  image={image.image}
                  action="delete"
                  checkDelete={handleDeleteImage}
                  imageInfo={image}
                />
              ))}
            </div>
          </div>
          <input
            type="file"
            className="hidden"
            ref={fileImageEl}
            multiple
            onChange={(e) => setImage(e.target.files)}
          />
          <div className="flex gap-4 items-center">
            <div
              className="flex gap-2 p-2 items-center w-44 bg-white hover:bg-gray-200 border ml-[10%] rounded-lg"
              role="button"
              onClick={() => fileImageEl.current.click()}
            >
              <FaRegImage className="fill-[#A03232] size-5" />
              <span className="text-[#A03232]">Choose Image</span>
            </div>
            {error.image ? (
              <small className="text-red-500">{error.image}</small>
            ) : image?.length > 0 &&
              image?.length + post?.postImages.length - deletedImage.length <
                5 ? (
              <small>
                you choose{" "}
                {image.length + post?.postImages.length - deletedImage?.length}{" "}
                images files
              </small>
            ) : image?.length + post?.postImages.length - deletedImage.length >
              5 ? (
              <small className="text-red-500">
                the maximum of images are 5 you choose{" "}
                {image?.length + post?.postImages.length - deletedImage.length}{" "}
                images
              </small>
            ) : (
              <span className="text-sm">
                You can choose{" "}
                {5 - post?.postImages.length + deletedImage.length} images
              </span>
            )}
          </div>
          <div className="w-[80%] mx-auto">
            <Button width="full" bg="second" type="submit">
              Edit post
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
