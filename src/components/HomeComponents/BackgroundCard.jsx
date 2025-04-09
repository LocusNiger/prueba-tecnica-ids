import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

const BackgroundCard = ({ position, product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  // Estilos específicos según la posición
  let transformStyle = "";
  switch (position) {
    case "left-1":
    case "left-2":
    case "left-3":
      transformStyle = "matrix(1.00,0.10,0.00,1.00,0,0)";
      break;
    case "right-1":
    case "right-2":
    case "right-3":
      transformStyle = "matrix(1.00,-0.10,0.00,1.00,0,0)";
      break;
    default:
      break;
  }

  return (
    <div
      className="mx-auto w-[350px] h-[430px] rounded-4xl bg-[#1E1E1E] shadow-xl backdrop-blur-md"
      style={{ transform: transformStyle }}
    >
      <div className="pt-0.5">
        {/* Imagen */}
        <div className="relative bg-[#2E2E2E] mx-3 mt-3 mb-2 rounded-4xl w-[326px] h-[338px]">
          <img
            className="rounded-4xl w-full h-full object-cover blur-[2px]"
            alt="NFT"
            src={product.image}
          />

          {/* Badges arriba */}
          <div className="absolute top-3 right-3 flex space-x-2">
            <div className="bg-[#444444] blur-xs flex items-center justify-center text-[#FFFFFF] font-manrope px-3.5 rounded-full text-[12px] font-semibold backdrop-blur-sm">
              {product.timeLeft}
            </div>
            <button
              onClick={toggleFavorite}
              className="bg-[#444444] blur-xs p-2 rounded-full flex items-center justify-center cursor-pointer transition duration-300 backdrop-blur-sm"
            >
              {isFavorite ? (
                <FaHeart className="text-red-500 w-5 h-5" />
              ) : (
                <FaRegHeart className="text-white w-5 h-5" />
              )}
            </button>
          </div>

          <div className="absolute top-[83%] left-24">
            <button className="bg-[#DEE8E8] hover:bg-gray-300 text-black font-medium py-2 px-8 rounded-[12px] transition duration-300 cursor-pointer blur-xs">
              Place Bid
            </button>
          </div>
        </div>

        <div className="backdrop-blur-sm">
          <h3 className="text-white text-lg font-medium text-center blur-xs">
            {product.title}
          </h3>
          <div className="flex items-center justify-center text-white">
            <FaEthereum className="mr-1 blur-xs" />
            <span className="text-white text-base font-medium text-center mb-1 blur-xs">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCard;
