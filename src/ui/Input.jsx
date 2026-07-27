const Input = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  textarea,
}) => {
  return (
    <div>
      <label className="mb-2 block font-medium text-[#2B2B2B]">
        {label}
      </label>

      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          placeholder={placeholder}
          className="
            w-full
            rounded-2xl
            border
            border-[#E8DED3]
            bg-white
            px-5
            py-4
            outline-none
            transition
            focus:border-[#8A4B2F]
          "
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="
            w-full
            rounded-2xl
            border
            border-[#E8DED3]
            bg-white
            px-5
            py-4
            outline-none
            transition
            focus:border-[#8A4B2F]
          "
        />
      )}
    </div>
  );
};

export default Input;