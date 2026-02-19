import { Skeleton } from "@/components/ui/skeleton";

function CustomerDetailCardLoader() {
  return (
    <div className="w-1/2 grid grid-cols-2 gap-6 border border-muted p-4 rounded-lg">
      {/* Name */}
      <div>
        <Skeleton className="h-3 w-16 mb-2" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-14 rounded-sm" />
        </div>
      </div>

      {/* DOB */}
      <div>
        <Skeleton className="h-3 w-16 mb-2" />
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Email */}
      <div>
        <Skeleton className="h-3 w-16 mb-2" />
        <Skeleton className="h-4 w-40" />
      </div>

      {/* Phone */}
      <div>
        <Skeleton className="h-3 w-16 mb-2" />
        <Skeleton className="h-4 w-28" />
      </div>

      {/* Address */}
      <div className="col-span-full">
        <Skeleton className="h-3 w-20 mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>

      {/* Created At */}
      <div>
        <Skeleton className="h-3 w-20 mb-2" />
        <Skeleton className="h-4 w-36" />
      </div>

      {/* Updated At */}
      <div>
        <Skeleton className="h-3 w-20 mb-2" />
        <Skeleton className="h-4 w-36" />
      </div>
    </div>
  );
}

export default CustomerDetailCardLoader;