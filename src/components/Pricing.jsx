
import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PricingCard from "../ui/PricingCard";

import pricing from "../data/pricing";

const Pricing = () => {
  return (
    <section id="pricing" className="py-28 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle
            badge="Pricing"
            title="Packages for Every Business"
            description="Choose the plan that best fits your business goals. Every package is crafted with quality, performance, and long-term growth in mind."
          />
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;