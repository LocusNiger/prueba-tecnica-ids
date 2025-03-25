import ProductCard from "./ProductCard";

const Carrusel = () => {
  return (
    /* Contenedor carrusel */
    <div className="w-full border border-red-400 flex flex-col mt-10 py-2 gap-10">
      <ProductCard />
      {/* Indicador */}
      <div className="flex items-center justify-center gap-6">
        <button className="cursor-pointer text-base font-semibold font-manrope text-[#DDF247]">
          1
        </button>
        <div className="w-[30px] h-[1px] bg-[#DDF247]"></div>
        <button className="cursor-pointer text-base font-semibold font-manrope text-[#FFFFFF]">
          2
        </button>
        <button className="cursor-pointer text-base font-semibold font-manrope text-[#FFFFFF]">
          3
        </button>
        <button className="cursor-pointer text-base font-semibold font-manrope text-[#FFFFFF]">
          4
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
