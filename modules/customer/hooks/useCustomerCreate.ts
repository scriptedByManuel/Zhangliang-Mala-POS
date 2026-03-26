import { customerGenders } from "@/lib/constants";
import { storeCustomer } from "@/services/customerService";
import { CustomerCreateFormValues } from "@/types/CustomerTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export const customerCreateFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z.string().min(1, "Image is required"),
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

function useCustomerCreate() {
  const form = useForm<CustomerCreateFormValues>({
    resolver: zodResolver(customerCreateFormSchema),
    defaultValues: {
      name: "",
      date_of_birth: "",
      email: "",
      phone: "",
      address: "",
      gender: undefined,
      stay_here: false,
      confirm: false,
    },
  });

  const router = useRouter();

  const onSubmit = async (formData: CustomerCreateFormValues) => {
    try {
      const { stay_here, ...payload } = formData;
      const res = await storeCustomer(payload);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Customer creation failed");
      }

      toast.success("Customer created successfully");

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

export default useCustomerCreate;