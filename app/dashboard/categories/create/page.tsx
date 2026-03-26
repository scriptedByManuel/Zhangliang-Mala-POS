import CreateNewCategorySection from "@/modules/category/components/create/CreateNewCategorySection"
import Header from "@/modules/dashboard/components/Header"

const page = () => {
  return (
    <>
        <Header links={[
          {
            title: "Category",
            href: "/dashboard/categories",
          },
        ]}  currentPage="Create Category" />
        <CreateNewCategorySection />
    </>
  )
}

export default page