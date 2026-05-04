"use client";
import FormErrorLabel from "@/components/FormErrorLabel";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { signIn } from "@/lib/auth-client";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // States
  const [processing, setProcessing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      setProcessing(true);

      const { data: res, error } = await signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error?.message);
      }

      if (res) {
        toast.success("Signed in successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full max-w-sm bg-background border border-black/10 shadow-lg rounded-md p-5 flex flex-col gap-4"
    >
      <h1 className="text-2xl block text-primary text-center font-semibold">
        User Login
      </h1>

      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          {...register("email", { required: "Email is required" })}
          placeholder="Your email"
        />
        {errors?.email && (
          <FormErrorLabel>{errors.email?.message}</FormErrorLabel>
        )}
      </Field>

      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <div className={"w-full relative"}>
          <Input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Must contain at least 8 characters",
              },
            })}
            type={showPassword ? "text" : "password"}
            placeholder="Your full name"
          />
          <button
            type="button"
            className={"absolute right-2 top-1/2 -translate-y-1/2"}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
          </button>
        </div>
        {errors?.password && (
          <FormErrorLabel>{errors.password?.message}</FormErrorLabel>
        )}
      </Field>

      <Button type="submit" className={"w-full"} disabled={processing}>
        {processing ? "Logging in..." : "Login"}
      </Button>

      <div className="flex w-full flex-col gap-0 mt-2 mb-0">
        <Separator></Separator>
        <span className="flex-1 block w-fit mx-auto -mt-2.5 bg-background px-2 text-sm">
          OR
        </span>
      </div>

      <GoogleAuthButton />

      <span className="block text-center text-sm font-light">
        Don&apos;t have an account?{" "}
        <Link href={"/register"} className="font-medium text-primary">
          Register
        </Link>
      </span>
    </form>
  );
};
export default LoginPage;
