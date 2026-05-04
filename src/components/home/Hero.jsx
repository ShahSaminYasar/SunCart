import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-background text-foreground py-10 px-3">
      <div className="container flex flex-col-reverse gap-8 md:grid md:grid-cols-2 justify-center items-center md:gap-10">
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center md:items-start gap-4">
          <h1 className="font-semibold text-6xl lg:text-8xl xl:text-9xl text-wrap text-center md:text-left">
            SUMMER SALE <span className="text-primary block">50% OFF</span>
          </h1>

          <p className="w-full max-w-md text-base text-center md:text-left">
            Unleash the heat with our golden hour collection. Premium aesthetics
            for a bold existance.
          </p>

          <Button
            asChild
            size="lg"
            className={"text-base tracking-wider uppercase px-5 mt-3"}
          >
            <Link href="/products" className="gap-2">
              <ShoppingBag />
              Shop Now
            </Link>
          </Button>
        </div>

        {/* Image */}
        <Image
          src={"/assets/hero.png"}
          width={1000}
          height={1000}
          alt="Hero Image"
          loading="eager"
          className="w-full max-w-md md:max-w-full aspect-square object-cover rounded-lg"
        />
      </div>
    </section>
  );
};
export default Hero;
