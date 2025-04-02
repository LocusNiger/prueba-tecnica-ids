import { useState } from "react";
import { FaChevronDown, FaWallet } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router";

const Header = () => {
  const navItems = [
    { name: "Home", hasDropdown: true, active: true },
    { name: "About us", hasDropdown: false, active: false },
    { name: "Explore", hasDropdown: true, active: false },
    { name: "Pages", hasDropdown: true, active: false },
    { name: "Blog", hasDropdown: false, active: false },
    { name: "Contact", hasDropdown: false, active: false },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  return (
    <header className="py-4 px-6  bg-[#161616]">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo in hexagon */}
          <div className="bg-[#e4ff40] h-12 w-12 flex items-center justify-center rounded-lg relative overflow-hidden">
            <span className="text-black text-2xl font-bold">9</span>
            {/* Hexagon shape using pseudo-elements */}
            <div className="absolute inset-0 bg-[#e4ff40] rotate-45 -z-10"></div>
          </div>

          {/* Secondary logo */}
          <div className="text-[#e4ff40] text-2xl font-bold">9</div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                className={`flex items-center gap-1 font-medium font-manrope text-base transition-all hover:cursor-pointer  ${
                  item.active
                    ? "text-[#e4ff40]"
                    : "text-white hover:text-gray-200"
                }`}
                onClick={() => item.hasDropdown && toggleDropdown(item.name)}
              >
                {item.name}{" "}
                {item.hasDropdown && (
                  <FaChevronDown
                    className={`h-2.5 w-2.5 ml-1 ${
                      item.active ? "text-[#e4ff40]" : "text-[#5c5c5c] "
                    }`}
                  />
                )}
              </button>
              {item.hasDropdown && activeDropdown === item.name && (
                <div className="absolute mt-2 py-2 w-48 bg-[#222222] rounded-md shadow-lg z-10">
                  <Link
                    to="/home"
                    className="block px-4 py-2 text-sm font-medium font-manrope text-white hover:bg-[#333333]"
                  >
                    HOME
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm font-medium font-manrope text-white hover:bg-[#333333]"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm font-medium font-manrope text-white hover:bg-[#333333]"
                  >
                    Option 3
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Wallet connect button */}
        <div className="flex items-center gap-8">
          <button className="bg-[#DDF247] text-black font-medium py-2 px-5 rounded-xl flex items-center gap-2.5">
            Wallet Connect <FaWallet className="h-4 w-4" />
          </button>
          <CgMenuRight className="text-white w-7 h-7" />
        </div>
      </div>
    </header>
  );
};

export default Header;
