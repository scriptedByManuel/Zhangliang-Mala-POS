"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CategoryFormType } from "@/types/CategoryTypes";
import React from "react";
import { Controller } from "react-hook-form";
import useCategoryEdit from "../../hooks/useCategoryEdit";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";


type Props = {
  data: CategoryFormType;
}

function EditCategoryForm({ data }: Props) {

  const { control, handleSubmit, formState: { isSubmitting }, onSubmit } = useCategoryEdit(data);

  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm space-y-6"
      noValidate
    >
      <FieldGroup>
        {/* Category Title */}
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="category_title">Category Title</FieldLabel>

              <Input
                {...field}
                id="category_title"
                aria-invalid={fieldState.invalid}
                disabled={isSubmitting}
              />

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Confirmation Checkbox */}
        <Controller
          name="confirm"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center gap-3">
                <Checkbox
                  id="category_confirm"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  aria-invalid={fieldState.invalid}
                  disabled={isSubmitting}
                />

                <FieldLabel htmlFor="category_confirm">
                  I confirm to update this category
                </FieldLabel>
              </div>

              {fieldState.error && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Actions */}
        <Field orientation="horizontal" className="gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard/categories")}
            disabled={isSubmitting}
          >
            Cancel
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Spinner className="size-3 mr-2" />}
            Update
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

export default EditCategoryForm;
