import TopCreatorsCard from "./TopCreatorsCard";

const TopCreators = () => {
  return (
    <div className="w-[400px]  rounded-[20px] flex flex-col gap-[30px] p-5 bg-[#232323]">
      {/* TITLE */}
      <div className="h-[30px] flex justify-between items-center">
        <p className="text-white text-[22px] font-manrope font-semibold">
          Top Creators
        </p>
        <p className="text-white text-sm font-manrope cursor-pointer">
          See all
        </p>
      </div>
      {/* Main content */}
      <TopCreatorsCard
        index={1}
        name={"Brooklyn Simmons"}
        user={"themes"}
        isFollowing={false}
      />
      <TopCreatorsCard
        index={2}
        name={"Marvin McKinney"}
        user={"themes"}
        isFollowing={true}
      />
      <TopCreatorsCard
        index={3}
        name={"Williamson"}
        user={"Williamson"}
        isFollowing={false}
      />
      <TopCreatorsCard
        index={4}
        name={"Leslie Alexander"}
        user={"themes"}
        isFollowing={false}
      />
      <TopCreatorsCard
        index={5}
        name={"Floyd Miles"}
        user={"Floyd Miles"}
        isFollowing={false}
      />
    </div>
  );
};

export default TopCreators;
