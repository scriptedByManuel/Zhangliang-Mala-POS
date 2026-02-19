"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useCustomerDetail from "../../hooks/useCustomerDetail";
import CustomerDetailCardLoader from "./CustomerDetailCardLoader";
import CustomerDetailCard from "./CustomerDetailCard";

function CustomerDetailSection() {
  const { id, data, isLoading } = useCustomerDetail();

  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Customer Detail</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this customer in one place.
        </p>
      </div>

      {isLoading ? (
        <CustomerDetailCardLoader />
      ) : (
        <CustomerDetailCard data={data.data} />
      )}

      <div className=" flex gap-1">
        <Link href={`/dashboard/customers`}>
          <Button variant={"outline"} size={"sm"}>
            All Customer
          </Button>
        </Link>
        <Link href={`/dashboard/customers/${id}/edit`}>
          <Button size={"sm"}>Edit Customer</Button>
        </Link>
      </div>
    </section>
  );
}

export default CustomerDetailSection;