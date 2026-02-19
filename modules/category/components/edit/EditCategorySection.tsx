"use client";
import React from "react";
import EditCategoryForm from "./EditCategoryForm";
import useCategoryEdit from "../../hooks/useCategoryEdit";
import useCategoryDetail from "../../hooks/useCategoryDetail";
import EditCategoryFormLoader from "./EditCategoryFormLoader";

function EditCategorySection() {

  const { isLoading, data } = useCategoryDetail();
    
  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Edit Customer</h3>
        <p className=" text-xs text-muted-foreground">
          Please update your category information for accurate ordering.
        </p>
      </div>

      {isLoading ? (
        <EditCategoryFormLoader />
      ) : (
        <EditCategoryForm data={data?.data} />
      )}
    </section>
  );
}

export default EditCategorySection;
