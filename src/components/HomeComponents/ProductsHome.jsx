import { useNavigate } from "react-router";
import DiscoveryProdutCard from "./DiscoveryProdutCard";

const ProductsHome = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-full h-[410px] flex gap-[30px]">
        {/* PRODUCTO */}
        <div onClick={() => navigate("/details")} className="cursor-pointer">
          <DiscoveryProdutCard />
        </div>
        <div onClick={() => navigate("/details")} className="cursor-pointer">
          <DiscoveryProdutCard />
        </div>
        <div onClick={() => navigate("/details")} className="cursor-pointer">
          <DiscoveryProdutCard />
        </div>
        <div onClick={() => navigate("/details")} className="cursor-pointer">
          <DiscoveryProdutCard />
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
