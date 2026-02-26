import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

function CategoryTableLoader() {
  const searchParams = useSearchParams();

  const limit = searchParams.has("limit")
    ? parseInt(searchParams.get("limit")!)
    : 5;

  return (
    <>
      {Array.from({ length: limit }).map((_, index) => (
        <TableRow key={index} className="align-top">
          {/* # */}
          <TableCell>
            <Skeleton className="h-4 w-6" />
          </TableCell>

          {/* Category Name */}
          <TableCell>
            <Skeleton className="h-4 w-40" />
          </TableCell>

          {/* Created At */}
          <TableCell>
            <Skeleton className="h-4 w-32" />
          </TableCell>

          {/* Created By */}
          <TableCell>
            <Skeleton className="h-4 w-24" />
          </TableCell>

          {/* Actions */}
          <TableCell className="text-right">
            <div className="flex justify-end gap-2">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-8 w-8" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default CategoryTableLoader;