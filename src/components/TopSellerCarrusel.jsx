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
    <div className="w-full flex flex-col mt-10 py-2 gap-10 items-center justify-center border border-red-500">
      <div className="border border-yellow-400 flex flex-col items-start w-[1100px] gap-6 max-w-7xl">
        {/* Textos */}
        <div className="flex gap-2">
          <h3 className="text-3xl text-[#FFFFFF] font-manrope font-semibold">
            Top Seller In
          </h3>
          <h3 className="text-3xl text-[#DDF247] font-manrope font-semibold">
            1 day
          </h3>
        </div>
        {/* Sellers */}
        <div className="flex justify-between w-full">
          {sellers.map((seller) => (
            <SellerCard seller={seller} key={seller.index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellerCarrusel;
