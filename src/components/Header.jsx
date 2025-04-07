import { useState, useEffect } from "react";
import { FaChevronDown, FaWallet } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (item) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  // Custom link component that closes dropdown
  const NavLink = ({ to, children, className }) => {
    const handleClick = () => {
      setActiveDropdown(null);
    };

    return (
      <Link to={to} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  };

  return (
    <motion.header
      className={`py-4 px-6 bg-[#161616] fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Secondary logo */}
          <motion.div
            className="text-[#e4ff40] text-2xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <img src="/Logo2.png" alt="Logo" className="h-[57px] w-[168px]" />
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <div key={item.name} className="relative">
              <motion.button
                className={`flex items-center gap-1 font-medium font-manrope text-base transition-all hover:cursor-pointer ${
                  item.active
                    ? "text-[#e4ff40]"
                    : "text-white hover:text-gray-200"
                }`}
                onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.name}{" "}
                {item.hasDropdown && (
                  <motion.div
                    animate={{
                      rotate: activeDropdown === item.name ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown
                      className={`h-2.5 w-2.5 ml-1 ${
                        item.active ? "text-[#e4ff40]" : "text-[#5c5c5c] "
                      }`}
                    />
                  </motion.div>
                )}
              </motion.button>

              <AnimatePresence>
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    className="absolute mt-2 py-2 w-48 bg-[#222222] rounded-md shadow-lg z-10 overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <NavLink
                        to="/home"
                        className="block px-4 py-2 text-sm font-medium font-manrope text-white hover:bg-[#333333] transition-colors duration-200"
                      >
                        Home
                      </NavLink>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <NavLink
                        to="/FAQs"
                        className="block px-4 py-2 text-sm font-medium font-manrope text-white hover:bg-[#333333] transition-colors duration-200"
                      >
                        FAQs
                      </NavLink>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <NavLink
                        to="/market"
                        className="block px-4 py-2 text-sm font-medium font-manrope text-white hover:bg-[#333333] transition-colors duration-200"
                      >
                        Market
                      </NavLink>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Wallet connect button */}
        <div className="flex items-center gap-8">
          <motion.button
            className="bg-[#DDF247] text-black font-medium py-2 px-5 rounded-xl flex items-center gap-2.5"
            whileHover={{ scale: 1.05, backgroundColor: "#e4ff40" }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
              delay: 0.4,
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Wallet Connect <FaWallet className="h-4 w-4" />
          </motion.button>

          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <CgMenuRight className="text-white w-7 h-7 cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
