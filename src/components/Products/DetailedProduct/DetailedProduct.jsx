import React, { use } from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';    

export default function DetailedProduct() {
    const [product, setProduct] = useState(null);

    const { productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('https://disc-product-demo-api.onrender.com/api/products' + productId);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();

    }, [productId]);

    return (
        <div>
            {product && (
                <div className="product" key={product.id}>
                    <img src={product.image_url} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                    <img src={product.image_url} alt={product.name} />
                </div>
            )}
        </div>
    )

}