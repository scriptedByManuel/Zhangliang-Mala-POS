import { storeMenu } from "@/services/menuService";
import { MenuCreateFormValues } from "@/types/MenuTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export const menuCreateFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  category_id: z.coerce.number().min(1, "Category is required"),
  unit: z.string().min(1, "Unit is required"),
  price: z.coerce
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be positive"),
  stay_here: z.boolean(),
  confirm: z.boolean().refine((val) => val === true, {
    message: "You must check to create new menu",
    path: ["confirm"],
  }),
});

function useMenuCreate() {
  const form = useForm<MenuCreateFormValues>({
    resolver: zodResolver(menuCreateFormSchema),
    defaultValues: {
      title: "",
      unit: "",
      category_id: 0,
      price: 0,
      stay_here: false,
      confirm: false,
    },
  });

  const router = useRouter();

  const onSubmit = async (formData: MenuCreateFormValues) => {
    try {
      const { stay_here, confirm, ...payload } = formData;
      const res = await storeMenu(payload);
      const json = await res.json();
      console.log(json)

      if (!res.ok) {
        throw new Error(json.message || "Menu creation failed");
      }

      toast.success("Menu created successfully");

      form.reset();

      if (!stay_here) {
        router.push(`/dashboard/menu/${json.data.id}`);
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

export default useMenuCreate;