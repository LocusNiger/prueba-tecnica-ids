import { useState } from "react";
import { FaChevronDown, FaWallet } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { name: "Home", hasDropdown: true, active: true },
    { name: "About Us", hasDropdown: false, active: false },
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
    <header className="w-full py-4 px-6 flex items-center justify-between bg-[#161616]">
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
              className={`flex items-center gap-1 font-medium transition-all hover:cursor-pointer  ${
                item.active
                  ? "text-[#e4ff40]"
                  : "text-white hover:text-gray-200"
              }`}
              onClick={() => item.hasDropdown && toggleDropdown(item.name)}
            >
              {item.name}{" "}
              {item.hasDropdown && <FaChevronDown className="h-3 w-3 ml-1" />}
            </button>
            {item.hasDropdown && activeDropdown === item.name && (
              <div className="absolute mt-2 py-2 w-48 bg-[#222222] rounded-md shadow-lg z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#333333]"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#333333]"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#333333]"
                >
                  Option 3
                </a>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Wallet connect button */}
      <button className="bg-[#e4ff40] text-black font-medium py-2 px-6 rounded-full flex items-center gap-2">
        Wallet Connect <FaWallet className="h-4 w-4" />
      </button>
    </header>
  );
};

export default Header;
