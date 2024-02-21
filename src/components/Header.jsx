import { Link } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import SearchContainer from "./SearchContainer";

export default function Header({ children }) {
  return (
    <div className="flex bg-[#A03232] px-6 py-3 items-center justify-between ">
      <div className="flex items-center gap-12">
        <Link to="/home">
          <div className="min-w-32 text-2xl text-white">
            <h1>Home</h1>
            <h1 className="text-right">Solver</h1>
          </div>
        </Link>
        <SearchContainer />
      </div>
      <div className="flex gap-10">{children}</div>
    </div>
  );
}
