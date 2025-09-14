import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import Services from './pages/service/Services';
import Navbar from './pages/home/Navbar';
import ServiceDetails from './pages/service/ServiceSetails';
import MainLayout from './component/common/MainLayout';
import ProviderDashboard from './pages/dashboard/ProviderDashboard';
import Service from './pages/dashboard/Service';
import Booking from './pages/dashboard/Booking';
import Earning from './pages/dashboard/Earning';
import Settings from './pages/dashboard/Settings';

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

        <Route path='/dashboard' element={<ProviderDashboard/>}>
        <Route path='service' element={<Service />} />
        <Route path='booking' element={<Booking />} />
        <Route path='earning' element={<Earning />} />
        <Route path='setting' element={<Settings />} />

        </Route>

       

      </Routes>
    </Router>
  )
}

export default App
