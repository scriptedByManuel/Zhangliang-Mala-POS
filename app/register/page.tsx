import AuthLayout from "@/modules/auth/components/AuthLayout";
import RegisterForm from "@/modules/auth/components/RegisterForm";
import React from "react";

const page = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default page;
