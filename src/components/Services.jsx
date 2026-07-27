import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";

import services from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="py-28 bg-white"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <SectionTitle
            badge="Our Services"
            title="Helping Businesses Grow Through Smart Digital Solutions"
            description="From strategy to development, we create digital experiences that strengthen your brand and drive measurable results."
          />

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
};

export default Services;