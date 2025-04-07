import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import BackgroundCard from "./BackgroundCard";

const Carrusel = () => {
  return (
    /* Contenedor carrusel */
    <div className="w-full flex flex-col mt-10 py-2 gap-10">
      {/* Contenedor de tarjetas con perspectiva */}
      <div
        className="relative flex items-center justify-center w-full h-[500px]"
        style={{ perspective: "1000px" }}
      >
        {/* Primera tarjeta de la izquierda */}
        <div className="absolute left-[calc(50%-550px)]">
          <BackgroundCard position="left-1" />
        </div>
        {/* Segunda tarjeta de la izquierda */}
        <div className="absolute left-[calc(50%-450px)]">
          <BackgroundCard position="left-2" />
        </div>
        {/* Tercera tarjeta de la izquierda */}
        <div className="absolute left-[calc(50%-350px)]">
          <BackgroundCard position="left-3" />
        </div>

        {/* Tarjeta principal */}
        <div className="z-10">
          <ProductCard />
        </div>

        {/* Primera tarjeta de la derecha */}
        <div className="absolute right-[calc(50%-550px)]">
          <BackgroundCard position="right-1" />
        </div>
        {/* Segunda tarjeta de la derecha */}
        <div className="absolute right-[calc(50%-450px)]">
          <BackgroundCard position="right-2" />
        </div>
        {/* Tercera tarjeta de la derecha */}
        <div className="absolute right-[calc(50%-350px)]">
          <BackgroundCard position="right-3" />
        </div>
      </div>

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
