"use client";
import useCategoryList from "@/modules/category/hooks/useCategoryList";
import useInputCategoryList from "../../hooks/useInputCategoryList";
import useMenuDetail from "../../hooks/useMenuDetail";
import MenuEditForm from "./MenuEditForm";
import MenuEditFormLoader from "./MenuEditFormLoader";

function MenuEditSection() {
  const { data: menuData, error: menuError, isLoading: isMenuLoading } = useMenuDetail();
  const { data: categoriesData, error: categoryError, isLoading: isCategoriesLoading } = useCategoryList();

  // Loading State
  const isLoading = isMenuLoading || isCategoriesLoading;
  
  return (
    <section className="container mx-auto py-3 flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-1">Edit Menu Detail</h3>
        <p className="text-xs text-muted-foreground">
          Please update your menu information for accurate ordering.
        </p>
      </div>

      {isLoading ? (
        <MenuEditFormLoader />
      ) : (
        <MenuEditForm 
          data={menuData?.data} 
          categories={categoriesData?.data || []} 
        />
      )}
    </section>
  );
}

export default MenuEditSection;