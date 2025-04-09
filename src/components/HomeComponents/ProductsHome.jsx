import { useNavigate } from "react-router";
import DiscoveryProdutCard from "./DiscoveryProdutCard";
import DiscoveryProductCard from "./DiscoveryProdutCard";

const products = [
  {
    id: 1,
    image: "https://picsum.photos/id/1011/235/244",
    title: "Dayco serpentine belt",
    creator: "Marvin McKinney",
    price: 0.34,
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1012/235/244",
    title: "Hella LED Headlight",
    creator: "Dianne Russell",
    price: 0.48,
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1013/235/244",
    title: "Bosch Fuel Pump",
    creator: "Devon Lane",
    price: 0.23,
  },
  {
    id: 4,
    image: "https://picsum.photos/id/1014/235/244",
    title: "Delphi Ignition Coil",
    creator: "Guy Hawkins",
    price: 0.59,
  },
];

const ProductsHome = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-full h-[410px] flex gap-[30px] flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate("/details")}
            className="cursor-pointer"
          >
            <DiscoveryProductCard
              image={product.image}
              title={product.title}
              creator={product.creator}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsHome;
