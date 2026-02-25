"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { categoryApiUrl, deleteCategory } from "@/services/categoryService";
import { customerApiUrl, deleteCustomer } from "@/services/customerService";
import { Trash2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { mutate } from "swr";

type Props = {
  id: number;
};

function CategoryDeleteBtn({ id }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const res = await deleteCategory(id);
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Category delete failed");
      }

      mutate(
        searchParams.toString()
          ? `${categoryApiUrl}?${searchParams.toString()}`
          : categoryApiUrl,
      );

      toast.success("Category deleted successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading}
      variant={"secondary"}
      size={"xs"}
      onClick={handleClick}
    >
      {isLoading ? (
        <Spinner className=" size-2" />
      ) : (
        <Trash2 className=" size-2" />
      )}
    </Button>
  );
}

export default CategoryDeleteBtn;