"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navlinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "My Profile",
    path: "/profile",
  },
];

const Header = () => {
  const pathname = usePathname();

  //   States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full h-20 flex items-center justify-center px-3 fixed top-0 left-0 shadow-sm bg-background z-50">
        <div className="w-full max-w-385 mx-auto flex justify-between items-center gap-5">
          <div className="flex gap-1 items-center">
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={"block md:hidden"}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>

            <Link href={"/"} className="text-3xl font-semibold text-primary">
              SUNCART
            </Link>
          </div>

          <nav
            className={`bg-background rounded-lg absolute left-0 shadow-sm md:relative md:left-auto md:top-auto p-3 w-full transition-all duration-300 z-50 ${mobileMenuOpen ? "top-20 opacity-100 pointer-events-auto" : "top-17 opacity-0 pointer-events-none"} md:top-auto md:opacity-100 md:pointer-events-auto md:bg-transparent md:shadow-none md:w-fit`}
          >
            <ul
              className={`text-sm font-medium flex md:gap-7 items-center justify-center flex-col md:flex-row`}
            >
              {navlinks?.map((navlink, index) => (
                <li
                  key={navlink?.path + index}
                  className={`${pathname === navlink?.path ? "text-primary" : "text-foreground/70"} w-full hover:bg-secondary rounded-md hover:text-secondary-foreground md:hover:bg-transparent md:hover:text-foreground`}
                >
                  <Link
                    href={navlink?.path}
                    className="block text-center text-nowrap py-2 md:py-0"
                  >
                    {navlink?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-1 items-center">
            <Button asChild variant="ghost">
              <Link href={"/purchases"}>
                <ShoppingBag size={20} className="text-foreground" />
              </Link>
            </Button>

            <Button asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="mt-20"></div>
    </>
  );
};
export default Header;
