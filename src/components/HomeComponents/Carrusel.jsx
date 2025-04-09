import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import BackgroundCard from "./BackgroundCard";

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 4;

  const products = [
    {
      id: 1,
      title: "Dayco serpentine belt",
      price: "0.34",
      image: "https://picsum.photos/326/338?random=1",
      timeLeft: "2h 4m 32s",
    },
    {
      id: 2,
      title: "Crypto Punk #1234",
      price: "1.25",
      image: "https://picsum.photos/326/338?random=2",
      timeLeft: "5h 12m 45s",
    },
    {
      id: 3,
      title: "Bored Ape Yacht Club",
      price: "2.50",
      image: "https://picsum.photos/326/338?random=3",
      timeLeft: "1d 3h 20m",
    },
    {
      id: 4,
      title: "Art Blocks Collection",
      price: "0.75",
      image: "https://picsum.photos/326/338?random=4",
      timeLeft: "3h 45m 10s",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNextClick = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    /* Contenedor carrusel */
    <div className="w-full flex flex-col mt-10 py-2 gap-10 bg-[#161616] overflow-x-hidden">
      {/* Contenedor de tarjetas con perspectiva */}
      <div className="relative flex items-center justify-center w-full h-[500px]">
        {/* Botones de navegación */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 z-20 border border-[#FFFFFF1A] bg-[#FFFFFF1A] p-2.5 rounded-full cursor-pointer"
          onClick={handlePrevClick}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 z-20 border border-[#DDF247] bg-[#DDF247] p-2.5 rounded-full cursor-pointer"
          onClick={handleNextClick}
        >
          <svg
            className="w-6 h-6 text-[#161616]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>

        {/* Contenedor de tarjetas */}
        <motion.div
          key={currentIndex}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative flex items-center justify-center w-full h-[500px]"
          style={{ perspective: "1000px" }}
        >
          {/* Tarjetas de fondo izquierda */}
          <div className="absolute left-[calc(50%-550px)]">
            <BackgroundCard
              position="left-1"
              product={products[(currentIndex - 1 + totalCards) % totalCards]}
            />
          </div>
          <div className="absolute left-[calc(50%-450px)]">
            <BackgroundCard
              position="left-2"
              product={products[(currentIndex - 2 + totalCards) % totalCards]}
            />
          </div>
          <div className="absolute left-[calc(50%-350px)]">
            <BackgroundCard
              position="left-3"
              product={products[(currentIndex - 3 + totalCards) % totalCards]}
            />
          </div>

          {/* Tarjeta principal */}
          <div className="z-10">
            <ProductCard product={products[currentIndex]} />
          </div>

          {/* Tarjetas de fondo derecha */}
          <div className="absolute right-[calc(50%-550px)]">
            <BackgroundCard
              position="right-1"
              product={products[(currentIndex + 1) % totalCards]}
            />
          </div>
          <div className="absolute right-[calc(50%-450px)]">
            <BackgroundCard
              position="right-2"
              product={products[(currentIndex + 2) % totalCards]}
            />
          </div>
          <div className="absolute right-[calc(50%-350px)]">
            <BackgroundCard
              position="right-3"
              product={products[(currentIndex + 3) % totalCards]}
            />
          </div>
        </motion.div>
      </div>

      {/* Indicadores */}
      <div className="flex items-center justify-center gap-6">
        {[...Array(totalCards)].map((_, index) => (
          <>
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`cursor-pointer text-base font-semibold font-manrope ${
                index === currentIndex ? "text-[#DDF247]" : "text-[#FFFFFF]"
              }`}
              onClick={() => handleIndicatorClick(index)}
            >
              {index + 1}
            </motion.button>
            {index === currentIndex && (
              <div className="w-[30px] h-[1px] bg-[#DDF247]"></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
