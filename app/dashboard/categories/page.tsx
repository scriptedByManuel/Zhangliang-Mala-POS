import CategoryListSection from "@/modules/category/components/list/CategoryListSection";
import Header from "@/modules/dashboard/components/Header";

const page = () => {
  return (
    <>
      <Header currentPage="Category" />
      <CategoryListSection />
    </>
  );
};

export default page;
