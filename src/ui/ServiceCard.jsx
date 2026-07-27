const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="
        group

        rounded-3xl

        bg-white

        p-8

        border border-[#E8DED3]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          items-center
          justify-center

          h-16
          w-16

          rounded-2xl

          bg-[#F4ECE4]

          text-[#B56A4C]

          text-2xl

          transition-all
          duration-300

          group-hover:bg-[#B56A4C]
          group-hover:text-white
        "
      >
        <Icon />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-[#2B2B2B]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[#5E544D]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;