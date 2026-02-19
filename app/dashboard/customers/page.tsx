import CustomerIndexSection from "@/modules/customer/components/list/CustomerListSection";
import Header from "@/modules/dashboard/components/Header";

function page() {
  return (
    <>
      <Header currentPage="customers" />
      <CustomerIndexSection />
    </>
  );
}

export default page;