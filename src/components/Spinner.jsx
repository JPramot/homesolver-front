import { FaSpinner } from "react-icons/fa6";

export default function Spinner() {
  return (
    <>
      <div className="fixed bg-gray-500 opacity-15 inset-0"></div>
      <div className="fixed inset-0 z-30">
        <div className="flex items-center justify-center min-h-full">
          <FaSpinner className="size-20 fill-[#A03232] animate-spin" />
        </div>
      </div>
    </>
  );
}
