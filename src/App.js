import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Components/Inventory/Inventory';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='inventory/:id' element={<Inventory />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
