import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import Services from './pages/service/Services';
import Navbar from './pages/home/Navbar';
import ServiceDetails from './pages/service/ServiceSetails';

function App() {


  return (
    <Router>
         <Navbar />

      <Routes>
     
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/services' element={<Services />} />
         <Route path='/services/:id' element={<ServiceDetails />} />
      </Routes>

    </Router>
  )
}

export default App
