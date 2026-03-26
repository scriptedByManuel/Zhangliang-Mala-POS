import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

function MenuTableLoader() {
  const searchParams = useSearchParams();

  const limit = searchParams.has("limit")
    ? parseInt(searchParams.get("limit")!)
    : 5;

  return (
    <>
      {Array.from({ length: limit }).map((_, index) => (
        <TableRow key={index} className="border-b">
          {/* # */}
          <TableCell className="p-2">
            <Skeleton className="h-4 w-6" />
          </TableCell>

          {/* Name */}
          <TableCell className="p-2">
            <div className="flex items-start gap-2">
              <Skeleton className="w-10 h-10 " />
              <Skeleton className="h-4 w-28 mt-1" />
            </div>
          </TableCell>

          {/* Category */}
          <TableCell className="p-2">
            <Skeleton className="h-4 w-20" />
          </TableCell>

          {/* Price */}
          <TableCell className="p-2 text-right">
            <Skeleton className="h-4 w-12 ml-auto" />
          </TableCell>

          {/* Unit */}
          <TableCell className="p-2 text-center">
            <Skeleton className="h-4 w-12 mx-auto" />
          </TableCell>

          {/* Created */}
          <TableCell className="p-2 w-20">
            <Skeleton className="h-3 w-12 mb-1" />
            <Skeleton className="h-2 w-16" />
          </TableCell>

          {/* Actions */}
          <TableCell className="p-2 w-20">
            <div className="flex justify-end gap-1">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-6 w-6" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default MenuTableLoader;