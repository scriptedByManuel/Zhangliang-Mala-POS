import {
  CustomerStorePayloadValues,
  CustomerUpdatePayloadValues,
} from "@/types/CustomerTypes";
import { getCookie } from "react-use-cookie";

export const customerApiUrl =
  process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/customers";

// store
// update
// show
// index

export function storeCustomer(
  payload: CustomerStorePayloadValues,
): Promise<Response> {
  return fetch(`${customerApiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function updateCustomer(
  payload: CustomerUpdatePayloadValues,
  id: number,
): Promise<Response> {
  return fetch(`${customerApiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify(payload),
  });
}

export function deleteCustomer(id: number): Promise<Response> {
  return fetch(`${customerApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
}