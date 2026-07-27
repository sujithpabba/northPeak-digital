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
                <a href="#home" className="hover:text-[#B56A4C] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#B56A4C] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#B56A4C] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#pricing" className="hover:text-[#B56A4C] transition">
                  Packages
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#B56A4C] transition">
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
                FaFacebookF,
                FaInstagram,
                FaLinkedinIn,
                FaXTwitter,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
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

                    hover:bg-[#B56A4C]
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
      </Container>
    </footer>
  );
};

export default Footer;