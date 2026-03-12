import { Suspense } from "react";
import MenuTable from "./MenuTable";

function MenuListSection() {
  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Menu Lists</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this menu in one place.
        </p>
      </div>
      <Suspense>
        <MenuTable />
      </Suspense>
    </section>
  );
}

export default MenuListSection;