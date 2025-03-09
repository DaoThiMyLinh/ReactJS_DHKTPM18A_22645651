import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchFood = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            console.log(data.products)
            setProducts(data.products); 
          
        };
        fetchFood();
    }, []);

    return (
        <div className="flex gap-5 flex-wrap">
            {products.map(item => (
                <ProductItem key={item.id} item={item} />
            ))}
        </div>
    );
};
