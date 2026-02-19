import { Field, FieldGroup } from "@/components/ui/field";
import { Skeleton } from "@/components/ui/skeleton";

function EditCategoryFormLoader() {
  return (
    <div className="max-w-sm space-y-6">
      <FieldGroup>
        {/* Category Title */}
        <Field>
          <Skeleton className="h-4 w-28 mb-2" />
          <Skeleton className="h-9 w-full" />
        </Field>

        {/* Confirmation Checkbox */}
        <Field>
          <div className="flex items-center gap-3">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-56" />
          </div>
        </Field>

        {/* Actions */}
        <Field orientation="horizontal" className="gap-3">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-9 w-24" />
        </Field>
      </FieldGroup>
    </div>
  );
}

export default EditCategoryFormLoader;
