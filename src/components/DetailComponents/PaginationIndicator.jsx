import { FiPlus } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const PaginationIndicator = ({ total = 5, current = 2 }) => {
  return (
    <div className="flex items-center justify-center h-[24px]">
      <FaArrowLeft className="text-white mr-2" size={18} />
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`flex items-center justify-center mx-1 ${
            index === current ? "text-[#DDF247]" : "text-[#454545]"
          }`}
        >
          <FiPlus size={12} />
        </div>
      ))}
      <FaArrowRight className="text-white ml-2" size={18} />
    </div>
  );
};

export default PaginationIndicator;
