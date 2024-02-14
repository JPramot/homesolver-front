import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";
import Avartar from "../../../components/Avartar";
import Button from "../../../components/Button";
import { FaGear } from "react-icons/fa6";
import Input from "../../../components/Input";

export default function UserProfile() {
  return (
    <div className="flex flex-col">
      <div className="flex items-end">
        <Avartar size={10} />
        <div className=" cursor-pointer">
          <FaGear className="size-10 hover:fill-[#A03232]" />
        </div>
      </div>
      <form>
        <Input />
        <Input />
        <Input />
      </form>
    </div>
  );
}
