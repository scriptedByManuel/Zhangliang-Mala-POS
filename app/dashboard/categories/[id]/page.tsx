import EditCategorySection from "@/modules/category/components/edit/EditCategorySection";
import Header from "@/modules/dashboard/components/Header";

const page = () => {
  return (
    <>
      <Header
        links={[
          {
            title: "Category",
            href: "/dashboard/category",
          },
        ]}
        currentPage="Edit Category"
      />

      <EditCategorySection />
    </>
  );
};

export default page;