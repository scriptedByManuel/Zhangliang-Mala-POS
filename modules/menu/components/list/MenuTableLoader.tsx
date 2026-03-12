import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

function MenuTableLoader() {
  const searchParams = useSearchParams();

  return (
    <>
      {Array.from({
        length: searchParams.has("limit")
          ? parseInt(searchParams.get("limit")!)
          : 5,
      }).map((_, index) => (
        <TableRow key={index} className="align-top">
          {/* ID */}
          <TableCell>
            <Skeleton className="h-3 w-6" />
          </TableCell>

          {/* Image + Name */}
          <TableCell className="flex gap-1 items-start">
            <Skeleton className="h-6 w-6 mb-1" />
            <Skeleton className="h-3 w-40" />
          </TableCell>

          {/* Phone */}
          <TableCell>
            <Skeleton className="h-3 w-28" />
          </TableCell>

          {/* Gender */}
          <TableCell>
            <Skeleton className="h-3 w-16" />
          </TableCell>

          {/* Address */}
          <TableCell className="w-52">
            <Skeleton className="h-3 w-full" />
          </TableCell>

          {/* Created By + Date */}
          <TableCell>
            <Skeleton className="h-3 w-12 mb-1" />
            <Skeleton className="h-2 w-16" />
          </TableCell>

          {/* Actions */}
          <TableCell>
            <div className="flex items-right gap-1">
              <Skeleton className="h-6 w-6 rounded-sm" />
              <Skeleton className="h-6 w-6 rounded-sm" />
              <Skeleton className="h-6 w-6 rounded-sm" />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default MenuTableLoader;