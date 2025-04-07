import { FaHeart, FaEthereum } from "react-icons/fa";

const DiscoveryProdutCard = () => {
  return (
    <div className="w-[255px] h-[408px] rounded-[20px] bg-[#1a1a1a] flex flex-col gap-[12px] overflow-hidden shadow-lg p-[10px]">
      {/* Image Container */}
      <div className="w-[235px] h-[244px] bg-[#2E2E2E] rounded-[20px] relative">
        <img
          src="https://picsum.photos/235/244"
          alt="Product"
          className="w-full h-full object-cover rounded-[20px]"
        />
        {/* Heart Icon Button */}
        <button className="absolute top-3 right-3 bg-[#444444] w-[26px] h-[26px] rounded-full flex items-center justify-center">
          <FaHeart className="text-white text-sm" />
        </button>
      </div>

      {/* Main Content Container */}
      <div className="w-[231px] h-[128px] flex flex-col gap-[16px] mx-auto">
        {/* Content Section */}
        <div className="w-[231px] h-[73px]">
          {/* Product Title */}
          <h3 className="font-manrope text-lg font-semibold text-white mb-2">
            Dayco serpentine belt
          </h3>

          {/* Creator Info */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#333333] mr-2"></div>
            <div>
              <p className="text-xs font-azeret-mono text-[#FFFFFF3A]">
                Created by:
              </p>
              <p className="text-xs font-azeret-mono text-[#FFFFFF]">
                Marvin McKinney
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333]"></div>

        {/* Price Section */}
        <div className="w-[231px] h-[22px] flex justify-between items-center">
          <p className="text-xs font-azeret-mono text-[#FFFFFF3A]">
            Current Bid
          </p>
          <div className="flex justify-center items-center">
            <FaEthereum className="text-white" />
            <p className="font-manrope text-lg font-semibold text-white ml-1">
              0.34
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryProdutCard;
