import { MenuDetailType } from "@/types/MenuTypes";
import Image from "next/image";

type Props = {
  data: MenuDetailType;
};

function MenuDetailCard({
  data: { title, category, unit, price, image, created_at, updated_at },
}: Props) {
  return (
    <div className=" w-1/2 grid grid-cols-1 gap-6 p-4 border border-muted">
      <Image
        unoptimized
        width={80}
        height={80}
        className=" size-20 "
        src={
          image ||
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        }
        alt="profile image"
      />
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Name</p>
        <p className=" text-sm text-foreground">{title}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Category</p>
        <p className=" text-sm text-foreground">{category.title}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Unit</p>
        <p className=" text-sm text-foreground">{unit}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Price</p>
        <p className=" text-sm text-foreground">{price}</p>
      </div>

      <div>
        <p className=" text-xs text-muted-foreground mb-1">Created At</p>
        <p className=" text-sm text-foreground">
          {new Date(created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Updated At</p>
        <p className=" text-sm text-foreground">
          {new Date(updated_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}

export default MenuDetailCard;
