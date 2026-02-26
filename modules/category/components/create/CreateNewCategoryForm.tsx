"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { createCategory } from "@/services/categoryService";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import useCategoryCreate from "../../hooks/useCategoryCreate";




const CreateNewCategoryForm = () => {

  const router = useRouter();
  const { control, handleSubmit, reset, formState: { isSubmitting }, onSubmit } = useCategoryCreate();

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
                  I confirm to create a new category
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
            Create
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default CreateNewCategoryForm;