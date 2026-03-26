"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetcher } from "@/lib/fetcher";
import { categoryApiUrl } from "@/services/categoryService";
import { CategoryDetailType } from "@/types/CategoryTypes";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";

export default function FilterByCategory() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data, isLoading } = useSWR(`${categoryApiUrl}?limit=100`, fetcher);

  const categories = data?.data || [];

  const selectedId =
    searchParams.get("filter_by_category_id") ?? "Select category";

  const selectedCategory = categories.find(
    (cat: CategoryDetailType) => String(cat.id) === selectedId,
  );

  const selected =
    searchParams.get("filter_by_category_id") ?? "Select category";

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "Select category") {
      params.delete("filter_by_category_id");
    } else {
      params.set("filter_by_category_id", value);
    }

    params.delete("page");

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select value={selected} onValueChange={handleChange} disabled={isLoading}>
      <SelectTrigger size="sm">
        <SelectValue placeholder="Select category">
          {selectedCategory ? selectedCategory.title : "Select category"}
        </SelectValue>
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="Select category">Select category</SelectItem>

        {categories.map((category: CategoryDetailType) => (
          <SelectItem key={category.id} value={String(category.id)}>
            {category.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}