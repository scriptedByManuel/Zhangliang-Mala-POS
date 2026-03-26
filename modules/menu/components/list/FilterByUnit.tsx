"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useMenuUnits from "../../hooks/useMenuUnits";

export default function FilterByUnit() {
  const { data, isLoading } = useMenuUnits();
  
  const menuUnits = data?.data || [];
  
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const selected = searchParams.get("filter_by_unit") ?? "Select unit";

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "Select unit") {
      params.delete("filter_by_unit");
    } else {
      params.set("filter_by_unit", value);
    }

    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select value={selected} onValueChange={handleChange} disabled={isLoading}>
      <SelectTrigger size="sm">
        <SelectValue placeholder={isLoading ? "Loading..." : "Select unit"} />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="Select unit">All Units</SelectItem>

        {menuUnits.map((unit: string) => (
          <SelectItem key={unit} value={unit}>
            {unit}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}