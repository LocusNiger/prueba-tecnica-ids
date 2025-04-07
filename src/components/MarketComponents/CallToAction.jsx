import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div className="w-auto xl:w-[1100px] h-[268px] rounded-[20px] bg-[#DDF247] p-8 relative overflow-hidden flex">
      <div className="flex flex-col gap-[30px] justify-center max-w-[50%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[32px] text-[#161616] font-manrope font-semibold">
            Discover, create and
          </h2>
          <h2 className="text-[32px] text-[#161616] font-manrope font-semibold">
            sell your own NFT
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4 items-center justify-start">
          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="cursor-pointer bg-[#161616] text-[#DDF247] font-semibold font-manrope text-sm w-[190px] p-2.5 rounded-[14px] flex items-center justify-center">
              Explore Now
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <GoArrowUpRight className="ml-2 text-2xl" />
              </motion.span>
            </button>
          </motion.div>

          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="cursor-pointer bg-[#161616] text-[#DDF247] font-semibold font-manrope text-sm w-[230px] p-2.5 rounded-[14px] flex items-center justify-center">
              Create Your First NFT
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <GoArrowUpRight className="ml-2 text-2xl" />
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Image positioned on the right side */}
      <motion.img
        src="/MaskImageMarket.png"
        alt="NFT"
        className="absolute top-0 right-0 h-full w-auto object-cover"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </div>
  );
};

export default CallToAction;
