import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

import contact from "../data/contact";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Input from "../ui/Input";
import Button from "../ui/Button";

const icons = {
  Email: FaEnvelope,
  Phone: FaPhone,
  Location: FaLocationDot,
};

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-28 bg-[#FAF7F3]">
      <Container>
        <SectionTitle
          badge={contact.badge}
          title={contact.title}
          description={contact.description}
        />

        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {contact.details.map((item) => {
                const Icon = icons[item.title];

                return (
                  <div
                    key={item.id}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4ECE4] text-[#8A4B2F]">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="font-semibold text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[#4A403A]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="john Doe"
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
            />


            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
            />

            <Input
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              textarea
              placeholder="Tell us about your project..."
            />

            <Button type="submit">
              Send Message
            </Button>
            {submitted && (

              <p className="mt-4 rounded-xl bg-green-100 px-4 py-3 text-green-700">
                Thank you for reaching out! We've received your message and will get back to you as soon as possible.
              </p>

            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;