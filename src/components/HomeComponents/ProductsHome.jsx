import DiscoveryProdutCard from "./DiscoveryProdutCard";

const ProductsHome = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[410px] flex gap-[30px]">
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
