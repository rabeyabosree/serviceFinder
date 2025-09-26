import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import MainLayout from './component/common/MainLayout';
import ProviderDashboard from './pages/dashboard/ProviderDashboard';
import Earning from './pages/dashboard/Earning';
import Settings from './pages/dashboard/Settings';
import Dashboard from './pages/dashboard/Dashboard';
import CustomerProfile from './pages/customer/customerProfile/CustomerProfile';
import Service from './pages/dashboard/service/Service';
import ServiceDetail from './pages/dashboard/service/ServiceDetail';
import AddService from './pages/dashboard/service/AddService';
import BookingDetail from './pages/dashboard/Booking/BookingDetail';
import ServiceEdit from './pages/dashboard/service/ServiceEdit';
import ServiceDetails from './pages/publicPages/service/ServiceSetails';
import Services from './pages/publicPages/service/Services';
import ForgotPassword from './pages/auth/forgotpassword/ForgotPassword';
import VerifyOtp from './pages/auth/forgotpassword/VerifyOtp';
import Testimolas from './pages/publicPages/testimonals/Testimolas';
import FAQ from './pages/publicPages/faq/FAQ';
import Booking from './pages/customer/booking/Booking';
import Contact from './pages/home/Contact';



function App() {


  return (
    <Router>
      <Routes>



        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/testimonals' element={<Testimolas />} />
          <Route path='/booking/:id' element={<Booking />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services/:id' element={<ServiceDetails />} />

        </Route>


        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forget-password' element={<ForgotPassword />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />


         

        {/* service provider dashboard */}
        <Route path='/dashboard' element={<ProviderDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path='service' element={<Service />} />
          <Route path='service/add' element={<AddService />} />
          <Route path='service/:id' element={<ServiceDetail />} />
          <Route path='service/edit/:id' element={<ServiceEdit />} />
          <Route path='booking' element={<Booking />} />
          <Route path='booking/:id' element={<BookingDetail />} />
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
