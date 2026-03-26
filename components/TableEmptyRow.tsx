import React, { ReactNode } from "react";
import { TableCell, TableRow } from "./ui/table";

type Props = {
  colSpan?: number;
  children: ReactNode;
};

function TableEmptyRow({ colSpan = 3, children }: Props) {
  return (
    <TableRow className=" hidden last:table-row">
      <TableCell colSpan={colSpan} className="text-center">
        {children}
      </TableCell>
    </TableRow>
  );
}

export default TableEmptyRow;