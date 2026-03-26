"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Controller } from "react-hook-form";
import useChangePassword from "../../hooks/useChangePassword";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/PasswordInput";

function ChangePasswordSection() {
  const { control, handleSubmit, isSubmitting, onSubmit } = useChangePassword();
  const router = useRouter();

  return (
    <section className=" container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Change Password</h3>
        <p className=" text-xs text-muted-foreground">
          Update password for enhanced account security.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup className="grid gap-4 max-w-sm">
          <Controller
            name="old_password"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="grid gap-2" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="current-password">
                  Current Password
                </FieldLabel>

                <PasswordInput
                  {...field}
                  ref={field.ref}
                  showEyeIcon={true}
                  aria-invalid={fieldState.invalid}
                  id="current-password"
                  placeholder="••••••••"
                />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Password */}
          <Controller
            name="new_password"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="grid gap-2" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="new-password">New Password</FieldLabel>

                <PasswordInput
                  {...field}
                  ref={field.ref}
                  showEyeIcon={true}
                  aria-invalid={fieldState.invalid}
                  id="new-password"
                  placeholder="••••••••"
                />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="new_password_confirmation"
            control={control}
            render={({ field, fieldState }) => (
              <Field className="grid gap-2" data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="confirm-new-password">
                  Confirm New Password
                </FieldLabel>

                <PasswordInput
                  {...field}
                  ref={field.ref}
                  showEyeIcon={true}
                  aria-invalid={fieldState.invalid}
                  id="confirm-new-password"
                  placeholder="••••••••"
                />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

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
            <Button disabled={isSubmitting} type="submit" size={"sm"}>
              {isSubmitting && <Spinner className=" size-3" />}
              Update Password
            </Button>
          </div>
        </FieldGroup>
      </form>
    </section>
  );
}

export default ChangePasswordSection;
