import { useEffect, useRef } from "react";
import "../../styles/TopCollectors.css";

const collectors = [
  { id: 1, name: "EHT senders" },
  { id: 2, name: "Psyop gang" },
  { id: 3, name: "Sproto gremlins" },
  { id: 4, name: "Beanz office" },
  { id: 5, name: "Nakamigos" },
  { id: 6, name: "The lobstars" },
  { id: 7, name: "Girls riding things" },
  { id: 8, name: "Muri" },
  { id: 9, name: "Cyberkongz" },
  { id: 10, name: "Topia worlds" },
  { id: 11, name: "Mirandus" },
  { id: 12, name: "Cross the ages" },
  { id: 13, name: "Cel" },
  { id: 14, name: "Alpha gardeners pass" },
  { id: 15, name: "Neo tokyo" },
  { id: 16, name: "Genesis oath" },
  { id: 17, name: "San gri" },
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
        <span className="text-[180px] font-bold opacity-20">Top Collector</span>
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
                <div className="rounded-full bg-[#555555] mr-3 w-[50px] h-[50px]"></div>
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
                <div className="rounded-full bg-[#555555] mr-3 w-[50px] h-[50px]"></div>
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
