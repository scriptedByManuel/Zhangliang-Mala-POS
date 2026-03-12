import Header from "@/modules/dashboard/components/Header";
import MenuCreateSection from "@/modules/menu/components/create/MenuCreateSection";

function page() {
  return (
    <>
      <Header
        links={[
          {
            title: "menu",
            href: "/dashboard/menu",
          },
        ]}
        currentPage="create"
      />
      <MenuCreateSection />
    </>
  );
}

export default page;