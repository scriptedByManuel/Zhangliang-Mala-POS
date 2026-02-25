import { PhotoUpdateFormValues } from "@/modules/profile-information/components/edit-profile/PhotoUpdateForm";
import { getCookie } from "react-use-cookie";

export const photoApiUrl =
  process.env.NEXT_PUBLIC_BASE_URL + "/dashboard/photos";

export function uploadPhoto(payload: PhotoUpdateFormValues): Promise<Response> {
  const formData = new FormData();
  formData.append("image", payload.image);

  return fetch(`${photoApiUrl}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: formData,
  });
}

export function deletePhoto(photoId: string): Promise<Response> {
  return fetch(`${photoApiUrl}/delete/${photoId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
}