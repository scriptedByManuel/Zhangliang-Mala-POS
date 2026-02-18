"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { updateProfile } from "@/services/profileService";
import { useProfileStore } from "@/stores/useProfileStore";
import { UserEditFormValues } from "@/types/UserTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import ProfileImageChangeBtn from "./ProfileImageChangeBtn";

export const profileEditFormSchema = z.object({
  name: z.string().min(2, "Last name must be at least 2 characters"),
  confirm_check: z.boolean().refine((val) => val === true, {
    message: "You must confirm before edit profile",
  }),
});

function EditProfileSection() {
  const router = useRouter();

  const { profile, setProfile } = useProfileStore();

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<UserEditFormValues>({
    resolver: zodResolver(profileEditFormSchema),
    defaultValues: {
      name: profile?.name || "",
      confirm_check: false,
    },
  });

  const onSubmit = async (data: UserEditFormValues) => {
    try {
      const res = await updateProfile(data);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Profile update failed");
      }

      setProfile(json.data);
      toast.success("Profile updated successfully");
      router.back();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <section className=" container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">
          Edit Profile Information
        </h3>
        <p className=" text-xs text-muted-foreground">
          Update your information to keep records up to date.
        </p>
      </div>

      <div className=" relative size-20">
        {/* <Image
          width={80}
          height={80}
          className=" size-20 "
          src={
            profile?.photo ||
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
          alt="profile image"
        /> */}
        <img
          src={
            profile?.photo || "https://minio.teapos.shop/default-profile.png"
          }
          alt="profile image"
          className=" size-20 object-cover border-2 border-muted"
        />

        <ProfileImageChangeBtn />
      </div>

      {/* <PhotoUpdateForm /> */}

      <form id="user-edit" onSubmit={handleSubmit(onSubmit)}></form>

      <div className=" max-w-sm">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="grid gap-2">
              <FieldLabel htmlFor="name">User Name</FieldLabel>
              <Input
                id="name"
                type="text"
                autoComplete="name"
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder={profile?.name || ""}
              />
              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <div className=" max-w-sm">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="text" value={profile?.email || ""} disabled />
        </Field>
      </div>

      <Controller
        name="confirm_check"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                id="direct-login-check"
              />
              <FieldLabel htmlFor="direct-login-check">
                I&#39;m sure to update.
              </FieldLabel>
            </div>

            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <div className=" flex gap-1">
        <Button
          onClick={() => router.back()}
          type="button"
          variant={"outline"}
          size={"sm"}
        >
          Cancel
        </Button>
        <Button
          disabled={isSubmitting}
          type="submit"
          form="user-edit"
          size={"sm"}
        >
          {isSubmitting && <Spinner className=" size-3" />}
          Update Name
        </Button>
      </div>
    </section>
  );
}

export default EditProfileSection;
