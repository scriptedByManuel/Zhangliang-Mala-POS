import { MenuDetailType } from "@/types/MenuTypes";

type Props = {
  data: MenuDetailType;
};

function MenuDetailCard({
  data: {
    title,
    category,
    unit,
    price,
    created_at,
    updated_at,
  },
}: Props) {
  return (
    <div className=" w-1/2 grid grid-cols-1 gap-6 border border-muted p-4">
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Name</p>
        <p className=" text-sm text-foreground">
          {title}
        </p>
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