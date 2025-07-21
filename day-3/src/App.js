import logo from './logo.svg';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Counter from './Component/Counter';
import Login from './Component/Login';



function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path='/counter' element={<Counter/>} />

    </Routes>
    </div>
  );
}

export default App;
