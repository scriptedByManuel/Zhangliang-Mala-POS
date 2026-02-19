import { Skeleton } from "@/components/ui/skeleton";

function CustomerEditFormLoader() {
  return (
    <div className="w-1/2 space-y-6">
      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-5">
        {/* Customer Name */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-9 w-full" />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-9 w-full" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-9 w-full" />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-9 w-full" />
        </div>

        {/* Gender (full width) */}
        <div className="col-span-full flex flex-col gap-3">
          <Skeleton className="h-3 w-20" />
          <div className="flex gap-6">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>

        {/* Address (full width) */}
        <div className="col-span-full flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>

      {/* Checkbox Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-3 w-56" />
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-3 w-48" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Skeleton className="h-9 w-24 rounded-md" />
        <Skeleton className="h-9 w-32 rounded-md" />
      </div>
    </div>
  );
}

export default CustomerEditFormLoader;