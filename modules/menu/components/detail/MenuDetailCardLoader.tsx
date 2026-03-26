import { Skeleton } from "@/components/ui/skeleton";

function MenuDetailCardLoader() {
  return (
    <div className="w-1/2 grid grid-cols-1 gap-6 border border-muted p-4">
      {/* Image */}
      <Skeleton className="size-20 col-span-full" />

      {/* Title */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-4 w-8" />
        </div>
      </div>

      {/* Category */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-32" />
      </div>

      {/* Price */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-40" />
      </div>

      {/* Unit */}
      <div>
        <Skeleton className="h-2 w-16 mb-2" />
        <Skeleton className="h-3 w-28" />
      </div>


      {/* Created At */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-36" />
      </div>

      {/* Updated At */}
      <div>
        <Skeleton className="h-2 w-20 mb-2" />
        <Skeleton className="h-3 w-36" />
      </div>
    </div>
  );
}

export default MenuDetailCardLoader;