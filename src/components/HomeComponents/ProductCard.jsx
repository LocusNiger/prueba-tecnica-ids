import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="mx-auto w-[350px] h-[430px] rounded-4xl bg-[#1E1E1E] shadow-xl">
      <div className="pt-0.5">
        {/* Imagen */}
        <div className="relative bg-[#2E2E2E] mx-3 mt-3 mb-2 rounded-4xl w-[326px] h-[338px]">
          <img
            className="rounded-4xl w-full h-full object-cover"
            alt="NFT"
            src={product.image}
          />

          {/* Badges arriba */}
          <div className="absolute top-3 right-3 flex space-x-2">
            <div className="bg-[#444444] flex items-center justify-center text-[#FFFFFF] font-manrope px-3.5 rounded-full text-[12px] font-semibold">
              {product.timeLeft}
            </div>
            <button
              onClick={toggleFavorite}
              className="bg-[#444444] p-2 rounded-full flex items-center justify-center cursor-pointer transition duration-300"
            >
              {isFavorite ? (
                <FaHeart className="text-red-500 w-5 h-5" />
              ) : (
                <FaRegHeart className="text-white w-5 h-5" />
              )}
            </button>
          </div>

          <div className="absolute top-[83%] left-24">
            <button className="bg-[#DEE8E8] hover:bg-gray-300 text-black font-medium py-2 px-8 rounded-[12px] transition duration-300 cursor-pointer">
              Place Bid
            </button>
          </div>
        </div>

        <div className="">
          <h3 className="text-white text-lg font-medium text-center">
            {product.title}
          </h3>
          <div className="flex items-center justify-center text-white">
            <FaEthereum className="mr-1" />
            <span className="text-white text-base font-medium text-center mb-1">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
