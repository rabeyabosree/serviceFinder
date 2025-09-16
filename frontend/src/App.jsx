import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import Services from './pages/service/Services';
import ServiceDetails from './pages/service/ServiceSetails';
import MainLayout from './component/common/MainLayout';
import ProviderDashboard from './pages/dashboard/ProviderDashboard';

import Booking from './pages/dashboard/Booking';
import Earning from './pages/dashboard/Earning';
import Settings from './pages/dashboard/Settings';
import Dashboard from './pages/dashboard/Dashboard';
import CustomerProfile from './pages/customer/customerProfile/CustomerProfile';
import Service from './pages/dashboard/service/Service';
import ServiceDetail from './pages/dashboard/service/ServiceDetail';
import ServiceEdit from './pages/service/ServiceEdit';
import AddService from './pages/dashboard/service/AddService';

function App() {


  return (
    <Router>
      <Routes>



        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:id' element={<ServiceDetails />} />

        </Route>


        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* service provider dashboard */}
        <Route path='/dashboard' element={<ProviderDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path='service' element={<Service />} />
          <Route path='service/add' element={<AddService />} />
          <Route path='service/:id' element={<ServiceDetail />} />
          <Route path='service/edit/:id' element={<ServiceEdit />} />
          <Route path='booking' element={<Booking />} />
          <Route path='earning' element={<Earning />} />
          <Route path='settings' element={<Settings />} />

        </Route>

        {/* customer profile */}
        <Route path='/customer' element={<CustomerProfile />} />

      </Routes>
    </Router>
  )
}

export default App
