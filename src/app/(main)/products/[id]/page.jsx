import SimilarProducts from "@/components/SimilarProducts";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/getProducts";
import {
  ArrowRight,
  LockKeyhole,
  RotateCcw,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const { id } = await params;

  const product = await getProducts(id);

  return (
    <div className="bg-card px-3 pt-10">
      <div className="container">
        <section className="container flex flex-col gap-8 md:grid md:grid-cols-2 justify-center items-center md:items-start md:gap-10">
          {/* Image */}
          <Image
            src={product?.image}
            width={1000}
            height={1000}
            alt={product?.name}
            className="w-full max-w-md md:max-w-full aspect-square object-cover rounded-lg block sticky top-22"
          />

          {/* Text Content */}
          <div className="flex flex-col items-center justify-center md:items-start gap-2 text-foreground">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-left">
              {product?.name}
            </h1>

            <span className="text-2xl font-normal text-card-foreground block mb-2">
              ${product?.price?.toFixed(2)}
            </span>

            <div className="flex items-center text-sm gap-3 text-foreground/70">
              Category{" "}
              <span className="block w-fit px-3 py-1 rounded-full bg-secondary text-secondary-foreground shadow-xs text-xs font-medium">
                {product?.category}
              </span>
            </div>

            <div className="flex items-center text-sm gap-3 text-foreground/70">
              Brand{" "}
              <span className="font-semibold text-foreground">
                {product?.brand}
              </span>
            </div>

            <div className="flex items-center text-sm gap-3 text-foreground/70">
              Rating
              <span className="flex items-center gap-1 text-sm text-card-foreground/80">
                <Star className="text-yellow-400" size={16} /> {product?.rating}
              </span>
            </div>

            <p className="w-full max-w-md text-base text-left block my-3">
              {product?.description}
            </p>

            <p className="text-foreground/70 font-normal text-sm block text-left">
              {product?.stock} items in stock
            </p>
            <Button
              size="lg"
              className={"text-base tracking-wider uppercase w-full"}
            >
              <ShoppingBag />
              Add to Cart
            </Button>

            {/* Extras */}
            <div className="w-full flex flex-col gap-2 mt-8">
              {[
                {
                  icon: <Truck />,
                  title: "Free Delivery",
                  description: "On orders over $50",
                },
                {
                  icon: <LockKeyhole />,
                  title: "Secure Payment",
                  description: "256-bit encryption",
                },
                {
                  icon: <RotateCcw />,
                  title: "Easy Returns",
                  description: "30-day return policy",
                },
              ].map((feature, index) => (
                <div
                  key={`feature_${index}`}
                  className="w-full py-8 px-4 flex items-center gap-4 bg-background shadow-sm rounded-md"
                >
                  <div className="text-sky-600 p-2 rounded-full aspect-square bg-sky-100">
                    {feature?.icon}
                  </div>

                  <div className="flex flex-col gap-0 items-start text-foreground">
                    <span className="font-medium text-lg">
                      {feature?.title}
                    </span>
                    <p className="text-sm font-normal">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-3">
          <div className="container">
            <div className="flex justify-between items-center gap-5 mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground capitalize">
                You may also like
              </h2>

              <Link
                href={"/products"}
                className="text-sm text-accent font-medium text-right flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All <ArrowRight size={15} />
              </Link>
            </div>

            <SimilarProducts id={id} />
          </div>
        </section>
      </div>
    </div>
  );
};
export default page;
