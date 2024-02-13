import { FaRegImage } from "react-icons/fa6";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useRef, useState } from "react";

export default function PostForm() {
  const [input, setInput] = useState({ title: "", content: "" });

  const handleOnchange = (e) => {
    setInput((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const fileImageEl = useRef(null);
  return (
    <form>
      <Input
        label="Title"
        color="main"
        name="title"
        value={input.title}
        onChange={handleOnchange}
      ></Input>
      <div className="mx-auto w-[80%]">
        <h4 className="text-[#A03232] text-xl">Content</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={handleOnchange}
          rows="15"
          className="w-full overflow-auto outline-none resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-300 focus:outline-none border  rounded-md  focus:ring-2"
        ></textarea>
      </div>
      <input type="file" className="hidden" ref={fileImageEl} />
      <div className="w-[80%] mx-auto my-4 flex flex-col gap-4">
        <div
          className="flex gap-2 p-2 items-center w-44 bg-white hover:bg-gray-200"
          role="button"
          onClick={() => fileImageEl.current.click()}
        >
          <FaRegImage className="fill-[#A03232] size-5" />
          <span className="text-[#A03232]">Choose Image</span>
        </div>
        <Button width={"full"} bg={"second"}>
          Post
        </Button>
      </div>
    </form>
  );
}
