import Avartar from "../components/Avartar";
import { useEffect, useRef, useState } from "react";

export default function Dropdown({ children }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownEl = useRef(null);

  useEffect(() => {
    if (openDropdown) {
      const outside = (e) => {
        if (dropdownEl.current && !dropdownEl.current.contains(e.target))
          setOpenDropdown(false);
      };
      document.addEventListener("mouseup", outside);
      return () => document.removeEventListener("mouseup", outside);
    }
  }, [openDropdown]);

  return (
    <div className="relative h-[80px]" ref={dropdownEl}>
      <div role="button" onClick={() => setOpenDropdown(!openDropdown)}>
        <Avartar size={5} />
      </div>

      {openDropdown ? (
        <div className="absolute right-0 translate-y-2 ">
          <div className="w-52  bg-white shadow-[0_0_6px_rgb(0,0,0,0.2)] p-2 rounded-lg">
            {children}
          </div>
        </div>
      ) : null}
    </div>
  );
}
