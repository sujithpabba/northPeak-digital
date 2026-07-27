const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-4 px-8 min-h-[48px] font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#8A4B2F] text-white shadow-lg hover:bg-[#733A23] hover:-translate-y-1",

    secondary:
      "border border-[#8A4B2F] text-[#8A4B2F] hover:bg-[#8A4B2F] hover:text-white",
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