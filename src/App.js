import './App.css';
import Products from './components/Products/Products/Products.jsx';
import React from 'react';
import DetailedProduct from './components/Products/DetailedProduct/DetailedProduct.jsx';
import New from './New/New.jsx';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><h1>Boba List</h1></>} />
        <Route path="/" element={<Products/>} />
        <Route path="/products/:productId" element={<DetailedProduct/>} />
        <Route path="/new" element={<><h1>Lei ho</h1></>} />
      </Routes>
    </Router>
  );
}

export default App;
