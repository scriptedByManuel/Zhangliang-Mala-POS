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
import TableSearchInput from "@/components/TableSearchInput";
import { Plus } from "lucide-react";
import useCategoryList from "../../hooks/useCategoryList";
import CategoryTableRow from "./CategoryTableRow";
import { CategoryDetailType } from "@/types/CategoryTypes";
import TablePagination from "@/components/TablePagination";
import CategoryTableLoader from "./CategoryTableLoader";

function CategoryTable() {
  const { data, error, isLoading } = useCategoryList();

  return (
    <>
      <div className=" flex justify-between gap-1">
        <TableSearchInput placeholder="Search ..." />
        <div>
          <Link href={"/dashboard/categories/create"}>
            <Button size={"sm"}> <Plus />Create Category</Button>
          </Link>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Category Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className=" text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td]:align-top">
          {isLoading ? (
            <CategoryTableLoader />
          ) : (
            data.data.map((el: CategoryDetailType) => (
              <CategoryTableRow key={el.id} category={el} />
            ))
          )}
        </TableBody>
      </Table>
      <TablePagination links={data?.links} meta={data?.meta} />
    </>
  );
}

export default CategoryTable;