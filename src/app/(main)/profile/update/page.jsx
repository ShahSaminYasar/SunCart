"use client";
import FormErrorLabel from "@/components/FormErrorLabel";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { signIn, updateUser, useSession } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { data, isPending } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  // States
  const [processing, setProcessing] = useState(false);

  const handleUpdateProfile = async (data) => {
    const { name, photoUrl } = data;

    try {
      setProcessing(true);

      await updateUser({
        name,
        image: photoUrl,
      });

      toast.success("Profile data updated");

      router.push("/profile");
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <section className="w-full py-10 px-3 flex justify-center">
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="w-full max-w-sm bg-background border border-black/10 shadow-lg rounded-md p-5 flex flex-col gap-4"
      >
        <h1 className="text-2xl block text-primary text-center font-semibold">
          Update Profile
        </h1>

        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Your name"
            defaultValue={data?.user?.name || ""}
          />
          {errors?.name && (
            <FormErrorLabel>{errors.name?.message}</FormErrorLabel>
          )}
        </Field>

        <Field>
          <FieldLabel htmlFor="photoUrl">Photo URL</FieldLabel>
          <Input
            {...register("photoUrl", { required: false })}
            placeholder="Profile pic URL"
            defaultValue={session?.data?.user?.image}
          />
        </Field>

        <Button type="submit" className={"w-full"} disabled={processing}>
          {processing ? "Saving..." : "Save"}
        </Button>
      </form>
    </section>
  );
};
export default LoginPage;
