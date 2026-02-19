import CustomerCreateFrom from "./CustomerCreateForm";

function CustomerCreateSection() {
  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Create new customer</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this customer in one place.
        </p>
      </div>

      <CustomerCreateFrom />
    </section>
  );
}

export default CustomerCreateSection;