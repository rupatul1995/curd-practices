import { Route, Routes } from 'react-router-dom';
import AddProduct from './Component/AddProduct';
import AllProducts from './Component/AllProducts';
import EditProduct from './Component/EditProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
