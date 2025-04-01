import { FaChevronDown, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import SellerCard from "./SellerCard";

const TopSellerCarrusel = () => {
  const sellers = [
    { name: "Courtney Henry", index: 1 },
    { name: "Robertson", index: 2 },
    { name: "Midjourney NFTs", index: 3 },
    { name: "Kristin Watson", index: 4 },
    { name: "Dianne Russell", index: 5 },
    { name: "Jenny Wilson", index: 6 },
  ];
  return (
    <div className="w-full flex mt-10 py-2 items-center justify-center">
      <div className="border border-[#FFFFFF1A] bg-[#FFFFFF1A] p-2.5 rounded-full">
        <FaChevronLeft className="text-[#FFFFFF] cursor-pointer" />
      </div>
      <div className="flex flex-col items-start w-[1110px] gap-[30px] max-w-7xl">
        {/* Textos */}
        <div className="flex gap-2 items-center">
          <h3 className="text-3xl text-[#FFFFFF] font-manrope font-semibold">
            Top Seller In
          </h3>
          <h3 className="text-3xl text-[#DDF247] font-manrope font-semibold">
            1 day
          </h3>
          <FaChevronDown className="h-3.5 w-3.5 text-[#e4ff40]" />
        </div>
        {/* Sellers */}
        <div className="flex justify-around w-full">
          {sellers.map((seller) => (
            <SellerCard seller={seller} key={seller.index} />
          ))}
        </div>
      </div>
      <div className="border border-[#DDF247] bg-[#DDF247] p-2.5 rounded-full">
        <FaChevronRight className="text-[#161616] cursor-pointer" />
      </div>
    </div>
  );
};

export default TopSellerCarrusel;
