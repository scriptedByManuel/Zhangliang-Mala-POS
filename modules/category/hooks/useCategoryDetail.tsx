import { fetcher } from "@/lib/fetcher";
import { categoryApiUrl } from "@/services/categoryService";
import { CategoryFormType } from "@/types/CategoryTypes";
import { useParams } from "next/navigation";
import useSWR from "swr";

function useCategoryDetail() {
  const { id } = useParams();

  const swr = useSWR(`${categoryApiUrl}/${id}`, fetcher);

  return {
    ...swr,
  };
}

export default useCategoryDetail;
