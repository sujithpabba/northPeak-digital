const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-4 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#B56A4C] text-white shadow-lg hover:bg-[#9E5B40] hover:-translate-y-1",

    secondary:
      "border border-[#B56A4C] text-[#B56A4C] hover:bg-[#B56A4C] hover:text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;