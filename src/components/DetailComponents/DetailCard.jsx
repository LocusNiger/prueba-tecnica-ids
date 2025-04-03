import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbCircles } from "react-icons/tb";
import { FaEthereum, FaRegHeart } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiDotsThreeOutline } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import ChartComponent from "./ChartComponent";

const DetailCard = () => {
  return (
    <div className="w-[1110px] max-w-7xl h-[1526px] flex flex-col gap-[20px]">
      {/* Contenedor product */}
      <div className="w-full h-[903px] gap-[33px] flex">
        {/* IMG */}
        <div className="w-[540px] h-[903px] bg-[#2E2E2E] rounded-[20px]"></div>
        {/* CONTENIDO */}
        <div className="w-[537px] h-[903px] gap-[20px] flex flex-col">
          {/* TOP */}
          <div className="w-[537px] h-[189px] flex flex-col gap-[30px]">
            {/* TITLE */}
            <div className="w-full flex-col h-full justify-between items-start">
              <div className="w-full flex h-[20px] justify-between">
                <div className="flex gap-2.5">
                  <p className="text-[#DDF247] font-manrope text-sm font-semibold">
                    8SIAN Main Collection
                  </p>
                  <RiVerifiedBadgeFill className="text-lg text-[#DDF247]" />
                </div>
                <div className="flex gap-2.5">
                  <IoShareSocialOutline className="text-lg text-[#919191]" />
                  <PiDotsThreeOutline className="text-lg text-[#919191]" />
                </div>
              </div>
              <div className="w-full h-[44px]">
                <h2 className="text-[#FFFFFF] font-manrope text-[32px] font-semibold">
                  Themesflat #0270
                </h2>
              </div>
              <div className="w-full h-[38px] mt-5">
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-[#333333] mr-2"></div>
                  <div>
                    <p className="text-xs font-azeret-mono text-[#FFFFFF3A]">
                      Owned by:
                    </p>
                    <p className="text-xs font-azeret-mono text-[#FFFFFF]">
                      Marvin McKinney
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* SUBCONTENT */}
            <div className="w-full h-[39px] flex gap-2.5">
              <div className="w-[111px] h-full border rounded-[12px] border-[#FFFFFF1F] px-3 py-2.5 flex items-center justify-between">
                <MdOutlineRemoveRedEye className="text-[#FFFFFF] text-lg" />
                <p className="text-[#FFFFFF] text-sm font-manrope font-semibold">
                  208 View
                </p>
              </div>
              <div className="w-[162px] h-full border rounded-[12px] border-[#FFFFFF1F] px-3 py-2.5 flex items-center justify-between">
                <TbCircles className="text-[#FFFFFF] text-lg" />
                <p className="text-[#FFFFFF] text-sm font-manrope font-semibold">
                  Top #2 Trending
                </p>
              </div>
              <div className="w-[130px] h-full border rounded-[12px] border-[#FFFFFF1F] px-3 py-2.5 flex items-center justify-between">
                <FaRegHeart className="text-[#FFFFFF] text-lg" />
                <p className="text-[#FFFFFF] text-sm font-manrope font-semibold">
                  10 Favorites
                </p>
              </div>
            </div>
          </div>
          {/* SALE */}
          <div className="w-[537px] h-[165px] rounded-[20px] p-5 bg-[#232323] flex flex-col gap-[16px]">
            {/* Timer section */}
            <div className="flex items-center gap-2">
              <FiClock className="text-white" size={15} />
              <span className="text-white text-sm font-manrope font-semibold">
                Sale Ends May 22 At 9:39
              </span>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#343434] w-full" />

            {/* Price and bid section */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#646464] text-[12px] mb-1 font-azeret-mono">
                  Current price
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-manrope text-[32px] font-bold">
                    0,032 ETH
                  </span>
                  <span className="text-[#646464] text-sm font-azeret-mono">
                    $58,11
                  </span>
                </div>
              </div>

              <button className="bg-[#DDF247] text-black font-semibold p-2.5 rounded-[14px] w-[216px] h-[50px] flex justify-center items-center gap-2">
                Place A Bid
                <GoArrowUpRight size={18} />
              </button>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="w-[537px] h-[180px] rounded-[20px] p-5 bg-[#232323] flex flex-col gap-[16px]">
            <div className="h-[19px] flex justify-between items-center">
              {/* Description section */}
              <div className="flex items-center gap-2">
                <HiMiniPresentationChartBar className="text-white" size={15} />
                <span className="text-white text-sm font-manrope font-semibold">
                  Description
                </span>
              </div>
              <FaChevronDown className="text-[#646464]" size={12} />
            </div>
            {/* Divider */}
            <div className="h-[1px] bg-[#343434] w-full" />
            {/* Description content */}
            <p className="text-[#FFFFFF87] text-sm font-azeret-mono">
              8,888 NFTs of beautiful, Asian women painstakingly-crafted where
              even the most intricate details are steeped in historical
              significance. We envision 8SIAN being a global, inclusive
              community{" "}
              <span className="text-[#DDF247] text-sm font-azeret-mono">
                see more
              </span>
            </p>
          </div>
          {/* PRICE HISTORY */}
          <div className="w-[537px] h-[309px] rounded-[20px] p-5 bg-[#232323] flex flex-col gap-[16px]">
            <div className="h-[19px] flex justify-between items-center">
              {/* Description section */}
              <div className="flex items-center gap-2">
                <HiMiniPresentationChartBar className="text-white" size={15} />
                <span className="text-white text-sm font-manrope font-semibold">
                  Price History
                </span>
              </div>
              <FaChevronDown className="text-[#646464]" size={12} />
            </div>
            {/* Divider */}
            <div className="h-[1px] bg-[#343434] w-full" />
            {/* Chart */}
            <div className="w-full h-[217px] flex justify-center">
              <ChartComponent />
            </div>
          </div>
        </div>
      </div>
      {/* Details */}
      <div className="w-full h-[264px] rounded-[20px] p-5 flex flex-col bg-[#232323] gap-[16px]">
        <div className="h-[19px] flex justify-between items-center">
          {/* Details section */}
          <div className="flex items-center gap-2">
            <HiMiniPresentationChartBar className="text-white" size={15} />
            <span className="text-white text-sm font-manrope font-semibold">
              Details
            </span>
          </div>
          <FaChevronDown className="text-[#646464]" size={12} />
        </div>
        {/* Divider */}
        <div className="h-[1px] bg-[#343434] w-full" />
        {/* Details content */}
        <div className="flex flex-col justify-between gap-2 w-full h-[172px]">
          <div className="flex w-full justify-between">
            <p className="font-azeret-mono text-white text-sm">
              Contact Address
            </p>
            <p className="font-azeret-mono text-[#DDF247] text-sm">
              0x1984...c38f
            </p>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-full justify-between">
              <p className="font-azeret-mono text-white text-sm">Token ID</p>
              <p className="font-azeret-mono text-[#DDF247] text-sm">0270</p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-full justify-between">
              <p className="font-azeret-mono text-white text-sm">
                Token Standard
              </p>
              <p className="font-azeret-mono text-[#FFFFFF] text-sm">ERC-721</p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-full justify-between">
              <p className="font-azeret-mono text-white text-sm">Chain</p>
              <p className="font-azeret-mono text-[#FFFFFF] text-sm">
                Ethereum
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-full justify-between">
              <p className="font-azeret-mono text-white text-sm">
                Last Updated
              </p>
              <p className="font-azeret-mono text-[#FFFFFF] text-sm">
                8 months ago
              </p>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex w-full justify-between">
              <p className="font-azeret-mono text-white text-sm">
                Creator Earnings
              </p>
              <p className="font-azeret-mono text-[#FFFFFF] text-sm">8%</p>
            </div>
          </div>
        </div>
      </div>
      {/* Offer */}
      <div className="w-full h-[319px] rounded-[20px] p-5 flex flex-col bg-[#232323] gap-[16px]">
        <div className="h-[19px] flex justify-between items-center">
          {/* Offers section */}
          <div className="flex items-center gap-2">
            <HiMiniPresentationChartBar className="text-white" size={15} />
            <span className="text-white text-sm font-manrope font-semibold">
              Offers
            </span>
          </div>
          <FaChevronDown className="text-[#646464]" size={12} />
        </div>
        {/* Divider */}
        <div className="h-[1px] bg-[#343434] w-full" />
        {/* Offers content */}
        <div className="flex flex-col gap-4 w-full h-[227px]">
          {/* table header */}
          <div className="flex w-full justify-between">
            <div className="w-[168px] flex items-start">
              <span className="font-manrope text-white text-sm font-semibold">
                Price
              </span>
            </div>
            <div className="w-[168px] flex items-start">
              <span className="font-manrope text-white text-sm font-semibold">
                USD Price
              </span>
            </div>
            <div className="w-[168px] flex items-start font-manrope text-white text-sm">
              <span className="font-manrope text-white text-sm font-semibold">
                Quantity
              </span>
            </div>
            <div className="w-[168px] flex items-start font-manrope text-white text-sm">
              <span className="font-manrope font-semibold text-white text-sm">
                Floor Diference
              </span>
            </div>
            <div className="w-[168px] flex items-start font-manrope text-white text-sm">
              <span className="font-manrope font-semibold text-white text-sm">
                Expiration
              </span>
            </div>
            <div className="w-[168px] flex items-start font-manrope text-white text-sm">
              <span className="font-semibold font-manrope text-white text-sm">
                Form
              </span>
            </div>
          </div>
          {/* divider */}
          <div className="h-[1px] bg-[#343434] w-full" />
          {/* table content */}
          <div className="w-full h-[175px] gap-3.5 flex flex-col">
            <div className="flex w-full justify-between">
              <div className="w-[168px] flex items-start">
                <FaEthereum className="text-white mr-1.5" />
                <span className="font-azeret-mono text-white text-sm">
                  0,0034
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  $6,60
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">3</span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  90% below
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  In 26 day
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-[#DDF247] text-sm">
                  273E40
                </span>
              </div>
            </div>
            {/* divider */}
            <div className="h-[1px] bg-[#343434] w-full" />
            <div className="flex w-full justify-between">
              <div className="w-[168px] flex items-start">
                <FaEthereum className="text-white mr-1.5" />
                <span className="font-azeret-mono text-white text-sm">
                  0,0034
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  $6,13
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">1</span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  90% below
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  In 10 day
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-[#DDF247] text-sm">
                  273E40
                </span>
              </div>
            </div>
            {/* divider */}
            <div className="h-[1px] bg-[#343434] w-full" />
            <div className="flex w-full justify-between">
              <div className="w-[168px] flex items-start">
                <FaEthereum className="text-white mr-1.5" />
                <span className="font-azeret-mono text-white text-sm">
                  0,0033
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  $6,11
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">3</span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  91% below
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  In 23 day
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-[#DDF247] text-sm">
                  273E40
                </span>
              </div>
            </div>
            {/* divider */}
            <div className="h-[1px] bg-[#343434] w-full" />
            <div className="flex w-full justify-between">
              <div className="w-[168px] flex items-start">
                <FaEthereum className="text-white mr-1.5" />
                <span className="font-azeret-mono text-white text-sm">
                  0,0033
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  $6,11
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">1</span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  91% below
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-white text-sm">
                  In 20 day
                </span>
              </div>
              <div className="w-[168px] flex items-start">
                <span className="font-azeret-mono text-[#DDF247] text-sm">
                  273E40
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
