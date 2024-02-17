const colorClass = {
  main: "bg-[#FCFCFC] hover:bg-[#EDEDED] text-[#A03232]",
  second: "bg-[#A03232] hover:bg-[#c45050] text-[#FCFCFC]",
  other: "bg-[#d2d2d2] hover:bg-[#dedede] text-[#A03232]",
};

const widthClass = {
  full: "w-full",
};

export default function Button({
  bg,
  onClick,
  children,
  width,
  type = "button",
}) {
  let classes = bg ? colorClass[bg] : "";
  classes += width ? " " + widthClass[width] : "";
  return (
    <div>
      <button
        className={`${classes} min-w-24 px-4 py-2 rounded-md`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
}
