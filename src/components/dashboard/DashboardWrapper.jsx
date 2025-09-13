import React from 'react'
import Features from './Features'
import RevenueReports from './RevenueReports'
import UsersTable from '../users/UsersTable'

function DashboardWrapper() {
  return (
    <>
    <div className='mt-2'>
    <Features/>
    <RevenueReports/>
    <UsersTable/>
    </div>
      
    </>
  )
}

export default DashboardWrapper
