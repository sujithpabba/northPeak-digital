import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white pt-20 pb-8">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Elevate Studio
            </h2>

            <p className="mt-6 leading-7 text-gray-300">
              We create premium digital experiences that help
              businesses grow through thoughtful design,
              modern development, and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>
                <a href="#home" className="hover:text-[#D18A6A] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#D18A6A] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#D18A6A] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-[#D18A6A] transition">
                  Packages
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#D18A6A] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold">
              Services
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">
              <li>Web Development</li>
              <li>UI / UX Design</li>
              <li>SEO Optimization</li>
              <li>Digital Strategy</li>
              <li>Brand Consulting</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold">
              Follow Us
            </h3>

            <div className="mt-6 flex gap-4">
              {[
                {
                  icon: FaFacebookF,
                  link: "https://www.facebook.com/",
                  label: "Facebook",
                },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/",
                  label: "Instagram",
                },
                {
                  icon: FaLinkedinIn,
                  link: "https://www.linkedin.com/",
                  label: "LinkedIn",
                },
                {
                  icon: FaXTwitter,
                  link: "https://x.com/",
                  label: "XTwitter",
                },
              ].map(({ icon: Icon, link, label }, index) => (
                <a
                  key={index}
                  href={link}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-[#3B3B3B]
        transition-all
        duration-300
        hover:bg-[#8A4B2F]
      "
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#444] pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Elevate Studio. All Rights Reserved.
        </div>

        <div className="mt-8 border-t border-[#444] pt-6 text-center py-2 text-gray-300">
          <p>
            Built for{" "}
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block
              py-2
        px-1
        font-medium
        text-[#D18A6A]
        hover:underline">
              Digital Heroes Training Task
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;