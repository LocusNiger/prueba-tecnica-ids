import { motion } from "framer-motion";

const TopCreatorsCard = ({ index, name, user, isFollowing }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-5">
      <div className="h-[60px] w-full flex justify-between items-center gap-2.5">
        <p className="font-manrope text-white font-semibold text-[18px]">
          {index}.
        </p>
        <div className="flex items-center h-[60px] w-[222px]">
          <motion.div
            className="w-[60px] h-[60px] rounded-full bg-[#2E2E2E] mr-2 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <div>
            <p className="text-[16px] font-manrope font-semibold text-[#FFFFFF]">
              {name}
            </p>
            <p className="text-sm font-azeret-mono text-[#FFFFFF]/50">
              @{user}
            </p>
          </div>
        </div>
        <button
          className={`${
            isFollowing ? "bg-[#DDF247]" : "bg-[#DEE8E8]"
          } w-[100px] h-[44px] rounded-[12px] p-2.5 text-sm font-manrope font-semibold cursor-pointer`}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default TopCreatorsCard;
