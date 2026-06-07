'use client';

import ProductSheet from "@/components/products/productSheet";
import Product from "@/types/product";
import { Cart } from "@/types/cart";
type ProductContainerProps = {
    products: Product[];
    cart:Cart|null;
    increment: (id: string) => void;
    decrement: (id: string) => void;
};

export default function Products({ products,cart, increment, decrement }: ProductContainerProps) {    
    return (
        <div>
            
            <div className="
            bg-[#F9F8F6]
            text-black
            ">
                <h1 className="
                text-3xl 
                uppercase">expedition supplies</h1>
                <p className="
                text-[#171717]
                tracking-[1.2px]
                mt-2 md:mt-3 lg:mt-4
                ">Secure your passage and acquire essential artifacts for the journey into the unknown.All items are logged in the central archive</p>
                {/* Rendering the list of product here */}
                <ProductSheet products={products} cart={cart} increment={increment} decrement={decrement} />
            </div>
        </div>
    );
}