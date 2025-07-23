import logo from './logo.svg';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './Component/AddProduct';
import EditProduct from './Component/EditProduct';
import Home from './Component/Home';



function App() {
  return (
    <div className="App">
      
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/edit/:id" element={<EditProduct/>} />

    </Routes>
    </div>
  );
}

export default App;
