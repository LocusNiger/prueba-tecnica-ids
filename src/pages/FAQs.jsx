import { GoArrowUpRight } from "react-icons/go";
import FAQCard from "../components/FAQsComponents/FAQCard";
import { PiFilePdfDuotone } from "react-icons/pi";

const FAQs = () => {
  const DataFaq = [
    {
      id: 1,
      title: "Why are NFTs becoming popular?",
      description:
        "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved",
    },
    {
      id: 2,
      title: "How do I keep my NFTs safe?",
      description:
        "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved",
    },
    {
      id: 3,
      title: "What is blockchain?",
      description:
        "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved",
    },
    {
      id: 4,
      title: "What is an NFT?",
      description:
        "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved",
    },
    {
      id: 5,
      title:
        "Where can I learn more about cryptocurrencies, NFTs, and blockchain?",
      description:
        "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved",
    },
    {
      id: 6,
      title: "What is polygon?",
      description:
        "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved",
    },
    {
      id: 7,
      title: "What is the Ledger Nano X?",
      description:
        "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved",
    },
    {
      id: 8,
      title: "How do I set up my Ledger?",
      description:
        "Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#161616] gap-10 py-16 ">
      {/* Título + subtítulo */}
      <div className="text-center w-full flex flex-col gap-4">
        <h1 className="font-manrope text-white text-[40px] font-semibold">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col gap-1">
          <h2 className="text-[#FFFFFF87] text-sm font-normal font-azeret-mono">
            Quick answers to questions you may have. Can’t find what you're
            looking for?
          </h2>
          <h2 className="text-[#FFFFFF87] text-sm font-normal font-azeret-mono">
            Check out our{" "}
            <span className="text-white text-sm font-azeret-mono">
              full documentation
            </span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] ">
        <div className="flex flex-col gap-2.5 h-[85%]  items-center justify-start">
          {/* Card FAQ */}
          {DataFaq.map((item) => (
            <FAQCard
              title={item.title}
              key={item.id}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <button className="cursor-pointer bg-[#DEE8E8] text-black font-semibold font-manrope text-sm w-[216px] px-8 py-3.5 rounded-2xl flex items-center justify-center">
              Document
              <PiFilePdfDuotone className="ml-2 text-2xl" />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-[#DDF247] w-[216px] cursor-pointer text-black font-semibold font-manrope text-sm px-8 py-3.5 rounded-2xl flex items-center justify-center">
              Get In Touch
              <GoArrowUpRight className="ml-2 text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
