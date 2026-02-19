import CustomerEditSection from "@/modules/customer/components/edit/CustomerEditSection";
import Header from "@/modules/dashboard/components/Header";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <Header
        links={[
          {
            title: "customers",
            href: "/dashboard/customers",
          },
          {
            title: "detail",
            href: `/dashboard/customers/${id}`,
          },
        ]}
        currentPage="Edit"
      />
      <CustomerEditSection />
    </>
  );
}

export default page;