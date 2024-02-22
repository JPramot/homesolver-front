import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import UsePost from "../hook/use-post";

export default function SearchBar({ setResult }) {
  const { allPost } = UsePost();
  const [input, setInput] = useState("");

  const filter = (value) => {
    if (value.trim() == "") return setResult([]);
    const result = allPost.filter((post) => {
      return post.title.toLowerCase().includes(value);
    });
    setResult(result);
  };

  const handleOnchange = (value) => {
    setInput(value);
    filter(value);
  };
  return (
    <div className="bg-white w-[100%] h-[35px] py-1 shadow-[0_0_2px_#ddd] flex items-center">
      <FaSearch className="mx-2" />
      <input
        className="bg-transparent border-none h-[100%] w-[100%] ml-1.5 focus:outline-none "
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleOnchange(e.target.value)}
      />
    </div>
  );
}
