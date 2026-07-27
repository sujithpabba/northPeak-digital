import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

import about from "../data/about";
import Container from "../ui/Container";
import Button from "../ui/Button";

import aboutImage from "../assets/images/about-image.webp";

const About = () => {
  return (
    <section id="about" className="py-28 bg-[#FAF7F3]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-[#F4ECE4] px-5 py-2 text-sm font-medium text-[#8A4B2F]">
              {about.badge}
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-semibold leading-tight text-[#2B2B2B]">
              {about.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#4A403A]">
              {about.description}
            </p>

            <div className="mt-12">
              <a href="#pricing">
                <Button> Learn More </Button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImage}
              alt="About Elevate Studio"
              className="w-full rounded-3xl shadow-lg object-cover"
            />

            {/* Features */}
            <div className="mt-10 space-y-5">
              {about.features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4ECE4] text-[#8A4B2F]">
                    <FaCheck />
                  </div>

                  <span className="text-lg font-medium text-[#2B2B2B]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          
          
        </div>
      </Container>
    </section>
  );
};

export default About;