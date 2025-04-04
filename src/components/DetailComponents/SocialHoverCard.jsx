import { AiOutlineLink } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const SocialHoverCard = () => {
  return (
    <div className="w-[252px] h-[174px] rounded-[20px] p-5 bg-[#232323] flex flex-col justify-between">
      <div className="flex gap-2.5 items-center h-[34px] justify-start">
        <AiOutlineLink
          className="text-white border rounded-full p-1.5 bg-[#2E2E2E] border-[#2E2E2E] hover:bg-[#3A3A3A] hover:border-[#3A3A3A] transition-all duration-200"
          size={30}
        />
        <p className="text-sm font-azeret-mono text-white">Copy link</p>
      </div>
      <div className="flex gap-2.5 items-center h-[34px] justify-start">
        <FaFacebookF
          className="text-white border rounded-full p-1.5 bg-[#2E2E2E] border-[#2E2E2E] hover:bg-[#3A3A3A] hover:border-[#3A3A3A] transition-all duration-200"
          size={30}
        />
        <p className="text-sm font-azeret-mono text-white">Share on Facebook</p>
      </div>
      <div className="flex gap-2.5 items-center h-[34px] justify-start">
        <FaTwitter
          className="text-white border rounded-full p-1.5 bg-[#2E2E2E] border-[#2E2E2E] hover:bg-[#3A3A3A] hover:border-[#3A3A3A] transition-all duration-200"
          size={30}
        />
        <p className="text-sm font-azeret-mono text-white">Share on Twitter</p>
      </div>
    </div>
  );
};

export default SocialHoverCard;
