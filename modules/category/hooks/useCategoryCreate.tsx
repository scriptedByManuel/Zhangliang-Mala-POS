import { createCategory } from "@/services/categoryService";
import { categoryFormSchema, CategoryFormType } from "@/types/CategoryTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function useCategoryCreate() {
  const router = useRouter();

  const form = useForm<CategoryFormType>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      title: "",
      confirm: false,
    },
  });

  const onSubmit = async (data: CategoryFormType) => {
    try {
      const response = await createCategory({ title: data.title });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message ?? "Failed to create category");
      }

      toast.success(result.message ?? "Category created successfully");

      router.push(`/dashboard/categories`);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
    }
  };

  return {
    ...form,
    onSubmit,
  };
}

export default useCategoryCreate;
