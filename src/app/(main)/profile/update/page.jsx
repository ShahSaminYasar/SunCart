"use client";
import FormErrorLabel from "@/components/FormErrorLabel";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { updateUser, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProfileUpdatePage = () => {
  const router = useRouter();
  const { data, isPending } = useSession();

  const [processing, setProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      photoUrl: "",
    },
  });

  useEffect(() => {
    if (data?.user) {
      reset({
        name: data.user.name || "",
        photoUrl: data.user.image || "",
      });
    }
  }, [data, reset]);

  const handleUpdateProfile = async (formData) => {
    try {
      setProcessing(true);

      await updateUser({
        name: formData.name,
        image: formData.photoUrl,
      });

      toast.success("Profile updated successfully");

      router.push("/profile");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Update failed");
    } finally {
      setProcessing(false);
    }
  };

  if (isPending) {
    return (
      <section className="w-full py-10 px-3 flex justify-center">
        <div className="text-sm text-muted-foreground">Loading...</div>
      </section>
    );
  }

  return (
    <section className="w-full py-10 px-3 flex justify-center">
      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="w-full max-w-sm bg-background border border-black/10 shadow-lg rounded-md p-5 flex flex-col gap-4"
      >
        <h1 className="text-2xl block text-primary text-center font-semibold">
          Update Profile
        </h1>

        {/* Name */}
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            {...register("name", {
              required: "Name is required",
            })}
            placeholder="Your name"
          />
          {errors?.name && (
            <FormErrorLabel>{errors.name.message}</FormErrorLabel>
          )}
        </Field>

        {/* Photo URL */}
        <Field>
          <FieldLabel htmlFor="photoUrl">Photo URL</FieldLabel>
          <Input {...register("photoUrl")} placeholder="Profile picture URL" />
        </Field>

        <Button type="submit" className="w-full" disabled={processing}>
          {processing ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </section>
  );
};

export default ProfileUpdatePage;
