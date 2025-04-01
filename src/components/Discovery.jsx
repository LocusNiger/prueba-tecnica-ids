import { GoArrowRight } from "react-icons/go";
import Filters from "./Filters";
import ProductsHome from "./ProductsHome";

const Discovery = () => {
  return (
    <div className="w-[1110px] flex flex-col mt-6 py-2 gap-8 items-center justify-center border border-red-500">
      {/* Textos */}
      <div className="flex items-center justify-between md:w-[1110px] gap-6 max-w-7xl">
        <h3 className="text-3xl text-[#FFFFFF] font-manrope font-semibold">
          Discovery Item
        </h3>
        <div className="flex items-center gap-2">
          <p className="text-sm text-[#FFFFFF] font-manrope font-semibold">
            Discover More
          </p>
          <div className="border border-[#FFFFFF1A] bg-[#FFFFFF1A] p-1 rounded-full">
            <GoArrowRight className="text-[#FFFFFF]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-[1110px] max-w-7xl gap-8">
        <Filters />
        <ProductsHome />
        <ProductsHome />
      </div>
    </div>
  );
};

export default Discovery;
