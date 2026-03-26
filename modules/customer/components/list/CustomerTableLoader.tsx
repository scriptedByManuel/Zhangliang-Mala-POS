import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

function CustomerTableLoader() {
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

          {/* Name + Email */}
          <TableCell>
            <Skeleton className="h-3 w-32 mb-1" />
            <Skeleton className="h-2 w-40" />
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

          {/* Created */}
          <TableCell className="p-2 w-25 text-xs">
            <div className="flex flex-col gap-1">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-2 w-24" />
            </div>
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

export default CustomerTableLoader;