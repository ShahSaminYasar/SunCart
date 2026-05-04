import { signIn } from "@/lib/auth-client";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const GoogleAuthButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={async () => {
        const res = await signIn.social({
          provider: "google",
        });

        if (res.error) {
          toast.error("Sign in failed");
        }
      }}
    >
      Continue with Google
    </Button>
  );
};
export default GoogleAuthButton;
