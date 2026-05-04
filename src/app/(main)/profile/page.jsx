"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data } = useSession();

  return (
    <section className="w-full py-10 px-3 flex justify-center">
      <div className="w-full max-w-sm px-5 py-10 rounded-md bg-card shadow-lg border border-black/5 flex flex-col gap-2 items-center justify-center text-foreground/70 font-normal">
        <Image
          src={data?.user?.image || "/assets/user.png"}
          width={500}
          height={500}
          alt={data?.user?.name || "User image"}
          className="w-full max-w-35 rounded-full aspect-square overflow-hidden object-cover mb-2"
        />

        <span className="block text-center text-sm">
          Name:{" "}
          <span className="text-foreground font-semibold">
            {data?.user?.name}
          </span>
        </span>
        <span className="block text-center text-sm">
          Email:{" "}
          <span className="text-foreground font-semibold">
            {data?.user?.email}
          </span>
        </span>

        <Button asChild className={"mt-2"}>
          <Link href="/profile/update">
            <PenBox /> Update
          </Link>
        </Button>
      </div>
    </section>
  );
};
export default ProfilePage;
