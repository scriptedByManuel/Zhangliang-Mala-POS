"use client";

import { Spinner } from "@/components/ui/spinner";
import { uploadPhoto } from "@/services/photoService";
import { updateProfilePhoto } from "@/services/profileService";
import { useProfileStore } from "@/stores/useProfileStore";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function ProfileImageChangeBtn() {
  const [isLoading, setIsLoading] = useState(false);

  const { setProfile } = useProfileStore();


  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const toastLoading = toast.loading("Photo updating...");

    try {
      const res = await uploadPhoto({ image: e.target.files?.[0] as File });
      const json = await res.json();

      const res2 = await updateProfilePhoto({ photo: json.data.file_name });
      const json2 = await res2.json();

      console.log(json2);

      if (!res.ok) {
        throw new Error(json.message || "Profile update failed");
      }

      setProfile(json2.data);
      toast.success("Profile updated successfully", { id: toastLoading });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, { id: toastLoading });
      } else {
        toast.error("An unexpected error occurred", { id: toastLoading });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <input
        onChange={handleChange}
        className=" hidden"
        type="file"
        id="profile-image-uploader-input"
      />
      <label
        htmlFor="profile-image-uploader-input"
        className={`${isLoading && "pointer-events-none  animate-pulse "} bg-primary flex justify-center items-center size-5 absolute bottom-0 right-0 translate-1/2 duration-150 active:scale-90 `}
      >
        {isLoading ? (
          <Spinner className=" size-2" />
        ) : (
          <Pencil className=" size-2 text-white" />
        )}
      </label>
    </>
  );
}

export default ProfileImageChangeBtn;