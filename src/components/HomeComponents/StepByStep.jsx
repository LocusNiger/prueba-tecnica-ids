import StepCard from "./StepCard";

const StepByStep = () => {
  const steps = [
    {
      index: 1,
      title: "Set Up Your Wallet",
      description:
        "Fusce non dignissim velit, sit amet semper eros. Quisque orci est",
      image: "/Wallet.png",
    },
    {
      index: 2,
      title: "Create your collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus",
      image: "/Bill.png",
    },
    {
      index: 3,
      title: "Add your NFTs",
      description:
        "Suspendisse porttitor id est non accumsan. Cras vel viverra velit",
      image: "/MarketDown.png",
    },
    {
      index: 4,
      title: "Sell your NFTs",
      description:
        "Maecenas non semper quam. Vivamus et arcu condimentum ipsum consectetur",
      image: "/MoneyBag.png",
    },
  ];

  return (
    <div className="bg-[#161616] w-[1110px] h-[346px] flex flex-col mt-6 py-2 gap-[30px] items-center justify-center">
      {/* Title */}
      <div className="w-full h-[44px]">
        <h3 className="text-[32px] text-[#FFFFFF] text-center font-manrope font-semibold">
          Step by step Create and Sell Your NFTs
        </h3>
      </div>
      {/* Cards */}
      <div className="w-full h-[272px] flex items-center justify-center relative">
        {steps.map((step, index) => (
          <>
            <StepCard step={step} key={step.index} />
            {index < steps.length - 1 && (
              <div className="relative h-[272px] w-[100px] flex flex-col items-center justify-start top-10">
                <img src="/FlechaVector.svg" alt="Flecha" className="" />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default StepByStep;
