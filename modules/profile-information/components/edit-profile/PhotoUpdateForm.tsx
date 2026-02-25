import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { uploadPhoto } from "@/services/photoService";
import { updateProfilePhoto } from "@/services/profileService";
import { useProfileStore } from "@/stores/useProfileStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const photoUpdateFormSchema = z.object({
  image: z
    .instanceof(File, { message: "Image is required" })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Max file size is 5MB",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      {
        message: "Only .jpg, .png and .webp formats are supported",
      },
    ),
});

export type PhotoUpdateFormValues = z.infer<typeof photoUpdateFormSchema>;

function PhotoUpdateForm() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<PhotoUpdateFormValues>({
    resolver: zodResolver(photoUpdateFormSchema),
  });

  const { setProfile } = useProfileStore();

  const onSubmit = async (data: PhotoUpdateFormValues) => {
    try {
      const res = await uploadPhoto(data);
      const json = await res.json();

      const res2 = await updateProfilePhoto({ photo: json.data.file_name });
      const json2 = await res2.json();

      console.log(json2);

      if (!res.ok) {
        throw new Error(json.message || "Profile update failed");
      }

      setProfile(json2.data);
      toast.success("Profile updated successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <form className="max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="image"
        control={control}
        render={({ field: { onChange, ref }, fieldState }) => (
          <Field className="grid gap-2" data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="image">Upload Image</FieldLabel>

            <Input
              id="image"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              ref={ref}
              aria-invalid={fieldState.invalid}
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
              }}
            />

            {fieldState.error && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button type="submit" className="mt-4" disabled={isSubmitting}>
        {isSubmitting && <Spinner />}
        Update Photo
      </Button>
    </form>
  );
}

export default PhotoUpdateForm;