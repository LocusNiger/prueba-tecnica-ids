import { FaHeart, FaEthereum } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";

const TrendingNFTCard = () => {
  return (
    <Link to="/details">
      <motion.div
        className="w-[255px] h-[421px] rounded-[20px] bg-[#232323] flex flex-col overflow-hidden shadow-lg py-[14px] px-2.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Creator Info */}
        <div className="flex items-center mb-3">
          <motion.div
            className="w-10 h-10 rounded-full bg-[#333333] mr-2 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="https://picsum.photos/40"
              alt="Creator"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <p className="text-xs font-mono text-[#FFFFFF3A]">Created by:</p>
            <p className="text-xs font-mono text-[#FFFFFF]">Marvin McKinney</p>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full flex-1 mb-3">
          <motion.div
            className="w-full h-full bg-[#2E2E2E] rounded-[20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <img
              src="https://picsum.photos/255/255"
              alt="NFT"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </motion.div>

          {/* Heart Icon Button */}
          <motion.button
            className="absolute top-3 right-3 bg-[#444444] w-[40px] h-[40px] rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: "#555555" }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart className="text-white text-lg" />
          </motion.button>
        </div>

        <div className="flex flex-col justify-end">
          <motion.h3
            className="font-manrope text-[18px] font-semibold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Dayco serpentine belt
          </motion.h3>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-azeret-mono text-[#FFFFFF]/30">
                Current Bid
              </p>
              <div className="flex items-center">
                <FaEthereum className="text-white" />
                <p className="font-manrope text-[16px] font-semibold text-white ml-1">
                  0,34
                </p>
              </div>
            </div>

            {/* Place Bid Button */}
            <motion.button
              className="bg-[#DEE8E8] text-black text-sm w-[116px] font-medium p-2.5 rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Place Bid
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default TrendingNFTCard;
