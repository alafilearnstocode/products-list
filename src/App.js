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
      description: "Boba milk tea is a taiwanese tea-based drink invented in Tainan and Taichung in the 1980s.",
    },
    {
      id: 2,
      name: 'Oolong milk tea',
      price: 200,
      image_url: "https://cdn.shopify.com/s/files/1/0518/3825/5255/files/What-is-boba-tea.png?v=1717983125",
      description: "Oolong milk tea is a traditional chinese tea produced through a unique process including withering the plant under the strong sun and oxidation before curling and twisting. Most bubble tea recipes contain a tea base mixed with fruit or milk, to which chewy tapioca balls and fruit jelly are often added.",
    },
    {
      id: 3,
      name: 'Green milk tea',
      price: 300,
      image_url: "https://cdn.shopify.com/s/files/1/0518/3825/5255/files/What-is-boba-tea.png?v=1717983125",
      description: "Green milk tea is a type of tea that is made from camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. Most bubble tea recipes contain a tea base mixed with fruit or milk, to which chewy tapioca balls and fruit jelly are often added.",
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
            <p>{product.description}</p>
        </div>
      ))}
    </div>




  </div>
  ); 
}

export default App;
