import { fetcher } from "@/lib/fetcher";
import type { ParamValue } from "next/dist/server/request/params";
import { getCookie } from "react-use-cookie";
import useSWR from "swr";

export const categoryApiUrl =
  process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/categories";

export function createCategory(payload: { title: string }): Promise<Response> {
  return fetch(categoryApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function updateCategory(
  id: ParamValue,
  payload: { title: string },
): Promise<Response> {
  return fetch(`${categoryApiUrl}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function deleteCategory(id: number): Promise<Response> {
  return fetch(`${categoryApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
}