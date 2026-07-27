const SectionTitle = ({
  badge,
  title,
  description,
}) => {
  return (
    <div className="max-w-3xl mx-auto text-center">

      <span
        className="
          inline-flex

          rounded-full

          bg-[#F4ECE4]

          px-5
          py-2

          text-sm
          font-medium

          text-[#8A4B2F]
        "
      >
        {badge}
      </span>

      <h2
        className="
          mt-6

          text-4xl
          lg:text-5xl

          font-semibold

          leading-tight

          text-[#2B2B2B]
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-6

          text-lg

          leading-8

          text-[#4A403A]
        "
      >
        {description}
      </p>

    </div>
  );
};

export default SectionTitle;