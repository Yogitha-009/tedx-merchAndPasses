import Product from "@/types/product";
import React, { useState } from "react";

type ProductContainerProps = {
    product: Product;
    increment: (id: number) => void;
    decrement: (id: number) => void;
};

export default function ProductContainer({ product, increment, decrement }: ProductContainerProps) {

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
            <div><img src={product.imageUrl} alt="product image" /></div>
            <div className="flex-1">
                <div className="flex justify-between">
                    <h1>{product.title}</h1>
                    <p>${product.price}</p>
                </div>
                <p>{product.description}</p>
                <div className="flex justify-between mt-2">
                    <button>Details</button>
                    <div className="flex border gap-2 w-16 justify-around items-center">
                        <button onClick={()=>decrement(product.id)}>-</button>
                        <h1>{product.quantity}</h1>
                        <button onClick={()=>increment(product.id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

