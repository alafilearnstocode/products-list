import './App.css';

import React from 'react';

import { useState } from 'react';

function App() {

  const[products, setProducts] = useState([]);

  const dummyproducts = [
    {
      id: 1,
      name: 'Boba milk tea',
      price: 100,
      image_url: "https://cdn.shopify.com/s/files/1/0518/3825/5255/files/What-is-boba-tea.png?v=1717983125",
    },
    {
      id: 2,
      name: 'Oolong milk tea',
      price: 200,
      image_url: "https://cdn.shopify.com/s/files/1/0518/3825/5255/files/What-is-boba-tea.png?v=1717983125",
    },
    {
      id: 3,
      name: 'Green milk tea',
      price: 300,
      image_url: "https://cdn.shopify.com/s/files/1/0518/3825/5255/files/What-is-boba-tea.png?v=1717983125",
    },
  ];

  return (
  <div>
    <h1>Drinks</h1>
    <div className="products">
      {dummyproducts.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
        </div>
      ))}
    </div>




  </div>
  ); 
}

export default App;
