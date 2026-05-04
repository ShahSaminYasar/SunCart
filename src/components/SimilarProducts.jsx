import { getProducts } from "@/lib/getProducts";
import ProductCard from "./ProductCard";

const SimilarProducts = async ({ id }) => {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
      {products
        ?.filter((p) => p?.id !== Number(id))
        ?.sort((a, b) => b?.rating - a?.rating)
        ?.filter((_, i) => i < 3)
        ?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
    </div>
  );
};
export default SimilarProducts;
