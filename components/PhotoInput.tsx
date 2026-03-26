import { uploadPhoto } from "@/services/photoService";
import { ImagePlus } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import { toast } from "sonner";

type Props = {
  value?: string;
  onChange: (value: string) => void;
  error?: unknown;
};

const PhotoInput = ({ value, onChange, error }: Props) => {
  const [preview, setPreview] = useState<string>(value || "");
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);

    setLoading(true);
    const toastId = toast.loading("Uploading...");
    try {
      const res = await uploadPhoto({ image: file });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Upload failed");
      }

      // update form value
      onChange(json.data.file_name);

      // replace preview with server image
      setPreview(json.data.url);

      toast.success("Uploaded successfully", { id: toastId });
    } catch (err: unknown) {
      if(err instanceof Error) {
         toast.error(err.message || "Upload error", { id: toastId });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <label
        className="inline-flex justify-center items-center border size-16 cursor-pointer duration-200 active:scale-95"
        htmlFor="photo-upload"
      >
        {preview ? (
          <img
            src={preview}
            className={`w-full h-full object-cover ${loading && "animate-pulse"}`}
          />
        ) : (
          <ImagePlus className=" text-primary" />
        )}
      </label>

      <input
        id="photo-upload"
        type="file"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};

export default PhotoInput;
