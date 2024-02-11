const defaultClass = `w-full focus:outline-none px-3 py-1.5 border  rounded-md  focus:ring-2 `;

export default function Input({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}) {
  const extendedClass = null
    ? `border-red-500 focus:ring-red-300`
    : `border-gray-300 focus:border-blue-500 focus:ring-blue-300`;
  return (
    <div className="flex flex-col gap-1.5 w-[80%] mx-auto m-4">
      <label htmlFor={label}>{label} </label>
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
