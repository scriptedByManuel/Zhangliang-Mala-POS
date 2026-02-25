import { customerGenders } from "@/lib/constants";
import { customerApiUrl, updateCustomer } from "@/services/customerService";
import {
  CustomerDetailType,
  CustomerEditFormValues,
} from "@/types/CustomerTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { mutate } from "swr";
import z from "zod";

export const customerEditFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  date_of_birth: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  address: z.string().min(1, "Address is required"),
  gender: z
    .enum(customerGenders)
    .or(z.literal(""))
    .refine((val) => val !== "", {
      message: "Please select gender",
      path: ["gender"],
    }),
  stay_here: z.boolean(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must check to create new customer",
    path: ["confirm"],
  }),
});

function useCustomerEdit(customerData: CustomerDetailType) {
  const form = useForm<CustomerEditFormValues>({
    resolver: zodResolver(customerEditFormSchema),
    defaultValues: {
      ...customerData,
      stay_here: false,
      confirm: false,
    },
  });

  const router = useRouter();

  const onSubmit = async (formData: CustomerEditFormValues) => {
    try {
      const { stay_here, ...payload } = formData;
      const res = await updateCustomer(payload, customerData.id);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Customer update failed");
      }

      mutate(`${customerApiUrl}/${customerData.id}`);

      toast.success("Customer updated successfully");

      form.reset();

      if (!stay_here) {
        router.push(`/dashboard/customers/${json.data.id}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return {
    ...form,
    onSubmit,
  };
}

export default useCustomerEdit;