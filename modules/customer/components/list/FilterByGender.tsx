"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { customerGenders } from "@/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FilterByGender() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("gender", value);
    } else {
      params.delete("gender");
    }

    params.delete("page");

    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger size="sm">
        <SelectValue
          placeholder={searchParams.get("gender") ?? "Select gender"}
        />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="">Select gender</SelectItem>
        {customerGenders.map((gender) => (
          <SelectItem key={gender} value={gender}>
            {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}