import Header from "@/modules/dashboard/components/Header";
import ProfileInformationSection from "@/modules/profile-information/components/ProfileInformationSection";

function Page() {
  return (
    <>
      <Header currentPage="Profile Information" />
      <ProfileInformationSection />
    </>
  );
}

export default Page;