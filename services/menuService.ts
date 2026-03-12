import {
  MenuUpdatePayloadValues,
  MenuStorePayloadValues
} from "@/types/MenuTypes";
import { getCookie } from "react-use-cookie";

export const menuApiUrl =
  process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/menus";

// store
// update
// show
// index

export function storeMenu(
  payload: MenuStorePayloadValues,
): Promise<Response> {
  return fetch(`${menuApiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function updateMenu(
  payload: MenuUpdatePayloadValues,
  id: number,
): Promise<Response> {
  return fetch(`${menuApiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function deleteMenu(id: number): Promise<Response> {
  return fetch(`${menuApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
}