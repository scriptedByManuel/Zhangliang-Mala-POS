"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuPagination from "../../../../components/TablePagination";
import useMenuList from "../../hooks/useMenuList";
import TableSearchInput from "@/components/TableSearchInput";
import MenuTableRow from "./MenuTableRow";
import MenuTableLoader from "./MenuTableLoader";
import { MenuDetailType } from "@/types/MenuTypes";
import TableSortableColumn from "@/components/TableSortableColumn";
import FilterByCategory from "./FilterByCategory";
import FilterByUnit from "./FilterByUnit";

function MenuTable() {
  const { data, error, isLoading } = useMenuList();

  return (
    <>
      <div className=" flex justify-between gap-1">
        <TableSearchInput placeholder="Search menu ..." />
        <div className="flex justify-end gap-2">
          <FilterByCategory />
          <FilterByUnit />
          <Link href={"/dashboard/menu/create?limit=100"}>
            <Button size={"sm"}>Create Menu</Button>
          </Link>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
               <TableSortableColumn
                align="left"
                iconPosition="right"
                columnName="id"
              >
                #
              </TableSortableColumn>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>
              <TableSortableColumn
                align="right"
                iconPosition="right"
                columnName="price"
              >
                Price
              </TableSortableColumn>
            </TableHead>
            <TableHead className="text-center">Unit</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className=" text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td]:align-top">
          {isLoading ? (
            <MenuTableLoader />
          ) : (
            data.data.map((el: MenuDetailType) => (
              <MenuTableRow key={el.id} menu={el} />
            ))
          )}
        </TableBody>
      </Table>
      <MenuPagination links={data?.links} meta={data?.meta} />
    </>
  );
}

export default MenuTable;