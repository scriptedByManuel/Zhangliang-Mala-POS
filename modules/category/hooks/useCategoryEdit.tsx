"use client";

import { fetcher } from "@/lib/fetcher";
import { categoryApiUrl, updateCategory } from "@/services/categoryService";
import { categoryFormSchema, CategoryFormType } from "@/types/CategoryTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { mutate } from "swr";

function useCategoryEdit(categoryData: CategoryFormType) {
  const { id } = useParams();

  const form = useForm<CategoryFormType>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      title: categoryData?.title || "",
      confirm: false,
    },
  });

  const onSubmit = async (data: CategoryFormType) => {
    try {
      const res = await updateCategory(id, { title: data.title });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed to update category");

      toast.success(`${json.message}`);
      mutate(`${categoryApiUrl}/${id}`);
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

export default useCategoryEdit;
