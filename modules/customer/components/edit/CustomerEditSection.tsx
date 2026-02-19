"use client";
import useCustomerDetail from "../../hooks/useCustomerDetail";
import CustomerEditFormLoader from "./CustomerEditFormLoader";
import CustomerEditFrom from "./CustomerEditForm";

function CustomerEditSection() {
  const { data, isLoading } = useCustomerDetail();


  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Edit Customer</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this customer in one place.
        </p>
      </div>

      {isLoading ? (
        <CustomerEditFormLoader />
      ) : (
        <CustomerEditFrom data={data.data} />
      )}
    </section>
  );
}

export default CustomerEditSection;