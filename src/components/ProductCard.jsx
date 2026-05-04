import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-card p-2 rounded-md shadow-lg shadow-black/5 border border-black/5 flex flex-col">
      <Image
        src={product?.image}
        width={450}
        height={450}
        alt={product?.name}
        className="aspect-4/3 object-cover rounded-sm mb-1"
      />

      <div className="w-full flex flex-col gap-3 p-3 flex-1">
        <div className="flex justify-between items-center gap-2">
          <h4 className="text-xl font-semibold text-card-foreground tracking-tight">
            {product?.name}
          </h4>
          <span className="flex items-center gap-1 text-xs text-card-foreground/80">
            <Star className="text-yellow-400" size={16} /> {product?.rating}
          </span>
        </div>

        <p className="text-sm font-normal text-card-foreground/70 block">
          {product?.description}
        </p>

        <div className="flex justify-between items-center gap-3 mt-auto">
          <span className="text-2xl font-semibold text-card-foreground">
            ${product?.price?.toFixed(2)}
          </span>

          <Button asChild variant="secondary" size="sm">
            <Link href={`/products/${product?.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
