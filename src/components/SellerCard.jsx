import { FaEthereum } from "react-icons/fa";

const SellerCard = ({ seller }) => {
  return (
    <div className="flex flex-col w-[160px] h-[171px] gap-[14px]">
      {/* Contenedor imagen */}
      <div className="relative w-[106px] h-[106px] bg-[#2E2E2E] rounded-full self-center">
        {/* Index */}
        <div
          className={`absolute left-[70px] top-0 w-[24px] h-[24px] rounded-full flex items-center justify-center ${
            seller.index === 1 || seller.index === 2 || seller.index === 3
              ? "bg-[#DDF247]"
              : "bg-[#DEE8E8]"
          }`}
        >
          <span className="text-sm font-manrope font-semibold text-[#161616]">
            {seller.index}
          </span>
        </div>
      </div>

      {/* Contenedor textos */}
      <div className="flex flex-col w-[160px] h-[51px] gap-[4px]">
        <p className="text-[#FFFFFF] font-manrope font-semibold text-lg text-center">
          {seller.name}
        </p>
        <div className="flex items-center justify-center gap-1">
          <FaEthereum className="text-[#565656]" />
          <p className="font-azeret-mono text-sm text-[#565656]">7,080.95</p>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
