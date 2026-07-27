import { FaArrowRight, FaStar } from "react-icons/fa6";
import HeroImage from "../assets/images/hero-image.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Counter from "../ui/Counter";

import hero from "../data/hero";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section
            id="home"
            className="min-h-screen bg-[#F8F5F2] flex items-center pt-30"
        >
            <Container>

                <div className="grid lg:grid-cols-2 items-center gap-20">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                    >

                        <span
                            className="
                inline-flex
                rounded-full
                bg-[#EFE7DD]
                px-5
                py-2

                text-sm
                font-medium

                text-[#B56A4C]
              "
                        >
                            {hero.badge}
                        </span>

                        <h1
                            className="
                mt-8

                text-5xl lg:text-6xl
                leading-tight

                font-semibold

                text-[#2B2B2B]
              "
                        >
                            {hero.title}
                        </h1>

                        <p
                            className="
                mt-8

                max-w-xl

                text-lg
                leading-8

                text-[#5E544D]
              "
                        >
                            {hero.description}
                        </p>

                        {/* Stats */}

                        <div
                            ref={ref}
                            className="mt-10  grid grid-cols-3 gap-8">

                            {hero.stats.map((item) => (

                                <div key={item.title}>

                                    <h2 className="text-4xl font-bold text-[#B56A4C]">
                                        <Counter
                                            end={parseInt(item.number)}
                                            suffix={item.number.replace(/[0-9]/g, "")}
                                        />
                                    </h2>

                                    <p
                                        className="
                      mt-2

                      text-[#5E544D]
                    "
                                    >
                                        {item.title}
                                    </p>

                                </div>

                            ))}

                        </div>

                        <div className="mt-10 mb-15 flex gap-5">

                            <a href="#pricing">
                                <Button>
                                    Get Started
                                </Button>
                            </a>

                            <a href="#services">
                            <Button variant="secondary">

                                View Services

                                <FaArrowRight className="ml-3" />

                            </Button>
                            </a>

                        </div>



                    </motion.div>

                    {/* Right */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <img
                            src={HeroImage}
                            alt="Creative Workspace"
                            className="
      h-[650px]
      w-full
      rounded-[36px]
      object-cover
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
    "
                        />

                        <div
                            className="
      absolute
      top-8
      left-8

      bg-white/90
      backdrop-blur-md

      rounded-2xl

      px-6
      py-5

      shadow-xl
    "
                        >
                            <h3 className="text-3xl font-bold text-[#B56A4C]">
                                250%
                            </h3>

                            <p className="mt-1 text-sm text-[#5E544D]">
                                Average Growth
                            </p>
                        </div>

                    </motion.div>

                </div>

            </Container>
        </section>
    );
};

export default Hero;