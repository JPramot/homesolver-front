import { MdOutlineComment } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SearchResultItem({ item }) {
  return (
    <>
      <Link to={`/post/${item?.id}/comment`}>
        <div className="flex font-light justify-between items-center px-3 hover:bg-gray-200">
          <div className="min-w-[50px]">
            <h1>{item?.title}</h1>
          </div>
          <div className="flex justify-between  items-center min-w-7 text-center">
            <MdOutlineComment />
            <h1>{item?.comments?.length}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
