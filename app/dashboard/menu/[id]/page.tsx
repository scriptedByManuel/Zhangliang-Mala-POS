import Header from "@/modules/dashboard/components/Header";
import MenuDetailSection from "@/modules/menu/components/detail/MenuDetailSection";

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
        currentPage="Detail"
      />
      <MenuDetailSection />
    </>
  );
}

export default page;