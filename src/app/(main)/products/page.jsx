import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/getProducts";

const page = async () => {
  const products = await getProducts();

  if (products?.ok === false)
    return (
      <p className="block py-20 px-3 text-center text-destructive text-sm font-medium">
        {products?.message || "Something went wrong"}
      </p>
    );

  return (
    <section className="px-3 pt-10 pb-16">
      <div className="container">
        <div className="flex justify-between items-center gap-3">
          <h2 className="text-3xl font-medium text-left mb-4 text-foreground">
            All Products
          </h2>

          <span className="text-sm font-medium text-foreground/70">
            {products?.length} products
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default page;
