import { customerCreateFormSchema } from "@/modules/customer/hooks/useCustomerCreate";
import { customerEditFormSchema } from "@/modules/customer/hooks/useCustomerEdit";
import z from "zod";
import { User } from "./UserTypes";

export type CustomerCreateFormValues = z.infer<typeof customerCreateFormSchema>;
export type CustomerEditFormValues = z.infer<typeof customerEditFormSchema>;

export type CustomerStorePayloadValues = Omit<
  CustomerCreateFormValues,
  "confirm" | "stay_here"
>;

export type CustomerUpdatePayloadValues = Omit<
  CustomerEditFormValues,
  "confirm" | "stay_here"
>;

export type CustomerDetailType = CustomerStorePayloadValues & {
  id: number;
  user: User;
  created_at: string;
  updated_at: string;
};