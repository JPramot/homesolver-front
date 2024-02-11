export default function Modal({ children, onClose, title, width }) {
  return (
    <>
      <div className="fixed bg-white inset-0 opacity-80"></div>
      <div className="fixed inset-0">
        <div className="flex items-center justify-center min-h-full py-8">
          <div
            className="bg-white  rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)]"
            style={{ width: `${width}rem` }}
          >
            <div className="border-b flex justify-between p-4">
              <div className="text-2xl invisible">&#10005;</div>
              <h5 className="text-3xl font-semibold">{title}</h5>
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
