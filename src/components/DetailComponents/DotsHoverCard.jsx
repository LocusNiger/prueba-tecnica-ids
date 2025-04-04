import { IoRefresh } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";

const DotsHoverCard = () => {
  return (
    <div className="w-[252px] h-[124px] rounded-[20px] p-5 bg-[#232323] flex flex-col justify-between">
      <div className="flex gap-2.5 items-center h-[34px] justify-start">
        <IoRefresh
          className="text-white border rounded-full p-1.5 bg-[#2E2E2E] border-[#2E2E2E] hover:bg-[#3A3A3A] hover:border-[#3A3A3A] transition-all duration-200"
          size={30}
        />
        <p className="text-sm font-azeret-mono text-white">Refresh metadata</p>
      </div>
      <div className="flex gap-2.5 items-center h-[34px] justify-start">
        <IoFlagOutline
          className="text-white border rounded-full p-1.5 bg-[#2E2E2E] border-[#2E2E2E] hover:bg-[#3A3A3A] hover:border-[#3A3A3A] transition-all duration-200"
          size={30}
        />
        <p className="text-sm font-azeret-mono text-white">Report</p>
      </div>
    </div>
  );
};

export default DotsHoverCard;
