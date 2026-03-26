"use client";

import useCategoryList from "@/modules/category/hooks/useCategoryList";
import MenuCreateForm from "./MenuCreateForm";
import MenuCreateFormLoader from "./MenuCreateFormLoader";

function MenuCreateSection() {
  const { data, isLoading } = useCategoryList();
  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Create new menu</h3>
        <p className=" text-xs text-muted-foreground">
          Enter accurate menu data to ensure smooth operations.
        </p>
      </div>
      {isLoading ? (
        <MenuCreateFormLoader />
      ) : (
        <MenuCreateForm categories={data.data} />
      )}
    </section>
  );
}

export default MenuCreateSection;