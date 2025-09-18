import { Route, Routes } from 'react-router-dom';
import AddProduct from './Component/AddProduct';
import AllProducts from './Component/AllProducts';
import EditProduct from './Component/EditProduct';
import Counter from './Component/Counter';
import Login from './Component/Login';
import Fakeproducts from './Component/Fakeproducts';
import Todo from './Component/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/" element={<AllProducts />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="Counter" element={<Counter/>} />
        <Route path="login"  element={<Login/>}/>
        <Route path='fakeproducts' element={<Fakeproducts/>} />
        <Route path='todo' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
