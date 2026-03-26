import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { TableCell, TableRow } from "@/components/ui/table";
import dayjs from "dayjs";
import { AlarmClock, ArrowRight, Clock, Pencil } from "lucide-react";
import Link from "next/link";
import { CategoryDetailType } from "@/types/CategoryTypes";
import CategoryDeleteBtn from "../delete/CategoryDeleteBtn";

type Props = {
  category: CategoryDetailType;
};

function CategoryTableRow({
  category: { id, title, created_at, user },
}: Props) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>
        <p>{user.name}</p>

        <p
          className=" text-muted-foreground flex items-center gap-1"
          title={dayjs(created_at).format("h:mm A")}
        >
          {dayjs(created_at).format("D MMM YYYY")}
        </p>
      </TableCell>

      <TableCell>
        <ButtonGroup className=" flex justify-end w-full">
          <CategoryDeleteBtn id={id} />
          <Link href={`/dashboard/categories/${id}`}>
            <Button variant={"secondary"} size={"xs"}>
              <Pencil className=" size-2" />
            </Button>
          </Link>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
}

export default CategoryTableRow;
