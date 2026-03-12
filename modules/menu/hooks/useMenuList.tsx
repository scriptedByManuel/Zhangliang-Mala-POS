import { fetcher } from "@/lib/fetcher";
import { menuApiUrl } from "@/services/menuService";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

function useMenuList() {
  const searchParams = useSearchParams();

  const fetchUrl = searchParams.toString()
    ? `${menuApiUrl}?${searchParams.toString()}`
    : menuApiUrl;
  const swr = useSWR(fetchUrl, fetcher);

  return {
    ...swr,
  };
}

export default useMenuList;