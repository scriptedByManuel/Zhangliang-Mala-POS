import CustomerDetailSection from "@/modules/customer/components/detail/CustomerDetailSection";
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
        currentPage="Detail"
      />
      <CustomerDetailSection />
    </>
  );
}

export default page;