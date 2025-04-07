import { useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const BadgesFilter = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState("Items"); // Default selected badge

  const badges = ["Category", "Items", "Status", "Price Range"];

  const dropdownOptions = {
    sortBy: [
      "Recently Added",
      "Price: Low to High",
      "Price: High to Low",
      "Most Popular",
      "Ending Soon",
    ],
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="w-full h-10 gap-[30px] flex justify-between items-center">
      {/* BADGES */}
      <div className="flex gap-2.5">
        {badges.map((badge) => (
          <motion.div
            key={badge}
            className={`h-[39px] border border-[#FFFFFF]/12 text-center rounded-xl py-2.5 px-3 font-manrope font-semibold text-sm cursor-pointer ${
              selectedBadge === badge
                ? "bg-[#DDF247] text-[#161616]"
                : "text-white"
            }`}
            onClick={() => setSelectedBadge(badge)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layout
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          >
            {badge}
            {selectedBadge === badge && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-[#DDF247] -z-10"
                layoutId="badgeBackground"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* FILTROS */}
      <div>
        {/* Sort By */}
        <div className="relative">
          <motion.div
            className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[254px] px-2.5 justify-between cursor-pointer"
            onClick={() => toggleDropdown("sortBy")}
            whileHover={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <FiDollarSign className="mr-2 text-[#FFFFFF]" />
              <span className="font-medium text-sm text-[#FFFFFF]">
                Sort By: Recently Added
              </span>
            </div>
            <motion.div
              animate={{ rotate: openDropdown === "sortBy" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="text-[#FFFFFF1F] text-[12px]" />
            </motion.div>
          </motion.div>

          {openDropdown === "sortBy" && (
            <motion.div
              className="absolute z-10 mt-2 w-[254px] bg-[#1A1A1A] border border-[#FFFFFF1F] rounded-[12px] py-2 overflow-hidden"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {dropdownOptions.sortBy.map((option, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 text-sm text-[#FFFFFF] hover:bg-[#FFFFFF1F] cursor-pointer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {option}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BadgesFilter;
