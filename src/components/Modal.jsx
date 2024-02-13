const colorText = {
  main: "text-[#A03232]",
};
const bgColor = {
  main: "bg-[#EDEDED]",
};

export default function Modal({ children, onClose, title, width, color, bg }) {
  let classes = color ? colorText[color] : "";
  let bgClass = bg ? bgColor[bg] : "bg-white";
  return (
    <>
      <div className="fixed bg-white inset-0 opacity-80"></div>
      <div className="fixed inset-0">
        <div className="flex items-center justify-center min-h-full py-8">
          <div
            className={`${bgClass}  rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)]`}
            style={{ width: `${width}rem` }}
          >
            <div className="border-b flex justify-between p-4">
              <div className="text-2xl invisible">&#10005;</div>
              <h5 className={`text-3xl font-semibold ${classes}`}>{title}</h5>
              <button className="text-2xl" onClick={onClose}>
                &#10005;
              </button>
            </div>
            <div className="max-h-[calc(100vh-10rem)] overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
