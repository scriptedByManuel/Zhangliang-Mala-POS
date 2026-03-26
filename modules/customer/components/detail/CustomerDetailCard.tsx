import { Badge } from "@/components/ui/badge";
import { CustomerDetailType } from "@/types/CustomerTypes";
import Image from "next/image";

type Props = {
  data: CustomerDetailType;
};

function CustomerDetailCard({
  data: {
    name,
    image,
    email,
    phone,
    address,
    gender,
    created_at,
    updated_at,
    date_of_birth,
  },
}: Props) {
  return (
    <div className=" w-1/2 grid grid-cols-2 gap-6 border border-muted p-4">
       <Image
              unoptimized
              width={80}
              height={80}
              className=" size-20 col-span-2"
              src={
                image ||
                "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt="profile image"
            />
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Name</p>
        <p className=" text-sm text-foreground">
          {name}
          <Badge className=" ms-2" variant={"secondary"}>
            {gender}
          </Badge>
        </p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Date of Birth</p>
        <p className=" text-sm text-foreground">{date_of_birth}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Email</p>
        <p className=" text-sm text-foreground">{email}</p>
      </div>
      <div>
        <p className=" text-xs text-muted-foreground mb-1">Phone</p>
        <p className=" text-sm text-foreground">{phone}</p>
      </div>
      <div className=" col-span-full">
        <p className=" text-xs text-muted-foreground mb-1">Address</p>
        <p className=" text-sm text-foreground">{address}</p>
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

export default CustomerDetailCard;