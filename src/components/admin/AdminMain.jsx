import React from 'react'
import AdminEvents from './AdminEvents'
import AdminMembers from './AdminMembers'
import AdminSidebar from './AdminSidebar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function AdminMain() {
  return (
    <div className='flex bg-black'>
      <AdminSidebar />
      <Routes>
        <Route path='/adminmembers' element={<AdminMembers />} />
        <Route path='/adminevents' element={<AdminEvents />} />
      </Routes>
    </div>
  )
}

export default AdminMain