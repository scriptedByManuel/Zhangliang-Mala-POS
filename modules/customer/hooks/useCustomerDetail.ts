"use client";
import { fetcher } from "@/lib/fetcher";
import { customerApiUrl } from "@/services/customerService";
import { useParams } from "next/navigation";
import useSWR from "swr";

function useCustomerDetail() {
  const { id } = useParams();
  const swr = useSWR(`${customerApiUrl}/${id}`, fetcher);

  return {
    id,
    ...swr,
  };
}

export default useCustomerDetail;