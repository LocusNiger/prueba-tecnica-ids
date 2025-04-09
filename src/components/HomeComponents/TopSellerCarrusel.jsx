import { useState, useRef } from "react";
import { FaChevronDown, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SellerCard from "./SellerCard";

const TopSellerCarrusel = () => {
  const sellers = [
    {
      name: "Courtney Henry",
      index: 1,
      imgSource: "https://picsum.photos/seed/user1/100",
    },
    {
      name: "Robertson",
      index: 2,
      imgSource: "https://picsum.photos/seed/user2/100",
    },
    {
      name: "Midjourney NFTs",
      index: 3,
      imgSource: "https://picsum.photos/seed/user3/100",
    },
    {
      name: "Kristin Watson",
      index: 4,
      imgSource: "https://picsum.photos/seed/user4/100",
    },
    {
      name: "Dianne Russell",
      index: 5,
      imgSource: "https://picsum.photos/seed/user5/100",
    },
    {
      name: "Jenny Wilson",
      index: 6,
      imgSource: "https://picsum.photos/seed/user6/100",
    },
  ];

  // Estado para el filtro de tiempo
  const [timeFilter, setTimeFilter] = useState("1 day");

  // Referencia al contenedor del carrusel
  const carouselRef = useRef(null);

  // Estado para controlar la posición actual
  const [position, setPosition] = useState(0);

  // Ancho de cada tarjeta + margen
  const cardWidth = 160;

  // Función para navegar a la izquierda
  const handlePrevClick = () => {
    setPosition((prev) => (prev - 1 + sellers.length) % sellers.length);
  };

  // Función para navegar a la derecha
  const handleNextClick = () => {
    setPosition((prev) => (prev + 1) % sellers.length);
  };

  // Función para cambiar el filtro de tiempo
  const toggleTimeFilter = () => {
    const filters = ["1 day", "1 week", "1 month"];
    const currentIndex = filters.indexOf(timeFilter);
    const nextIndex = (currentIndex + 1) % filters.length;
    setTimeFilter(filters[nextIndex]);
  };

  // Crear un array circular para mostrar las tarjetas en el orden correcto
  const getVisibleSellers = () => {
    const result = [];
    for (let i = 0; i < sellers.length; i++) {
      const realIndex = (i + position) % sellers.length;
      result.push(sellers[realIndex]);
    }
    return result;
  };

  return (
    <div className="w-full flex mt-10 py-2 items-center justify-center bg-[#161616]">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="border border-[#FFFFFF1A] bg-[#FFFFFF1A] p-2.5 rounded-full cursor-pointer"
        onClick={handlePrevClick}
      >
        <FaChevronLeft className="text-[#FFFFFF]" />
      </motion.div>

      <div className="flex flex-col items-start w-[1110px] gap-[30px] max-w-7xl">
        {/* Textos */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex gap-2 items-center cursor-pointer"
          onClick={toggleTimeFilter}
        >
          <h3 className="text-3xl text-[#FFFFFF] font-manrope font-semibold">
            Top Seller In
          </h3>
          <h3 className="text-3xl text-[#DDF247] font-manrope font-semibold">
            {timeFilter}
          </h3>
          <FaChevronDown className="h-3.5 w-3.5 text-[#e4ff40]" />
        </motion.div>

        {/* Contenedor del carrusel */}
        <div className="w-full overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex justify-around w-full"
            key={position}
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            exit={{ x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {getVisibleSellers().map((seller) => (
              <motion.div key={seller.index} transition={{ duration: 0.2 }}>
                <SellerCard seller={seller} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="border border-[#DDF247] bg-[#DDF247] p-2.5 rounded-full cursor-pointer"
        onClick={handleNextClick}
      >
        <FaChevronRight className="text-[#161616]" />
      </motion.div>
    </div>
  );
};

export default TopSellerCarrusel;
