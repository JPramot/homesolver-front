const colorClass = {
  main: "bg-[#FCFCFC] hover:bg-[#EDEDED] text-[#A03232]",
  second: "bg-[#A03232] hover:bg-[#E36E6E] text-[#FCFCFC]",
};

const widthClass = {
  full: "w-full",
};

export default function Button({ bg, onClick, children, width }) {
  let classes = bg ? colorClass[bg] : "";
  classes += width ? " " + widthClass[width] : "";
  return (
    <div>
      <button className={`${classes} px-4 py-2 rounded-md`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
