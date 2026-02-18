import Header from "@/modules/dashboard/components/Header";
import ChangePasswordSection from "@/modules/profile-information/components/change-password/ChangePasswordSection";

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
        currentPage="Change Password"
      />
      <ChangePasswordSection />
    </>
  );
}

export default Page;