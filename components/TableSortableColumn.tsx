"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  columnName: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "right";
  iconPosition?: "left" | "right";
};

function TableSortableColumn({
  columnName,
  children,
  className = "",
  align = "left",
  iconPosition = "left",
}: Props) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSortBy = searchParams.get("sort_by");
  const currentDirection = searchParams.get("sort_direction");

  const isActive = currentSortBy === columnName;

  const updateSort = (direction: "asc" | "desc") => {
    const params = new URLSearchParams(searchParams.toString());

    // Toggle logic: click same → remove sort
    if (isActive && currentDirection === direction) {
      params.delete("sort_by");
      params.delete("sort_direction");
    } else {
      params.set("sort_by", columnName);
      params.set("sort_direction", direction);
    }

    router.push(`${pathName}?${params.toString()}`);
  };

  const icon = (
    <div className="flex flex-col">
      <ChevronUp
        onClick={() => updateSort("asc")}
        className={cn(
          "size-2 cursor-pointer",
          isActive && currentDirection === "asc"
            ? "bg-primary text-white"
            : "hover:bg-primary/20",
        )}
      />
      <ChevronDown
        onClick={() => updateSort("desc")}
        className={cn(
          "size-2 cursor-pointer ",
          isActive && currentDirection === "desc"
            ? "bg-primary text-white"
            : "hover:bg-primary/20",
        )}
      />
    </div>
  );

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        align === "right"
          ? "justify-end text-right"
          : "justify-start text-left",
        className,
      )}
    >
      {iconPosition === "left" && icon}
      <div>{children}</div>
      {iconPosition === "right" && icon}
    </div>
  );
}

export default TableSortableColumn;