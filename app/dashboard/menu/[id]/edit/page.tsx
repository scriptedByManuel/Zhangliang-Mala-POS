import Header from "@/modules/dashboard/components/Header";
import MenuEditSection from "@/modules/menu/components/edit/MenuEditSection";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <Header
        links={[
          {
            title: "menu",
            href: "/dashboard/menu",
          },
          {
            title: "detail",
            href: `/dashboard/menu/${id}`,
          },
        ]}
        currentPage="Edit"
      />
      <MenuEditSection />
    </>
  );
}

export default page;