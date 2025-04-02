import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiGrid, FiPackage, FiDollarSign } from "react-icons/fi";

export default function Filtros() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const dropdownOptions = {
    category: [
      "All",
      "Art",
      "Collectibles",
      "Domain Names",
      "Music",
      "Photography",
      "Sports",
      "Trading Cards",
      "Utility",
      "Virtual Worlds",
    ],
    items: ["All", "Single Items", "Bundles"],
    status: ["All", "Buy Now", "On Auction", "New", "Has Offers"],
    priceRange: [
      "All",
      "Under $25",
      "$25 to $100",
      "$100 to $1,000",
      "Over $1,000",
    ],
    sortBy: [
      "Recently Added",
      "Price: Low to High",
      "Price: High to Low",
      "Most Viewed",
      "Most Favorited",
    ],
  };

  return (
    <div className="w-full">
      <div className="flex justify-between w-full md:w-[1110px] max-w-7xl">
        {/* Category */}
        <div className="relative">
          <div
            className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[200px] px-2.5 justify-between cursor-pointer"
            onClick={() => toggleDropdown("category")}
          >
            <div className="flex items-center">
              <FiGrid className="mr-2 text-[#FFFFFF]" />
              <span className="font-medium text-sm text-[#FFFFFF]">
                Category
              </span>
            </div>
            <FaChevronDown
              className={`text-[#FFFFFF1F] text-[12px] transition-transform ${
                openDropdown === "category" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openDropdown === "category" && (
            <div className="absolute z-10 mt-2 w-[200px] bg-[#1A1A1A] border border-[#FFFFFF1F] rounded-[12px] py-2">
              {dropdownOptions.category.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm text-[#FFFFFF] hover:bg-[#FFFFFF1F] cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Items */}
        <div className="relative">
          <div
            className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[200px] px-2.5 justify-between cursor-pointer"
            onClick={() => toggleDropdown("items")}
          >
            <div className="flex items-center">
              <FiPackage className="mr-2 text-[#FFFFFF]" />
              <span className="font-medium text-sm text-[#FFFFFF]">Items</span>
            </div>
            <FaChevronDown
              className={`text-[#FFFFFF1F] text-[12px] transition-transform ${
                openDropdown === "items" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openDropdown === "items" && (
            <div className="absolute z-10 mt-2 w-[200px] bg-[#1A1A1A] border border-[#FFFFFF1F] rounded-[12px] py-2">
              {dropdownOptions.items.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm text-[#FFFFFF] hover:bg-[#FFFFFF1F] cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status */}
        <div className="relative">
          <div
            className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[200px] px-2.5 justify-between cursor-pointer"
            onClick={() => toggleDropdown("status")}
          >
            <div className="flex items-center">
              <FiGrid className="mr-2 text-[#FFFFFF]" />
              <span className="font-medium text-sm text-[#FFFFFF]">Status</span>
            </div>
            <FaChevronDown
              className={`text-[#FFFFFF1F] text-[12px] transition-transform ${
                openDropdown === "status" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openDropdown === "status" && (
            <div className="absolute z-10 mt-2 w-[200px] bg-[#1A1A1A] border border-[#FFFFFF1F] rounded-[12px] py-2">
              {dropdownOptions.status.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm text-[#FFFFFF] hover:bg-[#FFFFFF1F] cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="relative">
          <div
            className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[200px] px-2.5 justify-between cursor-pointer"
            onClick={() => toggleDropdown("priceRange")}
          >
            <div className="flex items-center">
              <FiDollarSign className="mr-2 text-[#FFFFFF]" />
              <span className="font-medium text-sm text-[#FFFFFF]">
                Price Range
              </span>
            </div>
            <FaChevronDown
              className={`text-[#FFFFFF1F] text-[12px] transition-transform ${
                openDropdown === "priceRange" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openDropdown === "priceRange" && (
            <div className="absolute z-10 mt-2 w-[200px] bg-[#1A1A1A] border border-[#FFFFFF1F] rounded-[12px] py-2">
              {dropdownOptions.priceRange.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm text-[#FFFFFF] hover:bg-[#FFFFFF1F] cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sort By */}
        <div className="relative">
          <div
            className="border border-[#FFFFFF1F] rounded-[12px] flex items-center h-10 w-[254px] px-2.5 justify-between cursor-pointer"
            onClick={() => toggleDropdown("sortBy")}
          >
            <div className="flex items-center">
              <FiDollarSign className="mr-2 text-[#FFFFFF]" />
              <span className="font-medium text-sm text-[#FFFFFF]">
                Sort By: Recently Added
              </span>
            </div>
            <FaChevronDown
              className={`text-[#FFFFFF1F] text-[12px] transition-transform ${
                openDropdown === "sortBy" ? "rotate-180" : ""
              }`}
            />
          </div>
          {openDropdown === "sortBy" && (
            <div className="absolute z-10 mt-2 w-[254px] bg-[#1A1A1A] border border-[#FFFFFF1F] rounded-[12px] py-2">
              {dropdownOptions.sortBy.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm text-[#FFFFFF] hover:bg-[#FFFFFF1F] cursor-pointer"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
