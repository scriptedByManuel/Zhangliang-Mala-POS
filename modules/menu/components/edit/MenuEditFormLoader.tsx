import { Skeleton } from "@/components/ui/skeleton";

function MenuEditFormLoader() {
  return (
    <div className="w-1/2 space-y-6">
      {/* Grid Section */}
      <div className="grid grid-cols-1 gap-5">
        {/* Image */}
        <Skeleton className="size-20 col-span-full" />
        {/* Menu Title */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-6 w-full" />
        </div>

        {/* Menu Category */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-6 w-full" />
        </div>

        {/* Menu Price */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-6 w-full" />
        </div>
      </div>

      {/* Checkbox Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-3 w-56" />
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-3 w-48" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Skeleton className="h-9 w-12" />
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  );
}

export default MenuEditFormLoader;
