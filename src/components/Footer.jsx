import { Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground px-3 py-16 pb-1">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <Link
          href={"/"}
          className="text-3xl sm:text-4xl font-semibold text-primary-foreground"
        >
          SUNCART
        </Link>

        <div className="flex flex-col gap-1 text-sm">
          <span className="text-base font-medium">Follow Us</span>

          {[
            {
              label: "Facebook",
              path: "/",
            },
            {
              label: "Instagram",
              path: "/",
            },
            {
              label: "YouTube",
              path: "/",
            },
          ].map((link, index) => (
            <Link href={link?.path} key={link?.path + index}>
              {link?.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="text-base font-medium">Legal</span>

          {[
            {
              label: "Privacy Policy",
              path: "/",
            },
            {
              label: "Terms & Conditions",
              path: "/",
            },
            {
              label: "Refund Policy",
              path: "/",
            },
          ].map((link, index) => (
            <Link href={link?.path} key={link?.path + index}>
              {link?.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="text-base font-medium">Our Location</span>
          <p>Nayasarak, Sylhet 3100, Bangladesh</p>
          <Link href={"tel:+8801234567890"} className="flex gap-2 items-center">
            <Phone size={16} /> Call +8801234567890
          </Link>
        </div>

        <div className="w-full sm:col-span-2 md:col-span-4 bg-primary text-primary-foreground text-xs font-light text-center py-1">
          Copyright 2026 &copy; Shah Samin Yasar
        </div>
      </div>
    </footer>
  );
};
export default Footer;
