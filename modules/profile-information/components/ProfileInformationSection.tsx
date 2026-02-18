"use client";

import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/stores/useProfileStore";
import Image from "next/image";
import Link from "next/link";

function ProfileInformationSection() {
  const { profile } = useProfileStore();
  return (
    <section className="container mx-auto py-3  flex flex-col gap-4">
      <div className="">
        <h3 className=" text-xl font-semibold mb-1">Profile Information!</h3>
        <p className=" text-xs text-muted-foreground">
          All the essential details about this customer in one place.
        </p>
      </div>

      {/* <Image
        width={80}
        height={80}
        className=" size-20 "
        src={
          profile?.photo ||
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        }
        alt="profile image"
      /> */}
      <img src={profile?.photo || "https://minio.teapos.shop/default-profile.png"} alt="profile image" className=" size-20 object-cover border-2 border-muted" />

      <div>
        <h4 className=" mb-1">Name</h4>
        <p className=" text-sm text-muted-foreground">{profile?.name}</p>
      </div>

      <div>
        <h4 className=" mb-1">Email</h4>
        <p className=" text-sm text-muted-foreground">{profile?.email}</p>
      </div>

      <div className=" flex gap-1">
        <Link href={"/dashboard/profile-information/change-password"}>
          <Button variant={"secondary"} size={"sm"}>
            Change Password
          </Button>
        </Link>
        <Link href={"/dashboard/profile-information/edit-profile"}>
          <Button variant={"outline"} size={"sm"}>
            Edit Profile
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default ProfileInformationSection;