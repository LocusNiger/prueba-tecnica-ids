import { FaEthereum } from "react-icons/fa";

const SellerCard = (seller) => {
  return (
    <div key={seller.name} className="flex flex-col gap-2 items-center">
      <div className="relative w-[106px] h-[106px] bg-[#2E2E2E] rounded-full"></div>
      <div className="absolute w-6 h-6 rounded-full bg-[#DDF247] flex items-center justify-center">
        <p className="text-center font-semibold font-manrope">{seller.index}</p>
      </div>
      <p className="text-[#FFFFFF] font-manrope font-semibold text-lg">
        {seller.name}
      </p>
      <div className="flex items-center gap-1">
        <FaEthereum className="text-[#565656]" />
        <p className="font-azeret-mono text-sm text-[#565656]">7,080.95</p>
      </div>
    </div>
  );
};

export default SellerCard;
