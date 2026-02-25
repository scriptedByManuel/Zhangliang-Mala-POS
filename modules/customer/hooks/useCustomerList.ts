import { fetcher } from "@/lib/fetcher";
import { customerApiUrl } from "@/services/customerService";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

function useCustomerList() {
  const searchParams = useSearchParams();

  const fetchUrl = searchParams.toString()
    ? `${customerApiUrl}?${searchParams.toString()}`
    : customerApiUrl;
  const swr = useSWR(fetchUrl, fetcher);

  return {
    ...swr,
  };
}

export default useCustomerList;