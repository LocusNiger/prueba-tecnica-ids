import { GoArrowRight } from "react-icons/go";
import DetailCard from "../components/DetailComponents/DetailCard";
import ProductsHome from "../components/HomeComponents/ProductsHome";
import PaginationIndicator from "../components/DetailComponents/PaginationIndicator";
const Details = () => {
  return (
    /* Contenedor principal */
    <div className="flex flex-col items-center justify-center bg-[#161616] gap-[80px] py-44">
      <DetailCard />
      {/* Contenedor related artwork */}
      <div className="w-[1110px] max-w-7xl h-[536px] flex flex-col gap-[30px] ">
        {/* Textos */}
        <div className="flex items-center justify-between md:w-[1110px] gap-6 max-w-7xl">
          <h3 className="text-3xl text-[#FFFFFF] font-manrope font-semibold">
            Related Artworks
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
        <div className="w-full h-[462px] flex flex-col">
          <ProductsHome />
        </div>
        <PaginationIndicator total={5} current={2} />
      </div>
    </div>
  );
};

export default Details;
