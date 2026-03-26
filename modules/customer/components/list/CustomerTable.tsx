"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useCustomerList from "../../hooks/useCustomerList";
import CustomerTableLoader from "./CustomerTableLoader";
import CustomerTableRow from "./CustomerTableRow";
import { CustomerDetailType } from "@/types/CustomerTypes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomerPagination from "../../../../components/TablePagination";
import TableSearchInput from "@/components/TableSearchInput";
import TableSortableColumn from "@/components/TableSortableColumn";
import FilterByGender from "./FilterByGender";
import TableEmptyRow from "@/components/TableEmptyRow";

function CustomerTable() {
  const { data, error, isLoading } = useCustomerList();

  return (
    <>
      <div className=" flex justify-between gap-1">
        <TableSearchInput placeholder="Search customers ..." />
         <div className=" flex justify-end gap-2">
          <FilterByGender />
          <Link href={"/dashboard/customers/create"}>
            <Button size={"sm"}>Create Customer</Button>
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
            <TableHead>
              <TableSortableColumn
                align="left"
                iconPosition="right"
                columnName="name"
              >
                Customer
              </TableSortableColumn>
            </TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className=" text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td]:align-top">
         {isLoading ? (
            <CustomerTableLoader />
          ) : (
            <>
              <TableEmptyRow colSpan={7}>There is no Customer Data</TableEmptyRow>
              {data.data.map((el: CustomerDetailType) => (
                <CustomerTableRow key={el.id} customer={el} />
              ))}
            </>
          )}
        </TableBody>
      </Table>
      <CustomerPagination links={data?.links} meta={data?.meta} />
    </>
  );
}

export default CustomerTable;
