"use client";
import { useSession } from "@/lib/auth-client";
import "../globals.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

const AuthLayout = ({ children }) => {
  const session = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.data?.user) {
      return router.push("/");
    }
  }, [session, router]);

  if (session?.isPending)
    return (
      <div className="w-full min-h-screen flex items-center justify-center gap-2">
        <Spinner /> Authenticating...
      </div>
    );

  return (
    <>
      <main className="bg-card min-h-screen w-full flex justify-center items-center relative z-0">
        <div className="absolute w-1/2 top-0 h-full bg-primary left-1/2 -z-10"></div>
        {children}
      </main>
    </>
  );
};
export default AuthLayout;
