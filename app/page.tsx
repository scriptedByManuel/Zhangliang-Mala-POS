import AuthLayout from '@/modules/auth/components/AuthLayout'
import LoginForm from '@/modules/auth/components/LoginForm'
import React from 'react'

const page = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}

export default page