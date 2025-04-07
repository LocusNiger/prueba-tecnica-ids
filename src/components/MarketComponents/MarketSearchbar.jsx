import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";

const MarketSearchbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="w-[540px] h-14 rounded-xl bg-[#232323] py-[15px] px-[26px] flex justify-between items-center relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <input
        type="text"
        placeholder="Search artwork, collection..."
        className="bg-transparent w-full outline-none border-none font-azeret-mono text-sm text-[#FFFFFF] placeholder:text-[#FFFFFF]/53"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <motion.div
        animate={
          isFocused ? { scale: 1.1, rotate: -10 } : { scale: 1, rotate: 0 }
        }
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileHover={{ scale: 1.2, rotate: 0 }}
        whileTap={{ scale: 0.9 }}
      >
        <CiSearch className="text-[#FFFFFF] cursor-pointer" size={20} />
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-[5%] right-[5%] h-[1px] bg-[#FFFFFF]/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default MarketSearchbar;
