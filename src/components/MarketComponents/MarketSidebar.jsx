import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidAddToQueue } from "react-icons/bi";
import { LuChartColumn, LuChartLine } from "react-icons/lu";
import { PiSquaresFour } from "react-icons/pi";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { RiWallet3Line, RiHistoryLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router";

const MarketSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Cambiado el ancho cuando está cerrado a 70px (aproximadamente 25% de 280px)
  const sidebarVariants = {
    open: {
      width: "280px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      width: "70px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      opacity: 0,
      x: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const marketplaceItems = [
    { icon: LuChartColumn, text: "Market" },
    { icon: LuChartLine, text: "Active Bid" },
    { icon: PiSquaresFour, text: "Explore" },
  ];

  const accountItems = [
    { icon: BsCollection, text: "My collection" },
    { icon: AiOutlineHeart, text: "My favorite" },
    { icon: RiWallet3Line, text: "Wallet" },
    { icon: RiHistoryLine, text: "History" },
    { icon: IoSettingsOutline, text: "Settings" },
    { icon: IoLogOutOutline, text: "Logout" },
  ];

  return (
    <motion.div
      className="h-screen bg-[#161616] py-10 overflow-auto scrollbar-hide"
      variants={sidebarVariants}
      initial="open"
      animate={isOpen ? "open" : "closed"}
      style={{
        maxHeight: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // Internet Explorer 10+
      }}
      css={`
        &::-webkit-scrollbar {
          display: none; // Safari and Chrome
        }
      `}
    >
      <div className="flex flex-col min-h-full">
        {/* Contenedor para el botón de toggle y el logo */}
        <div className="relative mb-8">
          {/* Toggle Button - Ahora en un contenedor fijo en la parte superior */}
          <div className={`flex mb-4 justify-center`}>
            <motion.button
              className="text-white p-1.5 rounded-full bg-[#222222] hover:bg-[#333333] z-50"
              onClick={toggleSidebar}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
            >
              <HiMenuAlt2 className="text-xl" />
            </motion.button>
          </div>

          {/* Logo - Ahora debajo del botón de toggle */}
          <motion.div
            className="w-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            style={{ height: "57px" }}
          >
            <Link to="/home">
              <div
                className={`${
                  isOpen
                    ? "w-[220px] flex items-center justify-center"
                    : "flex items-center justify-center"
                }`}
              >
                {isOpen ? (
                  <img src="/Logo2.png" alt="Logo" className="w-[60%]" />
                ) : (
                  <img src="/LogoSinTexto.png" alt="Logo" className="w-[50%]" />
                )}
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col w-full gap-[29px]">
          {/* Create Button */}
          <div className="flex items-center justify-center">
            <motion.button
              className={`cursor-pointer bg-[#DEE8E8] text-black font-semibold font-manrope text-sm ${
                isOpen ? "w-[220px]" : "w-[50px]"
              } px-2.5 py-2.5 rounded-xl flex items-center justify-center`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    Create
                  </motion.span>
                )}
              </AnimatePresence>
              <BiSolidAddToQueue
                className={`${isOpen ? "ml-2" : ""} text-2xl`}
              />
            </motion.button>
          </div>

          {/* Marketplace Section */}
          <div className="w-full flex flex-col gap-[9px]">
            <AnimatePresence>
              {isOpen && (
                <motion.p
                  className="block px-[30px] text-[#FFFFFF]/40 text-sm font-semibold font-manrope"
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  Marketplace
                </motion.p>
              )}
            </AnimatePresence>
            <div>
              {marketplaceItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center py-3 ${
                    isOpen ? "px-[30px]" : "px-[25px]"
                  } gap-3 rounded-md cursor-pointer`}
                  custom={index}
                  variants={menuItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <item.icon className="text-[#FFFFFF]/20 text-xl min-w-[20px]" />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        className="text-[#FFFFFF] text-sm font-light font-manrope"
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        {item.text}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Account Section */}
          <div className="w-full flex flex-col gap-[9px]">
            <AnimatePresence>
              {isOpen && (
                <motion.p
                  className="block px-[30px] text-[#FFFFFF]/40 text-sm font-semibold font-manrope"
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  Account
                </motion.p>
              )}
            </AnimatePresence>
            <div>
              {accountItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center py-3 ${
                    isOpen ? "px-[30px]" : "px-[25px]"
                  } gap-3 rounded-md cursor-pointer`}
                  custom={index + marketplaceItems.length}
                  variants={menuItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                >
                  <item.icon className="text-[#FFFFFF]/20 text-xl min-w-[20px]" />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        className="text-[#FFFFFF] text-sm font-light font-manrope"
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        {item.text}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mt-auto pt-8 px-[30px] text-[#FFFFFF]/40 text-xs"
              variants={itemVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <p className="text-[#FFFFFF]/53 font-azeret-mono text-[12px]">
                © 2023 OpeN9
              </p>
              <p className="text-[#FFFFFF]/53 font-azeret-mono text-[12px]">
                Made By Themesflat
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MarketSidebar;
