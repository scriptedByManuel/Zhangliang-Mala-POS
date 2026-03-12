"use client";
import { fetcher } from "@/lib/fetcher";
import { menuApiUrl } from "@/services/menuService";
import { useParams } from "next/navigation";
import useSWR from "swr";

function useMenuDetail() {
  const { id } = useParams();
  const swr = useSWR(`${menuApiUrl}/${id}`, fetcher);

  return {
    id,
    ...swr,
  };
}

export default useMenuDetail;