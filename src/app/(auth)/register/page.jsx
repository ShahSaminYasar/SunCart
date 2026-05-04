"use client";
import FormErrorLabel from "@/components/FormErrorLabel";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { signIn, signUp } from "@/lib/auth-client";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  //   States
  const [processing, setProcessing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (data) => {
    const { name, email, photoUrl, password } = data;

    try {
      setProcessing(true);

      const { data: res, error } = await signUp.email({
        name,
        email,
        password,
        image: photoUrl,
        callbackURL: redirectPath,
      });

      if (error) {
        toast.error(error?.message);
      }

      if (res) {
        toast.success("Signed up successfully");
        router.push(redirectPath);
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
      onSubmit={handleSubmit(handleRegister)}
      className="w-full max-w-sm bg-background border border-black/10 shadow-lg rounded-md p-5 flex flex-col gap-4"
    >
      <h1 className="text-2xl block text-primary text-center font-semibold">
        Register Account
      </h1>

      <Field>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          {...register("name", { required: "Name is required" })}
          placeholder="Your full name"
        />
        {errors?.name && (
          <FormErrorLabel>{errors.name?.message}</FormErrorLabel>
        )}
      </Field>

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
        <FieldLabel htmlFor="photoUrl">Photo URL</FieldLabel>
        <Input
          {...register("photoUrl", { required: false })}
          placeholder="Profile pic URL"
        />
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
            placeholder="Password"
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
        {processing ? "Processing..." : "Register"}
      </Button>

      <div className="flex w-full flex-col gap-0 mt-2 mb-0">
        <Separator></Separator>
        <span className="flex-1 block w-fit mx-auto -mt-2.5 bg-background px-2 text-sm">
          OR
        </span>
      </div>

      <GoogleAuthButton redirectPath={redirectPath} />

      <span className="block text-center text-sm font-light">
        Already have an account?{" "}
        <Link
          href={`/login?redirect=${encodeURIComponent(redirectPath)}`}
          className="font-medium text-primary"
        >
          Login
        </Link>
      </span>
    </form>
  );
};
export default RegisterPage;
