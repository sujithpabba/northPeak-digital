import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

import Container from "../ui/Container";
import Button from "../ui/Button";
import navLinks from "../data/navLinks";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-5">
      <Container className="flex items-center justify-between">

        {/* Logo */}

        <a href="#home">
          <img
            src={Logo}
            alt="Elevate Studio"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}

        <nav className=" hidden lg:flex">
          <ul
            className="
      flex
      items-center
      gap-2

      h-16

      rounded-full

      bg-white/80
      backdrop-blur-xl

      border border-[#ece4dc]

      shadow-[0_10px_30px_rgba(0,0,0,0.08)]

      px-3
    "
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="
            flex
            items-center
            justify-center

            h-12

            rounded-full

            px-6

            text-[16px]
            font-medium

            text-[#5E544D]

            transition-all
            duration-300

            hover:bg-[#B56A4C]
            hover:text-white
          "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Desktop Button */}

        <div className="hidden lg:block">
          <a href="#contact">
          <Button>
            Get Quote
          </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-[#2B2B2B]"
        >
          {menuOpen ? <HiXMark /> : <HiBars3BottomRight />}
        </button>

      </Container>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden mt-4 px-6">

          <div className="rounded-3xl bg-white shadow-xl p-6">

            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block text-[#5E544D] font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

            </ul>

            <a href="#contact">
              <Button className="mt-12">Get Quote</Button>
            </a>

          </div>

        </div>

      )}
    </header>
  );
};

export default Navbar;