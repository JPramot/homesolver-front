import { useRef } from "react";
import { FaRegImage } from "react-icons/fa6";
import Input from "../../../components/Input";
import ImageList from "./ImageList";
import Button from "../../../components/Button";

export default function EditPostForm() {
  const fileImageEl = useRef(null);
  return (
    <div className="flex flex-col gap-4 pb-4 ">
      <Input name="title" label="title" color="main" />
      <div className="w-[80%] mx-auto">
        <textarea
          className="resize-none border w-[100%] rounded-lg focus:ring-2 outline-none focus:border-blue-400"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="">
        <div className="ml-[10%]">
          <h1>Your image</h1>
        </div>
        <div className="border w-[80%] mx-auto p-7 flex gap-5 flex-wrap justify-between bg-white rounded-lg">
          <ImageList />
        </div>
      </div>
      <input type="file" className="hidden" ref={fileImageEl} />
      <div className="flex gap-4 items-center">
        <div
          className="flex gap-2 p-2 items-center w-44 bg-white hover:bg-gray-200 border ml-[10%] rounded-lg"
          role="button"
          onClick={() => fileImageEl.current.click()}
        >
          <FaRegImage className="fill-[#A03232] size-5" />
          <span className="text-[#A03232]">Choose Image</span>
        </div>
        <span className="text-sm">delete your old image and choose new</span>
      </div>
      <div className="w-[80%] mx-auto">
        <Button width="full" bg="second">
          Edit post
        </Button>
      </div>
    </div>
  );
}
