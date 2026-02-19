import CreateNewCategoryForm from "./CreateNewCategoryForm";

const CreateNewCategorySection = () => {
  return (
    <section className=" container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Create New Category !</h3>
        <p className=" text-xs text-muted-foreground">
          Enter accurate category data to ensure smooth operations.
        </p>
      </div>

      <CreateNewCategoryForm />
    </section>
  );
};

export default CreateNewCategorySection;