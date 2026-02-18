import Header from "@/modules/dashboard/components/Header";
import EditProfileSection from "@/modules/profile-information/components/edit-profile/EditProfileSection";

function Page() {
  return (
    <>
      <Header
        links={[
          {
            title: "Profile Information",
            href: "/dashboard/profile-information",
          },
        ]}
        currentPage="Edit Profile"
      />
      <EditProfileSection />
    </>
  );
}

export default Page;