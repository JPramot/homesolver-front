const defaultClass = `w-full focus:outline-none px-3 py-1.5 border  rounded-md  focus:ring-2 `;

const textClass = {
  main: "text-[#A03232]",
};

export default function Input({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
  color,
  text = "text-xl",
}) {
  const extendedClass = null
    ? `border-red-500 focus:ring-red-300`
    : `border-gray-300 focus:border-blue-500 focus:ring-blue-300`;

  const textColor = color ? textClass[color] : "";
  return (
    <div className="flex flex-col gap-1.5 w-[80%] mx-auto m-4">
      <label className={`${textColor} ${text}`} htmlFor={label}>
        {name}{" "}
      </label>
      <input
        className={`${defaultClass} ${extendedClass}`}
        type={type}
        id={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error ? <small className="text-red-500">{error}</small> : null}
    </div>
  );
}
