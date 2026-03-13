import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { TableCell, TableRow } from "@/components/ui/table";
import dayjs from "dayjs";
import { ArrowRight, Pencil } from "lucide-react";
import Link from "next/link";
import { MenuDetailType } from "@/types/MenuTypes";
import MenuDeleteBtn from "../delete/MenuDeleteBtn";

type Props = {
  menu: MenuDetailType;
};

function MenuTableRow({
  menu: { id, title, category, price, unit, image, created_at, updated_at, user },
}: Props) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <div className="flex items-start gap-1">
          <img
            src={image}
            alt={title}
            className=" w-10 h-10 object-cover rounded-md"
          />
          <p className=" capitalize">{title}</p>
        </div>
      </TableCell>
      <TableCell>{category.title}</TableCell>
      <TableCell className=" capitalize">{price}</TableCell>
      <TableCell className=" capitalize">{unit}</TableCell>
      <TableCell>
        <p>{user.name}</p>
        <p
          className=" text-muted-foreground flex items-center gap-1"
          title={dayjs(created_at).format("D MMM YYYY, h:mm A")}
        >
          {dayjs(updated_at).format("D MMM YYYY")}
        </p>
      </TableCell>
      <TableCell>
        <ButtonGroup className=" flex justify-end w-full">
          <MenuDeleteBtn id={id} />
          <Link href={`/dashboard/menu/${id}/edit`}>
            <Button variant={"secondary"} size={"xs"}>
              <Pencil className=" size-2" />
            </Button>
          </Link>
          <Link href={`/dashboard/menu/${id}`}>
            <Button variant={"secondary"} size={"xs"}>
              <ArrowRight className=" size-2" />
            </Button>
          </Link>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}

export default MenuTableRow;