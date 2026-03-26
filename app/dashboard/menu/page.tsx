import Header from "@/modules/dashboard/components/Header";
import MenuListSection from "@/modules/menu/components/list/MenuListSection";

function page() {
  return (
    <>
      <Header currentPage="menu" />
      <MenuListSection />
    </>
  );
}

export default page;