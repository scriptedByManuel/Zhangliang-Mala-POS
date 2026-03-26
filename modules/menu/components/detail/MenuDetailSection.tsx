"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuDetailCard from "./MenuDetailCard";
import useMenuDetail from "../../hooks/useMenuDetail";
import MenuDetailCardLoader from "./MenuDetailCardLoader";
function MenuDetailSection() {
  const { data, id, isLoading } = useMenuDetail();
  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Menu Detail</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this menu in one place.
        </p>
      </div>

      {isLoading ? (
        <MenuDetailCardLoader />
      ) : (
        <MenuDetailCard data={data.data} />
      )}

      <div className=" flex gap-1">
        <Link href={`/dashboard/menu`}>
          <Button variant={"outline"} size={"sm"}>
            All Menu
          </Button>
        </Link>
        <Link href={`/dashboard/menu/${id}/edit?limit=100`}>
          <Button size={"sm"}>Edit Menu</Button>
        </Link>
      </div>
    </section>
  );
}

export default MenuDetailSection;