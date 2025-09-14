import Sidbar from './Sidbar'; 
import { Outlet } from 'react-router-dom';

function ProviderDashboard() {
  return (
    <div className='h-screen flex'>
    {/* Sidebar */}
    <div className='w-64 bg-gray-800 text-white'>
      <Sidbar />
    </div>

    {/* Main Content */}
    <div className='flex-1 bg-gray-100 p-6 overflow-auto'>
      <Outlet />
    </div>
  </div>
  )
}

export default ProviderDashboard