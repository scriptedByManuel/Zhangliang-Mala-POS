import { useProfileStore } from "@/stores/useProfileStore";
import { ChangePasswordFormValues } from "@/types/UserTypes";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useCookie from "react-use-cookie";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassword, logout } from "@/services/profileService";
import { toast } from "sonner";
import z from "zod";

export const changePasswordFormSchema = z
  .object({
    old_password: z
      .string()
      .min(8, "Old password must be at least 8 characters"),
    new_password: z
      .string()
      .min(8, "New password must be at least 8 characters"),
    new_password_confirmation: z
      .string()
      .min(8, "New password confirmation must be at least 8 characters"),
    confirm_check: z.boolean().refine((val) => val === true, {
      message: "You must confirm to update password",
    }),
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    message: "New password and confirmation do not match",
    path: ["new_password_confirmation"],
  });

const useChangePassword = () => {
  const router = useRouter();

  const { clearProfile } = useProfileStore();
  const [, , removeToken] = useCookie("token");

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      new_password_confirmation: "",
      confirm_check: false,
    },
  });

  const onSubmit = async (data: ChangePasswordFormValues) => {
    try {
      const res = await changePassword(data);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Password change failed");
      }
      await logout();
      clearProfile();
      removeToken();
      toast.success("Password changed successfully, Please login again");
      router.push("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  return {
    control,
    handleSubmit,
    isSubmitting,
    onSubmit,
  };
};

export default useChangePassword;
