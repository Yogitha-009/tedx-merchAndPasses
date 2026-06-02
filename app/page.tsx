'use client';

import Products from "./products/page";
import CartSidebar from "./cartSidebar/page";
import Navbar from "@/components/layout/Navbar";
import { useState,useEffect } from "react";
import Product from "@/types/product";
import {CartItem} from "@/types/cart";
import mockProducts from "@/lib/mock/mockProducts";

export default function Home() {
  const [cartItems,setCartItems]=useState<CartItem[]>([]);
  const [products,setProducts]=useState<Product[]>(mockProducts);
  const increment = (id: number) => {
    console.log("Increment clicked", id);
  setProducts((prevProducts) =>
    prevProducts.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )
  );
};
const decrement = (id: number) => {
  setProducts((prevProducts) =>
    prevProducts.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity: Math.max(0, product.quantity - 1),
          }
        : product
    )
  );
};

  const addToCart = () => {
    const selectedProducts = products.filter(
      (product) => product.quantity > 0
    );

    const items: CartItem[] = selectedProducts.map((product) => ({
      product,
      quantity: product.quantity,
    }));

    setCartItems(items);
  };

  useEffect(() => {
    addToCart();
  }, [products]);


  return (
    <div>
    <Navbar/>
   <div className="flex">
    <div className="flex-1 overflow-y-auto">
     <Products 
     products={products}
     increment={increment}
     decrement={decrement}
     />
     </div>
     <div className="sticky top-0 h-screen  w-95">
     <CartSidebar cartItems={cartItems} />
     </div>
   </div>
   </div>
  );
}
