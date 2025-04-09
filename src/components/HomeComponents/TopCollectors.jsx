import { useEffect, useRef } from "react";
import "../../styles/TopCollectors.css";

const collectors = [
  {
    id: 1,
    name: "EHT senders",
    imgSource: "https://picsum.photos/seed/user1/100",
  },
  {
    id: 2,
    name: "Psyop gang",
    imgSource: "https://picsum.photos/seed/user2/100",
  },
  {
    id: 3,
    name: "Sproto gremlins",
    imgSource: "https://picsum.photos/seed/user3/100",
  },
  {
    id: 4,
    name: "Beanz office",
    imgSource: "https://picsum.photos/seed/user4/100",
  },
  {
    id: 5,
    name: "Nakamigos",
    imgSource: "https://picsum.photos/seed/user5/100",
  },
  {
    id: 6,
    name: "The lobstars",
    imgSource: "https://picsum.photos/seed/user6/100",
  },
  {
    id: 7,
    name: "Girls riding things",
    imgSource: "https://picsum.photos/seed/user7/100",
  },
  { id: 8, name: "Muri", imgSource: "https://picsum.photos/seed/user8/100" },
  {
    id: 9,
    name: "Cyberkongz",
    imgSource: "https://picsum.photos/seed/user9/100",
  },
  {
    id: 10,
    name: "Topia worlds",
    imgSource: "https://picsum.photos/seed/user10/100",
  },
  {
    id: 11,
    name: "Mirandus",
    imgSource: "https://picsum.photos/seed/user11/100",
  },
  {
    id: 12,
    name: "Cross the ages",
    imgSource: "https://picsum.photos/seed/user12/100",
  },
  { id: 13, name: "Cel", imgSource: "https://picsum.photos/seed/user13/100" },
  {
    id: 14,
    name: "Alpha gardeners pass",
    imgSource: "https://picsum.photos/seed/user14/100",
  },
  {
    id: 15,
    name: "Neo tokyo",
    imgSource: "https://picsum.photos/seed/user15/100",
  },
  {
    id: 16,
    name: "Genesis oath",
    imgSource: "https://picsum.photos/seed/user16/100",
  },
  {
    id: 17,
    name: "San gri",
    imgSource: "https://picsum.photos/seed/user17/100",
  },
];

const TopCollectors = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (row1 && row2) {
      // Clone the first set of badges to create the infinite effect
      const cloneRow1 = Array.from(row1.children).map((item) =>
        item.cloneNode(true)
      );
      const cloneRow2 = Array.from(row2.children).map((item) =>
        item.cloneNode(true)
      );

      cloneRow1.forEach((item) => row1.appendChild(item));
      cloneRow2.forEach((item) => row2.appendChild(item));
    }
  }, []);

  // Split collectors into two rows
  const firstRowCollectors = collectors.slice(0, 8);
  const secondRowCollectors = collectors.slice(8);

  return (
    <div className="w-full h-[411px] flex flex-col items-center relative">
      {/* Fondo con opacidad */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[1%]"></div>

      {/* Texto "Top Collectors" sobre el fondo */}
      <div className="absolute inset-0 flex items-center justify-center -top-56">
        <span className="text-[180px] font-bold text-transparent bg-black/5 [background-clip:text] [-webkit-text-stroke:2px_white] opacity-5">
          Top Collector
        </span>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-[30px] h-full relative">
        <h2 className="text-white text-[32px] font-bold">
          Top Collector Buys Today
        </h2>

        <div className="w-full max-w-[1920px] mx-auto overflow-hidden h-[180px]">
          {/* First row of badges */}
          <div
            ref={row1Ref}
            className="badge-row flex gap-4 mb-4"
            style={{ animation: "scroll 40s linear infinite" }}
          >
            {firstRowCollectors.map((collector) => (
              <div
                key={collector.id}
                className="badge flex items-center bg-[#333333] rounded-full pl-2.5 pr-5 h-[70px] min-w-fit"
              >
                <div className="rounded-full bg-[#555555] mr-3 w-[50px] h-[50px]">
                  <img
                    src={collector.imgSource}
                    alt={collector.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <span className="text-white text-lg font-semibold">
                  {collector.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second row of badges */}
          <div
            ref={row2Ref}
            className="badge-row flex gap-4"
            style={{ animation: "scroll 40s linear infinite reverse" }}
          >
            {secondRowCollectors.map((collector) => (
              <div
                key={collector.id}
                className="badge flex items-center bg-[#333333] rounded-full pl-2.5 pr-5 h-[70px] min-w-fit"
              >
                <div className="rounded-full bg-[#555555] mr-3 w-[50px] h-[50px]">
                  <img
                    src={collector.imgSource}
                    alt={collector.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <span className="text-white text-lg font-semibold">
                  {collector.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollectors;
