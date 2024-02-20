import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function ImageItem({ image, action, checkDelete, imageInfo }) {
  const [hidden, setHidden] = useState("");

  const handleOnClick = () => {
    checkDelete(imageInfo?.id);
    setHidden("none");
  };
  return (
    <div className="w-[400px] mx-auto" style={{ display: `${hidden}` }}>
      {action ? (
        <div className="relative flex justify-end top-2 left-2">
          <IoClose
            className="size-5 hover:fill-[#A03232]"
            role="button"
            onClick={handleOnClick}
          />
        </div>
      ) : null}

      <img className="bg-clip-padding " src={image} alt="postImage" />
    </div>
  );
}
