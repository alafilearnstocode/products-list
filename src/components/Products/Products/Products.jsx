import React from 'react';
import { useState, useEffect } from 'react';
export default function Products() {

    const[products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch('https://disc-product-demo-api.onrender.com/api/products');
          const data = await response.json();
          setProducts(data);
        }
        
        fetchProducts();
      }, [products]);

    return (

        <div>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </div>
      ))}
    </div>
    )



}