import DiscoveryProdutCard from "./DiscoveryProdutCard";

const ProductsHome = () => {
  return (
    <div className="w-full border border-blue-500">
      <div className="w-full h-[410px] border border-b-emerald-700 flex gap-[30px]">
        {/* PRODUCTO */}
        <DiscoveryProdutCard />
        <DiscoveryProdutCard />
        <DiscoveryProdutCard />
        <DiscoveryProdutCard />
      </div>
    </div>
  );
};

export default ProductsHome;
