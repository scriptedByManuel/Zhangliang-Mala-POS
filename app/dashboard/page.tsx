import DashboardLayout from '@/modules/dashboard/components/Dashboard'
import ModuleLinkList from '@/modules/dashboard/components/ModuleLinkList'
import React from 'react'

const page = () => {
  return (
    <DashboardLayout>
        <ModuleLinkList />
    </DashboardLayout>
  )
}

export default page