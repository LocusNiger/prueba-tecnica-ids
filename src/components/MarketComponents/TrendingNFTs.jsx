import TrendingNFTCard from "./TrendingNFTCard";
import BadgesFilter from "./BadgesFilter";

const TrendingNFTs = () => {
  return (
    <div className="w-full flex flex-col gap-[30px] max-w-[1100px]">
      <h2 className="font-manrope text-white text-[32px] font-semibold">
        Trending NFTs
      </h2>
      {/* TAB */}
      <BadgesFilter />
      <div className="flex items-center justify-between flex-wrap gap-4">
        <TrendingNFTCard />
        <TrendingNFTCard />
        <TrendingNFTCard />
        <TrendingNFTCard />
      </div>
    </div>
  );
};

export default TrendingNFTs;
