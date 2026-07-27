import { FaCheck } from "react-icons/fa6";
import Button from "./Button";

const PricingCard = ({
  title,
  price,
  description,
  features,
  popular,
  button,
}) => {
  return (
    <div
      className={`
        relative
        rounded-3xl
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        ${popular
          ? "border-2 border-[#B56A4C] scale-105"
          : "border border-[#E8DED3]"
        }
      `}
    >
      {popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#B56A4C] px-4 py-2 text-sm font-medium text-white">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-semibold text-[#2B2B2B]">
        {title}
      </h3>

      <p className="mt-2 text-[#5E544D]">
        {description}
      </p>

      <h2 className="mt-8 text-5xl font-bold text-[#B56A4C]">
        {price}
      </h2>

      <div className="my-8 h-px bg-[#E8DED3]" />

      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <FaCheck className="text-[#B56A4C]" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a href="#contact">
          <Button>
            {button}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default PricingCard;