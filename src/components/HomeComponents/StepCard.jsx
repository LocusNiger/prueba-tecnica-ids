const StepCard = ({ step }) => {
  return (
    <div className="h-[272px] w-[255px] gap-[30px] flex flex-col items-center">
      <div className="w-[90px] h-[90px] border rounded-[20px] border-[#ffa3dc18] flex items-center justify-center bg-[#191919] shadow-[0px_15px_30px_-6px_#0000008C]">
        <img src={step.image} alt={step.title} />
      </div>
      <div className="w-[255px] h-[152px] flex flex-col items-center gap-[20px]">
        <p className="font-azeret-mono text-[12px] text-[#FFFFFF87] uppercase">
          Step {step.index}
        </p>
        <p className="font-manrope font-semibold text-xl text-[#FFFFFF] text-center">
          {step.title}
        </p>
        <p className="font-azeret-mono text-sm text-[#FFFFFF87] text-center">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
