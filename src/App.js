import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Components/Inventory/Inventory';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignUp from './Components/SignUp/SignUp';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import LogIn from './Components/LogIn/LogIn';
import { ToastContainer } from 'react-toastify';

import AOS from 'aos';
import 'aos/dist/aos.css';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
function App() {

  AOS.init();

  return (
    <div className="App">
      <Header />
      <div className="min-height-100vh">


        <Routes>
          <Route path='inventory/:id' element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>

          }></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/manageinventory' element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>

          }></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
