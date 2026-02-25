import z from "zod";
import { User } from "./UserTypes";

export const categoryFormSchema = z.object({
  title: z
    .string()
    .min(3, "Category title must be at least 3 characters long")
    .trim(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must confirm before creating a new category",
  }),
  
});

export type CategoryFormType = z.infer<typeof categoryFormSchema>;


