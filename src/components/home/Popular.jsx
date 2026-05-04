import { getProducts } from "@/lib/getProducts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "../ProductCard";

const Popular = async () => {
  const products = await getProducts();

  return (
    <section className="pt-20 pb-10 px-3">
      <div className="container">
        <div className="flex justify-between items-center gap-5 mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            🔥 Popular Products
          </h2>

          <Link
            href={"/products"}
            className="text-sm text-accent font-medium text-right flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {products
            ?.sort((a, b) => b?.rating - a?.rating)
            ?.filter((_, i) => i < 3)
            ?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default Popular;
