import { GoArrowUpRight } from "react-icons/go";
import Carrusel from "../components/Carrusel";
import TopSellerCarrusel from "../components/TopSellerCarrusel";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#161616] gap-10 py-16">
      {/* 1er screen */}
      <div className="flex flex-col gap-12">
        {/* Título + subtítulo */}
        <div className="text-center w-full flex flex-col gap-4">
          <h1 className="font-manrope text-white text-[54px] font-semibold">
            World Of Top Works
          </h1>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#FFFFFF87] text-sm font-normal font-azeret-mono">
              Welcome to the world of rare digital art. Explore the best art
              from
            </h2>
            <h2 className="text-[#FFFFFF87] text-sm font-normal font-azeret-mono">
              hand-picked digital artist out there and find the hidden gem.
            </h2>
          </div>
        </div>
        {/* Botones */}
        <div className="flex gap-4 items-center justify-center">
          <div className="flex items-center justify-center">
            <button className="bg-[#DDF247] cursor-pointer text-black font-semibold font-manrope text-sm px-8 py-3.5 rounded-2xl flex items-center justify-center">
              Discover More
              <GoArrowUpRight className="ml-2 text-2xl" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="cursor-pointer bg-[#DEE8E8] text-black font-semibold font-manrope text-sm px-8 py-3.5 rounded-2xl flex items-center justify-center">
              All Collections
              <GoArrowUpRight className="ml-2 text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <Carrusel />
      <TopSellerCarrusel />
    </div>
  );
};

export default Home;
