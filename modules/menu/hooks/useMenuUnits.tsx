"use client";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

function useMenuUnits() {
    const menuUrl = process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/menu-units"
  const swr = useSWR(menuUrl, fetcher);

  return {
    ...swr,
  };
}

export default useMenuUnits;