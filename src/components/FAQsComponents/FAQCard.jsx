import { IoAdd } from "react-icons/io5";
import { useState, memo } from "react";
import { GrSubtract } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

const FAQCard = memo(({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[730px] px-5 py-3.5 rounded-2xl bg-[#232323] flex flex-col justify-between items-start transition-all duration-300 hover:shadow-lg hover:shadow-[#1a1a1a]/20">
      <button
        className="flex w-full text-start items-center cursor-pointer focus:outline-none"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <p
          className={`font-manrope text-[18px] font-semibold w-[650px] transition-colors duration-300 ${
            isOpen ? "text-[#DDF247]" : "text-white"
          }`}
        >
          {title}
        </p>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <GrSubtract className="text-[#DDF247]" size={22} />
          ) : (
            <IoAdd className="text-white" size={22} />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-start justify-start w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Divider */}
            <motion.div
              className="h-[1px] bg-[#343434] w-full mt-4"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.p className="font-azeret-mono text-[#919191] text-sm mt-4">
              {description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

FAQCard.displayName = "FAQCard";

export default FAQCard;
