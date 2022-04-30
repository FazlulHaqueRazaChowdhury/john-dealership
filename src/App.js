import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Components/Inventory/Inventory';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <div className="min-height-100vh">
        <Routes>
          <Route path='inventory/:id' element={<Inventory />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
