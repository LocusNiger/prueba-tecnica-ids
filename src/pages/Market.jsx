import CallToAction from "../components/MarketComponents/CallToAction";
import MarketSearchbar from "../components/MarketComponents/MarketSearchbar";
import MarketSidebar from "../components/MarketComponents/MarketSidebar";
import TrendingNFTs from "../components/MarketComponents/TrendingNFTs";

const Market = () => {
  return (
    <div
      className="flex min-h-screen bg-[#161616] overflow-x-auto"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // Internet Explorer 10+
      }}
      css={`
        &::-webkit-scrollbar {
          display: none; // Safari and Chrome
        }
      `}
    >
      <MarketSidebar />
      <div className="flex-1 flex py-10 px-4 xl:px-[50px] gap-10 min-w-[800px]">
        <div className="w-full flex flex-col gap-10">
          <MarketSearchbar />
          <CallToAction />
          <TrendingNFTs />
        </div>
      </div>
    </div>
  );
};

export default Market;
