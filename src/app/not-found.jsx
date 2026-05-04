import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen px-3 flex flex-col justify-center items-center gap-3 text-foreground bg-background">
      <span className="text-4xl md:text-8xl font-bold text-primary">404</span>
      <p className="block text-center w-full max-w-md">
        The content you are trying to access does not exist.
      </p>
      <Button asChild>
        <Link href={"/"}>
          <ArrowLeft /> Go to Home
        </Link>
      </Button>
    </div>
  );
};
export default NotFound;
