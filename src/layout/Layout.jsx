import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Layout() {
  return (
   <div className="flex min-h-screen w-full bg-[#F9F1F1] overflow-x-hidden font-[Poppins]">
      {/* Sidebar */}
      <div className="w-[18%] min-w-[250px] shadow-md shadow-[#00000005] flex flex-col items-center bg-[#FFFFFF] border-[#E2E8F0] border h-auto">
        <Sidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-[88px] bg-white border-b-[#CBD5E1] border-b flex items-center px-4">
          <Topbar/>
        </header>
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
