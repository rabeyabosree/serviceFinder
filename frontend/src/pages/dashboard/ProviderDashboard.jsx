import Sidbar from './Sidbar'; 
import { Outlet } from 'react-router-dom';

function ProviderDashboard() {
  return (
    <div className='h-screen flex'>
    {/* Sidebar */}
    <div className='w-64 bg-lavender text-white'>
      <Sidbar />
    </div>

    {/* Main Content */}
    <div className='flex-1'>
      <Outlet />
    </div>
  </div>
  )
}

export default ProviderDashboard