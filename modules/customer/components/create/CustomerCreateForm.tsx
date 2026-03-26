"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import useCustomerCreate from "../../hooks/useCustomerCreate";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { customerGenders } from "@/lib/constants";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import PhotoInput from "@/components/PhotoInput";

function CustomerCreateFrom() {
  const {
    onSubmit,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useCustomerCreate();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-1/2 space-y-6">
        <FieldGroup className=" grid grid-cols-2">
          <div className="col-span-2">
            <Controller
            name="image"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Menu Image</FieldLabel>
                <PhotoInput
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error}
                />

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          </div>
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Customer Name</FieldLabel>
                <Input
                  placeholder="Enter customer name"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="date_of_birth"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Date of Birth</FieldLabel>
                <Input
                  type="date"
                  placeholder="Enter customer date of birth"
                  aria-invalid={fieldState.invalid}
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Customer Email</FieldLabel>
                <Input
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter customer email"
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Customer Phone</FieldLabel>
                <Input
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter customer phone"
                  {...field}
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field, fieldState }) => (
              <Field
                className=" col-span-full"
                data-invalid={fieldState.invalid}
              >
                <FieldLabel>Gender</FieldLabel>
                <RadioGroup
                  value={field.value || ""}
                  onValueChange={field.onChange}
                  className=" flex gap-4"
                >
                  {customerGenders.map((gender) => (
                    <div
                      className=" flex gap-1"
                      key={gender}
                      data-invalid={fieldState.invalid}
                    >
                      <RadioGroupItem
                        className=" size-3"
                        value={gender}
                        id={`gender-${gender}`}
                      />
                      <FieldLabel
                        className=" capitalize"
                        aria-invalid={fieldState.invalid}
                        htmlFor={`gender-${gender}`}
                      >
                        {gender}
                      </FieldLabel>
                    </div>
                  ))}
                </RadioGroup>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="address"
            control={control}
            render={({ field, fieldState }) => (
              <Field
                className=" col-span-full"
                data-invalid={fieldState.invalid}
              >
                <FieldLabel>Address</FieldLabel>
                <Textarea
                  {...field}
                  rows={4}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your full address"
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
                    Stay here and create another customer
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
                    I confirm to create new customer
                  </FieldLabel>
                </div>

                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Field className=" col-span-full" orientation="horizontal">
            <Button variant="outline" type="button" onClick={() => reset()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner className=" size-2" />
                  <span>Saving ...</span>
                </>
              ) : (
                "Save customer"
              )}
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </>
  );
}

export default CustomerCreateFrom;