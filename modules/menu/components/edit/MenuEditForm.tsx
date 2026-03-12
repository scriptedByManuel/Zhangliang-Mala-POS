"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { MenuDetailType } from "@/types/MenuTypes";
import useMenuEdit from "../../hooks/useMenuEdit";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryDetailType } from "@/types/CategoryTypes";

type Props = {
  data: MenuDetailType;
  categories: CategoryDetailType[];
};

const MenuEditForm = ({ data, categories }: Props) => {
  const {
    handleSubmit,
    control,
    onSubmit,
    formState: { isSubmitting },
  } = useMenuEdit(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-1/2 space-y-6">
        <FieldGroup className=" grid grid-cols-1">
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Title</FieldLabel>
                <Input
                  placeholder="Enter menu title"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="category_id"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Category</FieldLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ? field.value.toString() : ""}
                >
                  <SelectTrigger className="px-2 h-6 w-16 text-xs">
                    <SelectValue placeholder={"Select"}>
                      {field.value
                        ? categories.find(
                            (c: CategoryDetailType) =>
                              c.id.toString() === field.value.toString(),
                          )?.title
                        : "Select"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {categories.map(
                        (category: { id: number; title: string }) => (
                          <SelectItem
                            key={category.id}
                            value={category.id.toString()}
                          >
                            {category.title}
                          </SelectItem>
                        ),
                      )}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="unit"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Unit</FieldLabel>
                <Input
                  placeholder="Enter menu unit"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="price"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Price</FieldLabel>
                <Input
                  placeholder="MMK"
                  type="number"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>
        <FieldGroup>
          <Controller
            name="stay_here"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="stay-here-check"
                  />
                  <FieldLabel htmlFor="stay-here-check">
                    Stay here and continue editing
                  </FieldLabel>
                </div>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="confirm"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="confirm-check"
                  />
                  <FieldLabel htmlFor="confirm-check">
                    I confirm to edit menu
                  </FieldLabel>
                </div>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Field className=" col-span-full" orientation="horizontal">
            <Link href={`/dashboard/menu/${data.id}`}>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner className=" size-2" />
                  <span>Updating ...</span>
                </>
              ) : (
                "Update menu"
              )}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </>
  );
};

export default MenuEditForm;