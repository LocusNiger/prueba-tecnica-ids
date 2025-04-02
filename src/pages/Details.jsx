import DetailCard from "../components/DetailComponents/DetailCard";
const Details = () => {
  return (
    /* Contenedor principal */
    <div className="flex flex-col items-center justify-center bg-[#161616] gap-[80px] py-16">
      <DetailCard />
      {/* Contenedor related artwork */}
      <div className="w-[1110px] max-w-7xl h-[536px] flex flex-col gap-[30px] border border-green-500">
        Simil discovery pero sin filtros
      </div>
    </div>
  );
};

export default Details;
