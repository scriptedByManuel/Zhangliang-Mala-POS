import { changePasswordFormSchema } from "@/modules/profile-information/components/change-password/ChangePasswordSection";
import { profileEditFormSchema } from "@/modules/profile-information/components/EditProfileSection";
import z from "zod";

export type User = {
  id: number;
  name: string;
  email: string;
  photo: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};

export type UserEditFormValues = z.infer<typeof profileEditFormSchema>;
export type ChangePasswordFormValues = z.infer<typeof changePasswordFormSchema>