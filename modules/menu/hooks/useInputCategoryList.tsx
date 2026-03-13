import { fetcher } from "@/lib/fetcher";
import { categoryApiUrl } from "@/services/categoryService";
import useSWR from "swr";

function useInputCategoryList() {

  const fetchUrl = `${categoryApiUrl}?limit=100`;
  const swr = useSWR(fetchUrl, fetcher);

  return {
    ...swr,
  };
}

export default useInputCategoryList;