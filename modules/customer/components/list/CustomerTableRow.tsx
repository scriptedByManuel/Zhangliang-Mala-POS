import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { TableCell, TableRow } from "@/components/ui/table";
import { CustomerDetailType } from "@/types/CustomerTypes";
import dayjs from "dayjs";
import { ChevronRight, Pencil, SquarePen } from "lucide-react";
import Link from "next/link";
import CustomerDeleteBtn from "../delete/CustomerDeleteBtn";

type Props = {
  customer: CustomerDetailType;
};

function CustomerTableRow({
  customer: {
    id,
    name,
    email,
    gender,
    phone,
    address,
    created_at,
    updated_at,
    user,
  },
}: Props) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <p className=" capitalize">{name}</p>
        <p className=" text-muted-foreground text-xs">{email}</p>
      </TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell className=" capitalize">{gender}</TableCell>
      <TableCell className=" w-52">{address}</TableCell>
      <TableCell className="w-25">
        <p>{user.name}</p>
        <p
          className=" text-muted-foreground flex items-center gap-1"
          title={dayjs(created_at).format("D MMM YYYY, h:mm A")}
        >
          {dayjs(updated_at).format("D MMM YYYY")}
        </p>
      </TableCell>
      <TableCell className="w-20">
        <ButtonGroup className=" flex justify-end w-full">
          <CustomerDeleteBtn id={id} />
          <Link href={`/dashboard/customers/${id}/edit`}>
            <Button variant={"secondary"} size={"xs"}>
              <SquarePen className=" size-2" />
            </Button>
          </Link>
          <Link href={`/dashboard/customers/${id}`}>
            <Button variant={"secondary"} size={"xs"}>
              <ChevronRight className=" size-2" />
            </Button>
          </Link>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}

export default CustomerTableRow;