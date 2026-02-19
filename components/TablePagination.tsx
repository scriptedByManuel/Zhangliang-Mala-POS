"use client";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "./ui/skeleton";

type Props = {
  links?: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    links?: Array<{
      url: string | null;
      label: string | null;
      active: boolean;
    }>;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

function TablePagination({ links, meta }: Props) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const updateUrl = (url: string | null) => {
    const urlObj = new URL(url ?? "");
    router.push(`${pathName}${urlObj.search}`);
  };

  const onValueChange = (value: number | null) => {
    router.push(`${pathName}?limit=${value}`);
  };

  return (
    <div className=" flex justify-between items-center">
      <div>
        <div className=" text-xs text-muted-foreground flex items-center gap-1">
          Showing{" "}
          {meta?.from ? <b>{meta.from}</b> : <Skeleton className=" w-3 h-3" />}{" "}
          to {meta?.to ? <b>{meta.to}</b> : <Skeleton className=" w-3 h-3" />}{" "}
          of{" "}
          {meta?.total ? (
            <b>{meta.total}</b>
          ) : (
            <Skeleton className=" w-3 h-3" />
          )}{" "}
          Entries
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <Select onValueChange={onValueChange}>
          <SelectTrigger className="px-2 h-6! w-16 text-xs">
            <SelectValue
              placeholder={
                searchParams.has("limit") ? searchParams.get("limit") : "5"
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value={5}>5</SelectItem>
              <SelectItem value={10}>10</SelectItem>
              <SelectItem value={50}>50</SelectItem>
              <SelectItem value={100}>100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className=" text-xs text-muted-foreground flex items-center gap-1">
          Page{" "}
          {meta?.current_page ? (
            <b>{meta.current_page}</b>
          ) : (
            <Skeleton className=" w-3 h-3" />
          )}{" "}
          of{" "}
          {meta?.last_page ? (
            <b>{meta.last_page}</b>
          ) : (
            <Skeleton className=" w-3 h-3" />
          )}
        </div>
        <ButtonGroup className=" flex ">
          <Button
            variant={"outline"}
            size={"xs"}
            onClick={() => updateUrl(links?.prev ?? null)}
            disabled={!links?.prev}
          >
            <ChevronLeft className=" size-2" />
          </Button>

          <Button
            variant={"outline"}
            size={"xs"}
            onClick={() => updateUrl(links?.first ?? null)}
            disabled={!links?.first}
          >
            <ChevronsLeft className=" size-2" />
          </Button>

          <Button
            variant={"outline"}
            size={"xs"}
            onClick={() => updateUrl(links?.last ?? null)}
            disabled={!links?.last}
          >
            <ChevronsRight className=" size-2" />
          </Button>

          <Button
            variant={"outline"}
            size={"xs"}
            onClick={() => updateUrl(links?.next ?? null)}
            disabled={!links?.next}
          >
            <ChevronRight className=" size-2" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default TablePagination;