import { menuCreateFormSchema } from "@/modules/menu/hooks/useMenuCreate";
import z from "zod";
import { User } from "./UserTypes";
import { menuEditFormSchema } from "@/modules/menu/hooks/useMenuEdit";
import { CategoryDetailType } from "./CategoryTypes";

export type MenuCreateFormValues = z.infer<typeof menuCreateFormSchema>;
export type MenuEditFormValues = z.infer<typeof menuEditFormSchema>;

export type MenuStorePayloadValues = Omit<
  MenuCreateFormValues,
  "confirm" | "stay_here" 
>;

export type MenuUpdatePayloadValues = Omit<
  MenuEditFormValues,
  "confirm" | "stay_here"
>;

export type MenuDetailType = {
  id: number;
  title: string;
  unit: string;
  category: CategoryDetailType;
  price: number;
  image: string;
  user: User;
  created_at: string;
  updated_at: string;
};