import { FaRegImage } from "react-icons/fa6";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useRef, useState } from "react";
import validatePost from "../validations/validate-post";
import UsePost from "../../../hook/use-post";
import Spinner from "../../../components/Spinner";

export default function PostForm() {
  const [input, setInput] = useState({ title: "", content: "" });
  const [error, setError] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { createPost } = UsePost();

  const fileImageEl = useRef(null);

  const handleOnchange = (e) => {
    setInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    setError({});
  };

  const handleSubmit = async (e) => {
    try {
      console.log(image);
      e.preventDefault();

      const validateInputError = validatePost(input);
      if (validateInputError) return setError(validateInputError);
      console.log(image.length);
      if (image.length > 5)
        return setError((cur) => ({ ...cur, image: "the maximum image is 5" }));
      const formData = new FormData();
      if (input.title) formData.append("title", input.title);
      if (input.content) formData.append("content", input.content);
      if (image.length > 0) {
        [...image].forEach((file) => {
          formData.append("image", file);
        });
      }
      setLoading(true);
      const res = await createPost(formData);
      // console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setImage([]);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          color="main"
          name="title"
          value={input.title}
          onChange={handleOnchange}
          error={error.title}
        ></Input>
        <div className="mx-auto w-[80%]">
          <h4 className="text-[#A03232] text-xl">Content</h4>
          <textarea
            name="content"
            value={input.content}
            onChange={handleOnchange}
            rows="15"
            className="w-full overflow-auto outline-none resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-300 focus:outline-none border  rounded-md  focus:ring-2"
          />
          {error.content && (
            <small className="text-red-500">{error.content}</small>
          )}
        </div>
        <input
          type="file"
          className="hidden"
          ref={fileImageEl}
          onChange={(e) => setImage(e.target.files)}
          multiple
        />
        <div className="w-[80%] mx-auto my-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="flex gap-2 p-2 items-center w-44 bg-white hover:bg-gray-200"
              role="button"
              onClick={() => fileImageEl.current.click()}
            >
              <FaRegImage className="fill-[#A03232] size-5" />
              <span className="text-[#A03232]">Choose Image</span>
            </div>
            {error.image ? (
              <small className="text-red-500">{error.image}</small>
            ) : image?.length > 0 && image?.length < 5 ? (
              <small>you choose {image.length} image file</small>
            ) : image?.length > 5 ? (
              <small className="text-red-500">
                the maximum of picture is 5 you choose {image.length}
              </small>
            ) : (
              <small>the maximum of picture is 5</small>
            )}
          </div>
          <Button width={"full"} bg={"second"}>
            Post
          </Button>
        </div>
      </form>
    </>
  );
}
