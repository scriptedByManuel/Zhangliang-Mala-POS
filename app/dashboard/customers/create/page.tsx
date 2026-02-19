import CustomerCreateSection from "@/modules/customer/components/create/CustomerCreateSection";
import Header from "@/modules/dashboard/components/Header";

function page() {
  return (
    <>
      <Header
        links={[
          {
            title: "customers",
            href: "/dashboard/customers",
          },
        ]}
        currentPage="create"
      />
      <CustomerCreateSection />
    </>
  );
}

export default page;