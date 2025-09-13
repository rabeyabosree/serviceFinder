import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import Services from './pages/service/Services';
import Navbar from './pages/home/Navbar';
import ServiceDetails from './pages/service/ServiceSetails';
import MainLayout from './component/common/MainLayout';

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

      </Routes>
    </Router>
  )
}

export default App
