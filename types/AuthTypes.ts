import z from "zod";
import { User } from "./UserTypes";
import { loginSchema } from "@/modules/auth/hooks/useLogin";
import { registerSchema } from "@/modules/auth/hooks/useRegister";

export type LoginFormValues = z.infer<typeof loginSchema>;

export type RegisterFormValues = z.infer<typeof registerSchema>;

export type LoginResponse = {
  token: string;
  user: User;
};