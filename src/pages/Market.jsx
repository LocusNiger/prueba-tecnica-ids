import CallToAction from "../components/MarketComponents/CallToAction";
import MarketSearchbar from "../components/MarketComponents/MarketSearchbar";
import MarketSidebar from "../components/MarketComponents/MarketSidebar";
import TopCreators from "../components/MarketComponents/TopCreators";
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
      <div className="flex-1 py-10 px-4 xl:px-[50px] gap-10 min-w-[800px] flex flex-col 3xl:grid 3xl:grid-cols-3 3xl:grid-rows-2 3xl:gap-4">
        <div className="w-full flex flex-col gap-10 3xl:col-span-2 3xl:row-span-2">
          <MarketSearchbar />
          <CallToAction />
          <TrendingNFTs />
        </div>
        <div className="3xl:row-span-2 3xl:col-start-3">
          <TopCreators />
        </div>
      </div>
    </div>
  );
};

export default Market;
