import { FiGrid, FiPackage, FiDollarSign } from "react-icons/fi";

export default function Filtros() {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full md:w-[1110px] max-w-7xl">
        {/* Category */}
        <div className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[200px] px-2.5">
          <FiGrid className="mr-2 text-[#FFFFFF]" />
          <span className="font-medium text-sm text-[#FFFFFF]">Category</span>
        </div>
        <div className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[200px] px-4">
          <FiPackage className="mr-2 text-[#FFFFFF]" />
          <span className="font-medium text-sm text-[#FFFFFF]">Items</span>
        </div>
        <div className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[200px] px-4">
          <FiGrid className="mr-2 text-[#FFFFFF]" />
          <span className="font-medium text-sm text-[#FFFFFF]">Status</span>
        </div>
        <div className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[200px] px-4">
          <FiDollarSign className="mr-2 text-[#FFFFFF]" />
          <span className="font-medium text-sm text-[#FFFFFF]">
            Price Range
          </span>
        </div>
        <div className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[254px] px-4">
          <FiDollarSign className="mr-2 text-[#FFFFFF]" />
          <span className="font-medium text-sm text-[#FFFFFF]">
            Sort By: Recently Added
          </span>
        </div>
      </div>
    </div>
  );
}
