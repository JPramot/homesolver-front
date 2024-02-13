import Button from "./Button";
import Modal from "./Modal";

export default function Header({ children }) {
  return (
    <div className="flex bg-[#A03232] px-6 py-3 items-center justify-between ">
      <div className="flex items-center gap-12">
        <div className="min-w-32 text-2xl text-white">
          <h1>Home</h1>
          <h1 className="text-right">Solver</h1>
        </div>
        <div>
          <input className="w-96 p-1" type="text" />
        </div>
      </div>
      <div className="flex gap-10">{children}</div>
    </div>
  );
}
